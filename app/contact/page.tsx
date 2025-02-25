'use client';

import { ContactForm } from './contact-form';
import { useLanguageStore } from '@/lib/language';

const translations = {
  en: {
    title: 'Write to us,\nwe can do great\nthings together',
    address: {
      title: 'Address',
      content: 'Santos Dumont 2470, Palermo\nBuenos Aires, Argentina'
    },
    email: {
      title: 'Email to us',
      content: 'hola@kissmy.site'
    },
    phone: {
      title: 'Phone call or Whatsapp',
      content: '+54 9 3513166360'
    }
  },
  es: {
    title: 'Escríbenos,\npodemos hacer grandes\ncosas juntos',
    address: {
      title: 'Dirección',
      content: 'Santos Dumont 2470, Palermo\nBuenos Aires, Argentina'
    },
    email: {
      title: 'Envíanos un email',
      content: 'hola@kissmy.site'
    },
    phone: {
      title: 'Llamada o Whatsapp',
      content: '+54 9 3513166360'
    }
  }
};

export default function ContactPage() {
  const { language } = useLanguageStore();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Gradient background */}
        <div 
          className="absolute inset-0 h-[300px]" 
          style={{
            background: 'radial-gradient(circle at 30% 120%, #643042, #572d3b, #4a2a34, #3d272e, #312427, #242021, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e, #1e1e1e)'
          }}
        />
        
        <div className="container relative mx-auto px-[3.25rem]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-20">
            {/* Left Column - Title and Contact Info */}
            <div className="space-y-custom">
              <h1 className="text-[45px] leading-[57px] tracking-[0%] font-semibold font-['Source_Code_Pro'] text-white whitespace-pre-line">
                {translations[language].title}
              </h1>

              {/* Contact Info Cards */}
              <div className="space-y-4 bg-white/0 p-6 rounded-lg">
                {/* Address */}
                <a
                  href="https://maps.google.com/?q=Santos+Dumont+2470,+Palermo,+Buenos+Aires,+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-[#955D95] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 font-['Source_Code_Pro'] text-[#1e1e1e] group-hover:text-[#955D95] transition-colors">
                      {translations[language].address.title}
                    </h2>
                    <p className="text-gray-600 font-['Source_Code_Pro'] whitespace-pre-line">
                      {translations[language].address.content}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hola@kissmy.site"
                  className="flex gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-[#955D95] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 font-['Source_Code_Pro'] text-[#1e1e1e] group-hover:text-[#955D95] transition-colors">
                      {translations[language].email.title}
                    </h2>
                    <p className="text-gray-600 font-['Source_Code_Pro']">
                      {translations[language].email.content}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="https://wa.me/5493513166360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-[#955D95] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49999 10.2412 2.44852 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 font-['Source_Code_Pro'] text-[#1e1e1e] group-hover:text-[#955D95] transition-colors">
                      {translations[language].phone.title}
                    </h2>
                    <p className="text-gray-600 font-['Source_Code_Pro']">
                      {translations[language].phone.content}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8 -mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}