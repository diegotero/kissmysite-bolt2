import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Source_Code_Pro, Open_Sans } from 'next/font/google';
import './globals.css'; // Ensure this import is present and correct

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'CodeGuide Starter Pro',
  description: 'Starter kit from codeguide.dev',
}

export const dynamic = 'force-dynamic'; // Deshabilitar caché para debugging

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  console.log('Environment variables loaded:', {
    apiUrl: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
    hasAuthToken: !!process.env.HYGRAPH_AUTH_TOKEN
  });
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceCodePro.variable} ${openSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
