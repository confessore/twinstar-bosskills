export const DEATHKNIGHT_HEX = "#C41E3B";
export const DRUID_HEX = "#FF7C0A";
export const HUNTER_HEX = "#AAD372";
export const MAGE_HEX = "#68CCEF";
export const MONK_HEX = "#00FF96";
export const PALADIN_HEX = "#F48CBA";
export const PRIEST_HEX = "#FFFFFF";
export const ROGUE_HEX = "#FFF468";
export const SHAMAN_HEX = "#2359FF";
export const WARLOCK_HEX = "#9382C9";
export const WARRIOR_HEX = "#C69B6D";
export const DEFAULT = "#000000";

export const DEATHKNIGHT = "DEATHKNIGHT";
export const DRUID = "DRUID";
export const HUNTER = "HUNTER";
export const MAGE = "MAGE";
export const PALADIN = "PALADIN";
export const PRIEST = "PRIEST";
export const ROGUE = "ROGUE";
export const SHAMAN = "SHAMAN";
export const WARLOCK = "WARLOCK";
export const WARRIOR = "WARRIOR";

export const matchClassColor = (playerClass: string) => {
  switch (playerClass) {
    case "Death Knight":
      return DEATHKNIGHT_HEX;
    case "Druid":
      return DRUID_HEX;
    case "Hunter":
      return HUNTER_HEX;
    case "Hunter Pet":
      return HUNTER_HEX;
    case "Mage":
      return MAGE_HEX;
    case "Monk":
      return MONK_HEX;
    case "Paladin":
      return PALADIN_HEX;
    case "Priest":
      return PRIEST_HEX;
    case "Rogue":
      return ROGUE_HEX;
    case "Shaman":
      return SHAMAN_HEX;
    case "Warlock":
      return WARLOCK_HEX;
    case "Warrior":
      return WARRIOR_HEX;
    default:
      return DEFAULT;
  }
};

export const parse_mode_color = (mode: number) => {
  switch (mode) {
    case 3:
      return "#4338CA";
    case 4:
      return "#312E81";
    case 5:
      return "#BE123C";
    case 6:
      return "#881337";
    case 7:
      return "#047857"
    default:
      return "#334155";
  }
};

export const parse_mode = (mode: number) => {
  switch (mode) {
    case 3:
      return "Normal 10";
    case 4:
      return "Normal 25";
    case 5:
      return "Hard 10";
    case 6:
      return "Hard 25";
    case 7:
      return "LFR"
    default:
      return "Unknown";
  }
};

export const parse_boss = (entry: number) => {
  switch (entry) {
    case 59915:
      return "Jasper Guardian";
    case 60009:
      return "Feng the Accursed";
    case 60143:
      return "Gara'jal the Spiritbinder";
    case 60410:
      return "Elegon";
    case 60701:
      return "Zian of the Endless Shadow";
    case 60399:
      return "Qin-xi";
    case 62980:
      return "Imperial Vizier Zor'lok"
    case 62543:
      return "Blade Lord Ta'yak"
    case 62164:
      return "Garalon"
    case 62397:
      return "Wind Lord Mel'jarak"
    case 62511:
      return "Amber-Shaper Un'sok"
    case 62837:
      return "Grand Empress Shek'zeer"
    default:
      return entry.toString();
  }
};

export const parse_class = (id: number) => {
  switch (id) {
    case 62:
    case 63:
    case 64:
      return "Mage";
    case 65:
    case 66:
    case 70:
      return "Paladin";
    case 71:
    case 72:
    case 73:
      return "Warrior";
    case 74:
    case 79:
    case 81:
      return "Hunter Pet";
    case 102:
    case 103:
    case 104:
    case 105:
      return "Druid";
    case 250:
    case 251:
    case 252:
      return "Death Knight";
    case 253:
    case 254:
    case 255:
      return "Hunter";
    case 256:
    case 257:
    case 258:
      return "Priest";
    case 259:
    case 260:
    case 261:
      return "Rogue";
    case 262:
    case 263:
    case 264:
      return "Shaman";
    case 265:
    case 266:
    case 267:
      return "Warlock";
    case 268:
    case 269:
    case 270:
      return "Monk";
    default:
      return "Unknown";
  }
};

