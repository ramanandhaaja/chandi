"use client";
import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface TranslationEntry {
  languages_code: string;
  // Can carry arbitrary translated fields like title, subtitle, breadcrumb, content, etc.
  [key: string]: unknown;
}

export default function TranslatedText({
  defaultText,
  translations,
  fieldName,
}: {
  defaultText: string;
  translations?: TranslationEntry[];
  fieldName: string; // e.g., "title"
}) {
  const { language } = useLanguage();

  const translated = Array.isArray(translations)
    ? translations.find((t) => t.languages_code === language)
    : undefined;

  const value = (translated?.[fieldName] as string | undefined) ?? defaultText ?? "";

  return <>{value}</>;
}
