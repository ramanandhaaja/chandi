"use client";
import React from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface TranslationEntry {
  languages_code: string;
  content?: string;
}

export default function TranslatedHtml({
  defaultHtml,
  translations,
  className,
}: {
  defaultHtml: string;
  translations?: TranslationEntry[];
  className?: string;
}) {
  const { language } = useLanguage();

  const translated = Array.isArray(translations)
    ? translations.find((t) => t.languages_code === language)?.content
    : undefined;

  const html = translated ?? defaultHtml ?? "";

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
