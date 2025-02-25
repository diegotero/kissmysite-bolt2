import { getServices } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ServicesHero } from './services-hero';

export const dynamic = 'force-static';

function formatLongDescription(description: string) {
  return description.split('\n').filter(line => line.trim());
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-white">
      <ServicesHero services={services} />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center scroll-mt-20`}
            >
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#955D95] font-['Source_Code_Pro']">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-['Source_Code_Pro']">
                  {service.description}
                </p>
                <ul className="space-y-4 text-gray-700 font-['Source_Code_Pro'] leading-relaxed list-none">
                  {formatLongDescription(service.longDescription).map((line, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#D74B7C] text-2xl leading-none mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link}>
                  <Button 
                    className="bg-[#D74B7C] hover:bg-[#D74B7C]/90 text-white px-8 py-6 rounded-lg text-base font-bold font-['Open_Sans'] mt-4"
                  >
                    {service.buttonText}
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 relative aspect-[4/3]">
                <Image
                  src={service.image.url}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}