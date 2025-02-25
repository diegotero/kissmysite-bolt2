import { gql } from 'graphql-request';
import { hygraphClient } from './hygraph';
import { Service } from '@/types/service';

const GET_SERVICES = gql`
  {
    services {
      id
      title_en: title
      title_es: title @locale(language: es)
      description_en: description
      description_es: description @locale(language: es)
      longDescription_en: longDescription
      longDescription_es: longDescription @locale(language: es)
      image {
        url
      }
      buttonText_en: buttonText
      buttonText_es: buttonText @locale(language: es)
      link
    }
  }
`;

export async function getServices(): Promise<Service[]> {
  try {
    const { services } = await hygraphClient.request<{ services: Service[] }>(GET_SERVICES);
    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}