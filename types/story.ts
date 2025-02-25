export interface Story {
  id: string;
  title_en: string;
  title_es: string;
  category_en: string;
  category_es: string;
  shortDescription_en: string;
  shortDescription_es: string;
  longDescription_en: string | null;
  longDescription_es: string | null;
  longTitle_en: string;
  longTitle_es: string;
  resultado_en: string | null;
  resultado_es: string | null;
  textoBotonCaso_en: string;
  textoBotonCaso_es: string;
  image: {
    url: string;
  };
}