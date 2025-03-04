import { ServiceCard } from './service-card';
import { getServices } from '@/lib/services';

export async function ServicesSection() {
  const services = await getServices();

  return (
    <section className="bg-white text-[#1e1e1e] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-[48px] font-bold text-center mb-4 text-[#1e1e1e] font-['Source_Code_Pro']">
          Services
        </h2>
        <p className="text-center mb-12 text-lg text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
          We create connections that distill the complex and inspire action. Then, we build trust through our hard work across five areas of specialization
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
