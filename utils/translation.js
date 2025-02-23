export function getTranslatedContent(content, locale) {
  if (!content) return '';
  
  // If content is already a string, return it
  if (typeof content === 'string') return content;
  
  // If content is an object with language keys
  if (content[locale]) return content[locale];
  
  // If content has ar/en keys
  if (locale === 'ar' && content.ar) return content.ar;
  if (locale === 'en' && content.en) return content.en;
  
  // Fallback to any available translation
  return content.ar || content.en || '';
}

// Example usage for nested objects
export function getTranslatedFields(data, locale) {
  if (!data) return null;

  return Object.keys(data).reduce((acc, key) => {
    if (typeof data[key] === 'object' && data[key] !== null) {
      acc[key] = getTranslatedContent(data[key], locale);
    } else {
      acc[key] = data[key];
    }
    return acc;
  }, {});
} 