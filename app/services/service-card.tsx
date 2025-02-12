import Link from 'next/link';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="border border-[#E9E9E9] p-6 rounded-lg flex flex-col">
      <h3 className="text-pink-600 font-bold mb-4 font-['Source_Code_Pro']" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '48px', textAlign: 'center' }}>{service.title}</h3>
      <p className="text-gray-600 mb-4 font-['Source_Code_Pro']" style={{ fontWeight: 400, fontSize: '16px', lineHeight: '22.63px', textAlign: 'center' }}>{service.description}</p>
      <div className="mt-auto">
        <Link href={service.link} className="flex items-center font-['Source_Code_Pro']" style={{ color: '#2DB5AC', fontWeight: 700, fontSize: '18px' }}>
          how we do it <span className="ml-2" style={{ fontSize: '18px' }}>→</span>
        </Link>
      </div>
    </div>
  );
}
