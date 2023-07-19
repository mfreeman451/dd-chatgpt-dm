package model

import "gorm.io/gorm"

type Player struct {
	gorm.Model
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
	Skills              []string `gorm:"type:text[]"`
	SavingThrows        []string `gorm:"type:text[]"`
	Languages           []string `gorm:"type:text[]"`
	Equipment           []string `gorm:"type:text[]"`
	Features            []string `gorm:"type:text[]"`
	Spells              []string `gorm:"type:text[]"`
	SpellSlots          int
	CurrentSpellSlots   int
	ExperiencePoints    int
	Initiative          int
	Speed               int
	HitDice             string
	DeathSaves          DeathSaves
	AbilityScoreBonuses map[string]int `gorm:"type:hstore"`
	SpecialAbilities    []string       `gorm:"type:text[]"`
	RacialTraits        RacialTraits
	// Other fields...
}

type DeathSaves struct {
	gorm.Model
	Successes int
	Failures  int
}

type RacialTraits struct {
	gorm.Model
	Name                string
	Description         string
	Darkvision          int
	Size                string
	Speed               int
	Languages           []string
	AbilityScoreBonuses int
	SpecialAbilities    []string
}
