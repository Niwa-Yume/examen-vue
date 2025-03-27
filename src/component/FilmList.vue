<script setup>
import FilmCard from "@/component/FilmCard.vue";
import { films } from '@/assets/arena-lapraille.js';
import { ref, computed } from 'vue';

const searchQuery = ref('');

const filteredFilms = computed(() => {
  if (!searchQuery.value.trim()) return films;

  const query = searchQuery.value.toLowerCase().trim();
  return films.filter(film =>
      film.titre.toLowerCase().includes(query) ||
      (film.titreOriginal && film.titreOriginal.toLowerCase().includes(query)) ||
      film.genre.some(genre => genre.toLowerCase().includes(query)) ||
      film.description.toLowerCase().includes(query)
  );
});
</script>

<template>
  <div class="film-container">
    <div class="relative mb-6">
      <label for="search" class="block text-3xl font-semibold mb-2">Rechercher un film</label>
      <div class="flex items-center">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher un film..."
          class="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="ml-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Effacer
        </button>
      </div>
      <p class="text-sm mt-2 text-gray-600">{{ filteredFilms.length }} film(s) trouvé(s)</p>
    </div>

    <div v-if="filteredFilms.length > 0" class="film-grid">
      <FilmCard
          v-for="film in filteredFilms"
          :key="film.titre"
          :film="film"
      />
    </div>
    <div v-else class="text-center py-10">
      <p class="text-xl text-gray-500">Aucun film ne correspond à votre recherche</p>
    </div>
  </div>
</template>

<style scoped>
.film-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

</style>