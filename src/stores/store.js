import { defineStore } from "pinia";
import { films } from '@/assets/arena-lapraille.js';


export const useStore = defineStore('main', {
    state: () => ({
        selectedFilm: null,
        searchQuery: '',
    }),
    actions: {
        selectFilm(filmTitre) {
            this.selectedFilm = films.find(f => f.titre === filmTitre);
        },
        navigateToFilm(router, filmTitre) {
            this.selectFilm(filmTitre);
            router.push(`/film/${encodeURIComponent(filmTitre)}`);
        },
    },
    getters: {
        getFilmByTitre: () => (titre) => {
            return films.find(f => f.titre === titre);
        }
    }
});