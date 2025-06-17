import { NextResponse } from 'next/server';
import { Mux } from '@mux/mux-node';

// Initialize Mux client only if environment variables are available
let mux: Mux | null = null;

if (process.env.MUX_TOKEN_ID && process.env.MUX_TOKEN_SECRET) {
  mux = new Mux({
    tokenId: process.env.MUX_TOKEN_ID,
    tokenSecret: process.env.MUX_TOKEN_SECRET,
  });
}

export async function POST() {
  try {
    // Check if Mux client is initialized
    if (!mux) {
      return NextResponse.json(
        { error: 'Mux API credentials not configured' },
        { status: 501 }
      );
    }
    
    const stream = await mux.video.liveStreams.create({
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
    });

    return NextResponse.json({
      streamKey: stream.stream_key,
      playbackId: stream.playback_ids?.[0]?.id,
      streamId: stream.id,
    });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create stream' }, { status: 500 });
  }
}