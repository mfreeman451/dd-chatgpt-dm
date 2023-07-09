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
        <select v-model="character.class" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
        <select v-model="character.alignment" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
import { Character } from './types/character'

const character = ref<Character>(createEmptyCharacter())
const generatedCharacter = ref<Character | null>(null)
const generate = () => {
  generatedCharacter.value = generateCharacter(character.value.name, character.value.race, character.value.class, character.value.alignment)
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
    },
    abilityScoreBonuses: {},
    specialAbilities: [],
    racialTraits: {
      name: '',
      description: '',
      darkvision: 0,
      size: 'Medium',
      speed: 30,
      languages: [],
      abilityScoreBonuses: 0,
      specialAbilities: []
    }
  }
}

function generateCharacter(name: string, race: string, cClass: string, alignment: string): Character {
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
    alignment: alignment,
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
    },
    abilityScoreBonuses: {}, // Add race and class specific bonuses here
    specialAbilities: [], // Add race and class specific abilities here
    racialTraits: {
      name: '',
      description: '',
      darkvision: 0,
      size: 'Medium',
      speed: 30,
      languages: [],
      abilityScoreBonuses: 0,
      specialAbilities: []
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

</script>
