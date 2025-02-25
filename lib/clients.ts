import { gql } from 'graphql-request';
import { hygraphClient } from './hygraph';
import { Client } from '@/types/client';

const GET_CLIENTS = gql`
  {
    clients {
      id
      name
      image {
        url
      }
    }
  }
`;

export async function getClients(): Promise<Client[]> {
  try {
    console.log('Starting getClients request...');
    console.log('API URL:', process.env.NEXT_PUBLIC_HYGRAPH_API_URL);
    console.log('Has Auth Token:', !!process.env.HYGRAPH_AUTH_TOKEN);
    console.log('GraphQL Query:', GET_CLIENTS.toString());

    const response = await hygraphClient.request<{ clients: Client[] }>(GET_CLIENTS);
    console.log('API Response:', JSON.stringify(response, null, 2));

    if (!response.clients) {
      console.error('No clients data in response');
      return [];
    }

    return response.clients;
  } catch (error) {
    console.error('Error fetching clients:', error);
    console.error('Full error object:', JSON.stringify(error, null, 2));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return [];
  }
}
