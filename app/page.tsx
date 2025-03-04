import { Button } from '@/components/ui/button'
import { ServicesSection } from './services/services-section'
import { ClientsSection } from './clients/clients-section'
import { PartnersSection } from './partners/partners-section'
import { StoriesSection } from './stories/stories-section'
import { DiscoverySection } from './discovery/discovery-section'
import { getStories } from '@/lib/stories'
import Link from 'next/link'

// For static builds, we'll generate the page at build time
export const dynamic = 'force-static'

export default async function Home() {
  const stories = await getStories();

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Gradient background */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 30% 120%, #643042, #572d3b, #4a2a34, #3d272e, #312427, #242021, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e)'
          }}
        />
        
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-[32px] md:text-[45px] leading-[1.2] md:leading-[57px] tracking-[0%] font-semibold mb-4 md:mb-6 font-['Source_Code_Pro']">
              We combine creativity, data, media and technology to revolutionize the way brands inspire the world.
            </h1>
            <p className="text-[18px] md:text-[24px] leading-[1.3] md:leading-[30.17px] tracking-[0%] text-gray-400 mb-6 md:mb-8 font-['Source_Code_Pro']">Good people are good business</p>
            <Link href="/contact">
              <Button className="hero-button bg-[#D74B7C] hover:bg-[#D74B7C]/90 text-white px-6 md:px-8 py-6 md:py-8 rounded-lg text-base font-bold font-['Open_Sans'] leading-[21.79px] tracking-[0%]">
                Let&apos;s meet each other!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ClientsSection />
      <PartnersSection />
      <StoriesSection stories={stories} />
      <DiscoverySection />
    </div>
  )
}
