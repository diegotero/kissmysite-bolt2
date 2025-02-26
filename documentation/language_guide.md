# Language Implementation Guide

## Overview
This document outlines the implementation of multilingual support in the Kiss My Site website. The site supports two languages:
- English (en) - Default
- Spanish (es)

## Technical Implementation

### 1. Language Store
The language state is managed using Zustand with persistence:
```typescript
// lib/language.ts
type Language = 'en' | 'es';
```

### 2. Content Structure in Hygraph
Content in Hygraph is structured using localization fields:

```graphql
# Example of a localized field structure
{
  title_en: String
  title_es: String @locale(language: es)
  description_en: String
  description_es: String @locale(language: es)
}
```

### 3. Fetching Localized Content
When fetching content from Hygraph, include both language versions:

```graphql
query GetContent {
  services {
    id
    title_en: title
    title_es: title @locale(language: es)
    description_en: description
    description_es: description @locale(language: es)
  }
}
```

## Usage Guidelines

### 1. Adding New Content
When adding new content to Hygraph:
1. Create content in English first (default language)
2. Use the localization feature to add Spanish translations
3. Ensure all translatable fields have both language versions

### 2. Implementing New Components
When creating new components that need language support:

```typescript
import { useLanguageStore } from '@/lib/language';

function MyComponent() {
  const { language } = useLanguageStore();
  
  return <div>{content[`title_${language}`]}</div>;
}
```

### 3. Translation Keys
Follow this naming convention for translation keys:
- English: `field_en`
- Spanish: `field_es`

## Best Practices

1. **Content Completeness**
   - Ensure all content has translations for both languages
   - Use fallback to English if Spanish translation is missing

2. **UI Considerations**
   - Account for text length differences between languages
   - Use flexible layouts that can accommodate longer text
   - Test UI in both languages

3. **SEO**
   - Include language meta tags
   - Use proper HTML lang attributes
   - Implement hreflang tags for language alternatives

## Testing

Before deploying changes:
1. Test content display in both languages
2. Verify language persistence across page reloads
3. Check language switching functionality
4. Ensure all components handle language changes correctly

## Troubleshooting

Common issues and solutions:

1. **Missing Translations**
   - Check Hygraph content has both language versions
   - Verify query includes locale parameter
   - Ensure fallback to English is implemented

2. **UI Layout Issues**
   - Use flexible containers
   - Implement text truncation where needed
   - Test with maximum content length

3. **Language Switch Not Working**
   - Verify Zustand store is properly initialized
   - Check persistence configuration
   - Clear local storage if needed
