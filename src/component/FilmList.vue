<script setup>
import FilmCard from "@/component/FilmCard.vue";
import { films } from '@/assets/arena-lapraille.js';
</script>

<template>
  <div class="film-container">
    <div class="film-grid">
      <FilmCard
          v-for="film in films"
          :key="film.titre"
          :film="film"
      />
    </div>
  </div>
</template>

<style scoped>
.film-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 768px) {
  .film-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .film-grid {
    grid-template-columns: 1fr;
  }
}
</style>