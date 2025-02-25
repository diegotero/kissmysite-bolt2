import { gql } from 'graphql-request';
import { hygraphClient } from './hygraph';
import { Client } from '@/types/client';

const GET_CLIENTS = gql`
  {
    clients {
      id
      name_en: name
      name_es: name @locale(language: es)
      image {
        url
      }
    }
  }
`;

export async function getClients(): Promise<Client[]> {
  try {
    const { clients } = await hygraphClient.request<{ clients: Client[] }>(GET_CLIENTS);
    return clients;
  } catch (error) {
    console.error('Error fetching clients:', error);
    return [];
  }
}