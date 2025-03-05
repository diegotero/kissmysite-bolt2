'use client';

import { useState, useEffect } from 'react';
import { useLanguageStore } from '@/lib/language';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const languages = {
  en: {
    name: 'English',
    flag: '🇺🇸',
  },
  es: {
    name: 'Español',
    flag: '🇪🇸',
  },
} as const;

export function LanguageSwitcher() {
  const { language } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-not-allowed opacity-50"
      disabled
    >
      <span className="text-lg">{languages[language].flag}</span>
      <span 
        className={cn(
          "text-sm font-medium transition-all duration-300",
          "text-white/70"
        )}
      >
        {languages[language].name}
      </span>
    </Button>
  );
}
