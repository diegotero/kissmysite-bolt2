'use client';

import { Story } from '@/types/story';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

interface StoriesSectionProps {
  stories: Story[];
}

export function StoriesSection({ stories }: StoriesSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[#1e1e1e] font-bold text-center mb-4 font-['Source_Code_Pro'] mx-auto max-w-3xl md:max-w-4xl" style={{ fontWeight: 700, fontSize: '48px', lineHeight: '48px', maxWidth: '70%' }}>
          Stories that make us proud
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg font-['Open_Sans']" style={{ fontFamily: 'Open Sans', fontWeight: 400, fontSize: '20px', color: '#1e1e1e' }}>
          By creating a collaborative culture, our teams challenge objectives, finding ways to make things better, always.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {stories.map((story) => (
              <CarouselItem key={story.id} className="pl-4 md:basis-1/3">
                <div className="flex flex-col h-full border border-[#E9E9E9] rounded-lg">
                  <div className="relative w-full aspect-[2/1] mb-4 overflow-hidden">
                    <Image
                      src={story.image.url}
                      alt={story.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-[#F8F0F7] p-6 rounded-lg flex-grow">
                    <span className="inline-block px-4 py-1 bg-[#9C6B98] text-white rounded-full mb-4 text-sm font-['Source_Code_Pro']">
                      {story.category}
                    </span>
                    <h3 className="text-[#1e1e1e] text-xl font-bold mb-4 font-['Source_Code_Pro']">{story.title}</h3>
                    <p className="text-gray-600 mb-6 font-['Source_Code_Pro']">{story.shortDescription}</p>
                    <Button variant="outline" style={{ borderWidth: '2px', color: '#D74B7C', fontWeight: 700, fontSize: '16px', borderColor: '#D74B7C', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '32px', paddingRight: '32px' }} className="text-[#D74B7C] border-[#D74B7C] font-['Source_Code_Pro']">
                      See full case →
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
