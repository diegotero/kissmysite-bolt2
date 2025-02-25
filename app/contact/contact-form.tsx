'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/lib/emailjs';
import type { ContactFormData } from '@/types/emailjs';
import { useLanguageStore } from '@/lib/language';

const translations = {
  en: {
    labels: {
      name: 'Name',
      email: 'E-mail',
      phone: 'Phone',
      company: 'Company',
      message: 'Message'
    },
    placeholders: {
      name: 'John Doe',
      email: 'jhon@test.com',
      phone: '5493513166360',
      company: 'My Company',
      message: 'Hi Kiss My Site!'
    },
    button: {
      sending: 'Sending...',
      send: 'Send'
    },
    toast: {
      success: {
        title: 'Success!',
        description: 'Your message has been sent successfully.'
      },
      error: {
        title: 'Error',
        description: 'Failed to send message. Please try again later.'
      }
    }
  },
  es: {
    labels: {
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      company: 'Empresa',
      message: 'Mensaje'
    },
    placeholders: {
      name: 'Juan Pérez',
      email: 'juan@test.com',
      phone: '5493513166360',
      company: 'Mi Empresa',
      message: '¡Hola Kiss My Site!'
    },
    button: {
      sending: 'Enviando...',
      send: 'Enviar'
    },
    toast: {
      success: {
        title: '¡Éxito!',
        description: 'Tu mensaje ha sido enviado exitosamente.'
      },
      error: {
        title: 'Error',
        description: 'Error al enviar el mensaje. Por favor intenta nuevamente más tarde.'
      }
    }
  }
};

export function ContactForm() {
  const { language } = useLanguageStore();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        {
          publicKey: emailjsConfig.publicKey,
        }
      );

      toast({
        title: translations[language].toast.success.title,
        description: translations[language].toast.success.description,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: translations[language].toast.error.title,
        description: translations[language].toast.error.description,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          {translations[language].labels.name}
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder={translations[language].placeholders.name}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          {translations[language].labels.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder={translations[language].placeholders.email}
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          {translations[language].labels.phone}
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder={translations[language].placeholders.phone}
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          {translations[language].labels.company}
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder={translations[language].placeholders.company}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          {translations[language].labels.message}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400 min-h-[120px]"
          placeholder={translations[language].placeholders.message}
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#D74B7C] hover:bg-[#D74B7C]/90 text-white py-6 rounded-lg text-base font-bold font-['Open_Sans']"
        disabled={isSubmitting}
      >
        {isSubmitting ? translations[language].button.sending : translations[language].button.send}
      </Button>
    </form>
  );
}