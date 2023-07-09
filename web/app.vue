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
        <select v-model="character.race" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select a race</option>
          <option value="Human">Human</option>
          <option value="Elf">Elf</option>
          <option value="Dwarf">Dwarf</option>
          <!-- Add more options as needed -->
        </select>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="class">Class</label>
        <select v-model="character.class" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="">Select a class</option>
          <option value="Fighter">Fighter</option>
          <option value="Wizard">Wizard</option>
          <option value="Rogue">Rogue</option>
          <!-- Add more options as needed -->
        </select>
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
import { Character } from './types/character' // adjust the path as needed

const character = ref<Character>(createEmptyCharacter())
const generatedCharacter = ref<Character | null>(null)
const generate = () => {
  generatedCharacter.value = generateCharacter(character.value.name, character.value.race, character.value.class)
}

function createEmptyCharacter(): Character {
  return {
    id: '',
    name: '',
    race: '',
    class: '',
    level: 1,
    alignment: '',
    background: '',
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    hitPoints: 10,
    temporaryHitPoints: 0,
    maxHitPoints: 10,
    armorClass: 10,
    proficiencyBonus: 2,
    skills: [],
    savingThrows: [],
    languages: [],
    equipment: [],
    features: [],
    spells: [],
    spellSlots: 0,
    currentSpellSlots: 0,
    experiencePoints: 0,
    initiative: 0,
    speed: 30,
    hitDice: '1d8',
    deathSaves: {
      successes: 0,
      failures: 0
    }
  }
}

function generateCharacter(name: string, race: string, cClass: string): Character {
  // Function to generate a random ability score by rolling 4d6 and dropping the lowest roll
  function rollAbilityScore(): number {
    const rolls = Array(4).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
    rolls.sort()
    rolls.shift()
    return rolls.reduce((a, b) => a + b, 0)
  }

  return {
    id: '',
    name: name,
    race: race,
    class: cClass,
    level: 1,
    alignment: '',
    background: '',
    strength: rollAbilityScore(),
    dexterity: rollAbilityScore(),
    constitution: rollAbilityScore(),
    intelligence: rollAbilityScore(),
    wisdom: rollAbilityScore(),
    charisma: rollAbilityScore(),
    hitPoints: 10,
    temporaryHitPoints: 0,
    maxHitPoints: 10,
    armorClass: 10,
    proficiencyBonus: 2,
    skills: [],
    savingThrows: [],
    languages: [],
    equipment: [],
    features: [],
    spells: [],
    spellSlots: 0,
    currentSpellSlots: 0,
    experiencePoints: 0,
    initiative: 0,
    speed: 30,
    hitDice: '1d8',
    deathSaves: {
      successes: 0,
      failures: 0
    }
  }
}

const save = async () => {
  if (generatedCharacter.value) {
    try {
      const { data, error } = await useFetch('/api/createCharacter', { method: 'POST', body: JSON.stringify(generatedCharacter.value) })

      if (error.value) {
        console.error('Error creating character', error.value)
        alert(`Error creating character: ${error.value.message}`)
      } else if (data.value && data.value.statusCode === 200) {
        alert('Character created successfully')
        // Reset the form
        character.value = createEmptyCharacter()

        generatedCharacter.value = null
      } else {
        console.error('Unexpected response creating character', data.value)
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
  // generate a new character
  generate()
}

/*
const submit = async () => {
  // generate a new character
  generate()

  if (generatedCharacter.value) {
    try {
      const { data, error } = await useFetch('/api/createCharacter', { method: 'POST', body: JSON.stringify(generatedCharacter.value) })

      if (error.value) {
        console.error('Error creating character', error.value)
        alert(`Error creating character: ${error.value.message}`)
      } else if (data.value && data.value.statusCode === 200) {
        alert('Character created successfully')
        // Reset the form
        character.value = createEmptyCharacter()

        generatedCharacter.value = null
      } else {
        console.error('Unexpected response creating character', data.value)
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

 */

</script>
