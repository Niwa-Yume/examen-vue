import { defineStore } from "pinia";
import { films } from '@/assets/arena-lapraille.js';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export const useStore = defineStore('main', {
    state: () => ({
        selectedFilm: null,
        searchQuery: '',
        selectedFilms: [], 
    }),
    actions: {
        selectFilm(filmTitre) {
            this.selectedFilm = films.find(f => f.titre === filmTitre);
        },
        navigateToFilm(router, filmTitre) {
            this.selectFilm(filmTitre);
            router.push(`/film/${encodeURIComponent(filmTitre)}`);
        },
        addToSelectedFilms(film) {
            if (!this.selectedFilms.some(f => f.titre === film.titre)) {
                const filmComplet = films.find(f => f.titre === film.titre) || film;
                this.selectedFilms.push(filmComplet);
                console.log('Film ajouté:', filmComplet);
            }
        },
        removeFromSelectedFilms(filmTitre) {
            this.selectedFilms = this.selectedFilms.filter(f => f.titre !== filmTitre);
            console.log('Film retiré:', filmTitre);
        },
        clearSelectedFilms() {
            this.selectedFilms = [];
        }
    },
    getters: {
        getFilmByTitre: (state) => (titre) => {
            return films.find(f => f.titre === titre);
        },
        selectedFilmsCount: (state) => state.selectedFilms.length
    },
    persist: true
});