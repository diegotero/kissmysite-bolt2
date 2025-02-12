import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ServicesSection } from './services/services-section'
import { ClientsSection } from './clients/clients-section'
import { PartnersSection } from './partners/partners-section'
import { StoriesSection } from './stories/stories-section'
import { DiscoverySection } from './discovery/discovery-section'
import { getStories } from '@/lib/stories'

export default async function Home() {
  const stories = await getStories();

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section style={{ background: 'radial-gradient(circle at 30% 120%, #643042, #572d3b, #4a2a34, #3d272e, #312427, #242021, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e)' }} className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-[45px] leading-[57px] tracking-[0%] font-semibold mb-6 font-['Source_Code_Pro']">
              We combine creativity, data, media and technology to revolutionize the way brands inspire the world.
            </h1>
            <p className="text-[24px] leading-[30.17px] tracking-[0%] text-gray-400 mb-8 font-['Source_Code_Pro']">Good people are good business</p>
            <Button className="hero-button bg-[#D74B7C] hover:bg-[#D74B7C]/90 text-white px-8 py-8 rounded-lg text-base font-bold font-['Open_Sans'] leading-[21.79px] tracking-[0%]">
              Let's meet each other!
            </Button>
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
