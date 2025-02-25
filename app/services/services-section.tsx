import { ServiceCard } from './service-card';
import { getServices } from '@/lib/services';
import { useLanguageStore } from '@/lib/language';

const translations = {
  en: {
    title: 'Services',
    description: 'We create connections that distill the complex and inspire action. Then, we build trust through our hard work across five areas of specialization'
  },
  es: {
    title: 'Servicios',
    description: 'Creamos conexiones que destilan lo complejo e inspiran acción. Luego, construimos confianza a través de nuestro arduo trabajo en cinco áreas de especialización'
  }
};

export async function ServicesSection() {
  const services = await getServices();
  const { language } = useLanguageStore();

  return (
    <section className="bg-white text-[#1e1e1e] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{translations[language].title}</h2>
        <p className="text-center mb-12">
          {translations[language].description}
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