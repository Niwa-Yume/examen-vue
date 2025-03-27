<script setup>
import { ref } from 'vue';

const nomSalle = ref('Cinéma pathé Balexert');
const prenom = ref('Julien Castro');
</script>

  <template>
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex items-center justify-between">
        <span class="text-xl font-bold">{{ nomSalle }}</span>
        <span class="text-lg">{{ prenom }}</span>
      </div>
    </header>
  </template>

<style scoped>

</style>