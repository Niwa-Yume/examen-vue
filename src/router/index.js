import { createRouter, createWebHistory } from 'vue-router';
import FilmList from "@/component/FilmList.vue";
import AcessCinema from "@/AcessCinema.vue";
import FilmDescription from "@/component/FilmDescription.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: FilmList
    },{
        path:'/AcessCinema',
        name:'Accès Cinéma',
        component:AcessCinema
    },{
        path:'/film/:id',
        name:'Film',
        component: FilmDescription
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;