'use client'

import { Service } from '@/types/service';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ServicesHeroProps {
  services: Service[];
}

export function ServicesHero({ services }: ServicesHeroProps) {
  const [activeService, setActiveService] = useState(services[0]?.id);

  return (
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
          <h1 className="text-[32px] md:text-[45px] leading-[1.2] md:leading-[57px] tracking-[0%] font-semibold mb-8 md:mb-12 font-['Source_Code_Pro'] text-white">
            Our services,<br />
            what we know best
          </h1>

          {/* Horizontal Navigation */}
          <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-6 pb-4 -mx-4 px-4 scrollbar-hide">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className={cn(
                  "whitespace-nowrap text-base md:text-lg font-['Source_Code_Pro'] transition-colors duration-200 py-2 px-3 md:px-4 rounded-lg",
                  activeService === service.id 
                    ? "bg-[#D74B7C] text-white" 
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setActiveService(service.id)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
