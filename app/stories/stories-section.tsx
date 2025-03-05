'use client';

import { Story } from '@/types/story';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface StoriesSectionProps {
  stories: Story[];
}

export function StoriesSection({ stories }: StoriesSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Determinar si hay suficientes elementos para mostrar flechas
  const hasMultipleSlides = stories.length > 3; // Asumiendo 3 elementos por vista en desktop

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      
      // Log para depuración
      console.log('Can scroll prev:', api.canScrollPrev());
      console.log('Can scroll next:', api.canScrollNext());
      console.log('Current slide:', api.selectedScrollSnap());
      console.log('Total slides:', api.scrollSnapList().length);
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    // Forzar una actualización inicial
    setTimeout(() => {
      onSelect();
    }, 100);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[48px] font-bold text-center mb-4 text-[#1e1e1e] font-['Source_Code_Pro']">
          Stories that make us proud
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg text-[#1e1e1e] font-['Source_Code_Pro']">
          By creating a collaborative culture, our teams challenge objectives, finding ways to make things better, always.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: false,
            dragFree: false,
          }}
          setApi={setApi}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {stories.map((story, index) => (
              <CarouselItem key={story.id} className="pl-4 md:basis-1/3">
                <div className="flex flex-col h-full border border-[#e5e7eb] rounded-lg overflow-hidden">
                  {/* Image Container with fixed aspect ratio */}
                  <div className="relative w-full aspect-[16/10] bg-[#FFF]">
                    <Image
                      src={story.image.url}
                      alt={story.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="bg-[#F8F0F7] p-6 flex-grow">
                    <span className="inline-block px-4 py-1 bg-[#9C6B98] text-white rounded-full mb-4 text-sm font-['Source_Code_Pro']">
                      {story.category}
                    </span>
                    <h3 className="text-xl font-bold mb-4 text-[#1e1e1e] font-['Source_Code_Pro']">{story.title}</h3>
                    <p className="text-[#1e1e1e] mb-6 font-['Source_Code_Pro']">{story.shortDescription}</p>
                    <Link href={`/cases#${story.id}`}>
                      <Button 
                        variant="outline" 
                        className="text-[#D74B7C] border-[#D74B7C] font-['Source_Code_Pro'] hover:bg-[#D74B7C] hover:text-white"
                      >
                        See full case →
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Mostrar flechas solo si hay suficientes elementos */}
          {hasMultipleSlides && (
            <>
              <CarouselPrevious 
                className={`hidden md:flex bg-white border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white ${!canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''}`} 
              />
              <CarouselNext 
                className={`hidden md:flex bg-white border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white ${!canScrollNext ? 'opacity-50 cursor-not-allowed' : ''}`} 
              />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
}
