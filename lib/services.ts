import { gql } from 'graphql-request';
import { hygraphClient } from './hygraph';
import { Service } from '@/types/service';

const GET_SERVICES = gql`
  {
    services {
      id
      title
      description
      longDescription
      image {
        url
      }
      buttonText
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
