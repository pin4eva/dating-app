export const environment = {
  production: false,
  apiUrl: import.meta.env?.['NG_APP_API_URL'] || 'http://localhost:5223/api',
};