export const parse_class_image = (id: number) => {
  switch (id) {
    case 62:
    case 63:
    case 64:
      return "/images/icons/mop/large/classicon_mage.jpg";
    case 65:
    case 66:
    case 70:
      return "/images/icons/mop/large/classicon_paladin.jpg";
    case 71:
    case 72:
    case 73:
      return "/images/icons/mop/large/classicon_warrior.jpg";
    case 74:
    case 79:
    case 81:
      return "/images/icons/mop/large/pet_babyshark.jpg";
    case 102:
    case 103:
    case 104:
    case 105:
      return "/images/icons/mop/large/classicon_druid.jpg";
    case 250:
    case 251:
    case 252:
      return "/images/icons/mop/large/classicon_deathknight.jpg";
    case 253:
    case 254:
    case 255:
      return "/images/icons/mop/large/classicon_hunter.jpg";
    case 256:
    case 257:
    case 258:
      return "/images/icons/mop/large/classicon_priest.jpg";
    case 259:
    case 260:
    case 261:
      return "/images/icons/mop/large/classicon_rogue.jpg";
    case 262:
    case 263:
    case 264:
      return "/images/icons/mop/large/classicon_shaman.jpg";
    case 265:
    case 266:
    case 267:
      return "/images/icons/mop/large/classicon_warlock.jpg";
    case 268:
    case 269:
    case 270:
      return "/images/icons/mop/large/classicon_monk.jpg";
    default:
      return "/images/icons/mop/large/inv_misc_questionmark";
  }
};

export const parse_talent_specialization_image = (id: number) => {
  switch (id) {
    case 62:
      return "/images/icons/mop/small/Arcane.jpg";
    case 63:
      return "/images/icons/mop/small/Fire.jpg";
    case 64:
      return "/images/icons/mop/small/FrostMage.jpg";

    case 65:
      return "/images/icons/mop/small/HolyPaladin.jpg";
    case 66:
      return "/images/icons/mop/small/ProtectionPala.jpg";
    case 70:
      return "/images/icons/mop/small/Retribution.jpg";

    case 71:
      return "/images/icons/mop/small/Arms.jpg";
    case 72:
      return "/images/icons/mop/small/Fury.jpg";
    case 73:
      return "/images/icons/mop/small/ProtectionWar.jpg";

    case 74:
      return "/images/icons/mop/small/Ferocity.jpg"; // pet
    case 79:
      return "/images/icons/mop/small/Cunning.jpg"; // pet
    case 81:
      return "/images/icons/mop/small/Tenacity.jpg"; // pet

    case 102:
      return "/images/icons/mop/small/Balance.jpg";
    case 103:
      return "/images/icons/mop/small/Feral.jpg";
    case 104:
      return "/images/icons/mop/small/Guardian.jpg";
    case 105:
      return "/images/icons/mop/small/RestorationDruid.jpg";

    case 250:
      return "/images/icons/mop/small/Blood.jpg";
    case 251:
      return "/images/icons/mop/small/FrostDK.jpg";
    case 252:
      return "/images/icons/mop/small/Unholy.jpg";

    case 253:
      return "/images/icons/mop/small/BeastMastery.jpg";
    case 254:
      return "/images/icons/mop/small/Marksmanship.jpg";
    case 255:
      return "/images/icons/mop/small/Survival.jpg";

    case 256:
      return "/images/icons/mop/small/Discipline.jpg";
    case 257:
      return "/images/icons/mop/small/HolyPriest.jpg";
    case 258:
      return "/images/icons/mop/small/Shadow.jpg";

    case 259:
      return "/images/icons/mop/small/Assassination.jpg";
    case 260:
      return "/images/icons/mop/small/Combat.jpg";
    case 261:
      return "/images/icons/mop/small/Subtlety.jpg";

    case 262:
      return "/images/icons/mop/small/Elemental.jpg";
    case 263:
      return "/images/icons/mop/small/Enhancement.jpg";
    case 264:
      return "/images/icons/mop/small/RestorationSham.jpg";

    case 265:
      return "/images/icons/mop/small/Affliction.jpg";
    case 266:
      return "/images/icons/mop/small/Demonology.jpg";
    case 267:
      return "/images/icons/mop/small/Destruction.jpg";

    case 268:
      return "/images/icons/mop/small/Brewmaster.jpg";
    case 269:
      return "/images/icons/mop/small/Windwalker.jpg";
    case 270:
      return "/images/icons/mop/small/Mistweaver.jpg";

    default:
      return "/images/icons/mop/small/inv_misc_questionmark";
  }
};

