import { createRouter, createWebHistory } from 'vue-router';
import FilmList from "@/component/FilmList.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: FilmList
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;