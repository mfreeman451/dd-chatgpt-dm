<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 class="text-2xl font-bold mb-4">Create a new character</h1>
    <form @submit.prevent="submit" class="w-full max-w-sm">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="character.name" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="race">Race</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="race" type="text" v-model="character.race" required>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="class">Class</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="class" type="text" v-model="character.class" required>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Character {
  name: string
  race: string
  class: string
}

const character = ref<Character>({
  name: '',
  race: '',
  class: ''
})

const submit = async () => {
  try {
    await useFetch('/api/createCharacter', { method: 'POST', body: JSON.stringify(character.value) })
    character.value = { name: '', race: '', class: '' }
    alert('Character created successfully')
  } catch (err) {
    console.error('Error creating character', err)
  }
}
</script>
