'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguageStore } from '@/lib/language'

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    cases: 'Cases',
    contact: 'Contact'
  },
  es: {
    home: 'Inicio',
    services: 'Servicios',
    cases: 'Casos',
    contact: 'Contacto'
  }
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguageStore();

  const menuItems = [
    { href: '/', label: translations[language].home },
    { href: '/services', label: translations[language].services },
    { href: '/cases', label: translations[language].cases },
    { href: '/contact', label: translations[language].contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1F1F1F]">
      <div className="container mx-auto flex h-[96px] items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://us-west-2.graphassets.com/cm6z9zgwf1j7l07mth85t98kt/cm71h3rgq68uj08mzyy5855uh"
            alt="KISS_MY_SITE"
            width={144}
            height={48}
            className="h-auto py-3"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-pink-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button className="group md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
              <div className="space-y-2">
                <span className={cn(
                  "block h-0.5 w-8 bg-white transition-transform hamburger-line",
                  isMenuOpen && "translate-y-2.5 rotate-45"
                )} />
                <span className={cn(
                  "block h-0.5 w-8 bg-white transition-opacity hamburger-line",
                  isMenuOpen && "opacity-0"
                )} />
                <span className={cn(
                  "block h-0.5 w-8 bg-white transition-transform hamburger-line",
                  isMenuOpen && "-translate-y-2.5 -rotate-45"
                )} />
              </div>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#1f1f1f]">
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-pink-400 transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}