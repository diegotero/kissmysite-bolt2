'use client';

import { Story } from '@/types/story';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StoriesSectionProps {
  stories: Story[];
}

export function StoriesSection({ stories }: StoriesSectionProps) {
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

    const elements = document.querySelectorAll('.section-transition');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[48px] font-bold text-center mb-12 text-[#1e1e1e] font-['Source_Code_Pro']">
          Stories that make us proud
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link 
              key={story.id} 
              href={`/cases#${story.id}`}
              className="section-transition opacity-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={story.image.url}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#955D95] font-['Source_Code_Pro']">
                {story.title}
              </h3>
              <p className="text-gray-600 font-['Source_Code_Pro']">
                {story.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
