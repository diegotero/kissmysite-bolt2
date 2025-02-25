import { getStories } from '@/lib/stories';
import Image from 'next/image';
import { CasesHero } from './cases-hero';

export const dynamic = 'force-static';

function formatLongDescription(description: string | null) {
  if (!description) return [];
  return description.split('\n').filter(line => line.trim());
}

const CheckmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
    <g clipPath="url(#clip0_1_779)">
      <g clipPath="url(#clip1_1_779)">
        <g clipPath="url(#clip2_1_779)">
          <path d="M7.99993 14.6663C8.87557 14.6675 9.74281 14.4956 10.5518 14.1605C11.3608 13.8253 12.0956 13.3337 12.7139 12.7137C13.3339 12.0953 13.8256 11.3605 14.1607 10.5515C14.4958 9.74256 14.6677 8.87533 14.6666 7.99968C14.6677 7.12404 14.4958 6.25681 14.1607 5.44782C13.8256 4.63884 13.3339 3.90405 12.7139 3.28568C12.0956 2.66569 11.3608 2.17401 10.5518 1.83891C9.74281 1.5038 8.87557 1.33188 7.99993 1.33301C7.12428 1.3319 6.25705 1.50383 5.44807 1.83893C4.63908 2.17404 3.90429 2.6657 3.28592 3.28568C2.66595 3.90405 2.17428 4.63884 1.83918 5.44782C1.50407 6.25681 1.33214 7.12404 1.33326 7.99968C1.33212 8.87533 1.50405 9.74256 1.83915 10.5515C2.17426 11.3605 2.66593 12.0953 3.28592 12.7137C3.90429 13.3337 4.63908 13.8253 5.44807 14.1604C6.25705 14.4955 7.12428 14.6675 7.99993 14.6663Z" fill="#570B52" stroke="#570B52" strokeWidth="1.33333" strokeLinejoin="round"/>
          <path d="M5.33325 8L7.33325 10L11.3333 6" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_779">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
      <clipPath id="clip1_1_779">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
      <clipPath id="clip2_1_779">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default async function CasesPage() {
  const stories = await getStories();

  return (
    <div className="min-h-screen bg-white">
      <CasesHero stories={stories} />

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-[48px] font-bold text-center mb-20 text-[#1e1e1e] font-['Source_Code_Pro']">
          Stories that make us proud
        </h1>

        <div className="flex flex-col gap-32">
          {stories.map((story, index) => (
            <div 
              key={story.id}
              id={story.id}
              className="flex flex-col gap-12 scroll-mt-20"
            >
              {/* Case Number - Aligned based on content orientation */}
              <div className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:px-8`}>
                <div className="inline-flex items-center justify-center px-6 py-2 bg-[#955D95] text-white rounded-full text-sm font-bold">
                  Case {index + 1}
                </div>
              </div>

              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}>
                <div className="w-full md:w-1/2 space-y-8">
                  {/* Title and Short Description */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#955D95] font-['Source_Code_Pro'] mb-4">
                      {story.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-['Source_Code_Pro']">
                      {story.shortDescription}
                    </p>
                  </div>

                  {/* Long Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#955D95] font-['Source_Code_Pro']">
                      {story.longTitle}
                    </h3>
                    <div className="space-y-4 text-gray-700 font-['Source_Code_Pro'] leading-relaxed">
                      {formatLongDescription(story.longDescription).map((line, i) => (
                        <p key={i} className="flex items-start gap-3">
                          <span className="text-[#D74B7C] text-2xl leading-none mt-1">•</span>
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Results Section */}
                  <div className="bg-[#EADFEA] rounded-lg p-8">
                    <h4 className="text-xl font-bold text-[#955D95] font-['Source_Code_Pro'] mb-4">
                      Resultado
                    </h4>
                    <div className="space-y-4 text-gray-700 font-['Source_Code_Pro']">
                      {formatLongDescription(story.resultado).map((line, i) => (
                        <p key={i} className="flex items-start gap-3">
                          <CheckmarkIcon />
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image with adjusted aspect ratio */}
                <div className="w-full md:w-1/2 relative aspect-[16/10]">
                  <Image
                    src={story.image.url}
                    alt={story.title}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}