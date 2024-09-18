export const ROUTES = {
  home: '/',
  about: '/about',
  profile: '/profile',
} as const;

export type RouteKeys = keyof typeof ROUTES;
