import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Kiss My Site - Digital Marketing Agency',
  description: 'We combine creativity, data, media and technology to revolutionize the way brands inspire the world.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <Header />
        <main className="page-transition">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}