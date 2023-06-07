Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
} = require("./runtime/index-browser");

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944",
};

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.validator = () => (val) => val;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */

exports.Prisma.Boss_killsScalarFieldEnum = {
  id: "id",
  reserver: "reserver",
  entry: "entry",
  map: "map",
  mode: "mode",
  guild: "guild",
  time: "time",
  realm: "realm",
  length: "length",
  wipes: "wipes",
  deaths: "deaths",
  ressUsed: "ressUsed",
  progressLenght: "progressLenght",
  hidden: "hidden",
  cleanupDisabled: "cleanupDisabled",
  instanceId: "instanceId",
  newGuildName: "newGuildName",
};

exports.Prisma.Boss_kills_deathsScalarFieldEnum = {
  id: "id",
  guid: "guid",
  time: "time",
};

exports.Prisma.Boss_kills_mapsScalarFieldEnum = {
  id: "id",
  time: "time",
  encounterDamage: "encounterDamage",
  encounterHeal: "encounterHeal",
  raidDamage: "raidDamage",
  raidHeal: "raidHeal",
};

exports.Prisma.Boss_kills_playersScalarFieldEnum = {
  id: "id",
  guid: "guid",
  talent_spec: "talent_spec",
  avg_item_lvl: "avg_item_lvl",
  dmgDone: "dmgDone",
  healingDone: "healingDone",
  overhealingDone: "overhealingDone",
  absorbDone: "absorbDone",
  dmgTaken: "dmgTaken",
  dmgAbsorbed: "dmgAbsorbed",
  healingTaken: "healingTaken",
  usefullTime: "usefullTime",
  dispels: "dispels",
  interrupts: "interrupts",
  hidden: "hidden",
};

exports.Prisma.Boss_kills_progress_cacheScalarFieldEnum = {
  season: "season",
  mode: "mode",
  entry: "entry",
  position: "position",
  guild: "guild",
  first_kill: "first_kill",
  realm: "realm",
  length: "length",
  kill_id: "kill_id",
};

exports.Prisma.Boss_kills_rankings_guildScalarFieldEnum = {
  season: "season",
  mode: "mode",
  ranking: "ranking",
  guild: "guild",
  points: "points",
  realm: "realm",
};

exports.Prisma.Boss_kills_rankings_guild_cacheScalarFieldEnum = {
  id: "id",
  entry: "entry",
  mode: "mode",
  guild: "guild",
  time: "time",
  realm: "realm",
  length: "length",
  points: "points",
  ranking: "ranking",
  season: "season",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.ModelName = {
  boss_kills: "boss_kills",
  boss_kills_deaths: "boss_kills_deaths",
  boss_kills_maps: "boss_kills_maps",
  boss_kills_players: "boss_kills_players",
  boss_kills_progress_cache: "boss_kills_progress_cache",
  boss_kills_rankings_guild: "boss_kills_rankings_guild",
  boss_kills_rankings_guild_cache: "boss_kills_rankings_guild_cache",
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`
    );
  }
}
exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
