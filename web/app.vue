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
import { Character } from './types/character' // adjust the path as needed

const character = ref<Character>({
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
})


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

const submit = async () => {
  try {
    // Use the inputs from the form and pass them to the generateCharacter function
    character.value = generateCharacter(character.value.name, character.value.race, character.value.class)
    const { data, error } = await useFetch('/api/createCharacter', { method: 'POST', body: JSON.stringify(character.value) })

    if (error.value) {
      console.error('Error creating character', error)
      alert(`Error creating character: ${error.value.message}`)
    } else if (data.value && data.value.statusCode === 200) {
      alert('Character created successfully')
      // Reset the form
      character.value = generateCharacter('', '', '')
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

</script>
