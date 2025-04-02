import { createRouter, createWebHistory } from './router.js';
import Home from './views/Home.vue';
// import About from './views/About.vue'; 바꿀 페이지로 변경

const routes = [
    { path: '/', name: 'home', component: Home },
    // {path: '/about', name: 'about', component: () => import('./views/About.vue')}, 바꿀 페이지에 따라 변경경
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;