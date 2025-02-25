import { ServicesSection } from './services/services-section'
import { ClientsSection } from './clients/clients-section'
import { PartnersSection } from './partners/partners-section'
import { StoriesSection } from './stories/stories-section'
import { DiscoverySection } from './discovery/discovery-section'
import { getStories } from '@/lib/stories'
import { HomeHero } from './components/home-hero'

// For static builds, we'll generate the page at build time
export const dynamic = 'force-static'
export const revalidate = false

export default async function Home() {
  const stories = await getStories();

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <HomeHero />
      <ServicesSection />
      <ClientsSection />
      <PartnersSection />
      <StoriesSection stories={stories} />
      <DiscoverySection />
    </div>
  )
}