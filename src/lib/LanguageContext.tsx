"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en-US" | "id-ID";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en-US");

  // Load from localStorage if available
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("lang") : null;
    if (stored === "en-US" || stored === "id-ID") setLanguageState(stored);
  }, []);

  // Save to localStorage on change
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem("lang", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
