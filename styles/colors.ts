export const DEATHKNIGHT_HEX = "#c41e3a";
export const DRUID_HEX = "#ff7d0a";
export const HUNTER_HEX = "#abd473";
export const MAGE_HEX = "#69ccf0";
export const MONK_HEX = "#00ff98";
export const PALADIN_HEX = "#f58cba";
export const PRIEST_HEX = "#ffffff";
export const ROGUE_HEX = "#fff569";
export const SHAMAN_HEX = "#0070de";
export const WARLOCK_HEX = "#9482c9";
export const WARRIOR_HEX = "#c79c6e";
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

export const parse_talent_specialization_image = (id: number) => {
  switch (id) {
    case 62:
      return "/mage_arcane.webp";
    case 63:
      return "/mage_fire.webp";
    case 64:
      return "/mage_frost.webp";

    case 65:
      return "/paladin_holy.webp";
    case 66:
      return "/paladin_protection.webp";
    case 70:
      return "/paladin_retribution.webp";

    case 71:
      return "/warrior_arms.webp";
    case 72:
      return "/warrior_fury.webp";
    case 73:
      return "/warrior_protection.webp";

    case 74:
      return "/enrage.webp"; // pet
    case 79:
      return "/enrage.webp"; // pet
    case 81:
      return "/enrage.webp"; // pet

    case 102:
      return "/druid_balance.webp";
    case 103:
      return "/druid_feral.webp";
    case 104:
      return "/druid_guardian.webp";
    case 105:
      return "/druid_restoration.webp";

    case 250:
      return "/death_knight_blood.webp";
    case 251:
      return "/death_knight_frost.webp";
    case 252:
      return "/death_knight_unholy.webp";

    case 253:
      return "/hunter_beast_mastery.webp";
    case 254:
      return "/hunter_marksmanship.webp";
    case 255:
      return "/hunter_survival.webp";

    case 256:
      return "/priest_discipline.webp";
    case 257:
      return "/priest_holy.webp";
    case 258:
      return "/priest_shadow.webp";

    case 259:
      return "/rogue_assassination.webp";
    case 260:
      return "/rogue_outlaw.webp";
    case 261:
      return "/rogue_subtlety.webp";

    case 262:
      return "/shaman_elemental.webp";
    case 263:
      return "/shaman_enhancement.webp";
    case 264:
      return "/shaman_restoration.webp";

    case 265:
      return "/warlock_affliction.webp";
    case 266:
      return "/warlock_demonology.webp";
    case 267:
      return "/warlock_destruction.webp";

    case 268:
      return "/monk_brewmaster.webp";
    case 269:
      return "/monk_windwalker.webp";
    case 270:
      return "/monk_mistweaver.webp";

    default:
      return "/enrage.webp";
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
