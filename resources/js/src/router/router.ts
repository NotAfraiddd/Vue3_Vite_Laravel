import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Views
import Index from '@/views/index.vue';
import Test from '@/views/test.vue';
import NotFound from '@/views/NotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: Index,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: { layout: 'auth' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
