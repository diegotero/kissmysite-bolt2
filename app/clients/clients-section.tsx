import { getClients } from '@/lib/clients';
import Image from 'next/image';

export async function ClientsSection() {
  const clients = await getClients();

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[#1e1e1e] font-bold text-center mb-12 font-['Source_Code_Pro'] mx-auto max-w-3xl md:max-w-4xl" style={{ fontWeight: 700, fontSize: '48px', lineHeight: '48px', maxWidth: '70%' }}>
          Clients who have already partnered with us
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.id} className="w-full max-w-[240px] relative aspect-[2/1]">
              <Image
                src={client.image.url}
                alt={client.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
