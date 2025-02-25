import { gql } from 'graphql-request';
import { hygraphClient } from './hygraph';
import { Story } from '@/types/story';

const GET_STORIES = gql`
  {
    cases {
      id
      title_en: title
      title_es: title @locale(language: es)
      category_en: category
      category_es: category @locale(language: es)
      shortDescription_en: shortDescription
      shortDescription_es: shortDescription @locale(language: es)
      longDescription_en: longDescription
      longDescription_es: longDescription @locale(language: es)
      longTitle_en: longTitle
      longTitle_es: longTitle @locale(language: es)
      resultado_en: resultado
      resultado_es: resultado @locale(language: es)
      textoBotonCaso_en: textoBotonCaso
      textoBotonCaso_es: textoBotonCaso @locale(language: es)
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