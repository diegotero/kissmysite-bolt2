export interface EmailJSConfig {
  publicKey: string;
  templateId: string;
  serviceId: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
