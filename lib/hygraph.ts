import { GraphQLClient } from 'graphql-request';

if (!process.env.NEXT_PUBLIC_HYGRAPH_API_URL) {
  throw new Error('NEXT_PUBLIC_HYGRAPH_API_URL environment variable is not set');
}

if (!process.env.HYGRAPH_AUTH_TOKEN) {
  throw new Error('HYGRAPH_AUTH_TOKEN environment variable is not set');
}

const hygraphClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
  {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
    },
  }
);

export { hygraphClient };
