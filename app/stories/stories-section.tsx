'use client';

import { Story } from '@/types/story';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StoriesSectionProps {
  stories: Story[];
}

export function StoriesSection({ stories }: StoriesSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi]);

  const shouldShowCarousel = stories.length > 3;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:block">
          <h2 className="text-[48px] font-bold text-center mb-4 text-[#1e1e1e] font-['Source_Code_Pro']">
            Stories that make us proud
          </h2>
          <p className="text-center mb-8 text-lg text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
            By creating a collaborative culture, our teams challenge objectives, finding ways to make things better, always.
          </p>
          
          {/* Mobile Navigation - Below subtitle */}
          <div className="flex md:hidden justify-end mb-8">
            <div className="flex gap-2">
              <button
                className={`p-2 rounded-full border-2 ${
                  !prevBtnEnabled 
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                    : 'border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white'
                }`}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className={`p-2 rounded-full border-2 ${
                  !nextBtnEnabled 
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                    : 'border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white'
                }`}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {stories.map((story) => (
                <div key={story.id} className="embla__slide">
                  <StoryCard story={story} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid or Carousel */}
        <div className="hidden md:block relative">
          {shouldShowCarousel ? (
            <>
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {stories.map((story) => (
                    <div key={story.id} className="embla__slide">
                      <StoryCard story={story} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className={`p-2 rounded-full border-2 ${
                    !prevBtnEnabled 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white'
                  }`}
                  onClick={scrollPrev}
                  disabled={!prevBtnEnabled}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  className={`p-2 rounded-full border-2 ${
                    !nextBtnEnabled 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-[#D74B7C] text-[#D74B7C] hover:bg-[#D74B7C] hover:text-white'
                  }`}
                  onClick={scrollNext}
                  disabled={!nextBtnEnabled}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: Story }) {
  return (
    <Link 
      href={`/cases#${story.id}`}
      className="block bg-[#F8F0F7] rounded-[20px] overflow-hidden"
    >
      {/* Vista Móvil */}
      <div className="p-8 flex flex-col md:hidden">
        {/* Logo container primero en móvil */}
        <div className="w-full bg-white rounded-[12px] border border-gray-100 p-8 mb-8">
          <div className="relative w-full aspect-[3/1]">
            <Image
              src={story.image.url}
              alt={story.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#955D95] text-white text-sm rounded-full font-['Source_Code_Pro'] text-left">
            {story.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[#1e1e1e] font-['Source_Code_Pro'] leading-tight">
          {story.title}
        </h3>
        <p className="text-[#1e1e1e] font-['Source_Code_Pro'] mb-8 text-base leading-relaxed">
          {story.shortDescription}
        </p>
        <div className="flex items-center px-6 py-2.5 border-2 border-[#D74B7C] text-[#D74B7C] rounded-full font-['Source_Code_Pro'] hover:bg-[#D74B7C] hover:text-white transition-colors cursor-pointer w-fit">
          See full case
          <svg 
            className="w-5 h-5 ml-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Vista Desktop */}
      <div className="p-8 flex-col hidden md:flex">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#955D95] text-white text-sm rounded-full font-['Source_Code_Pro']">
            {story.category}
          </span>
        </div>
        <div className="w-full bg-white rounded-[12px] border border-gray-100 p-8 mb-8">
          <div className="relative w-full aspect-[3/1]">
            <Image
              src={story.image.url}
              alt={story.title}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[#1e1e1e] font-['Source_Code_Pro'] leading-tight">
          {story.title}
        </h3>
        <p className="text-[#1e1e1e] font-['Source_Code_Pro'] mb-8 text-base leading-relaxed">
          {story.shortDescription}
        </p>
        <div className="flex items-center px-6 py-2.5 border-2 border-[#D74B7C] text-[#D74B7C] rounded-full font-['Source_Code_Pro'] hover:bg-[#D74B7C] hover:text-white transition-colors cursor-pointer w-fit">
          See full case
          <svg 
            className="w-5 h-5 ml-2" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
