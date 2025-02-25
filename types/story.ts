export interface Story {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string | null;
  longTitle: string;
  resultado: string | null;
  textoBotonCaso: string;
  image: {
    url: string;
  };
}