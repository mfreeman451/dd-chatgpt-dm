<template>
  <div class="container mx-auto px-4">
    <div v-if="isLoading" class="text-center py-4">
      Loading...
    </div>
    <div v-else-if="character">
      <h1 class="text-2xl font-bold mb-4">{{ character.name }}</h1>
      <table class="table-auto w-full">
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-bold">Discord ID</td>
          <td class="border px-4 py-2">{{ character.discord }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-bold">Class</td>
          <td class="border px-4 py-2">{{ character.class }}</td>
        </tr>
        <!-- Add more rows here for other character attributes -->
        <tr>
          <td class="border px-4 py-2 font-bold">Race</td>
          <td class="border px-4 py-2">{{ character.race }}</td>
        </tr>
        <!-- Strength -->
        <tr>
          <td class="border px-4 py-2 font-bold">Strength</td>
          <td class="border px-4 py-2">{{ character.strength }}</td>
        </tr>
        <!-- Dexterity -->
        <tr>
          <td class="border px-4 py-2 font-bold">Dexterity</td>
          <td class="border px-4 py-2">{{ character.dexterity }}</td>
        </tr>
        <!-- Wisdom -->
        <tr>
          <td class="border px-4 py-2 font-bold">Wisdom</td>
          <td class="border px-4 py-2">{{ character.wisdom }}</td>
        </tr>
        <!-- Constitution -->
        <tr>
          <td class="border px-4 py-2 font-bold">Constitution</td>
          <td class="border px-4 py-2">{{ character.constitution }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-bold">Level</td>
          <td class="border px-4 py-2">{{ character.level }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-bold">Alignment</td>
          <td class="border px-4 py-2">{{ character.alignment }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-bold">Background</td>
          <td class="border px-4 py-2">{{ character.background }}</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-bold">Skills</td>
          <td class="border px-4 py-2">
            <ul>
              <li v-for="(skill, index) in character.skills" :key="index">{{ skill }}</li>
            </ul>
          </td>
        </tr>
        <!-- ... -->
        <!-- Continue adding rows for each attribute -->
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="text-center py-4">No character data available.</p>
    </div>
  </div>
</template>


<script lang="ts">
import { ref } from 'vue'
import { Character } from "~/types/character";

export default {
  async setup() {
    const route = useRoute()

    const id = route.params.id
    const isLoading = ref(false)

    const fetch = useFetch(`/api/character/${id}`, { method: "GET" })

    const character = ref<Character | null>(null)

    isLoading.value = true
    fetch.then(({ data, error }) => {
      if (error.value) {
        console.error("[id].vue Error: ", error.value)
      } else if (data.value) {
        const parsedData = JSON.parse(data.value.body);
        console.log(parsedData)
        isLoading.value = false
        if (parsedData.error) {
          console.error("parsedData.error: ", parsedData.error)
          return
        }
        character.value = parsedData as Character;
      }
    })

    return { character, isLoading, error: fetch.error }
  }
}
</script>
