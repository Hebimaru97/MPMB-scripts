/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the druid, called "Mage of Witherbloom"
				This is taken from UA21MoS 
				This subclass is made by WOTC
	Code by:	Hebi
	Date:		2022-10-01 (sheet v13.1.2)
*/

var iFileName = "Druid - Mage of Witherbloom.js";

SourceList["UA1MoS:MoW"] = {
	name : "Mage of Witherbloom",
	abbreviation : "UA1MoS:MoW",
	url : "https://dnd.wizards.com/unearthed-arcana/strixhaven",
	date : "2021/6/08"
};

var theCoD = AddSubClass("druid", "mage of witherbloom", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*\bwitherbloom\b).*$/i,
	subname : "Mage of Witherbloom",
	source : ["UA1MoS:MoW", 0],
	spellcastingList : {
		"class" : "druid",
		extraspells : ["spare the dying", "lesser restoration", "ray of enfeeblement", "blight", "greater restoration", "antilife shell", "mass cure wounds", "revivify", "vampiric touch"]
	},
	features : {
		"subclassfeature1" : {
			name : "Essence Tap",
			source : ["UA1MoS:MoW", 0],
			minlevel : 1,
			description : desc([
				"As a bonus action, you can draw on a reservoir of life essence to empower yourself for 1 minute, or until you use this feature again. For the duration, you gain one of the following benefits of your choice:",
				"Overgrowth. When you choose this benefit, and as a bonus action on subsequent turns while the benefit lasts, you can expend and roll one Hit Die. You regain a number of hit points equal to the number rolled plus your spellcasting ability modifier.",
				"Withering Strike. When you deal damage, you can change the damage type to necrotic, and you ignore resistance to necrotic damage.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			])
		},
		"subclassfeature2" : {
			name : "Witherbloom Brew",
			source : ["UA1MoS:MoW", 0],
			minlevel : 6,
			description : desc([
				"You gain proficiency with herbalism kits if you don't already have it.",
				"When you finish a long rest, you can use an herbalism kit and a pot or cauldron to create magical brews.",
				"You create a number of brews equal to your proficiency bonus. Each brew requires its own flask.",
				"A brew retains its magical potency for 24 hours or until it is used. For each brew, choose one of the following effects:",
				"Fortifying. When you create this brew, choose a damage type from the following list: cold, fire, necrotic, poison, or radiant. A creature can drink this brew or administer it to another creature as an action. The recipient gains resistance to the chosen damage type for 1 hour.",
				"Quickening. A creature can drink this brew or administer it to another creature as an action. The recipient regains 2d6 hit points, and one disease or condition from the following list affecting the recipient ends (brew user's choice): charmed, frightened, paralyzed, poisoned, stunned.",
				"Toxifying. As an action, a creature can apply this brew to a simple or martial weapon. The next time the weapon or a piece of ammunition fired by it hits a creature within 1 hour, the target takes 2d6 poison damage and must succeed on a Constitution saving throw against your spell save DC or be poisoned for 1 minute.",
			])
		},
		"subclassfeature3" : {
			name : "Witherbloom Adept",
			source : ["UA1MoS:MoW", 0],
			minlevel : 10,
			description : desc([
				"Your connection to the flow of life force deepens.",
				"Once per turn when you deal necrotic damage or restore hit points using a spell, one target of the spell takes additional damage or regains additional hit points equal to your proficiency bonus."
			]),
		},
		"subclassfeature4" : {
			name : "Withering Vortex",
			source : ["UA1MoS:MoW", 0],
			minlevel : 14,
			description : desc([
				"When you cast a spell using a spell slot that deals necrotic damage to any number of creatures that aren't Undead or Constructs, choose one of the creatures that took damage.",
				"You drain an amount of life energy equal to half the damage dealt to the chosen creature.",
				"One creature other than yourself that you can see within 30 feet of you regains a number of hit points equal to the life energy drained.",
				"ou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]),
		}
	}
});

if (ClassSubList[theCoD] && sheetVersion < 13) {
	ClassSubList[theCoD].spellcastingExtra = ["spare the dying", "lesser restoration", "ray of enfeeblement", "blight", "greater restoration", "antilife shell", "mass cure wounds", "revivify", "vampiric touch"];
	};