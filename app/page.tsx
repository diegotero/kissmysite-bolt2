'use client';

import { Button } from '@/components/ui/button'
import { ServicesSection } from './services/services-section'
import { ClientsSection } from './clients/clients-section'
import { PartnersSection } from './partners/partners-section'
import { StoriesSection } from './stories/stories-section'
import { DiscoverySection } from './discovery/discovery-section'
import { getStories } from '@/lib/stories'
import { useLanguageStore } from '@/lib/language'

// For static builds, we'll generate the page at build time
export const dynamic = 'force-static'

const translations = {
  en: {
    heroTitle: 'We combine creativity, data, media and technology to revolutionize the way brands inspire the world.',
    heroSubtitle: 'Good people are good business',
    meetButton: "Let's meet each other!"
  },
  es: {
    heroTitle: 'Combinamos creatividad, datos, medios y tecnología para revolucionar la forma en que las marcas inspiran al mundo.',
    heroSubtitle: 'La buena gente es un buen negocio',
    meetButton: '¡Conozcámonos!'
  }
};

export default async function Home() {
  const stories = await getStories();
  const { language } = useLanguageStore();

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
        
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-[45px] leading-[57px] tracking-[0%] font-semibold mb-6 font-['Source_Code_Pro']">
              {translations[language].heroTitle}
            </h1>
            <p className="text-[24px] leading-[30.17px] tracking-[0%] text-gray-400 mb-8 font-['Source_Code_Pro']">
              {translations[language].heroSubtitle}
            </p>
            <Button className="hero-button bg-[#D74B7C] hover:bg-[#D74B7C]/90 text-white px-8 py-8 rounded-lg text-base font-bold font-['Open_Sans'] leading-[21.79px] tracking-[0%]">
              {translations[language].meetButton}
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