'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/cases', label: 'Cases' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="md:relative sticky top-0 z-50 w-full bg-[#1F1F1F] shadow-sm">
      <div className="container mx-auto flex h-[60px] md:h-[72px] items-center justify-between px-4">
        {/* Logo - Reduced size for mobile */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://us-west-2.graphassets.com/cm6z9zgwf1j7l07mth85t98kt/cm71h3rgq68uj08mzyy5855uh"
            alt="KISS_MY_SITE"
            width={100}
            height={32}
            className="h-auto py-2 w-auto max-w-[100px] md:max-w-[120px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-white transition-colors relative py-2",
                isActive(item.href) 
                  ? "text-[#D74B7C] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D74B7C]" 
                  : "hover:text-pink-400"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button 
              className="group md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <div className="space-y-2">
                <span className={cn(
                  "block h-0.5 w-6 bg-white transition-transform hamburger-line",
                  isMenuOpen && "translate-y-2.5 rotate-45"
                )} />
                <span className={cn(
                  "block h-0.5 w-6 bg-white transition-opacity hamburger-line",
                  isMenuOpen && "opacity-0"
                )} />
                <span className={cn(
                  "block h-0.5 w-6 bg-white transition-transform hamburger-line",
                  isMenuOpen && "-translate-y-2.5 -rotate-45"
                )} />
              </div>
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[280px] bg-[#1f1f1f] border-l border-[#2a2a2a] p-6"
            closeButton={false}
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 text-white hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-400 p-1"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <nav className="flex flex-col space-y-4 mt-12">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-white transition-colors px-4 py-2 rounded-lg",
                    isActive(item.href)
                      ? "text-[#D74B7C] bg-white/5 border-l-2 border-[#D74B7C]"
                      : "hover:text-pink-400 hover:bg-white/10"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
