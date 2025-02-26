'use client'

import { Story } from '@/types/story';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CasesHeroProps {
  stories: Story[];
}

export function CasesHero({ stories }: CasesHeroProps) {
  const [activeStory, setActiveStory] = useState(stories[0]?.id);

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
            Our cases,<br />
            what we have done
          </h1>

          {/* Horizontal Navigation */}
          <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-6 pb-4 -mx-4 px-4 scrollbar-hide">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`#${story.id}`}
                className={cn(
                  "whitespace-nowrap text-base md:text-lg font-['Source_Code_Pro'] transition-colors duration-200 py-2 px-3 md:px-4 rounded-lg",
                  activeStory === story.id 
                    ? "bg-[#D74B7C] text-white" 
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setActiveStory(story.id)}
              >
                {story.textoBotonCaso}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
