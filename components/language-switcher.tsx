'use client';

import { useState, useEffect } from 'react';
import { useLanguageStore, type Language } from '@/lib/language';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

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
  const { language, setLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 transition-all duration-300 hover:bg-white/10"
        >
          <span className="text-lg">{languages[language].flag}</span>
          <span 
            className={cn(
              "text-sm font-medium transition-all duration-300",
              "text-white/70 hover:text-white"
            )}
          >
            {languages[language].name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {Object.entries(languages).map(([key, value]) => (
          <DropdownMenuItem
            key={key}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setLanguage(key as Language)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{value.flag}</span>
              <span className="text-sm">{value.name}</span>
            </div>
            {language === key && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}