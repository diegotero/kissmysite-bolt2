'use client';

'use client';

import { Story } from '@/types/story';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguageStore } from '@/lib/language';

const translations = {
  en: {
    title: 'Stories that make us proud',
    subtitle: 'By creating a collaborative culture, our teams challenge objectives, finding ways to make things better, always.',
    seeFullCase: 'See full case →'
  },
  es: {
    title: 'Historias que nos enorgullecen',
    subtitle: 'Al crear una cultura colaborativa, nuestros equipos desafían objetivos, encontrando formas de mejorar las cosas, siempre.',
    seeFullCase: 'Ver caso completo →'
  }
};

interface StoriesSectionProps {
  stories: Story[];
}

export function StoriesSection({ stories }: StoriesSectionProps) {
  const { language } = useLanguageStore();

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[48px] font-bold text-center mb-4 text-[#1e1e1e] font-['Source_Code_Pro']">
          {translations[language].title}
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg text-[#1e1e1e] font-['Source_Code_Pro']">
          {translations[language].subtitle}
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {stories.map((story, index) => (
              <CarouselItem key={story.id} className="pl-4 md:basis-1/3">
                <div className="flex flex-col h-full">
                  {/* Image Container with fixed aspect ratio */}
                  <div className="relative w-full aspect-[16/10] bg-[#F8F0F7] rounded-t-lg">
                    <Image
                      src={story.image.url}
                      alt={story[`title_${language}`]}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="bg-[#F8F0F7] p-6 rounded-b-lg flex-grow">
                    <span className="inline-block px-4 py-1 bg-[#9C6B98] text-white rounded-full mb-4 text-sm font-['Source_Code_Pro']">
                      {story[`category_${language}`]}
                    </span>
                    <h3 className="text-xl font-bold mb-4 text-[#1e1e1e] font-['Source_Code_Pro']">{story[`title_${language}`]}</h3>
                    <p className="text-[#1e1e1e] mb-6 font-['Source_Code_Pro']">{story[`shortDescription_${language}`]}</p>
                    <Link href={`/cases#${story.id}`}>
                      <Button
                        variant="outline"
                        className="text-[#D74B7C] border-[#D74B7C] font-['Source_Code_Pro'] hover:bg-[#D74B7C] hover:text-white"
                      >
                        {translations[language].seeFullCase}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-white border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white" />
          <CarouselNext className="hidden md:flex bg-white border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}