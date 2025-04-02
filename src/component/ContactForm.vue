<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive } from 'vue'

const state = reactive({
  nom: '',
  email: '',
  message: ''
})

const rules = {
  nom: { required },
  email: { required, email },
  message: { required, minLength: minLength(10) }
}

const v$ = useVuelidate(rules, state)

const submit = async () => {
  const result = await v$.value.$validate()
  if (result) {
    console.log('Formulaire envoyé:', state)
    state.nom = ''
    state.email = ''
    state.message = ''
    v$.value.$reset()
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6">Contactez-nous</h2>

    <form @submit.prevent="submit" class="space-y-4">
      <div>
        <label class="block text-gray-700 mb-2">Nom</label>
        <input
          v-model="state.nom"
          type="text"
          class="w-full px-3 py-2 border rounded-lg"
          :class="{ 'border-red-500': v$.nom.$error }"
        >
        <span v-if="v$.nom.$error" class="text-red-500 text-sm">
          Le nom est requis
        </span>
      </div>

      <div>
        <label class="block text-gray-700 mb-2">Email</label>
        <input
          v-model="state.email"
          type="email"
          class="w-full px-3 py-2 border rounded-lg"
          :class="{ 'border-red-500': v$.email.$error }"
        >
        <span v-if="v$.email.$error" class="text-red-500 text-sm">
          Email invalide
        </span>
      </div>

      <div>
        <label class="block text-gray-700 mb-2">Message</label>
        <textarea
          v-model="state.message"
          class="w-full px-3 py-2 border rounded-lg"
          :class="{ 'border-red-500': v$.message.$error }"
          rows="4"
        ></textarea>
        <span v-if="v$.message.$error" class="text-red-500 text-sm">
          Le message doit contenir au moins 10 caractères
        </span>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        :disabled="v$.$invalid"
      >
        Envoyer
      </button>
    </form>
  </div>
</template>