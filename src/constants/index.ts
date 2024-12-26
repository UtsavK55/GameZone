export const STORE_CONSTANTS = {
  THEME: {
    NAME: 'THEME',
  },
  AUTH: {
    NAME: 'AUTH',
  },
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
};

export const ROUTES = {
  AUTH: {SIGNUP: 'SIGNUP', LOGIN: 'LOGIN'},
  DRAWER: {
    HOME: 'HOME',
    COLLECTIONS: 'COLLECTIONS',
  },
  HOME_STACK_SCREEN: {
    GAMES_SCREEN: 'GAMES_SCREEN',
    GAME_DETAILS_SCREEN: 'GAME_DETAILS_SCREEN',
  },
  COLLECTION_STACK_SCREEN: {
    COLLECTION_SCREEN: 'COLLECTION_SCREEN',
    COLLECTION_DETAILS_SCREEN: 'COLLECTION_DETAILS_SCREEN',
  },
} as const;

export const gameScreenFilters = ['All', 'New Releases', 'Top Picks'];

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
