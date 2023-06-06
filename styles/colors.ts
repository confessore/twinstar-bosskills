export const DEATHKNIGHT_HEX = '#c41e3a';
export const DRUID_HEX = '#ff7d0a';
export const HUNTER_HEX = '#abd473';
export const MAGE_HEX = '#69ccf0';
export const PALADIN_HEX = '#f58cba';
export const PRIEST_HEX = '#ffffff';
export const ROGUE_HEX = '#fff569';
export const SHAMAN_HEX = '#0070de';
export const WARLOCK_HEX = '#9482c9';
export const WARRIOR_HEX = '#c79c6e';

export const DEATHKNIGHT = 'DEATHKNIGHT';
export const DRUID = "DRUID";
export const HUNTER = "HUNTER";
export const MAGE = 'MAGE';
export const PALADIN = 'PALADIN';
export const PRIEST = 'PRIEST';
export const ROGUE = 'ROGUE';
export const SHAMAN = 'SHAMAN';
export const WARLOCK = 'WARLOCK';
export const WARRIOR = 'WARRIOR';

export const matchClassColor = (playerClass: string) => {
    switch (playerClass) {
        case "Death Knight":
            return DEATHKNIGHT_HEX;
        case "Druid":
            return DRUID_HEX;
        case "Hunter":
            return HUNTER_HEX;
        case "Mage":
            return MAGE_HEX;
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
    }
}

export const parse_class = (id: number) => {
    switch (id) {
        case 62 || 63 || 64: return "Mage"
        case 65 || 66 || 70: return "Paladin"
        case 71 || 72 || 73: return "Warrior"
        case 74 || 79 || 81: return "Pet"
        case 102 || 103 || 104 || 105: return "Druid"
        case 250 || 251 || 252: return "Death Knight"
        case 253 || 254 || 255: return "Hunter"
        case 256 || 257 || 258: return "Priest"
        case 259 || 260 || 261: return "Rogue"
        case 262 || 263 || 264: return "Shaman"
        case 265 || 266 || 267: return "Warlock"
        case 268 || 269 || 270: return "Monk"
        default: return "Unknown"
    }
}

export const parse_talent_specialization = (id: number) => {
    switch (id) {
        case 62: return "Arcane"
        case 63: return "Fire"
        case 64: return "Frost"

        case 65: return "Holy"
        case 66: return "Protection"
        case 70: return "Retribution"

        case 71: return "Arms"
        case 72: return "Fury"
        case 73: return "Protection"

        case 74: return "Ferocity" // pet
        case 79: return "Cunning" // pet
        case 81: return "Tenacity" // pet

        case 102: return "Balance"
        case 103: return "Feral"
        case 104: return "Guardian"
        case 105: return "Restoration"

        case 250: return "Blood"
        case 251: return "Frost"
        case 252: return "Unholy"

        case 253: return "Beast Mastery"
        case 254: return "Marksmanship"
        case 255: return "Survival"

        case 256: return "Discipline"
        case 257: return "Holy"
        case 258: return "Shadow"

        case 259: return "Assassination"
        case 260: return "Combat"
        case 261: return "Subtlety"

        case 262: return "Elemental"
        case 263: return "Enhancement"
        case 264: return "Restoration"

        case 265: return "Affliction"
        case 266: return "Demonology"
        case 267: return "Destruction"

        case 268: return "Brewmaster"
        case 269: return "Windwalker"
        case 270: return "Mistweaver"

        default: return "Unknown"
    }
}