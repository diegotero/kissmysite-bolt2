export interface LocalizedField<T> {
  en: T;
  es: T;
}

export interface LocalizedContent {
  title: LocalizedField<string>;
  description: LocalizedField<string>;
  longDescription?: LocalizedField<string>;
  buttonText?: LocalizedField<string>;
  // Add other localized fields as needed
}