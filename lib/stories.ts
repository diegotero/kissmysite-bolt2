import { gql } from 'graphql-request';
import { hygraphClient } from './hygraph';
import { Story } from '@/types/story';

const GET_STORIES = gql`
  {
    cases {
      id
      title
      shortDescription
      category
      image {
        url
      }
    }
  }
`;

export async function getStories(): Promise<Story[]> {
  try {
    const { cases } = await hygraphClient.request<{ cases: Story[] }>(GET_STORIES);
    return cases;
  } catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
}
