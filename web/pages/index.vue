<template>
  <!-- Add a section to display the generated character and buttons to save or re-roll -->
  <div v-if="generatedCharacter" class="flex flex-col items-center justify-center min-h-screen py-2">
    <pre>{{ generatedCharacter ? JSON.stringify(generatedCharacter, null, 2) : 'No character generated' }}</pre>
    <button @click="save" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
    <button @click="generate" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Re-roll</button>
  </div>
  <div v-else class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 class="text-2xl font-bold mb-4">Create a new character</h1>
    <form @submit.prevent="submit" class="w-full max-w-sm">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="character.name" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="race">Race</label>
        <select v-model="character.race" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          <option value="">Select a race</option>
          <option value="Human">Human</option>
          <option value="Elf">Elf</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Halfling">Halfling</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Tiefling">Tiefling</option>
          <option value="Aarakocra">Aarakocra</option>
          <option value="Genasi">Genasi</option>
          <option value="Goliath">Goliath</option>
          <option value="Aasimar">Aasimar</option>
          <option value="Bugbear">Bugbear</option>
          <option value="Firbolg">Firbolg</option>
          <option value="Goblin">Goblin</option>
          <option value="Hobgoblin">Hobgoblin</option>
          <option value="Kenku">Kenku</option>
          <option value="Kobold">Kobold</option>
          <option value="Lizardfolk">Lizardfolk</option>
          <option value="Orc">Orc</option>
          <option value="Tabaxi">Tabaxi</option>
          <option value="Triton">Triton</option>
          <option value="Yuan-Ti Pureblood">Yuan-Ti Pureblood</option>
          <option value="Tortle">Tortle</option>
          <option value="Gith">Gith</option>
          <option value="Changeling">Changeling</option>
          <option value="Kalashtar">Kalashtar</option>
          <option value="Shifter">Shifter</option>
          <option value="Warforged">Warforged</option>
          <option value="Centaur">Centaur</option>
          <option value="Loxodon">Loxodon</option>
          <option value="Minotaur">Minotaur</option>
          <option value="Simic Hybrid">Simic Hybrid</option>
          <option value="Vedalken">Vedalken</option>
          <option value="Verdan">Verdan</option>
          <option value="Locathah">Locathah</option>
          <option value="Grung">Grung</option>
          <option value="Orc of Exandria">Orc of Exandria</option>
          <option value="Hobgoblin of Exandria">Hobgoblin of Exandria</option>
          <option value="Leonin">Leonin</option>
          <option value="Satyr">Satyr</option>
          <option value="Aetherborn">Aetherborn</option>
          <option value="Aven">Aven</option>
          <option value="Khenra">Khenra</option>
          <option value="Minotaur">Minotaur</option>
          <option value="Naga">Naga</option>
          <option value="Sphinx">Sphinx</option>
          <option value="Vampire">Vampire</option>
          <option value="Vampire Spawn">Vampire Spawn</option>
          <option value="Viashino">Viashino</option>
          <option value="Locathah">Locathah</option>
          <option value="Orc of Eberron">Orc of Eberron</option>
          <option value="Shifter">Shifter</option>
          <option value="Warforged">Warforged</option>
          <option value="Changeling">Changeling</option>
          <option value="Kalashtar">Kalashtar</option>
          <option value="Shardmind">Shardmind</option>
          <option value="Wilden">Wilden</option>
          <option value="Deva">Deva</option>
          <option value="Githzerai">Githzerai</option>
          <option value="Revenant">Revenant</option>
          <option value="Shadar-Kai">Shadar-Kai</option>
          <!-- Add more options as needed -->
        </select>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="class">Class</label>
        <select v-model="character.class" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          <option value="">Select a class</option>
          <option value="Fighter">Fighter</option>
          <option value="Wizard">Wizard</option>
          <option value="Rogue">Rogue</option>
          <option value="Cleric">Cleric</option>
          <option value="Bard">Bard</option>
          <option value="Barbarian">Barbarian</option>
          <option value="Druid">Druid</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Artificer">Artificer</option>
          <option value="Blood Hunter">Blood Hunter</option>
          <!-- Add more options as needed -->
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="alignment">Alignment</label>
        <select v-model="character.alignment" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          <option value="">Select an alignment</option>
          <option value="Lawful Good">Lawful Good</option>
          <option value="Neutral Good">Neutral Good</option>
          <option value="Chaotic Good">Chaotic Good</option>
          <option value="Lawful Neutral">Lawful Neutral</option>
          <option value="True Neutral">True Neutral</option>
          <option value="Chaotic Neutral">Chaotic Neutral</option>
          <option value="Lawful Evil">Lawful Evil</option>
          <option value="Neutral Evil">Neutral Evil</option>
          <option value="Chaotic Evil">Chaotic Evil</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="discord">Discord ID</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="discord" type="text" v-model="character.discord" @change="validateDiscordId" required>
        <Icon v-if="character.validDiscordId" name="skill-icons:discord" color="green" />
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
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
import { ref, reactive } from 'vue'
import { Character } from '~/types/character'
import { v4 as uuidv4 } from 'uuid';

