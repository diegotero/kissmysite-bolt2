import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'es';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (newLanguage) => set({ language: newLanguage }),
    }),
    {
      name: 'language-storage',
    }
  )
);

// Si language no se usa, renombrarlo o eliminarlo según corresponda
const _language = /* ... */;
