<script setup>
defineProps({
  film: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="film-card bg-white rounded-lg shadow-md overflow-hidden h-full">
    <img :src="film.imageURL" :alt="film.titre" class="w-full">
    <div class="p-2">
      <h5 class="text-lg font-semibold mb-1 truncate">{{ film.titre }}</h5>
      <p v-if="film.titreOriginal" class="text-gray-600 text-xs mb-1 truncate">
        {{ film.titreOriginal }}
      </p>
      <p class="text-gray-500 text-xs mb-1">
        {{ film.duree }} min
      </p>
      <div class="flex flex-wrap gap-0.5">
        <span v-for="(genre, index) in film.genre.slice(0,2)"
              :key="index"
              class="bg-gray-200 text-gray-700 px-1 py-0.5 rounded text-xs">
          {{ genre }}
        </span>
        <span v-if="film.genre.length > 2" class="text-xs text-gray-500">+{{ film.genre.length - 2 }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.film-card {
  transition: transform 0.2s;
}

.film-card:hover {
  transform: scale(1.02);
}

img {
  height: 150px;
  object-fit: cover;
}
</style>