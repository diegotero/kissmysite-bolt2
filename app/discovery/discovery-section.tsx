export function DiscoverySection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[48px] font-bold text-center mb-12 text-[#1e1e1e] font-['Source_Code_Pro']">
          Discovery by doing
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-[#955D95] font-['Source_Code_Pro']">An agency built on scale</h3>
            <p className="text-[#1e1e1e] font-['Source_Code_Pro']">
              Through a combination of thought and technology, we generate efficiency and enable scale without compromising what matters most: quality. Your team, plus our people, partnering to fulfill your brand&apos;s promise.
            </p>
          </div>

          <div className="bg-[#9C6B98] text-white rounded-lg p-8 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-['Source_Code_Pro']">More than marketing</h3>
            <p className="font-['Source_Code_Pro']">
              Marketing is about making the sale. But there&apos;s more to it than deliverables designed to convert. So before we craft a single piece of creative, we dig deep, uniting creative marketers and business-savvy strategists alike to address fundamentals first.
            </p>
          </div>

          <div className="bg-[#D74B7C] text-white rounded-lg p-8 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-['Source_Code_Pro']">Flexible engagements</h3>
            <p className="font-['Source_Code_Pro']">
              Collaboration is most effective when you feel at home, so we work how you work. Your business becomes our business model, and our people become your assets. If you need total immersion, we&apos;ll be there. Or we&apos;ll help you assemble a new process from scratch.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-[#955D95] font-['Source_Code_Pro']">People, not positions</h3>
            <p className="text-[#1e1e1e] font-['Source_Code_Pro']">
              In an industry where the best idea wins, bureaucracy is rarely ideal. Here, you&apos;ll find familiar titles, but uncommonly productive dynamics. Picture the sum of our people—across all disciplines—working alongside yours to achieve your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
