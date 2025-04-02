<!-- src/component/FilmDescription.vue -->
<template>
  <div v-if="film" class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Image du film -->
      <div class="md:w-1/3">
        <img :src="film.imageURL" :alt="film.titre" class="rounded-lg shadow-md w-full h-auto">
      </div>

      <!-- Informations du film -->
      <div class="md:w-2/3">
        <h1 class="text-3xl font-bold mb-2">{{ film.titre }}</h1>
        <p v-if="film.titreOriginal" class="text-xl text-gray-600 mb-4">{{ film.titreOriginal }}</p>

        <div class="mb-4">
          <span class="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded-full">{{ film.duree }} min</span>
          <span class="inline-block bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded-full">{{ film.langue }}</span>
          <span class="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">{{ film.ageLegal }}+</span>
        </div>

        <div class="mb-6">
          <div class="flex flex-wrap gap-2 mb-2">
            <span v-for="(genre, idx) in film.genre" :key="idx"
                  class="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
              {{ genre }}
            </span>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-2">Synopsis</h2>
          <p class="text-gray-700">{{ film.description }}</p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">Séances</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="(seance, idx) in film.seances" :key="idx"
                 class="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <span class="font-medium"> Salle : {{ seance.salle }}</span>
              <span class="bg-blue-500 text-white px-3 py-1 rounded-lg">{{ seance.heure }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="button-container">
      <button 
        @click="handleFilmSelection" 
        class="select-film-btn"
        :class="{ 'selected': isFilmSelected }"
      >
        {{ isFilmSelected ? 'Retirer de la sélection' : 'Ajouter à ma sélection' }}
      </button>
    </div>

    <div class="mt-8 text-center">
      <router-link to="/" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Retour à la liste des films
      </router-link>
    </div>
  </div>

  <div v-else class="text-center py-10">
    <p class="text-xl text-gray-500">Film non trouvé</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useStore } from "@/stores/store";
import { computed } from "vue";

const route = useRoute();
const store = useStore();

const filmId = route.params.id;
const film = computed(() => {
  return store.getFilmByTitre(decodeURIComponent(filmId));
});

// Vérifie si le film est déjà dans la sélection
const isFilmSelected = computed(() => {
  return store.selectedFilms.some(f => f.titre === film.value?.titre);
});

// Fonction pour gérer la sélection/désélection du film
const handleFilmSelection = () => {
  if (!film.value) return;

  if (isFilmSelected.value) {
    store.removeFromSelectedFilms(film.value.titre);
  } else {
    store.addToSelectedFilms(film.value);
  }
};
</script>

<style scoped>
.select-film-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: all 0.3s ease;
  margin: auto;
}

.select-film-btn:not(.selected) {
  background-color: #4CAF50;
  color: white;
}

.select-film-btn.selected {
  background-color: #ff4444;
  color: white;
}

.select-film-btn:hover {
  opacity: 0.9;
}
</style>