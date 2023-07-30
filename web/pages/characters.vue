<template>
  <div>
    <h1>Characters</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="character in characters" :key="character.id">
          <NuxtLink :to="`/character/${character.id}`">
            {{ character.name }} - {{ character.discord }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Character } from "~/types/character";

export default {
  async setup() {
    const fetch = useFetch('/api/character')

    const characters = ref<Character[]>([])

    fetch.then(({ data, error }) => {
      if (error.value) {
        console.error(error.value)
      } else if (data.value) {
        const parsedData = JSON.parse(data.value.body);
        characters.value = parsedData as Character[];
      }
    })

    // return { characters, isLoading: fetch.isLoading, error: fetch.error }
    return { characters, isLoading: fetch.pending, error: fetch.error }
  }
}
</script>