export const parse_talent_specialization = (id: number) => {
  switch (id) {
    case 62:
      return "Arcane";
    case 63:
      return "Fire";
    case 64:
      return "Frost";

    case 65:
      return "Holy";
    case 66:
      return "Protection";
    case 70:
      return "Retribution";

    case 71:
      return "Arms";
    case 72:
      return "Fury";
    case 73:
      return "Protection";

    case 74:
      return "Ferocity"; // pet
    case 79:
      return "Cunning"; // pet
    case 81:
      return "Tenacity"; // pet

    case 102:
      return "Balance";
    case 103:
      return "Feral";
    case 104:
      return "Guardian";
    case 105:
      return "Restoration";

    case 250:
      return "Blood";
    case 251:
      return "Frost";
    case 252:
      return "Unholy";

    case 253:
      return "Beast Mastery";
    case 254:
      return "Marksmanship";
    case 255:
      return "Survival";

    case 256:
      return "Discipline";
    case 257:
      return "Holy";
    case 258:
      return "Shadow";

    case 259:
      return "Assassination";
    case 260:
      return "Combat";
    case 261:
      return "Subtlety";

    case 262:
      return "Elemental";
    case 263:
      return "Enhancement";
    case 264:
      return "Restoration";

    case 265:
      return "Affliction";
    case 266:
      return "Demonology";
    case 267:
      return "Destruction";

    case 268:
      return "Brewmaster";
    case 269:
      return "Windwalker";
    case 270:
      return "Mistweaver";

    default:
      return "Unknown";
  }
};

export const parse_character_race = async (id: number) => {
  switch (id) {
    case 1:
      return "Human";
    case 2:
      return "Orc";
    case 3:
      return "Dwarf";
    case 4:
      return "Night Elf";
    case 5:
      return "Undead";
    case 6:
      return "Tauren";
    case 7:
      return "Gnome";
    case 8:
      return "Troll";
    case 9:
      return "Goblin";
    case 10:
      return "Blood Elf";
    case 11:
      return "Draenei";
    case 22:
      return "Worgen";
    case 24:
      return "Pandaren";
    case 25:
      return "Pandaren";
    case 26:
      return "Pandaren";
    default:
      return "Unknown";
  }
};

export const parse_character_race_image = async (id: number) => {
  switch (id) {
    case 1:
      return "Human";
    case 2:
      return "Orc";
    case 3:
      return "Dwarf";
    case 4:
      return "Night Elf";
    case 5:
      return "Undead";
    case 6:
      return "Tauren";
    case 7:
      return "Gnome";
    case 8:
      return "Troll";
    case 9:
      return "Goblin";
    case 10:
      return "Blood Elf";
    case 11:
      return "Draenei";
    case 22:
      return "Worgen";
    case 24:
      return "Pandaren";
    case 25:
      return "Pandaren";
    case 26:
      return "Pandaren";
    default:
      return "Unknown";
  }
};
