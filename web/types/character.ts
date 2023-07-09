// types/character.ts

export interface Character {
    id: string
    name: string
    race: string
    class: string
    level: number
    alignment: string
    background: string
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    hitPoints: number
    temporaryHitPoints: number
    maxHitPoints: number
    armorClass: number
    proficiencyBonus: number
    skills: string[]
    savingThrows: string[]
    languages: string[]
    equipment: string[]
    features: string[]
    spells: string[]
    spellSlots: number
    currentSpellSlots: number
    experiencePoints: number
    initiative: number
    speed: number
    hitDice: string
    deathSaves: {
        successes: number
        failures: number
    }
}
