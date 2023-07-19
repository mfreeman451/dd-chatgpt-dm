package model

type Player struct {
	ID                  string
	Discord             string
	Name                string
	Race                string
	Class               string
	Level               int
	Alignment           string
	Background          string
	Strength            int
	Dexterity           int
	Constitution        int
	Intelligence        int
	Wisdom              int
	Charisma            int
	HitPoints           int
	TemporaryHitPoints  int
	MaxHitPoints        int
	ArmorClass          int
	ProficiencyBonus    int
	Skills              []string
	SavingThrows        []string
	Languages           []string
	Equipment           []string
	Features            []string
	Spells              []string
	SpellSlots          int
	CurrentSpellSlots   int
	ExperiencePoints    int
	Initiative          int
	Speed               int
	HitDice             string
	DeathSaves          DeathSaves
	AbilityScoreBonuses map[string]int
	SpecialAbilities    []string
	RacialTraits        RacialTraits
	// Other fields...
}

type DeathSaves struct {
	Successes int
	Failures  int
}

type RacialTraits struct {
	Name                string
	Description         string
	Darkvision          int
	Size                string
	Speed               int
	Languages           []string
	AbilityScoreBonuses int
	SpecialAbilities    []string
}
