import Image from 'next/image';

export function PartnersSection() {
  return (
    <section className="bg-[#F8F0F7] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-[48px] font-bold mb-6 text-[#1e1e1e] font-['Source_Code_Pro']">Partners</h2>
            <p className="text-lg text-[#1e1e1e] font-['Source_Code_Pro']">
              When you trust people, yours and ours, amazing things can happen.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image
              src="https://us-west-2.graphassets.com/cm6z9zgwf1j7l07mth85t98kt/cm71gdjw45x1o08mzxz0r3zf5"
              alt="Partner Logo"
              width={150}
              height={75}
              className="object-contain w-[150px] md:w-[200px]"
            />
            <Image
              src="https://us-west-2.graphassets.com/cm6z9zgwf1j7l07mth85t98kt/cm71gdjw45x1o08mzxz0r3zf5"
              alt="Partner Logo"
              width={150}
              height={75}
              className="object-contain w-[150px] md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
