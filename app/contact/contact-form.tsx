'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/lib/emailjs';
import type { ContactFormData } from '@/types/emailjs';

export function ContactForm() {
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
        title: "Success!",
        description: "Your message has been sent successfully.",
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
        title: "Error",
        description: "Failed to send message. Please try again later.",
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
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder="jhon@test.com"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          Phone
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder="5493513166360"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          Company
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400"
          placeholder="My Company"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#D74B7C] mb-2 font-['Source_Code_Pro']">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-gray-300 focus:border-[#D74B7C] focus:ring-[#D74B7C] bg-white text-gray-900 placeholder:text-gray-400 min-h-[120px]"
          placeholder="Hi Kiss My Site!"
          required
        />
      </div>

      <Button 
        type="submit"
        className="w-full bg-[#D74B7C] hover:bg-[#D74B7C]/90 text-white py-6 rounded-lg text-base font-bold font-['Open_Sans']"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
}
