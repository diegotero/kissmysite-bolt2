export const getURL = (path: string = '') => {
  const baseUrl = 
    process?.env?.NEXT_PUBLIC_SITE_URL?.trim() ||
    process?.env?.NEXT_PUBLIC_VERCEL_URL?.trim() ||
    'http://localhost:3000/';

  // Normalizar URL
  const url = baseUrl.replace(/\/+$/, '');
  const formattedUrl = url.includes('http') ? url : `https://${url}`;
  
  // Normalizar path
  const formattedPath = path.replace(/^\/+/, '');

  return formattedPath ? `${formattedUrl}/${formattedPath}` : formattedUrl;
};
