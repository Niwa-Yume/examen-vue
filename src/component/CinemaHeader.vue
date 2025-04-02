<script setup>
import { ref } from 'vue';

const nomSalle = ref('Cinéma pathé Balexert');
const prenom = ref('Julien Castro');
</script>

  <template>
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex items-center justify-between">
        <span class="text-xl font-bold">{{ nomSalle }}</span>
        <span class="text-lg">{{ prenom }}</span>
      </div>
    </header>
    <nav class="bg-blue-500 text-white p-4">
      <div class="container mx-auto flex items-center justify-around">
        <a href="/" class="text-lg">Accueil</a>
        <a href="/AcessCinema" class="text-lg">Accès au cinéma</a>
        <a href="/SelectedFilm" class="text-lg">Liste de film choisis</a>
      </div>
    </nav>
  </template>

<style scoped>

</style>