// Create a reactive object to store the ID
const state = reactive({
  id: ''
})

const generate = () => {
  // If the ID hasn't been generated yet, generate it now
  if (!state.id) {
    state.id = generateId()
  }

  // Pass the ID to the generateCharacter function
  generatedCharacter.value = generateCharacter(state.id, character.value.name, character.value.race, character.value.class, character.value.alignment, character.value.discord)
}

const createEmptyCharacter = (): Character => {
  return new Character('', '', '', '', '', '')
}

const character = ref<Character>(createEmptyCharacter())
const generatedCharacter = ref<Character | null>(null)
const errorMessage = ref<string | null>(null);

function generateCharacter(id: string, name: string, race: string, cClass: string, alignment: string, discord: string): Character {
  return new Character(id, name, race, cClass, alignment, discord)
}

const save = async () => {
  if (generatedCharacter.value) {
    try {
      console.log('Saving character', generatedCharacter.value)
      let fetchURL = `/api/character/${generatedCharacter.value.id}`
      const { data, error } = await useFetch(fetchURL, { method: 'POST', body: JSON.stringify(generatedCharacter.value) })
      console.log('Response', data.value.body, error.value)

      if (error.value) {
        console.error('Error creating character', error.value)
        alert(`Error creating character: ${error.value.message}`)
      } else if (data.value && data.value.statusCode === 200) {
        alert('Character created successfully')
        // Reset the form
        character.value = createEmptyCharacter()

        generatedCharacter.value = null
      } else {
        console.error('Unexpected response creating character', data)
        alert(`Unexpected response creating character: ${data.value ? data.value.body : 'No response data'}`)
      }
    } catch (err) {
      console.error('Error creating character', err)
      if (err instanceof Error) {
        alert(`Error creating character: ${err.message}`)
      } else {
        alert(`Error creating character: ${err}`)
      }
    }
  }
}

const submit = () => {
  // If the ID hasn't been generated yet, generate it now
  if (!state.id) {
    state.id = generateId()
  }

  // generate a new character
  generatedCharacter.value = generateCharacter(state.id, character.value.name, character.value.race, character.value.class, character.value.alignment, character.value.discord)
}

function generateId(): string {
  return uuidv4();
}

const validateDiscordId = async () => {
  try {
    const {
      data,
      error
    } = await useFetch(`/api/discord/${character.value.discord}`, {method: 'GET'})
    if (data.value && data.value.statusCode === 200) {
      console.log('Valid Discord ID')
      character.value.validDiscordId = true
      errorMessage.value = null
    } else if (data.value && data.value.statusCode === 404) {
      console.log('Unknown Discord user')
      character.value.validDiscordId = false
      errorMessage.value = `Unknown Discord user: ${character.value.discord}`
    } else {
      console.log(data.value)
      console.error('Err0r validating Discord ID:', error)
      character.value.validDiscordId = false
      errorMessage.value = `Error validating Discord ID: ${JSON.stringify(error)}`
    }
    // console.log("Data", data.value)
    // console.log("Error", error.value)
  } catch (err) {
    console.error('Caught: Error validating Discord ID', err)
    character.value.validDiscordId = false
    errorMessage.value = 'Caught: Error validating Discord ID'
  }
    /*
    if (error.value || data.statusCode !== 200) {
      console.error('1Error validating Discord ID:', error);
      character.value.validDiscordId = false
      errorMessage.value = `Error validating Discord ID: ${JSON.stringify(error)}`
    } else if (data.statusCode === 404) {
      console.error('Unknown Discord user')
      character.value.validDiscordId = false
      errorMessage.value = data.body.error // assuming the error message is in data.body.error
    } else {
      character.value.validDiscordId = true
      errorMessage.value = null
    }
  } catch (err) {
    console.error('2Error validating Discord ID', err)
    character.value.validDiscordId = false
    errorMessage.value = 'Error validating Discord ID'
  }

     */
}

</script>

<style scoped>
.error {
  color: red;
}
</style>