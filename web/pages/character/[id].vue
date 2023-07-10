<template>
  <div>
    <div v-if="character">
      <h1>{{ character.name }}</h1>
      <table class="table-auto">
        <tbody>
        <tr>
          <td>Discord</td>
          <td>d: {{ character.discord }}</td>
        </tr>
        <!-- Add more rows here for other character attributes -->
        </tbody>
      </table>
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

    const fetch = useFetch(`/api/character/${id}`, { method: "GET" })

    const character = ref<Character | null>(null)

    fetch.then(({ data, error }) => {
      if (error.value) {
        console.error(error.value)
      } else if (data.value) {
        console.log("data", data.value)
        const parsedData = JSON.parse(data.value.body);
        if (parsedData.error) {
          console.error(parsedData.error)
          return
        }
        console.log("parsedData", parsedData)
        character.value = parsedData as Character;
      }
    })

    return { character, isLoading: fetch.isLoading, error: fetch.error }
  }
}
</script>
