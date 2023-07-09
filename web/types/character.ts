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
    skills: string[] // List of skills the character is proficient in
    savingThrows: string[] // List of saving throws the character is proficient in
    languages: string[] // List of languages the character knows
    equipment: string[] // List of equipment the character has
    features: string[] // List of special features the character has
    spells: string[] // List of spells the character knows
    spellSlots: number // Number of spell slots the character has
    currentSpellSlots: number // Number of spell slots the character currently has available
    experiencePoints: number
    initiative: number
    speed: number
    hitDice: string
    deathSaves: {
        successes: number
        failures: number
    }
    abilityScoreBonuses: { [key: string]: number } // Bonuses to ability scores based on race
    specialAbilities: string[] // Special abilities based on class
    racialTraits: {
        name: string
        description: string
        darkvision: number,
        size: string,
        speed: number
        languages: string[],
        abilityScoreBonuses: number,
        specialAbilities: string[]
    }

}
