<script setup>
import CinemaHeader from "@/component/CinemaHeader.vue";
import FilmList from "@/component/FilmList.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <CinemaHeader/>
    <main class="py-8 px-4">

    </main>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>