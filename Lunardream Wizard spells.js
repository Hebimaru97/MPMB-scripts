/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
    Subject:    Spells
    Effect:     This script adds two spells to the Wizard spell list
                These spells have been made by LunarDream and Drukzul
    Code by:    Hebi
    Date:        2022-10-03 (sheet v13.1.2)
*/
var iFileName = "Lunardream Wizard spells.js";

SourceList["LDHB"] = {
    name : "LunarDream's Homebrew",
    abbreviation : "LDHB",
    group : "LunarDream and Drukzul",
    date : "2022/10/03"
};

// Add the spells
SpellsList["callum's cinder cwarm"] = {
	name : "Callum's Cinder Swarm",
	classes : ["wizard"],
	source : ["LDHB", 1],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Sphere 15ft rad flaming butterfly's, IFF on cast; 4d8fire/2 dex save DOT 2d8; a to end; see book",
	descriptionFull : "You conjure a swarm of flaming elemental butterflies in a 15ft radius sphere within range. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. When an affected creature enters the area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, the creature takes 4d8 fire damage and begins burning. On a successful save, the creature takes half as much damage and is not ignited. At the end of a burning creature's turn, it takes 2d8 fire damage. This continues until a creature uses an action to douse the flames. The swarm ignites flammable objects in the area that aren’t being worn or carried. If you are within 60 feet of the swarm, you can move it up to 30 feet as a bonus action on your turn."
  };
SpellsList["ariella's astral shield"] = {
	name : "Ariella's Astral Shield",
	classes : ["wizard"],
	source : ["LDHB", 2],
	level : 5,
	school : "Abjur",
	time : "1 r",
	range : "100 ft",
	components : "V",
	duration : "1 round",
	save : "Str",
	description : "Creature becomes immune to all incoming damage; Roll 1d6 Spell fails on a 1",
	descriptionFull : "The spell creates a sphere of astral energy around the creature, granting it immunity to the triggering damage by opening a small rift to the astral plane. The creature also gains resistance to all subsequent damage it would take until the start of your next turn. This spell has a chance of failing outright. Roll a d6. On a result of 1, the spell fails and the spell slot is expended. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, choose one additional creature for each spell slot above 5th."
};