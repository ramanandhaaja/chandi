"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef } from "react";

export type MapLocation = {
  title: string;
  address?: string; // If provided, will geocode to lat/lng
  position?: { lat: number; lng: number }; // Use if you already have coordinates
  pinColor?: string; // e.g., "#EA4335"
};

interface GoogleMultiMarkerMapProps {
  locations: MapLocation[];
  zoom?: number; // initial zoom if only one marker
  className?: string;
  heightClass?: string;
  mapOptions?: any;
  onMarkerClick?: (index: number, location: MapLocation) => void;
}

// Dynamically load Google Maps JS API
function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const existing = document.getElementById("google-maps-script") as HTMLScriptElement | null;
  if (existing && (window as any).google?.maps) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    document.head.appendChild(script);
  });
}

export default function GoogleMultiMarkerMap({
  locations,
  zoom = 13,
  className = "",
  heightClass = "h-96 md:h-[500px]",
  mapOptions,
  onMarkerClick,
}: GoogleMultiMarkerMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string | undefined;
    if (!apiKey) {
      console.error("Missing environment variable");
      return;
    }

    let cancelled = false;

    async function init() {
      try {
        await loadGoogleMaps(apiKey);
        if (cancelled || !mapRef.current) return;

        const defaultCenter = { lat: -8.6937, lng: 115.2624 }; // Sanur approx
        const defaultStyles = [
          // Hide all POIs (landmarks, businesses, attractions, parks) labels and icons
          { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
          { featureType: "poi", elementType: "labels.text", stylers: [{ visibility: "off" }] },
          { featureType: "poi", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          { featureType: "poi.business", stylers: [{ visibility: "off" }] },
          { featureType: "poi.park", stylers: [{ visibility: "off" }] },
          { featureType: "poi.attraction", stylers: [{ visibility: "off" }] },
          // Optionally hide transit stations
          { featureType: "transit", stylers: [{ visibility: "off" }] },
        ];

        const map = new (window as any).google.maps.Map(mapRef.current, {
          center: defaultCenter,
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          // Allow consumer to override styles; otherwise use defaults to hide landmarks
          styles: mapOptions?.styles ?? defaultStyles,
          ...mapOptions,
        });
        mapInstanceRef.current = map;

        const bounds = new (window as any).google.maps.LatLngBounds();
        const geocoder = new (window as any).google.maps.Geocoder();

        const placeMarker = (opts: { position: { lat: number; lng: number }; title: string; color?: string; labelText?: string; onClick?: () => void }) => {
          const svgMarker = {
            // Solid pin without inner hole for better label contrast
            path: "M8 0C3.58 0 0 3.58 0 8c0 6 8 16 8 16s8-10 8-16C16 3.58 12.42 0 8 0z",
            fillColor: opts.color || "#EA4335",
            fillOpacity: 1,
            strokeWeight: 1.5,
            strokeColor: "#ffffff",
            scale: 1.5,
            anchor: new (window as any).google.maps.Point(8, 24),
            labelOrigin: new (window as any).google.maps.Point(8, 10),
          } as any;

          const marker = new (window as any).google.maps.Marker({
            position: opts.position,
            map,
            title: opts.title,
            icon: svgMarker,
            label: opts.labelText
              ? {
                  text: opts.labelText,
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "12px",
                }
              : undefined,
          });

          const info = new (window as any).google.maps.InfoWindow({ content: `<div style=\"font-weight:600\">${opts.title}</div>` });
          marker.addListener("click", () => {
            info.open({ anchor: marker, map });
            opts.onClick?.();
          });
          bounds.extend(opts.position);
          return marker;
        };

        // Resolve all locations (geocode if needed)
        const tasks = locations.map(async (loc, idx) => {
          const labelText = String(idx + 1);
          if (loc.position) {
            const position = loc.position;
            placeMarker({
              position,
              title: loc.title,
              color: loc.pinColor,
              labelText,
              onClick: () => onMarkerClick?.(idx, loc),
            });
          } else if (loc.address) {
            try {
              const result = await geocoder.geocode({ address: loc.address });
              const pos = result.results[0]?.geometry.location?.toJSON();
              if (pos) {
                placeMarker({
                  position: pos,
                  title: loc.title,
                  color: loc.pinColor,
                  labelText,
                  onClick: () => onMarkerClick?.(idx, loc),
                });
              }
            } catch (e) {
              console.error("Geocoding failed for:", loc.address, e);
            }
          }
        });

        await Promise.all(tasks);

        if (!cancelled) {
          if (locations.length > 1) {
            if (typeof map.fitBounds === "function") {
              map.fitBounds(bounds, 60);
            } else {
              map.setCenter(bounds.getCenter());
              map.setZoom(zoom);
            }
          } else if (locations[0]?.position) {
            map.setCenter(locations[0].position!);
            map.setZoom(zoom);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, [locations, zoom, mapOptions, onMarkerClick]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className={`w-full ${heightClass}`}>
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </div>
  );
}
