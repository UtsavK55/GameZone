export const BASE_URL = process.env.API_BASE_URL;
export const API_KEY = process.env.API_KEY;
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  CURRENT_USER: '/users/current',
  USER_COLLECTIONS: '/users/current/collections',
  COLLECTIONS: '/collections',
  GAMES: '/games',
  PLATFORMS: '/platforms',
} as const;
