package model

import (
	"github.com/mfreeman451/dd-chatgpt-dm/server/pb/game"
	"time"
)

type Player struct {
	ID                  string
	Discord             string
	Name                string
	Race                string
	Class               string
	Level               int32
	Alignment           string
	Background          string
	Strength            int32
	Dexterity           int32
	Constitution        int32
	Intelligence        int32
	Wisdom              int32
	Charisma            int32
	HitPoints           int32
	TemporaryHitPoints  int32
	MaxHitPoints        int32
	ArmorClass          int32
	ProficiencyBonus    int32
	Skills              []string
	SavingThrows        []string
	Languages           []string
	Equipment           []string
	Features            []string
	Spells              []string
	SpellSlots          int32
	CurrentSpellSlots   int32
	ExperiencePoints    int32
	Initiative          int32
	Speed               int32
	HitDice             string
	DeathSaves          DeathSaves
	AbilityScoreBonuses map[string]int32
	SpecialAbilities    []string
	RacialTraits        RacialTraits
	Coordinates         *game.Coordinates
	DefaultRoom         *game.Coordinates // New field to set the default room
	LastLogin           time.Time
	LastLogout          time.Time
	// Other fields...
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
