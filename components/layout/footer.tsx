import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'radial-gradient(circle at 30% 120%, #643042, #572d3b, #4a2a34, #3d272e, #312427, #242021, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e)' }}>
      {/* Gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-[#9C6B98] to-[#E8B4B4] opacity-90" /> */}
      
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="https://us-west-2.graphassets.com/cm6z9zgwf1j7l07mth85t98kt/cm71h3rgq68uj08mzyy5855uh"
              alt="Logo"
              width={200}
              height={100}
              className="mb-6"
            />
            <h2 className="text-3xl font-bold text-white mb-4">
              Good people are good business
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              contact me!
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-white hover:text-gray-200 transition-colors">
                Services
              </Link>
              <Link href="/cases" className="text-white hover:text-gray-200 transition-colors">
                Cases
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-between">
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <p className="text-white mt-4">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
