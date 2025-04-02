<!-- src/component/SelectedFilm.vue -->
<template>
    <div class="selected-films">
      <h2 class="title">Films Sélectionnés ({{ store.selectedFilmsCount }})</h2>
      
      <div v-if="store.selectedFilms.length === 0" class="empty-message">
        Aucun film sélectionné
      </div>
      
      <ul v-else class="films-list">
        <li v-for="film in store.selectedFilms" :key="film.titre" class="film-item">
          <div class="film-info">
            <h3 class="film-title">{{ film.titre }}</h3>
            <p v-if="film.seances && film.seances.length > 0" class="film-seance">
              Prochaine séance : {{ film.seances[0].heure }}
            </p>
            <p v-else class="no-seance">Pas d'horaire disponible</p>
          </div>
          <button 
            @click="store.removeFromSelectedFilms(film.titre)"
            class="remove-btn"
          >
            Retirer
          </button>
        </li>
      </ul>
      
      <button 
        v-if="store.selectedFilms.length > 0"
        @click="store.clearSelectedFilms"
        class="clear-btn"
      >
        Effacer tout
      </button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '@/stores/store';
  
  const store = useStore();
  </script>
  
  <style scoped>
  .selected-films {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .empty-message {
    text-align: center;
    padding: 20px;
    color: #666;
    background-color: #fff;
    border-radius: 4px;
  }
  
  .films-list {
    list-style: none;
    padding: 0;
  }
  
  .film-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    transition: background-color 0.3s;
  }
  
  .film-item:hover {
    background-color: #f1f1f1;
  }
  
  .film-info {
    flex: 1;
  }
  
  .film-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  
  .film-seance {
    color: #555;
  }
  
  .no-seance {
    color: #999;
  }
  
  .remove-btn {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .remove-btn:hover {
    background-color: #e63939;
  }
  
  .clear-btn {
    width: 100%;
    background-color: #666;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .clear-btn:hover {
    background-color: #555;
  }
  </style>