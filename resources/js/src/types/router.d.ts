import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: 'app' | 'auth' | string;
    requiresAuth?: boolean;
  }
}
