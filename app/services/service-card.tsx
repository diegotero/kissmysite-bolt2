import Link from 'next/link';
import { Service } from '@/types/service';
import { useLanguageStore } from '@/lib/language';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { language } = useLanguageStore();

  return (
    <div className="border p-6 rounded-lg">
      <h3 className="text-pink-600 text-xl font-bold mb-4 font-['Source_Code_Pro']">{service[`title_${language}`]}</h3>
      <p className="text-gray-600 mb-4 font-['Source_Code_Pro']">{service[`description_${language}`]}</p>
      <Link
        href={service.link}
        className="text-[#2DB5AC] flex items-center font-['Source_Code_Pro'] hover:text-[#2DB5AC]"
      >
        how we do it <span className="ml-2">→</span>
      </Link>
    </div>
  );
}