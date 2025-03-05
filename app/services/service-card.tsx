import Link from 'next/link';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="border p-6 rounded-lg hover:shadow-lg transition-all duration-300">
      <h3 className="text-pink-600 text-xl font-bold mb-4 font-['Source_Code_Pro']">{service.title}</h3>
      <p className="text-gray-600 mb-4 font-['Source_Code_Pro']">{service.description}</p>
      <Link 
        href={`/services#${service.id}`}
        className="text-[#2DB5AC] flex items-center font-['Source_Code_Pro'] hover:text-[#2DB5AC] group"
      >
        how we do it <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
      </Link>
    </div>
  );
}
