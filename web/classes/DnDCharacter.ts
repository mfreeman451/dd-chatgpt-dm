export class DnDCharacter {
    id!: string;
    discord!: string;
    validDiscordId!: boolean;
    name: string;
    race: string;
    class: string;
    level: number;
    alignment: string;
    background: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitPoints: number;
    temporaryHitPoints: number;
    maxHitPoints: number;
    armorClass: number;
    proficiencyBonus: number;
    skills: string[];
    savingThrows: string[];
    languages: string[];
    equipment: string[];
    features: string[];
    spells: string[];
    spellSlots: number;
    currentSpellSlots: number;
    experiencePoints: number;
    initiative: number;
    speed: number;
    hitDice: string;
    deathSaves: {
        successes: number;
        failures: number;
    };
    racialTraits: string[];

    constructor(id: string, name: string, race: string, cClass: string, alignment: string, discord: string) {
        this.id = id
        this.name = name;
        this.race = race;
        this.class = cClass;
        this.level = 1;
        this.alignment = alignment;
        this.background = '';
        this.strength = this.rollAbilityScore();
        this.dexterity = this.rollAbilityScore();
        this.constitution = this.rollAbilityScore();
        this.intelligence = this.rollAbilityScore();
        this.wisdom = this.rollAbilityScore();
        this.charisma = this.rollAbilityScore();
        this.hitPoints = 0;
        this.temporaryHitPoints = 0;
        this.maxHitPoints = 0;
        this.armorClass = 0;
        this.proficiencyBonus = 0;
        this.skills = [];
        this.savingThrows = [];
        this.languages = [];
        this.equipment = [];
        this.features = [];
        this.spells = [];
        this.spellSlots = 0;
        this.currentSpellSlots = 0;
        this.experiencePoints = 0;
        this.initiative = 0;
        this.speed = 0;
        this.hitDice = '';
        this.deathSaves = {
            successes: 0,
            failures: 0
        }
        this.discord = discord;
        this.racialTraits = this.getRacialTraits();
    }

    private rollAbilityScore(): number {
        const rolls = Array(4).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
        rolls.sort();
        rolls.shift();
        return rolls.reduce((a, b) => a + b, 0);
    }

    private getRacialTraits(): string[] {
        switch (this.race) {
            case 'Human':
                return ['Bonus Feat', 'Extra Skill Points'];
            case 'Elf':
                return ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'];
            case 'Dwarf':
                return ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Stonecunning'];
            case 'Halfling':
                return ['Lucky', 'Brave', 'Halfling Nimbleness'];
            case 'Dragonborn':
                return ['Draconic Ancestry', 'Breath Weapon', 'Damage Resistance'];
            case 'Gnome':
                return ['Darkvision', 'Gnome Cunning'];
            case 'Half-Elf':
                return ['Darkvision', 'Fey Ancestry', 'Skill Versatility'];
            case 'Half-Orc':
                return ['Darkvision', 'Menacing', 'Relentless Endurance', 'Savage Attacks'];
            case 'Tiefling':
                return ['Darkvision', 'Hellish Resistance', 'Infernal Legacy'];
            default:
                return [];
        }
    }
}
