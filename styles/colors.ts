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
        case DEATHKNIGHT:
            return DEATHKNIGHT_HEX;
        case DRUID:
            return DRUID_HEX;
        case HUNTER:
            return HUNTER_HEX;
        case MAGE:
            return MAGE_HEX;
        case PALADIN:
            return PALADIN_HEX;
        case PRIEST:
            return PRIEST_HEX;
        case ROGUE:
            return ROGUE_HEX;
        case SHAMAN:
            return SHAMAN_HEX;
        case WARLOCK:
            return WARLOCK_HEX;
        case WARRIOR:
            return WARRIOR_HEX;
    }
}