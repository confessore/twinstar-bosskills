
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model boss_kills
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type boss_kills = {
  id: number
  reserver: number | null
  entry: number
  map: string
  mode: number
  guild: string
  time: Date | null
  realm: number
  length: number
  wipes: number
  deaths: number
  ressUsed: number
  progressLenght: number
  hidden: boolean
  cleanupDisabled: boolean
  instanceId: number
  newGuildName: string | null
}

/**
 * Model boss_kills_deaths
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type boss_kills_deaths = {
  id: number
  guid: number
  time: number
}

/**
 * Model boss_kills_loot
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type boss_kills_loot = {
  id: number
  itemId: number
  count: number
  randomPropertyId: number
  randomSuffixId: number
}

/**
 * Model boss_kills_maps
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type boss_kills_maps = {
  id: number
  time: number
  encounterDamage: bigint
  encounterHeal: bigint
  raidDamage: bigint
  raidHeal: bigint
}

/**
 * Model boss_kills_players
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type boss_kills_players = {
  id: number
  guid: number
  talent_spec: number
  avg_item_lvl: number
  dmgDone: bigint
  healingDone: bigint
  overhealingDone: bigint
  absorbDone: bigint
  dmgTaken: bigint
  dmgAbsorbed: bigint
  healingTaken: bigint
  usefullTime: number
  dispels: number
  interrupts: number
  hidden: boolean
}

/**
 * Model boss_kills_progress
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type boss_kills_progress = {
  mode: number
  season: number
  position: number
  progress: number
  finished: Date | null
  guild: string | null
  realm: number
  raid1: number
  raid2: number
  raid3: number
}

/**
 * Model boss_kills_progress_cache
 * 
 */
export type boss_kills_progress_cache = {
  season: number
  mode: number
  entry: number
  position: number
  guild: string | null
  first_kill: Date | null
  realm: number
  length: number
  kill_id: number | null
}

/**
 * Model boss_kills_rankings_guild
 * 
 */
export type boss_kills_rankings_guild = {
  season: number
  mode: number
  ranking: number
  guild: string | null
  points: number
  realm: number
}

/**
 * Model boss_kills_rankings_guild_cache
 * 
 */
export type boss_kills_rankings_guild_cache = {
  id: number
  entry: number | null
  mode: number | null
  guild: string | null
  time: Date | null
  realm: number | null
  length: number
  points: number
  ranking: number
  season: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boss_kills
 * const boss_kills = await prisma.boss_kills.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Boss_kills
   * const boss_kills = await prisma.boss_kills.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.boss_kills`: Exposes CRUD operations for the **boss_kills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills
    * const boss_kills = await prisma.boss_kills.findMany()
    * ```
    */
  get boss_kills(): Prisma.boss_killsDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_deaths`: Exposes CRUD operations for the **boss_kills_deaths** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_deaths
    * const boss_kills_deaths = await prisma.boss_kills_deaths.findMany()
    * ```
    */
  get boss_kills_deaths(): Prisma.boss_kills_deathsDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_loot`: Exposes CRUD operations for the **boss_kills_loot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_loots
    * const boss_kills_loots = await prisma.boss_kills_loot.findMany()
    * ```
    */
  get boss_kills_loot(): Prisma.boss_kills_lootDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_maps`: Exposes CRUD operations for the **boss_kills_maps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_maps
    * const boss_kills_maps = await prisma.boss_kills_maps.findMany()
    * ```
    */
  get boss_kills_maps(): Prisma.boss_kills_mapsDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_players`: Exposes CRUD operations for the **boss_kills_players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_players
    * const boss_kills_players = await prisma.boss_kills_players.findMany()
    * ```
    */
  get boss_kills_players(): Prisma.boss_kills_playersDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_progress`: Exposes CRUD operations for the **boss_kills_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_progresses
    * const boss_kills_progresses = await prisma.boss_kills_progress.findMany()
    * ```
    */
  get boss_kills_progress(): Prisma.boss_kills_progressDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_progress_cache`: Exposes CRUD operations for the **boss_kills_progress_cache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_progress_caches
    * const boss_kills_progress_caches = await prisma.boss_kills_progress_cache.findMany()
    * ```
    */
  get boss_kills_progress_cache(): Prisma.boss_kills_progress_cacheDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_rankings_guild`: Exposes CRUD operations for the **boss_kills_rankings_guild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_rankings_guilds
    * const boss_kills_rankings_guilds = await prisma.boss_kills_rankings_guild.findMany()
    * ```
    */
  get boss_kills_rankings_guild(): Prisma.boss_kills_rankings_guildDelegate<GlobalReject>;

  /**
   * `prisma.boss_kills_rankings_guild_cache`: Exposes CRUD operations for the **boss_kills_rankings_guild_cache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boss_kills_rankings_guild_caches
    * const boss_kills_rankings_guild_caches = await prisma.boss_kills_rankings_guild_cache.findMany()
    * ```
    */
  get boss_kills_rankings_guild_cache(): Prisma.boss_kills_rankings_guild_cacheDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    boss_kills: 'boss_kills',
    boss_kills_deaths: 'boss_kills_deaths',
    boss_kills_loot: 'boss_kills_loot',
    boss_kills_maps: 'boss_kills_maps',
    boss_kills_players: 'boss_kills_players',
    boss_kills_progress: 'boss_kills_progress',
    boss_kills_progress_cache: 'boss_kills_progress_cache',
    boss_kills_rankings_guild: 'boss_kills_rankings_guild',
    boss_kills_rankings_guild_cache: 'boss_kills_rankings_guild_cache'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    logs?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Boss_killsCountOutputType
   */


  export type Boss_killsCountOutputType = {
    boss_kills_deaths: number
    boss_kills_maps: number
    boss_kills_players: number
  }

  export type Boss_killsCountOutputTypeSelect = {
    boss_kills_deaths?: boolean | Boss_killsCountOutputTypeCountBoss_kills_deathsArgs
    boss_kills_maps?: boolean | Boss_killsCountOutputTypeCountBoss_kills_mapsArgs
    boss_kills_players?: boolean | Boss_killsCountOutputTypeCountBoss_kills_playersArgs
  }

  export type Boss_killsCountOutputTypeGetPayload<S extends boolean | null | undefined | Boss_killsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Boss_killsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Boss_killsCountOutputTypeArgs)
    ? Boss_killsCountOutputType 
    : S extends { select: any } & (Boss_killsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Boss_killsCountOutputType ? Boss_killsCountOutputType[P] : never
  } 
      : Boss_killsCountOutputType




  // Custom InputTypes

  /**
   * Boss_killsCountOutputType without action
   */
  export type Boss_killsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Boss_killsCountOutputType
     */
    select?: Boss_killsCountOutputTypeSelect | null
  }


  /**
   * Boss_killsCountOutputType without action
   */
  export type Boss_killsCountOutputTypeCountBoss_kills_deathsArgs = {
    where?: boss_kills_deathsWhereInput
  }


  /**
   * Boss_killsCountOutputType without action
   */
  export type Boss_killsCountOutputTypeCountBoss_kills_mapsArgs = {
    where?: boss_kills_mapsWhereInput
  }


  /**
   * Boss_killsCountOutputType without action
   */
  export type Boss_killsCountOutputTypeCountBoss_kills_playersArgs = {
    where?: boss_kills_playersWhereInput
  }



  /**
   * Models
   */

  /**
   * Model boss_kills
   */


  export type AggregateBoss_kills = {
    _count: Boss_killsCountAggregateOutputType | null
    _avg: Boss_killsAvgAggregateOutputType | null
    _sum: Boss_killsSumAggregateOutputType | null
    _min: Boss_killsMinAggregateOutputType | null
    _max: Boss_killsMaxAggregateOutputType | null
  }

  export type Boss_killsAvgAggregateOutputType = {
    id: number | null
    reserver: number | null
    entry: number | null
    mode: number | null
    realm: number | null
    length: number | null
    wipes: number | null
    deaths: number | null
    ressUsed: number | null
    progressLenght: number | null
    instanceId: number | null
  }

  export type Boss_killsSumAggregateOutputType = {
    id: number | null
    reserver: number | null
    entry: number | null
    mode: number | null
    realm: number | null
    length: number | null
    wipes: number | null
    deaths: number | null
    ressUsed: number | null
    progressLenght: number | null
    instanceId: number | null
  }

  export type Boss_killsMinAggregateOutputType = {
    id: number | null
    reserver: number | null
    entry: number | null
    map: string | null
    mode: number | null
    guild: string | null
    time: Date | null
    realm: number | null
    length: number | null
    wipes: number | null
    deaths: number | null
    ressUsed: number | null
    progressLenght: number | null
    hidden: boolean | null
    cleanupDisabled: boolean | null
    instanceId: number | null
    newGuildName: string | null
  }

  export type Boss_killsMaxAggregateOutputType = {
    id: number | null
    reserver: number | null
    entry: number | null
    map: string | null
    mode: number | null
    guild: string | null
    time: Date | null
    realm: number | null
    length: number | null
    wipes: number | null
    deaths: number | null
    ressUsed: number | null
    progressLenght: number | null
    hidden: boolean | null
    cleanupDisabled: boolean | null
    instanceId: number | null
    newGuildName: string | null
  }

  export type Boss_killsCountAggregateOutputType = {
    id: number
    reserver: number
    entry: number
    map: number
    mode: number
    guild: number
    time: number
    realm: number
    length: number
    wipes: number
    deaths: number
    ressUsed: number
    progressLenght: number
    hidden: number
    cleanupDisabled: number
    instanceId: number
    newGuildName: number
    _all: number
  }


  export type Boss_killsAvgAggregateInputType = {
    id?: true
    reserver?: true
    entry?: true
    mode?: true
    realm?: true
    length?: true
    wipes?: true
    deaths?: true
    ressUsed?: true
    progressLenght?: true
    instanceId?: true
  }

  export type Boss_killsSumAggregateInputType = {
    id?: true
    reserver?: true
    entry?: true
    mode?: true
    realm?: true
    length?: true
    wipes?: true
    deaths?: true
    ressUsed?: true
    progressLenght?: true
    instanceId?: true
  }

  export type Boss_killsMinAggregateInputType = {
    id?: true
    reserver?: true
    entry?: true
    map?: true
    mode?: true
    guild?: true
    time?: true
    realm?: true
    length?: true
    wipes?: true
    deaths?: true
    ressUsed?: true
    progressLenght?: true
    hidden?: true
    cleanupDisabled?: true
    instanceId?: true
    newGuildName?: true
  }

  export type Boss_killsMaxAggregateInputType = {
    id?: true
    reserver?: true
    entry?: true
    map?: true
    mode?: true
    guild?: true
    time?: true
    realm?: true
    length?: true
    wipes?: true
    deaths?: true
    ressUsed?: true
    progressLenght?: true
    hidden?: true
    cleanupDisabled?: true
    instanceId?: true
    newGuildName?: true
  }

  export type Boss_killsCountAggregateInputType = {
    id?: true
    reserver?: true
    entry?: true
    map?: true
    mode?: true
    guild?: true
    time?: true
    realm?: true
    length?: true
    wipes?: true
    deaths?: true
    ressUsed?: true
    progressLenght?: true
    hidden?: true
    cleanupDisabled?: true
    instanceId?: true
    newGuildName?: true
    _all?: true
  }

  export type Boss_killsAggregateArgs = {
    /**
     * Filter which boss_kills to aggregate.
     */
    where?: boss_killsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills to fetch.
     */
    orderBy?: Enumerable<boss_killsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_killsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills
    **/
    _count?: true | Boss_killsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_killsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_killsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_killsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_killsMaxAggregateInputType
  }

  export type GetBoss_killsAggregateType<T extends Boss_killsAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills[P]>
      : GetScalarType<T[P], AggregateBoss_kills[P]>
  }




  export type Boss_killsGroupByArgs = {
    where?: boss_killsWhereInput
    orderBy?: Enumerable<boss_killsOrderByWithAggregationInput>
    by: Boss_killsScalarFieldEnum[]
    having?: boss_killsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_killsCountAggregateInputType | true
    _avg?: Boss_killsAvgAggregateInputType
    _sum?: Boss_killsSumAggregateInputType
    _min?: Boss_killsMinAggregateInputType
    _max?: Boss_killsMaxAggregateInputType
  }


  export type Boss_killsGroupByOutputType = {
    id: number
    reserver: number | null
    entry: number
    map: string
    mode: number
    guild: string
    time: Date | null
    realm: number
    length: number
    wipes: number
    deaths: number
    ressUsed: number
    progressLenght: number
    hidden: boolean
    cleanupDisabled: boolean
    instanceId: number
    newGuildName: string | null
    _count: Boss_killsCountAggregateOutputType | null
    _avg: Boss_killsAvgAggregateOutputType | null
    _sum: Boss_killsSumAggregateOutputType | null
    _min: Boss_killsMinAggregateOutputType | null
    _max: Boss_killsMaxAggregateOutputType | null
  }

  type GetBoss_killsGroupByPayload<T extends Boss_killsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_killsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_killsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_killsGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_killsGroupByOutputType[P]>
        }
      >
    >


  export type boss_killsSelect = {
    id?: boolean
    reserver?: boolean
    entry?: boolean
    map?: boolean
    mode?: boolean
    guild?: boolean
    time?: boolean
    realm?: boolean
    length?: boolean
    wipes?: boolean
    deaths?: boolean
    ressUsed?: boolean
    progressLenght?: boolean
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: boolean
    newGuildName?: boolean
    boss_kills_deaths?: boolean | boss_kills$boss_kills_deathsArgs
    boss_kills_maps?: boolean | boss_kills$boss_kills_mapsArgs
    boss_kills_players?: boolean | boss_kills$boss_kills_playersArgs
    _count?: boolean | Boss_killsCountOutputTypeArgs
  }


  export type boss_killsInclude = {
    boss_kills_deaths?: boolean | boss_kills$boss_kills_deathsArgs
    boss_kills_maps?: boolean | boss_kills$boss_kills_mapsArgs
    boss_kills_players?: boolean | boss_kills$boss_kills_playersArgs
    _count?: boolean | Boss_killsCountOutputTypeArgs
  }

  export type boss_killsGetPayload<S extends boolean | null | undefined | boss_killsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills :
    S extends undefined ? never :
    S extends { include: any } & (boss_killsArgs | boss_killsFindManyArgs)
    ? boss_kills  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'boss_kills_deaths' ? Array < boss_kills_deathsGetPayload<S['include'][P]>>  :
        P extends 'boss_kills_maps' ? Array < boss_kills_mapsGetPayload<S['include'][P]>>  :
        P extends 'boss_kills_players' ? Array < boss_kills_playersGetPayload<S['include'][P]>>  :
        P extends '_count' ? Boss_killsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (boss_killsArgs | boss_killsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'boss_kills_deaths' ? Array < boss_kills_deathsGetPayload<S['select'][P]>>  :
        P extends 'boss_kills_maps' ? Array < boss_kills_mapsGetPayload<S['select'][P]>>  :
        P extends 'boss_kills_players' ? Array < boss_kills_playersGetPayload<S['select'][P]>>  :
        P extends '_count' ? Boss_killsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof boss_kills ? boss_kills[P] : never
  } 
      : boss_kills


  type boss_killsCountArgs = 
    Omit<boss_killsFindManyArgs, 'select' | 'include'> & {
      select?: Boss_killsCountAggregateInputType | true
    }

  export interface boss_killsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills that matches the filter.
     * @param {boss_killsFindUniqueArgs} args - Arguments to find a Boss_kills
     * @example
     * // Get one Boss_kills
     * const boss_kills = await prisma.boss_kills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_killsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_killsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills'> extends True ? Prisma__boss_killsClient<boss_killsGetPayload<T>> : Prisma__boss_killsClient<boss_killsGetPayload<T> | null, null>

    /**
     * Find one Boss_kills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_killsFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills
     * @example
     * // Get one Boss_kills
     * const boss_kills = await prisma.boss_kills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_killsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_killsFindUniqueOrThrowArgs>
    ): Prisma__boss_killsClient<boss_killsGetPayload<T>>

    /**
     * Find the first Boss_kills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_killsFindFirstArgs} args - Arguments to find a Boss_kills
     * @example
     * // Get one Boss_kills
     * const boss_kills = await prisma.boss_kills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_killsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_killsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills'> extends True ? Prisma__boss_killsClient<boss_killsGetPayload<T>> : Prisma__boss_killsClient<boss_killsGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_killsFindFirstOrThrowArgs} args - Arguments to find a Boss_kills
     * @example
     * // Get one Boss_kills
     * const boss_kills = await prisma.boss_kills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_killsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_killsFindFirstOrThrowArgs>
    ): Prisma__boss_killsClient<boss_killsGetPayload<T>>

    /**
     * Find zero or more Boss_kills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_killsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills
     * const boss_kills = await prisma.boss_kills.findMany()
     * 
     * // Get first 10 Boss_kills
     * const boss_kills = await prisma.boss_kills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boss_killsWithIdOnly = await prisma.boss_kills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends boss_killsFindManyArgs>(
      args?: SelectSubset<T, boss_killsFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_killsGetPayload<T>>>

    /**
     * Create a Boss_kills.
     * @param {boss_killsCreateArgs} args - Arguments to create a Boss_kills.
     * @example
     * // Create one Boss_kills
     * const Boss_kills = await prisma.boss_kills.create({
     *   data: {
     *     // ... data to create a Boss_kills
     *   }
     * })
     * 
    **/
    create<T extends boss_killsCreateArgs>(
      args: SelectSubset<T, boss_killsCreateArgs>
    ): Prisma__boss_killsClient<boss_killsGetPayload<T>>

    /**
     * Create many Boss_kills.
     *     @param {boss_killsCreateManyArgs} args - Arguments to create many Boss_kills.
     *     @example
     *     // Create many Boss_kills
     *     const boss_kills = await prisma.boss_kills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_killsCreateManyArgs>(
      args?: SelectSubset<T, boss_killsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills.
     * @param {boss_killsDeleteArgs} args - Arguments to delete one Boss_kills.
     * @example
     * // Delete one Boss_kills
     * const Boss_kills = await prisma.boss_kills.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills
     *   }
     * })
     * 
    **/
    delete<T extends boss_killsDeleteArgs>(
      args: SelectSubset<T, boss_killsDeleteArgs>
    ): Prisma__boss_killsClient<boss_killsGetPayload<T>>

    /**
     * Update one Boss_kills.
     * @param {boss_killsUpdateArgs} args - Arguments to update one Boss_kills.
     * @example
     * // Update one Boss_kills
     * const boss_kills = await prisma.boss_kills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_killsUpdateArgs>(
      args: SelectSubset<T, boss_killsUpdateArgs>
    ): Prisma__boss_killsClient<boss_killsGetPayload<T>>

    /**
     * Delete zero or more Boss_kills.
     * @param {boss_killsDeleteManyArgs} args - Arguments to filter Boss_kills to delete.
     * @example
     * // Delete a few Boss_kills
     * const { count } = await prisma.boss_kills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_killsDeleteManyArgs>(
      args?: SelectSubset<T, boss_killsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_killsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills
     * const boss_kills = await prisma.boss_kills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_killsUpdateManyArgs>(
      args: SelectSubset<T, boss_killsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills.
     * @param {boss_killsUpsertArgs} args - Arguments to update or create a Boss_kills.
     * @example
     * // Update or create a Boss_kills
     * const boss_kills = await prisma.boss_kills.upsert({
     *   create: {
     *     // ... data to create a Boss_kills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills we want to update
     *   }
     * })
    **/
    upsert<T extends boss_killsUpsertArgs>(
      args: SelectSubset<T, boss_killsUpsertArgs>
    ): Prisma__boss_killsClient<boss_killsGetPayload<T>>

    /**
     * Count the number of Boss_kills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_killsCountArgs} args - Arguments to filter Boss_kills to count.
     * @example
     * // Count the number of Boss_kills
     * const count = await prisma.boss_kills.count({
     *   where: {
     *     // ... the filter for the Boss_kills we want to count
     *   }
     * })
    **/
    count<T extends boss_killsCountArgs>(
      args?: Subset<T, boss_killsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_killsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_killsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_killsAggregateArgs>(args: Subset<T, Boss_killsAggregateArgs>): Prisma.PrismaPromise<GetBoss_killsAggregateType<T>>

    /**
     * Group by Boss_kills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_killsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_killsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_killsGroupByArgs['orderBy'] }
        : { orderBy?: Boss_killsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_killsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_killsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_killsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    boss_kills_deaths<T extends boss_kills$boss_kills_deathsArgs= {}>(args?: Subset<T, boss_kills$boss_kills_deathsArgs>): Prisma.PrismaPromise<Array<boss_kills_deathsGetPayload<T>>| Null>;

    boss_kills_maps<T extends boss_kills$boss_kills_mapsArgs= {}>(args?: Subset<T, boss_kills$boss_kills_mapsArgs>): Prisma.PrismaPromise<Array<boss_kills_mapsGetPayload<T>>| Null>;

    boss_kills_players<T extends boss_kills$boss_kills_playersArgs= {}>(args?: Subset<T, boss_kills$boss_kills_playersArgs>): Prisma.PrismaPromise<Array<boss_kills_playersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills base type for findUnique actions
   */
  export type boss_killsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * Filter, which boss_kills to fetch.
     */
    where: boss_killsWhereUniqueInput
  }

  /**
   * boss_kills findUnique
   */
  export interface boss_killsFindUniqueArgs extends boss_killsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills findUniqueOrThrow
   */
  export type boss_killsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * Filter, which boss_kills to fetch.
     */
    where: boss_killsWhereUniqueInput
  }


  /**
   * boss_kills base type for findFirst actions
   */
  export type boss_killsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * Filter, which boss_kills to fetch.
     */
    where?: boss_killsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills to fetch.
     */
    orderBy?: Enumerable<boss_killsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills.
     */
    cursor?: boss_killsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills.
     */
    distinct?: Enumerable<Boss_killsScalarFieldEnum>
  }

  /**
   * boss_kills findFirst
   */
  export interface boss_killsFindFirstArgs extends boss_killsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills findFirstOrThrow
   */
  export type boss_killsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * Filter, which boss_kills to fetch.
     */
    where?: boss_killsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills to fetch.
     */
    orderBy?: Enumerable<boss_killsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills.
     */
    cursor?: boss_killsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills.
     */
    distinct?: Enumerable<Boss_killsScalarFieldEnum>
  }


  /**
   * boss_kills findMany
   */
  export type boss_killsFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * Filter, which boss_kills to fetch.
     */
    where?: boss_killsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills to fetch.
     */
    orderBy?: Enumerable<boss_killsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills.
     */
    cursor?: boss_killsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills.
     */
    skip?: number
    distinct?: Enumerable<Boss_killsScalarFieldEnum>
  }


  /**
   * boss_kills create
   */
  export type boss_killsCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * The data needed to create a boss_kills.
     */
    data?: XOR<boss_killsCreateInput, boss_killsUncheckedCreateInput>
  }


  /**
   * boss_kills createMany
   */
  export type boss_killsCreateManyArgs = {
    /**
     * The data used to create many boss_kills.
     */
    data: Enumerable<boss_killsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills update
   */
  export type boss_killsUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * The data needed to update a boss_kills.
     */
    data: XOR<boss_killsUpdateInput, boss_killsUncheckedUpdateInput>
    /**
     * Choose, which boss_kills to update.
     */
    where: boss_killsWhereUniqueInput
  }


  /**
   * boss_kills updateMany
   */
  export type boss_killsUpdateManyArgs = {
    /**
     * The data used to update boss_kills.
     */
    data: XOR<boss_killsUpdateManyMutationInput, boss_killsUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills to update
     */
    where?: boss_killsWhereInput
  }


  /**
   * boss_kills upsert
   */
  export type boss_killsUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * The filter to search for the boss_kills to update in case it exists.
     */
    where: boss_killsWhereUniqueInput
    /**
     * In case the boss_kills found by the `where` argument doesn't exist, create a new boss_kills with this data.
     */
    create: XOR<boss_killsCreateInput, boss_killsUncheckedCreateInput>
    /**
     * In case the boss_kills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_killsUpdateInput, boss_killsUncheckedUpdateInput>
  }


  /**
   * boss_kills delete
   */
  export type boss_killsDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
    /**
     * Filter which boss_kills to delete.
     */
    where: boss_killsWhereUniqueInput
  }


  /**
   * boss_kills deleteMany
   */
  export type boss_killsDeleteManyArgs = {
    /**
     * Filter which boss_kills to delete
     */
    where?: boss_killsWhereInput
  }


  /**
   * boss_kills.boss_kills_deaths
   */
  export type boss_kills$boss_kills_deathsArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    where?: boss_kills_deathsWhereInput
    orderBy?: Enumerable<boss_kills_deathsOrderByWithRelationInput>
    cursor?: boss_kills_deathsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Boss_kills_deathsScalarFieldEnum>
  }


  /**
   * boss_kills.boss_kills_maps
   */
  export type boss_kills$boss_kills_mapsArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    where?: boss_kills_mapsWhereInput
    orderBy?: Enumerable<boss_kills_mapsOrderByWithRelationInput>
    cursor?: boss_kills_mapsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Boss_kills_mapsScalarFieldEnum>
  }


  /**
   * boss_kills.boss_kills_players
   */
  export type boss_kills$boss_kills_playersArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    where?: boss_kills_playersWhereInput
    orderBy?: Enumerable<boss_kills_playersOrderByWithRelationInput>
    cursor?: boss_kills_playersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Boss_kills_playersScalarFieldEnum>
  }


  /**
   * boss_kills without action
   */
  export type boss_killsArgs = {
    /**
     * Select specific fields to fetch from the boss_kills
     */
    select?: boss_killsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_killsInclude | null
  }



  /**
   * Model boss_kills_deaths
   */


  export type AggregateBoss_kills_deaths = {
    _count: Boss_kills_deathsCountAggregateOutputType | null
    _avg: Boss_kills_deathsAvgAggregateOutputType | null
    _sum: Boss_kills_deathsSumAggregateOutputType | null
    _min: Boss_kills_deathsMinAggregateOutputType | null
    _max: Boss_kills_deathsMaxAggregateOutputType | null
  }

  export type Boss_kills_deathsAvgAggregateOutputType = {
    id: number | null
    guid: number | null
    time: number | null
  }

  export type Boss_kills_deathsSumAggregateOutputType = {
    id: number | null
    guid: number | null
    time: number | null
  }

  export type Boss_kills_deathsMinAggregateOutputType = {
    id: number | null
    guid: number | null
    time: number | null
  }

  export type Boss_kills_deathsMaxAggregateOutputType = {
    id: number | null
    guid: number | null
    time: number | null
  }

  export type Boss_kills_deathsCountAggregateOutputType = {
    id: number
    guid: number
    time: number
    _all: number
  }


  export type Boss_kills_deathsAvgAggregateInputType = {
    id?: true
    guid?: true
    time?: true
  }

  export type Boss_kills_deathsSumAggregateInputType = {
    id?: true
    guid?: true
    time?: true
  }

  export type Boss_kills_deathsMinAggregateInputType = {
    id?: true
    guid?: true
    time?: true
  }

  export type Boss_kills_deathsMaxAggregateInputType = {
    id?: true
    guid?: true
    time?: true
  }

  export type Boss_kills_deathsCountAggregateInputType = {
    id?: true
    guid?: true
    time?: true
    _all?: true
  }

  export type Boss_kills_deathsAggregateArgs = {
    /**
     * Filter which boss_kills_deaths to aggregate.
     */
    where?: boss_kills_deathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_deaths to fetch.
     */
    orderBy?: Enumerable<boss_kills_deathsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_deathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_deaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_deaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_deaths
    **/
    _count?: true | Boss_kills_deathsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_deathsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_deathsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_deathsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_deathsMaxAggregateInputType
  }

  export type GetBoss_kills_deathsAggregateType<T extends Boss_kills_deathsAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_deaths]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_deaths[P]>
      : GetScalarType<T[P], AggregateBoss_kills_deaths[P]>
  }




  export type Boss_kills_deathsGroupByArgs = {
    where?: boss_kills_deathsWhereInput
    orderBy?: Enumerable<boss_kills_deathsOrderByWithAggregationInput>
    by: Boss_kills_deathsScalarFieldEnum[]
    having?: boss_kills_deathsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_deathsCountAggregateInputType | true
    _avg?: Boss_kills_deathsAvgAggregateInputType
    _sum?: Boss_kills_deathsSumAggregateInputType
    _min?: Boss_kills_deathsMinAggregateInputType
    _max?: Boss_kills_deathsMaxAggregateInputType
  }


  export type Boss_kills_deathsGroupByOutputType = {
    id: number
    guid: number
    time: number
    _count: Boss_kills_deathsCountAggregateOutputType | null
    _avg: Boss_kills_deathsAvgAggregateOutputType | null
    _sum: Boss_kills_deathsSumAggregateOutputType | null
    _min: Boss_kills_deathsMinAggregateOutputType | null
    _max: Boss_kills_deathsMaxAggregateOutputType | null
  }

  type GetBoss_kills_deathsGroupByPayload<T extends Boss_kills_deathsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_deathsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_deathsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_deathsGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_deathsGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_deathsSelect = {
    id?: boolean
    guid?: boolean
    time?: boolean
    boss_kills?: boolean | boss_killsArgs
  }


  export type boss_kills_deathsInclude = {
    boss_kills?: boolean | boss_killsArgs
  }

  export type boss_kills_deathsGetPayload<S extends boolean | null | undefined | boss_kills_deathsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_deaths :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_deathsArgs | boss_kills_deathsFindManyArgs)
    ? boss_kills_deaths  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'boss_kills' ? boss_killsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (boss_kills_deathsArgs | boss_kills_deathsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'boss_kills' ? boss_killsGetPayload<S['select'][P]> :  P extends keyof boss_kills_deaths ? boss_kills_deaths[P] : never
  } 
      : boss_kills_deaths


  type boss_kills_deathsCountArgs = 
    Omit<boss_kills_deathsFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_deathsCountAggregateInputType | true
    }

  export interface boss_kills_deathsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_deaths that matches the filter.
     * @param {boss_kills_deathsFindUniqueArgs} args - Arguments to find a Boss_kills_deaths
     * @example
     * // Get one Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_deathsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_deathsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_deaths'> extends True ? Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>> : Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_deaths that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_deathsFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_deaths
     * @example
     * // Get one Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_deathsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_deathsFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>>

    /**
     * Find the first Boss_kills_deaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_deathsFindFirstArgs} args - Arguments to find a Boss_kills_deaths
     * @example
     * // Get one Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_deathsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_deathsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_deaths'> extends True ? Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>> : Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_deaths that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_deathsFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_deaths
     * @example
     * // Get one Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_deathsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_deathsFindFirstOrThrowArgs>
    ): Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>>

    /**
     * Find zero or more Boss_kills_deaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_deathsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.findMany()
     * 
     * // Get first 10 Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boss_kills_deathsWithIdOnly = await prisma.boss_kills_deaths.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends boss_kills_deathsFindManyArgs>(
      args?: SelectSubset<T, boss_kills_deathsFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_deathsGetPayload<T>>>

    /**
     * Create a Boss_kills_deaths.
     * @param {boss_kills_deathsCreateArgs} args - Arguments to create a Boss_kills_deaths.
     * @example
     * // Create one Boss_kills_deaths
     * const Boss_kills_deaths = await prisma.boss_kills_deaths.create({
     *   data: {
     *     // ... data to create a Boss_kills_deaths
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_deathsCreateArgs>(
      args: SelectSubset<T, boss_kills_deathsCreateArgs>
    ): Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>>

    /**
     * Create many Boss_kills_deaths.
     *     @param {boss_kills_deathsCreateManyArgs} args - Arguments to create many Boss_kills_deaths.
     *     @example
     *     // Create many Boss_kills_deaths
     *     const boss_kills_deaths = await prisma.boss_kills_deaths.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_deathsCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_deathsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_deaths.
     * @param {boss_kills_deathsDeleteArgs} args - Arguments to delete one Boss_kills_deaths.
     * @example
     * // Delete one Boss_kills_deaths
     * const Boss_kills_deaths = await prisma.boss_kills_deaths.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_deaths
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_deathsDeleteArgs>(
      args: SelectSubset<T, boss_kills_deathsDeleteArgs>
    ): Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>>

    /**
     * Update one Boss_kills_deaths.
     * @param {boss_kills_deathsUpdateArgs} args - Arguments to update one Boss_kills_deaths.
     * @example
     * // Update one Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_deathsUpdateArgs>(
      args: SelectSubset<T, boss_kills_deathsUpdateArgs>
    ): Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_deaths.
     * @param {boss_kills_deathsDeleteManyArgs} args - Arguments to filter Boss_kills_deaths to delete.
     * @example
     * // Delete a few Boss_kills_deaths
     * const { count } = await prisma.boss_kills_deaths.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_deathsDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_deathsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_deaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_deathsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_deathsUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_deathsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_deaths.
     * @param {boss_kills_deathsUpsertArgs} args - Arguments to update or create a Boss_kills_deaths.
     * @example
     * // Update or create a Boss_kills_deaths
     * const boss_kills_deaths = await prisma.boss_kills_deaths.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_deaths
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_deaths we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_deathsUpsertArgs>(
      args: SelectSubset<T, boss_kills_deathsUpsertArgs>
    ): Prisma__boss_kills_deathsClient<boss_kills_deathsGetPayload<T>>

    /**
     * Count the number of Boss_kills_deaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_deathsCountArgs} args - Arguments to filter Boss_kills_deaths to count.
     * @example
     * // Count the number of Boss_kills_deaths
     * const count = await prisma.boss_kills_deaths.count({
     *   where: {
     *     // ... the filter for the Boss_kills_deaths we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_deathsCountArgs>(
      args?: Subset<T, boss_kills_deathsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_deathsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_deaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_deathsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_deathsAggregateArgs>(args: Subset<T, Boss_kills_deathsAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_deathsAggregateType<T>>

    /**
     * Group by Boss_kills_deaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_deathsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_deathsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_deathsGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_deathsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_deathsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_deathsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_deaths.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_deathsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    boss_kills<T extends boss_killsArgs= {}>(args?: Subset<T, boss_killsArgs>): Prisma__boss_killsClient<boss_killsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_deaths base type for findUnique actions
   */
  export type boss_kills_deathsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * Filter, which boss_kills_deaths to fetch.
     */
    where: boss_kills_deathsWhereUniqueInput
  }

  /**
   * boss_kills_deaths findUnique
   */
  export interface boss_kills_deathsFindUniqueArgs extends boss_kills_deathsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_deaths findUniqueOrThrow
   */
  export type boss_kills_deathsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * Filter, which boss_kills_deaths to fetch.
     */
    where: boss_kills_deathsWhereUniqueInput
  }


  /**
   * boss_kills_deaths base type for findFirst actions
   */
  export type boss_kills_deathsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * Filter, which boss_kills_deaths to fetch.
     */
    where?: boss_kills_deathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_deaths to fetch.
     */
    orderBy?: Enumerable<boss_kills_deathsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_deaths.
     */
    cursor?: boss_kills_deathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_deaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_deaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_deaths.
     */
    distinct?: Enumerable<Boss_kills_deathsScalarFieldEnum>
  }

  /**
   * boss_kills_deaths findFirst
   */
  export interface boss_kills_deathsFindFirstArgs extends boss_kills_deathsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_deaths findFirstOrThrow
   */
  export type boss_kills_deathsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * Filter, which boss_kills_deaths to fetch.
     */
    where?: boss_kills_deathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_deaths to fetch.
     */
    orderBy?: Enumerable<boss_kills_deathsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_deaths.
     */
    cursor?: boss_kills_deathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_deaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_deaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_deaths.
     */
    distinct?: Enumerable<Boss_kills_deathsScalarFieldEnum>
  }


  /**
   * boss_kills_deaths findMany
   */
  export type boss_kills_deathsFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * Filter, which boss_kills_deaths to fetch.
     */
    where?: boss_kills_deathsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_deaths to fetch.
     */
    orderBy?: Enumerable<boss_kills_deathsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_deaths.
     */
    cursor?: boss_kills_deathsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_deaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_deaths.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_deathsScalarFieldEnum>
  }


  /**
   * boss_kills_deaths create
   */
  export type boss_kills_deathsCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * The data needed to create a boss_kills_deaths.
     */
    data: XOR<boss_kills_deathsCreateInput, boss_kills_deathsUncheckedCreateInput>
  }


  /**
   * boss_kills_deaths createMany
   */
  export type boss_kills_deathsCreateManyArgs = {
    /**
     * The data used to create many boss_kills_deaths.
     */
    data: Enumerable<boss_kills_deathsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_deaths update
   */
  export type boss_kills_deathsUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * The data needed to update a boss_kills_deaths.
     */
    data: XOR<boss_kills_deathsUpdateInput, boss_kills_deathsUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_deaths to update.
     */
    where: boss_kills_deathsWhereUniqueInput
  }


  /**
   * boss_kills_deaths updateMany
   */
  export type boss_kills_deathsUpdateManyArgs = {
    /**
     * The data used to update boss_kills_deaths.
     */
    data: XOR<boss_kills_deathsUpdateManyMutationInput, boss_kills_deathsUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_deaths to update
     */
    where?: boss_kills_deathsWhereInput
  }


  /**
   * boss_kills_deaths upsert
   */
  export type boss_kills_deathsUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * The filter to search for the boss_kills_deaths to update in case it exists.
     */
    where: boss_kills_deathsWhereUniqueInput
    /**
     * In case the boss_kills_deaths found by the `where` argument doesn't exist, create a new boss_kills_deaths with this data.
     */
    create: XOR<boss_kills_deathsCreateInput, boss_kills_deathsUncheckedCreateInput>
    /**
     * In case the boss_kills_deaths was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_deathsUpdateInput, boss_kills_deathsUncheckedUpdateInput>
  }


  /**
   * boss_kills_deaths delete
   */
  export type boss_kills_deathsDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
    /**
     * Filter which boss_kills_deaths to delete.
     */
    where: boss_kills_deathsWhereUniqueInput
  }


  /**
   * boss_kills_deaths deleteMany
   */
  export type boss_kills_deathsDeleteManyArgs = {
    /**
     * Filter which boss_kills_deaths to delete
     */
    where?: boss_kills_deathsWhereInput
  }


  /**
   * boss_kills_deaths without action
   */
  export type boss_kills_deathsArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_deaths
     */
    select?: boss_kills_deathsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_deathsInclude | null
  }



  /**
   * Model boss_kills_loot
   */


  export type AggregateBoss_kills_loot = {
    _count: Boss_kills_lootCountAggregateOutputType | null
    _avg: Boss_kills_lootAvgAggregateOutputType | null
    _sum: Boss_kills_lootSumAggregateOutputType | null
    _min: Boss_kills_lootMinAggregateOutputType | null
    _max: Boss_kills_lootMaxAggregateOutputType | null
  }

  export type Boss_kills_lootAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    count: number | null
    randomPropertyId: number | null
    randomSuffixId: number | null
  }

  export type Boss_kills_lootSumAggregateOutputType = {
    id: number | null
    itemId: number | null
    count: number | null
    randomPropertyId: number | null
    randomSuffixId: number | null
  }

  export type Boss_kills_lootMinAggregateOutputType = {
    id: number | null
    itemId: number | null
    count: number | null
    randomPropertyId: number | null
    randomSuffixId: number | null
  }

  export type Boss_kills_lootMaxAggregateOutputType = {
    id: number | null
    itemId: number | null
    count: number | null
    randomPropertyId: number | null
    randomSuffixId: number | null
  }

  export type Boss_kills_lootCountAggregateOutputType = {
    id: number
    itemId: number
    count: number
    randomPropertyId: number
    randomSuffixId: number
    _all: number
  }


  export type Boss_kills_lootAvgAggregateInputType = {
    id?: true
    itemId?: true
    count?: true
    randomPropertyId?: true
    randomSuffixId?: true
  }

  export type Boss_kills_lootSumAggregateInputType = {
    id?: true
    itemId?: true
    count?: true
    randomPropertyId?: true
    randomSuffixId?: true
  }

  export type Boss_kills_lootMinAggregateInputType = {
    id?: true
    itemId?: true
    count?: true
    randomPropertyId?: true
    randomSuffixId?: true
  }

  export type Boss_kills_lootMaxAggregateInputType = {
    id?: true
    itemId?: true
    count?: true
    randomPropertyId?: true
    randomSuffixId?: true
  }

  export type Boss_kills_lootCountAggregateInputType = {
    id?: true
    itemId?: true
    count?: true
    randomPropertyId?: true
    randomSuffixId?: true
    _all?: true
  }

  export type Boss_kills_lootAggregateArgs = {
    /**
     * Filter which boss_kills_loot to aggregate.
     */
    where?: boss_kills_lootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_loots to fetch.
     */
    orderBy?: Enumerable<boss_kills_lootOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_lootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_loots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_loots
    **/
    _count?: true | Boss_kills_lootCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_lootAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_lootSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_lootMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_lootMaxAggregateInputType
  }

  export type GetBoss_kills_lootAggregateType<T extends Boss_kills_lootAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_loot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_loot[P]>
      : GetScalarType<T[P], AggregateBoss_kills_loot[P]>
  }




  export type Boss_kills_lootGroupByArgs = {
    where?: boss_kills_lootWhereInput
    orderBy?: Enumerable<boss_kills_lootOrderByWithAggregationInput>
    by: Boss_kills_lootScalarFieldEnum[]
    having?: boss_kills_lootScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_lootCountAggregateInputType | true
    _avg?: Boss_kills_lootAvgAggregateInputType
    _sum?: Boss_kills_lootSumAggregateInputType
    _min?: Boss_kills_lootMinAggregateInputType
    _max?: Boss_kills_lootMaxAggregateInputType
  }


  export type Boss_kills_lootGroupByOutputType = {
    id: number
    itemId: number
    count: number
    randomPropertyId: number
    randomSuffixId: number
    _count: Boss_kills_lootCountAggregateOutputType | null
    _avg: Boss_kills_lootAvgAggregateOutputType | null
    _sum: Boss_kills_lootSumAggregateOutputType | null
    _min: Boss_kills_lootMinAggregateOutputType | null
    _max: Boss_kills_lootMaxAggregateOutputType | null
  }

  type GetBoss_kills_lootGroupByPayload<T extends Boss_kills_lootGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_lootGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_lootGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_lootGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_lootGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_lootSelect = {
    id?: boolean
    itemId?: boolean
    count?: boolean
    randomPropertyId?: boolean
    randomSuffixId?: boolean
  }


  export type boss_kills_lootInclude = {}

  export type boss_kills_lootGetPayload<S extends boolean | null | undefined | boss_kills_lootArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_loot :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_lootArgs | boss_kills_lootFindManyArgs)
    ? boss_kills_loot 
    : S extends { select: any } & (boss_kills_lootArgs | boss_kills_lootFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof boss_kills_loot ? boss_kills_loot[P] : never
  } 
      : boss_kills_loot


  type boss_kills_lootCountArgs = 
    Omit<boss_kills_lootFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_lootCountAggregateInputType | true
    }

  export interface boss_kills_lootDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_loot that matches the filter.
     * @param {boss_kills_lootFindUniqueArgs} args - Arguments to find a Boss_kills_loot
     * @example
     * // Get one Boss_kills_loot
     * const boss_kills_loot = await prisma.boss_kills_loot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_lootFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_lootFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_loot'> extends True ? Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>> : Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_loot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_lootFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_loot
     * @example
     * // Get one Boss_kills_loot
     * const boss_kills_loot = await prisma.boss_kills_loot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_lootFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_lootFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>>

    /**
     * Find the first Boss_kills_loot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_lootFindFirstArgs} args - Arguments to find a Boss_kills_loot
     * @example
     * // Get one Boss_kills_loot
     * const boss_kills_loot = await prisma.boss_kills_loot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_lootFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_lootFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_loot'> extends True ? Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>> : Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_loot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_lootFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_loot
     * @example
     * // Get one Boss_kills_loot
     * const boss_kills_loot = await prisma.boss_kills_loot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_lootFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_lootFindFirstOrThrowArgs>
    ): Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>>

    /**
     * Find zero or more Boss_kills_loots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_lootFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_loots
     * const boss_kills_loots = await prisma.boss_kills_loot.findMany()
     * 
     * // Get first 10 Boss_kills_loots
     * const boss_kills_loots = await prisma.boss_kills_loot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boss_kills_lootWithIdOnly = await prisma.boss_kills_loot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends boss_kills_lootFindManyArgs>(
      args?: SelectSubset<T, boss_kills_lootFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_lootGetPayload<T>>>

    /**
     * Create a Boss_kills_loot.
     * @param {boss_kills_lootCreateArgs} args - Arguments to create a Boss_kills_loot.
     * @example
     * // Create one Boss_kills_loot
     * const Boss_kills_loot = await prisma.boss_kills_loot.create({
     *   data: {
     *     // ... data to create a Boss_kills_loot
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_lootCreateArgs>(
      args: SelectSubset<T, boss_kills_lootCreateArgs>
    ): Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>>

    /**
     * Create many Boss_kills_loots.
     *     @param {boss_kills_lootCreateManyArgs} args - Arguments to create many Boss_kills_loots.
     *     @example
     *     // Create many Boss_kills_loots
     *     const boss_kills_loot = await prisma.boss_kills_loot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_lootCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_lootCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_loot.
     * @param {boss_kills_lootDeleteArgs} args - Arguments to delete one Boss_kills_loot.
     * @example
     * // Delete one Boss_kills_loot
     * const Boss_kills_loot = await prisma.boss_kills_loot.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_loot
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_lootDeleteArgs>(
      args: SelectSubset<T, boss_kills_lootDeleteArgs>
    ): Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>>

    /**
     * Update one Boss_kills_loot.
     * @param {boss_kills_lootUpdateArgs} args - Arguments to update one Boss_kills_loot.
     * @example
     * // Update one Boss_kills_loot
     * const boss_kills_loot = await prisma.boss_kills_loot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_lootUpdateArgs>(
      args: SelectSubset<T, boss_kills_lootUpdateArgs>
    ): Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_loots.
     * @param {boss_kills_lootDeleteManyArgs} args - Arguments to filter Boss_kills_loots to delete.
     * @example
     * // Delete a few Boss_kills_loots
     * const { count } = await prisma.boss_kills_loot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_lootDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_lootDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_loots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_lootUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_loots
     * const boss_kills_loot = await prisma.boss_kills_loot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_lootUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_lootUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_loot.
     * @param {boss_kills_lootUpsertArgs} args - Arguments to update or create a Boss_kills_loot.
     * @example
     * // Update or create a Boss_kills_loot
     * const boss_kills_loot = await prisma.boss_kills_loot.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_loot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_loot we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_lootUpsertArgs>(
      args: SelectSubset<T, boss_kills_lootUpsertArgs>
    ): Prisma__boss_kills_lootClient<boss_kills_lootGetPayload<T>>

    /**
     * Count the number of Boss_kills_loots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_lootCountArgs} args - Arguments to filter Boss_kills_loots to count.
     * @example
     * // Count the number of Boss_kills_loots
     * const count = await prisma.boss_kills_loot.count({
     *   where: {
     *     // ... the filter for the Boss_kills_loots we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_lootCountArgs>(
      args?: Subset<T, boss_kills_lootCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_lootCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_loot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_lootAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_lootAggregateArgs>(args: Subset<T, Boss_kills_lootAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_lootAggregateType<T>>

    /**
     * Group by Boss_kills_loot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_lootGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_lootGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_lootGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_lootGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_lootGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_lootGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_loot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_lootClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_loot base type for findUnique actions
   */
  export type boss_kills_lootFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * Filter, which boss_kills_loot to fetch.
     */
    where: boss_kills_lootWhereUniqueInput
  }

  /**
   * boss_kills_loot findUnique
   */
  export interface boss_kills_lootFindUniqueArgs extends boss_kills_lootFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_loot findUniqueOrThrow
   */
  export type boss_kills_lootFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * Filter, which boss_kills_loot to fetch.
     */
    where: boss_kills_lootWhereUniqueInput
  }


  /**
   * boss_kills_loot base type for findFirst actions
   */
  export type boss_kills_lootFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * Filter, which boss_kills_loot to fetch.
     */
    where?: boss_kills_lootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_loots to fetch.
     */
    orderBy?: Enumerable<boss_kills_lootOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_loots.
     */
    cursor?: boss_kills_lootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_loots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_loots.
     */
    distinct?: Enumerable<Boss_kills_lootScalarFieldEnum>
  }

  /**
   * boss_kills_loot findFirst
   */
  export interface boss_kills_lootFindFirstArgs extends boss_kills_lootFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_loot findFirstOrThrow
   */
  export type boss_kills_lootFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * Filter, which boss_kills_loot to fetch.
     */
    where?: boss_kills_lootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_loots to fetch.
     */
    orderBy?: Enumerable<boss_kills_lootOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_loots.
     */
    cursor?: boss_kills_lootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_loots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_loots.
     */
    distinct?: Enumerable<Boss_kills_lootScalarFieldEnum>
  }


  /**
   * boss_kills_loot findMany
   */
  export type boss_kills_lootFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * Filter, which boss_kills_loots to fetch.
     */
    where?: boss_kills_lootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_loots to fetch.
     */
    orderBy?: Enumerable<boss_kills_lootOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_loots.
     */
    cursor?: boss_kills_lootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_loots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_loots.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_lootScalarFieldEnum>
  }


  /**
   * boss_kills_loot create
   */
  export type boss_kills_lootCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * The data needed to create a boss_kills_loot.
     */
    data: XOR<boss_kills_lootCreateInput, boss_kills_lootUncheckedCreateInput>
  }


  /**
   * boss_kills_loot createMany
   */
  export type boss_kills_lootCreateManyArgs = {
    /**
     * The data used to create many boss_kills_loots.
     */
    data: Enumerable<boss_kills_lootCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_loot update
   */
  export type boss_kills_lootUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * The data needed to update a boss_kills_loot.
     */
    data: XOR<boss_kills_lootUpdateInput, boss_kills_lootUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_loot to update.
     */
    where: boss_kills_lootWhereUniqueInput
  }


  /**
   * boss_kills_loot updateMany
   */
  export type boss_kills_lootUpdateManyArgs = {
    /**
     * The data used to update boss_kills_loots.
     */
    data: XOR<boss_kills_lootUpdateManyMutationInput, boss_kills_lootUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_loots to update
     */
    where?: boss_kills_lootWhereInput
  }


  /**
   * boss_kills_loot upsert
   */
  export type boss_kills_lootUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * The filter to search for the boss_kills_loot to update in case it exists.
     */
    where: boss_kills_lootWhereUniqueInput
    /**
     * In case the boss_kills_loot found by the `where` argument doesn't exist, create a new boss_kills_loot with this data.
     */
    create: XOR<boss_kills_lootCreateInput, boss_kills_lootUncheckedCreateInput>
    /**
     * In case the boss_kills_loot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_lootUpdateInput, boss_kills_lootUncheckedUpdateInput>
  }


  /**
   * boss_kills_loot delete
   */
  export type boss_kills_lootDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
    /**
     * Filter which boss_kills_loot to delete.
     */
    where: boss_kills_lootWhereUniqueInput
  }


  /**
   * boss_kills_loot deleteMany
   */
  export type boss_kills_lootDeleteManyArgs = {
    /**
     * Filter which boss_kills_loots to delete
     */
    where?: boss_kills_lootWhereInput
  }


  /**
   * boss_kills_loot without action
   */
  export type boss_kills_lootArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_loot
     */
    select?: boss_kills_lootSelect | null
  }



  /**
   * Model boss_kills_maps
   */


  export type AggregateBoss_kills_maps = {
    _count: Boss_kills_mapsCountAggregateOutputType | null
    _avg: Boss_kills_mapsAvgAggregateOutputType | null
    _sum: Boss_kills_mapsSumAggregateOutputType | null
    _min: Boss_kills_mapsMinAggregateOutputType | null
    _max: Boss_kills_mapsMaxAggregateOutputType | null
  }

  export type Boss_kills_mapsAvgAggregateOutputType = {
    id: number | null
    time: number | null
    encounterDamage: number | null
    encounterHeal: number | null
    raidDamage: number | null
    raidHeal: number | null
  }

  export type Boss_kills_mapsSumAggregateOutputType = {
    id: number | null
    time: number | null
    encounterDamage: bigint | null
    encounterHeal: bigint | null
    raidDamage: bigint | null
    raidHeal: bigint | null
  }

  export type Boss_kills_mapsMinAggregateOutputType = {
    id: number | null
    time: number | null
    encounterDamage: bigint | null
    encounterHeal: bigint | null
    raidDamage: bigint | null
    raidHeal: bigint | null
  }

  export type Boss_kills_mapsMaxAggregateOutputType = {
    id: number | null
    time: number | null
    encounterDamage: bigint | null
    encounterHeal: bigint | null
    raidDamage: bigint | null
    raidHeal: bigint | null
  }

  export type Boss_kills_mapsCountAggregateOutputType = {
    id: number
    time: number
    encounterDamage: number
    encounterHeal: number
    raidDamage: number
    raidHeal: number
    _all: number
  }


  export type Boss_kills_mapsAvgAggregateInputType = {
    id?: true
    time?: true
    encounterDamage?: true
    encounterHeal?: true
    raidDamage?: true
    raidHeal?: true
  }

  export type Boss_kills_mapsSumAggregateInputType = {
    id?: true
    time?: true
    encounterDamage?: true
    encounterHeal?: true
    raidDamage?: true
    raidHeal?: true
  }

  export type Boss_kills_mapsMinAggregateInputType = {
    id?: true
    time?: true
    encounterDamage?: true
    encounterHeal?: true
    raidDamage?: true
    raidHeal?: true
  }

  export type Boss_kills_mapsMaxAggregateInputType = {
    id?: true
    time?: true
    encounterDamage?: true
    encounterHeal?: true
    raidDamage?: true
    raidHeal?: true
  }

  export type Boss_kills_mapsCountAggregateInputType = {
    id?: true
    time?: true
    encounterDamage?: true
    encounterHeal?: true
    raidDamage?: true
    raidHeal?: true
    _all?: true
  }

  export type Boss_kills_mapsAggregateArgs = {
    /**
     * Filter which boss_kills_maps to aggregate.
     */
    where?: boss_kills_mapsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_maps to fetch.
     */
    orderBy?: Enumerable<boss_kills_mapsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_mapsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_maps
    **/
    _count?: true | Boss_kills_mapsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_mapsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_mapsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_mapsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_mapsMaxAggregateInputType
  }

  export type GetBoss_kills_mapsAggregateType<T extends Boss_kills_mapsAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_maps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_maps[P]>
      : GetScalarType<T[P], AggregateBoss_kills_maps[P]>
  }




  export type Boss_kills_mapsGroupByArgs = {
    where?: boss_kills_mapsWhereInput
    orderBy?: Enumerable<boss_kills_mapsOrderByWithAggregationInput>
    by: Boss_kills_mapsScalarFieldEnum[]
    having?: boss_kills_mapsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_mapsCountAggregateInputType | true
    _avg?: Boss_kills_mapsAvgAggregateInputType
    _sum?: Boss_kills_mapsSumAggregateInputType
    _min?: Boss_kills_mapsMinAggregateInputType
    _max?: Boss_kills_mapsMaxAggregateInputType
  }


  export type Boss_kills_mapsGroupByOutputType = {
    id: number
    time: number
    encounterDamage: bigint
    encounterHeal: bigint
    raidDamage: bigint
    raidHeal: bigint
    _count: Boss_kills_mapsCountAggregateOutputType | null
    _avg: Boss_kills_mapsAvgAggregateOutputType | null
    _sum: Boss_kills_mapsSumAggregateOutputType | null
    _min: Boss_kills_mapsMinAggregateOutputType | null
    _max: Boss_kills_mapsMaxAggregateOutputType | null
  }

  type GetBoss_kills_mapsGroupByPayload<T extends Boss_kills_mapsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_mapsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_mapsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_mapsGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_mapsGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_mapsSelect = {
    id?: boolean
    time?: boolean
    encounterDamage?: boolean
    encounterHeal?: boolean
    raidDamage?: boolean
    raidHeal?: boolean
    boss_kills?: boolean | boss_killsArgs
  }


  export type boss_kills_mapsInclude = {
    boss_kills?: boolean | boss_killsArgs
  }

  export type boss_kills_mapsGetPayload<S extends boolean | null | undefined | boss_kills_mapsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_maps :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_mapsArgs | boss_kills_mapsFindManyArgs)
    ? boss_kills_maps  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'boss_kills' ? boss_killsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (boss_kills_mapsArgs | boss_kills_mapsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'boss_kills' ? boss_killsGetPayload<S['select'][P]> :  P extends keyof boss_kills_maps ? boss_kills_maps[P] : never
  } 
      : boss_kills_maps


  type boss_kills_mapsCountArgs = 
    Omit<boss_kills_mapsFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_mapsCountAggregateInputType | true
    }

  export interface boss_kills_mapsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_maps that matches the filter.
     * @param {boss_kills_mapsFindUniqueArgs} args - Arguments to find a Boss_kills_maps
     * @example
     * // Get one Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_mapsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_mapsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_maps'> extends True ? Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>> : Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_maps that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_mapsFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_maps
     * @example
     * // Get one Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_mapsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_mapsFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>>

    /**
     * Find the first Boss_kills_maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_mapsFindFirstArgs} args - Arguments to find a Boss_kills_maps
     * @example
     * // Get one Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_mapsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_mapsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_maps'> extends True ? Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>> : Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_maps that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_mapsFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_maps
     * @example
     * // Get one Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_mapsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_mapsFindFirstOrThrowArgs>
    ): Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>>

    /**
     * Find zero or more Boss_kills_maps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_mapsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.findMany()
     * 
     * // Get first 10 Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boss_kills_mapsWithIdOnly = await prisma.boss_kills_maps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends boss_kills_mapsFindManyArgs>(
      args?: SelectSubset<T, boss_kills_mapsFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_mapsGetPayload<T>>>

    /**
     * Create a Boss_kills_maps.
     * @param {boss_kills_mapsCreateArgs} args - Arguments to create a Boss_kills_maps.
     * @example
     * // Create one Boss_kills_maps
     * const Boss_kills_maps = await prisma.boss_kills_maps.create({
     *   data: {
     *     // ... data to create a Boss_kills_maps
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_mapsCreateArgs>(
      args: SelectSubset<T, boss_kills_mapsCreateArgs>
    ): Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>>

    /**
     * Create many Boss_kills_maps.
     *     @param {boss_kills_mapsCreateManyArgs} args - Arguments to create many Boss_kills_maps.
     *     @example
     *     // Create many Boss_kills_maps
     *     const boss_kills_maps = await prisma.boss_kills_maps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_mapsCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_mapsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_maps.
     * @param {boss_kills_mapsDeleteArgs} args - Arguments to delete one Boss_kills_maps.
     * @example
     * // Delete one Boss_kills_maps
     * const Boss_kills_maps = await prisma.boss_kills_maps.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_maps
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_mapsDeleteArgs>(
      args: SelectSubset<T, boss_kills_mapsDeleteArgs>
    ): Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>>

    /**
     * Update one Boss_kills_maps.
     * @param {boss_kills_mapsUpdateArgs} args - Arguments to update one Boss_kills_maps.
     * @example
     * // Update one Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_mapsUpdateArgs>(
      args: SelectSubset<T, boss_kills_mapsUpdateArgs>
    ): Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_maps.
     * @param {boss_kills_mapsDeleteManyArgs} args - Arguments to filter Boss_kills_maps to delete.
     * @example
     * // Delete a few Boss_kills_maps
     * const { count } = await prisma.boss_kills_maps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_mapsDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_mapsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_mapsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_mapsUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_mapsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_maps.
     * @param {boss_kills_mapsUpsertArgs} args - Arguments to update or create a Boss_kills_maps.
     * @example
     * // Update or create a Boss_kills_maps
     * const boss_kills_maps = await prisma.boss_kills_maps.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_maps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_maps we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_mapsUpsertArgs>(
      args: SelectSubset<T, boss_kills_mapsUpsertArgs>
    ): Prisma__boss_kills_mapsClient<boss_kills_mapsGetPayload<T>>

    /**
     * Count the number of Boss_kills_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_mapsCountArgs} args - Arguments to filter Boss_kills_maps to count.
     * @example
     * // Count the number of Boss_kills_maps
     * const count = await prisma.boss_kills_maps.count({
     *   where: {
     *     // ... the filter for the Boss_kills_maps we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_mapsCountArgs>(
      args?: Subset<T, boss_kills_mapsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_mapsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_mapsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_mapsAggregateArgs>(args: Subset<T, Boss_kills_mapsAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_mapsAggregateType<T>>

    /**
     * Group by Boss_kills_maps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_mapsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_mapsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_mapsGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_mapsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_mapsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_mapsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_maps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_mapsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    boss_kills<T extends boss_killsArgs= {}>(args?: Subset<T, boss_killsArgs>): Prisma__boss_killsClient<boss_killsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_maps base type for findUnique actions
   */
  export type boss_kills_mapsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * Filter, which boss_kills_maps to fetch.
     */
    where: boss_kills_mapsWhereUniqueInput
  }

  /**
   * boss_kills_maps findUnique
   */
  export interface boss_kills_mapsFindUniqueArgs extends boss_kills_mapsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_maps findUniqueOrThrow
   */
  export type boss_kills_mapsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * Filter, which boss_kills_maps to fetch.
     */
    where: boss_kills_mapsWhereUniqueInput
  }


  /**
   * boss_kills_maps base type for findFirst actions
   */
  export type boss_kills_mapsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * Filter, which boss_kills_maps to fetch.
     */
    where?: boss_kills_mapsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_maps to fetch.
     */
    orderBy?: Enumerable<boss_kills_mapsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_maps.
     */
    cursor?: boss_kills_mapsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_maps.
     */
    distinct?: Enumerable<Boss_kills_mapsScalarFieldEnum>
  }

  /**
   * boss_kills_maps findFirst
   */
  export interface boss_kills_mapsFindFirstArgs extends boss_kills_mapsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_maps findFirstOrThrow
   */
  export type boss_kills_mapsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * Filter, which boss_kills_maps to fetch.
     */
    where?: boss_kills_mapsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_maps to fetch.
     */
    orderBy?: Enumerable<boss_kills_mapsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_maps.
     */
    cursor?: boss_kills_mapsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_maps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_maps.
     */
    distinct?: Enumerable<Boss_kills_mapsScalarFieldEnum>
  }


  /**
   * boss_kills_maps findMany
   */
  export type boss_kills_mapsFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * Filter, which boss_kills_maps to fetch.
     */
    where?: boss_kills_mapsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_maps to fetch.
     */
    orderBy?: Enumerable<boss_kills_mapsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_maps.
     */
    cursor?: boss_kills_mapsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_maps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_maps.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_mapsScalarFieldEnum>
  }


  /**
   * boss_kills_maps create
   */
  export type boss_kills_mapsCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * The data needed to create a boss_kills_maps.
     */
    data: XOR<boss_kills_mapsCreateInput, boss_kills_mapsUncheckedCreateInput>
  }


  /**
   * boss_kills_maps createMany
   */
  export type boss_kills_mapsCreateManyArgs = {
    /**
     * The data used to create many boss_kills_maps.
     */
    data: Enumerable<boss_kills_mapsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_maps update
   */
  export type boss_kills_mapsUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * The data needed to update a boss_kills_maps.
     */
    data: XOR<boss_kills_mapsUpdateInput, boss_kills_mapsUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_maps to update.
     */
    where: boss_kills_mapsWhereUniqueInput
  }


  /**
   * boss_kills_maps updateMany
   */
  export type boss_kills_mapsUpdateManyArgs = {
    /**
     * The data used to update boss_kills_maps.
     */
    data: XOR<boss_kills_mapsUpdateManyMutationInput, boss_kills_mapsUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_maps to update
     */
    where?: boss_kills_mapsWhereInput
  }


  /**
   * boss_kills_maps upsert
   */
  export type boss_kills_mapsUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * The filter to search for the boss_kills_maps to update in case it exists.
     */
    where: boss_kills_mapsWhereUniqueInput
    /**
     * In case the boss_kills_maps found by the `where` argument doesn't exist, create a new boss_kills_maps with this data.
     */
    create: XOR<boss_kills_mapsCreateInput, boss_kills_mapsUncheckedCreateInput>
    /**
     * In case the boss_kills_maps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_mapsUpdateInput, boss_kills_mapsUncheckedUpdateInput>
  }


  /**
   * boss_kills_maps delete
   */
  export type boss_kills_mapsDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
    /**
     * Filter which boss_kills_maps to delete.
     */
    where: boss_kills_mapsWhereUniqueInput
  }


  /**
   * boss_kills_maps deleteMany
   */
  export type boss_kills_mapsDeleteManyArgs = {
    /**
     * Filter which boss_kills_maps to delete
     */
    where?: boss_kills_mapsWhereInput
  }


  /**
   * boss_kills_maps without action
   */
  export type boss_kills_mapsArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_maps
     */
    select?: boss_kills_mapsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_mapsInclude | null
  }



  /**
   * Model boss_kills_players
   */


  export type AggregateBoss_kills_players = {
    _count: Boss_kills_playersCountAggregateOutputType | null
    _avg: Boss_kills_playersAvgAggregateOutputType | null
    _sum: Boss_kills_playersSumAggregateOutputType | null
    _min: Boss_kills_playersMinAggregateOutputType | null
    _max: Boss_kills_playersMaxAggregateOutputType | null
  }

  export type Boss_kills_playersAvgAggregateOutputType = {
    id: number | null
    guid: number | null
    talent_spec: number | null
    avg_item_lvl: number | null
    dmgDone: number | null
    healingDone: number | null
    overhealingDone: number | null
    absorbDone: number | null
    dmgTaken: number | null
    dmgAbsorbed: number | null
    healingTaken: number | null
    usefullTime: number | null
    dispels: number | null
    interrupts: number | null
  }

  export type Boss_kills_playersSumAggregateOutputType = {
    id: number | null
    guid: number | null
    talent_spec: number | null
    avg_item_lvl: number | null
    dmgDone: bigint | null
    healingDone: bigint | null
    overhealingDone: bigint | null
    absorbDone: bigint | null
    dmgTaken: bigint | null
    dmgAbsorbed: bigint | null
    healingTaken: bigint | null
    usefullTime: number | null
    dispels: number | null
    interrupts: number | null
  }

  export type Boss_kills_playersMinAggregateOutputType = {
    id: number | null
    guid: number | null
    talent_spec: number | null
    avg_item_lvl: number | null
    dmgDone: bigint | null
    healingDone: bigint | null
    overhealingDone: bigint | null
    absorbDone: bigint | null
    dmgTaken: bigint | null
    dmgAbsorbed: bigint | null
    healingTaken: bigint | null
    usefullTime: number | null
    dispels: number | null
    interrupts: number | null
    hidden: boolean | null
  }

  export type Boss_kills_playersMaxAggregateOutputType = {
    id: number | null
    guid: number | null
    talent_spec: number | null
    avg_item_lvl: number | null
    dmgDone: bigint | null
    healingDone: bigint | null
    overhealingDone: bigint | null
    absorbDone: bigint | null
    dmgTaken: bigint | null
    dmgAbsorbed: bigint | null
    healingTaken: bigint | null
    usefullTime: number | null
    dispels: number | null
    interrupts: number | null
    hidden: boolean | null
  }

  export type Boss_kills_playersCountAggregateOutputType = {
    id: number
    guid: number
    talent_spec: number
    avg_item_lvl: number
    dmgDone: number
    healingDone: number
    overhealingDone: number
    absorbDone: number
    dmgTaken: number
    dmgAbsorbed: number
    healingTaken: number
    usefullTime: number
    dispels: number
    interrupts: number
    hidden: number
    _all: number
  }


  export type Boss_kills_playersAvgAggregateInputType = {
    id?: true
    guid?: true
    talent_spec?: true
    avg_item_lvl?: true
    dmgDone?: true
    healingDone?: true
    overhealingDone?: true
    absorbDone?: true
    dmgTaken?: true
    dmgAbsorbed?: true
    healingTaken?: true
    usefullTime?: true
    dispels?: true
    interrupts?: true
  }

  export type Boss_kills_playersSumAggregateInputType = {
    id?: true
    guid?: true
    talent_spec?: true
    avg_item_lvl?: true
    dmgDone?: true
    healingDone?: true
    overhealingDone?: true
    absorbDone?: true
    dmgTaken?: true
    dmgAbsorbed?: true
    healingTaken?: true
    usefullTime?: true
    dispels?: true
    interrupts?: true
  }

  export type Boss_kills_playersMinAggregateInputType = {
    id?: true
    guid?: true
    talent_spec?: true
    avg_item_lvl?: true
    dmgDone?: true
    healingDone?: true
    overhealingDone?: true
    absorbDone?: true
    dmgTaken?: true
    dmgAbsorbed?: true
    healingTaken?: true
    usefullTime?: true
    dispels?: true
    interrupts?: true
    hidden?: true
  }

  export type Boss_kills_playersMaxAggregateInputType = {
    id?: true
    guid?: true
    talent_spec?: true
    avg_item_lvl?: true
    dmgDone?: true
    healingDone?: true
    overhealingDone?: true
    absorbDone?: true
    dmgTaken?: true
    dmgAbsorbed?: true
    healingTaken?: true
    usefullTime?: true
    dispels?: true
    interrupts?: true
    hidden?: true
  }

  export type Boss_kills_playersCountAggregateInputType = {
    id?: true
    guid?: true
    talent_spec?: true
    avg_item_lvl?: true
    dmgDone?: true
    healingDone?: true
    overhealingDone?: true
    absorbDone?: true
    dmgTaken?: true
    dmgAbsorbed?: true
    healingTaken?: true
    usefullTime?: true
    dispels?: true
    interrupts?: true
    hidden?: true
    _all?: true
  }

  export type Boss_kills_playersAggregateArgs = {
    /**
     * Filter which boss_kills_players to aggregate.
     */
    where?: boss_kills_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_players to fetch.
     */
    orderBy?: Enumerable<boss_kills_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_players
    **/
    _count?: true | Boss_kills_playersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_playersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_playersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_playersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_playersMaxAggregateInputType
  }

  export type GetBoss_kills_playersAggregateType<T extends Boss_kills_playersAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_players]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_players[P]>
      : GetScalarType<T[P], AggregateBoss_kills_players[P]>
  }




  export type Boss_kills_playersGroupByArgs = {
    where?: boss_kills_playersWhereInput
    orderBy?: Enumerable<boss_kills_playersOrderByWithAggregationInput>
    by: Boss_kills_playersScalarFieldEnum[]
    having?: boss_kills_playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_playersCountAggregateInputType | true
    _avg?: Boss_kills_playersAvgAggregateInputType
    _sum?: Boss_kills_playersSumAggregateInputType
    _min?: Boss_kills_playersMinAggregateInputType
    _max?: Boss_kills_playersMaxAggregateInputType
  }


  export type Boss_kills_playersGroupByOutputType = {
    id: number
    guid: number
    talent_spec: number
    avg_item_lvl: number
    dmgDone: bigint
    healingDone: bigint
    overhealingDone: bigint
    absorbDone: bigint
    dmgTaken: bigint
    dmgAbsorbed: bigint
    healingTaken: bigint
    usefullTime: number
    dispels: number
    interrupts: number
    hidden: boolean
    _count: Boss_kills_playersCountAggregateOutputType | null
    _avg: Boss_kills_playersAvgAggregateOutputType | null
    _sum: Boss_kills_playersSumAggregateOutputType | null
    _min: Boss_kills_playersMinAggregateOutputType | null
    _max: Boss_kills_playersMaxAggregateOutputType | null
  }

  type GetBoss_kills_playersGroupByPayload<T extends Boss_kills_playersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_playersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_playersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_playersGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_playersGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_playersSelect = {
    id?: boolean
    guid?: boolean
    talent_spec?: boolean
    avg_item_lvl?: boolean
    dmgDone?: boolean
    healingDone?: boolean
    overhealingDone?: boolean
    absorbDone?: boolean
    dmgTaken?: boolean
    dmgAbsorbed?: boolean
    healingTaken?: boolean
    usefullTime?: boolean
    dispels?: boolean
    interrupts?: boolean
    hidden?: boolean
    boss_kills?: boolean | boss_killsArgs
  }


  export type boss_kills_playersInclude = {
    boss_kills?: boolean | boss_killsArgs
  }

  export type boss_kills_playersGetPayload<S extends boolean | null | undefined | boss_kills_playersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_players :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_playersArgs | boss_kills_playersFindManyArgs)
    ? boss_kills_players  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'boss_kills' ? boss_killsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (boss_kills_playersArgs | boss_kills_playersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'boss_kills' ? boss_killsGetPayload<S['select'][P]> :  P extends keyof boss_kills_players ? boss_kills_players[P] : never
  } 
      : boss_kills_players


  type boss_kills_playersCountArgs = 
    Omit<boss_kills_playersFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_playersCountAggregateInputType | true
    }

  export interface boss_kills_playersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_players that matches the filter.
     * @param {boss_kills_playersFindUniqueArgs} args - Arguments to find a Boss_kills_players
     * @example
     * // Get one Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_playersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_playersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_players'> extends True ? Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>> : Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_players that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_playersFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_players
     * @example
     * // Get one Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_playersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_playersFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>>

    /**
     * Find the first Boss_kills_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_playersFindFirstArgs} args - Arguments to find a Boss_kills_players
     * @example
     * // Get one Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_playersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_playersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_players'> extends True ? Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>> : Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_players that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_playersFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_players
     * @example
     * // Get one Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_playersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_playersFindFirstOrThrowArgs>
    ): Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>>

    /**
     * Find zero or more Boss_kills_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_playersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.findMany()
     * 
     * // Get first 10 Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boss_kills_playersWithIdOnly = await prisma.boss_kills_players.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends boss_kills_playersFindManyArgs>(
      args?: SelectSubset<T, boss_kills_playersFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_playersGetPayload<T>>>

    /**
     * Create a Boss_kills_players.
     * @param {boss_kills_playersCreateArgs} args - Arguments to create a Boss_kills_players.
     * @example
     * // Create one Boss_kills_players
     * const Boss_kills_players = await prisma.boss_kills_players.create({
     *   data: {
     *     // ... data to create a Boss_kills_players
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_playersCreateArgs>(
      args: SelectSubset<T, boss_kills_playersCreateArgs>
    ): Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>>

    /**
     * Create many Boss_kills_players.
     *     @param {boss_kills_playersCreateManyArgs} args - Arguments to create many Boss_kills_players.
     *     @example
     *     // Create many Boss_kills_players
     *     const boss_kills_players = await prisma.boss_kills_players.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_playersCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_playersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_players.
     * @param {boss_kills_playersDeleteArgs} args - Arguments to delete one Boss_kills_players.
     * @example
     * // Delete one Boss_kills_players
     * const Boss_kills_players = await prisma.boss_kills_players.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_players
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_playersDeleteArgs>(
      args: SelectSubset<T, boss_kills_playersDeleteArgs>
    ): Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>>

    /**
     * Update one Boss_kills_players.
     * @param {boss_kills_playersUpdateArgs} args - Arguments to update one Boss_kills_players.
     * @example
     * // Update one Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_playersUpdateArgs>(
      args: SelectSubset<T, boss_kills_playersUpdateArgs>
    ): Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_players.
     * @param {boss_kills_playersDeleteManyArgs} args - Arguments to filter Boss_kills_players to delete.
     * @example
     * // Delete a few Boss_kills_players
     * const { count } = await prisma.boss_kills_players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_playersDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_playersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_playersUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_playersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_players.
     * @param {boss_kills_playersUpsertArgs} args - Arguments to update or create a Boss_kills_players.
     * @example
     * // Update or create a Boss_kills_players
     * const boss_kills_players = await prisma.boss_kills_players.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_players we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_playersUpsertArgs>(
      args: SelectSubset<T, boss_kills_playersUpsertArgs>
    ): Prisma__boss_kills_playersClient<boss_kills_playersGetPayload<T>>

    /**
     * Count the number of Boss_kills_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_playersCountArgs} args - Arguments to filter Boss_kills_players to count.
     * @example
     * // Count the number of Boss_kills_players
     * const count = await prisma.boss_kills_players.count({
     *   where: {
     *     // ... the filter for the Boss_kills_players we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_playersCountArgs>(
      args?: Subset<T, boss_kills_playersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_playersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_playersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_playersAggregateArgs>(args: Subset<T, Boss_kills_playersAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_playersAggregateType<T>>

    /**
     * Group by Boss_kills_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_playersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_playersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_playersGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_playersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_playersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_playersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    boss_kills<T extends boss_killsArgs= {}>(args?: Subset<T, boss_killsArgs>): Prisma__boss_killsClient<boss_killsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_players base type for findUnique actions
   */
  export type boss_kills_playersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * Filter, which boss_kills_players to fetch.
     */
    where: boss_kills_playersWhereUniqueInput
  }

  /**
   * boss_kills_players findUnique
   */
  export interface boss_kills_playersFindUniqueArgs extends boss_kills_playersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_players findUniqueOrThrow
   */
  export type boss_kills_playersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * Filter, which boss_kills_players to fetch.
     */
    where: boss_kills_playersWhereUniqueInput
  }


  /**
   * boss_kills_players base type for findFirst actions
   */
  export type boss_kills_playersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * Filter, which boss_kills_players to fetch.
     */
    where?: boss_kills_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_players to fetch.
     */
    orderBy?: Enumerable<boss_kills_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_players.
     */
    cursor?: boss_kills_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_players.
     */
    distinct?: Enumerable<Boss_kills_playersScalarFieldEnum>
  }

  /**
   * boss_kills_players findFirst
   */
  export interface boss_kills_playersFindFirstArgs extends boss_kills_playersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_players findFirstOrThrow
   */
  export type boss_kills_playersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * Filter, which boss_kills_players to fetch.
     */
    where?: boss_kills_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_players to fetch.
     */
    orderBy?: Enumerable<boss_kills_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_players.
     */
    cursor?: boss_kills_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_players.
     */
    distinct?: Enumerable<Boss_kills_playersScalarFieldEnum>
  }


  /**
   * boss_kills_players findMany
   */
  export type boss_kills_playersFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * Filter, which boss_kills_players to fetch.
     */
    where?: boss_kills_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_players to fetch.
     */
    orderBy?: Enumerable<boss_kills_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_players.
     */
    cursor?: boss_kills_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_players.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_playersScalarFieldEnum>
  }


  /**
   * boss_kills_players create
   */
  export type boss_kills_playersCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * The data needed to create a boss_kills_players.
     */
    data: XOR<boss_kills_playersCreateInput, boss_kills_playersUncheckedCreateInput>
  }


  /**
   * boss_kills_players createMany
   */
  export type boss_kills_playersCreateManyArgs = {
    /**
     * The data used to create many boss_kills_players.
     */
    data: Enumerable<boss_kills_playersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_players update
   */
  export type boss_kills_playersUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * The data needed to update a boss_kills_players.
     */
    data: XOR<boss_kills_playersUpdateInput, boss_kills_playersUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_players to update.
     */
    where: boss_kills_playersWhereUniqueInput
  }


  /**
   * boss_kills_players updateMany
   */
  export type boss_kills_playersUpdateManyArgs = {
    /**
     * The data used to update boss_kills_players.
     */
    data: XOR<boss_kills_playersUpdateManyMutationInput, boss_kills_playersUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_players to update
     */
    where?: boss_kills_playersWhereInput
  }


  /**
   * boss_kills_players upsert
   */
  export type boss_kills_playersUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * The filter to search for the boss_kills_players to update in case it exists.
     */
    where: boss_kills_playersWhereUniqueInput
    /**
     * In case the boss_kills_players found by the `where` argument doesn't exist, create a new boss_kills_players with this data.
     */
    create: XOR<boss_kills_playersCreateInput, boss_kills_playersUncheckedCreateInput>
    /**
     * In case the boss_kills_players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_playersUpdateInput, boss_kills_playersUncheckedUpdateInput>
  }


  /**
   * boss_kills_players delete
   */
  export type boss_kills_playersDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
    /**
     * Filter which boss_kills_players to delete.
     */
    where: boss_kills_playersWhereUniqueInput
  }


  /**
   * boss_kills_players deleteMany
   */
  export type boss_kills_playersDeleteManyArgs = {
    /**
     * Filter which boss_kills_players to delete
     */
    where?: boss_kills_playersWhereInput
  }


  /**
   * boss_kills_players without action
   */
  export type boss_kills_playersArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_players
     */
    select?: boss_kills_playersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: boss_kills_playersInclude | null
  }



  /**
   * Model boss_kills_progress
   */


  export type AggregateBoss_kills_progress = {
    _count: Boss_kills_progressCountAggregateOutputType | null
    _avg: Boss_kills_progressAvgAggregateOutputType | null
    _sum: Boss_kills_progressSumAggregateOutputType | null
    _min: Boss_kills_progressMinAggregateOutputType | null
    _max: Boss_kills_progressMaxAggregateOutputType | null
  }

  export type Boss_kills_progressAvgAggregateOutputType = {
    mode: number | null
    season: number | null
    position: number | null
    progress: number | null
    realm: number | null
    raid1: number | null
    raid2: number | null
    raid3: number | null
  }

  export type Boss_kills_progressSumAggregateOutputType = {
    mode: number | null
    season: number | null
    position: number | null
    progress: number | null
    realm: number | null
    raid1: number | null
    raid2: number | null
    raid3: number | null
  }

  export type Boss_kills_progressMinAggregateOutputType = {
    mode: number | null
    season: number | null
    position: number | null
    progress: number | null
    finished: Date | null
    guild: string | null
    realm: number | null
    raid1: number | null
    raid2: number | null
    raid3: number | null
  }

  export type Boss_kills_progressMaxAggregateOutputType = {
    mode: number | null
    season: number | null
    position: number | null
    progress: number | null
    finished: Date | null
    guild: string | null
    realm: number | null
    raid1: number | null
    raid2: number | null
    raid3: number | null
  }

  export type Boss_kills_progressCountAggregateOutputType = {
    mode: number
    season: number
    position: number
    progress: number
    finished: number
    guild: number
    realm: number
    raid1: number
    raid2: number
    raid3: number
    _all: number
  }


  export type Boss_kills_progressAvgAggregateInputType = {
    mode?: true
    season?: true
    position?: true
    progress?: true
    realm?: true
    raid1?: true
    raid2?: true
    raid3?: true
  }

  export type Boss_kills_progressSumAggregateInputType = {
    mode?: true
    season?: true
    position?: true
    progress?: true
    realm?: true
    raid1?: true
    raid2?: true
    raid3?: true
  }

  export type Boss_kills_progressMinAggregateInputType = {
    mode?: true
    season?: true
    position?: true
    progress?: true
    finished?: true
    guild?: true
    realm?: true
    raid1?: true
    raid2?: true
    raid3?: true
  }

  export type Boss_kills_progressMaxAggregateInputType = {
    mode?: true
    season?: true
    position?: true
    progress?: true
    finished?: true
    guild?: true
    realm?: true
    raid1?: true
    raid2?: true
    raid3?: true
  }

  export type Boss_kills_progressCountAggregateInputType = {
    mode?: true
    season?: true
    position?: true
    progress?: true
    finished?: true
    guild?: true
    realm?: true
    raid1?: true
    raid2?: true
    raid3?: true
    _all?: true
  }

  export type Boss_kills_progressAggregateArgs = {
    /**
     * Filter which boss_kills_progress to aggregate.
     */
    where?: boss_kills_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progresses to fetch.
     */
    orderBy?: Enumerable<boss_kills_progressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_progresses
    **/
    _count?: true | Boss_kills_progressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_progressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_progressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_progressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_progressMaxAggregateInputType
  }

  export type GetBoss_kills_progressAggregateType<T extends Boss_kills_progressAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_progress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_progress[P]>
      : GetScalarType<T[P], AggregateBoss_kills_progress[P]>
  }




  export type Boss_kills_progressGroupByArgs = {
    where?: boss_kills_progressWhereInput
    orderBy?: Enumerable<boss_kills_progressOrderByWithAggregationInput>
    by: Boss_kills_progressScalarFieldEnum[]
    having?: boss_kills_progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_progressCountAggregateInputType | true
    _avg?: Boss_kills_progressAvgAggregateInputType
    _sum?: Boss_kills_progressSumAggregateInputType
    _min?: Boss_kills_progressMinAggregateInputType
    _max?: Boss_kills_progressMaxAggregateInputType
  }


  export type Boss_kills_progressGroupByOutputType = {
    mode: number
    season: number
    position: number
    progress: number
    finished: Date | null
    guild: string | null
    realm: number
    raid1: number
    raid2: number
    raid3: number
    _count: Boss_kills_progressCountAggregateOutputType | null
    _avg: Boss_kills_progressAvgAggregateOutputType | null
    _sum: Boss_kills_progressSumAggregateOutputType | null
    _min: Boss_kills_progressMinAggregateOutputType | null
    _max: Boss_kills_progressMaxAggregateOutputType | null
  }

  type GetBoss_kills_progressGroupByPayload<T extends Boss_kills_progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_progressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_progressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_progressGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_progressGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_progressSelect = {
    mode?: boolean
    season?: boolean
    position?: boolean
    progress?: boolean
    finished?: boolean
    guild?: boolean
    realm?: boolean
    raid1?: boolean
    raid2?: boolean
    raid3?: boolean
  }


  export type boss_kills_progressGetPayload<S extends boolean | null | undefined | boss_kills_progressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_progress :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_progressArgs | boss_kills_progressFindManyArgs)
    ? boss_kills_progress 
    : S extends { select: any } & (boss_kills_progressArgs | boss_kills_progressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof boss_kills_progress ? boss_kills_progress[P] : never
  } 
      : boss_kills_progress


  type boss_kills_progressCountArgs = 
    Omit<boss_kills_progressFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_progressCountAggregateInputType | true
    }

  export interface boss_kills_progressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_progress that matches the filter.
     * @param {boss_kills_progressFindUniqueArgs} args - Arguments to find a Boss_kills_progress
     * @example
     * // Get one Boss_kills_progress
     * const boss_kills_progress = await prisma.boss_kills_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_progressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_progressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_progress'> extends True ? Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>> : Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_progress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_progressFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_progress
     * @example
     * // Get one Boss_kills_progress
     * const boss_kills_progress = await prisma.boss_kills_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_progressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_progressFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>>

    /**
     * Find the first Boss_kills_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progressFindFirstArgs} args - Arguments to find a Boss_kills_progress
     * @example
     * // Get one Boss_kills_progress
     * const boss_kills_progress = await prisma.boss_kills_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_progressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_progressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_progress'> extends True ? Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>> : Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_progress that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progressFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_progress
     * @example
     * // Get one Boss_kills_progress
     * const boss_kills_progress = await prisma.boss_kills_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_progressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_progressFindFirstOrThrowArgs>
    ): Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>>

    /**
     * Find zero or more Boss_kills_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_progresses
     * const boss_kills_progresses = await prisma.boss_kills_progress.findMany()
     * 
     * // Get first 10 Boss_kills_progresses
     * const boss_kills_progresses = await prisma.boss_kills_progress.findMany({ take: 10 })
     * 
     * // Only select the `mode`
     * const boss_kills_progressWithModeOnly = await prisma.boss_kills_progress.findMany({ select: { mode: true } })
     * 
    **/
    findMany<T extends boss_kills_progressFindManyArgs>(
      args?: SelectSubset<T, boss_kills_progressFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_progressGetPayload<T>>>

    /**
     * Create a Boss_kills_progress.
     * @param {boss_kills_progressCreateArgs} args - Arguments to create a Boss_kills_progress.
     * @example
     * // Create one Boss_kills_progress
     * const Boss_kills_progress = await prisma.boss_kills_progress.create({
     *   data: {
     *     // ... data to create a Boss_kills_progress
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_progressCreateArgs>(
      args: SelectSubset<T, boss_kills_progressCreateArgs>
    ): Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>>

    /**
     * Create many Boss_kills_progresses.
     *     @param {boss_kills_progressCreateManyArgs} args - Arguments to create many Boss_kills_progresses.
     *     @example
     *     // Create many Boss_kills_progresses
     *     const boss_kills_progress = await prisma.boss_kills_progress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_progressCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_progressCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_progress.
     * @param {boss_kills_progressDeleteArgs} args - Arguments to delete one Boss_kills_progress.
     * @example
     * // Delete one Boss_kills_progress
     * const Boss_kills_progress = await prisma.boss_kills_progress.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_progress
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_progressDeleteArgs>(
      args: SelectSubset<T, boss_kills_progressDeleteArgs>
    ): Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>>

    /**
     * Update one Boss_kills_progress.
     * @param {boss_kills_progressUpdateArgs} args - Arguments to update one Boss_kills_progress.
     * @example
     * // Update one Boss_kills_progress
     * const boss_kills_progress = await prisma.boss_kills_progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_progressUpdateArgs>(
      args: SelectSubset<T, boss_kills_progressUpdateArgs>
    ): Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_progresses.
     * @param {boss_kills_progressDeleteManyArgs} args - Arguments to filter Boss_kills_progresses to delete.
     * @example
     * // Delete a few Boss_kills_progresses
     * const { count } = await prisma.boss_kills_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_progressDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_progressDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_progresses
     * const boss_kills_progress = await prisma.boss_kills_progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_progressUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_progressUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_progress.
     * @param {boss_kills_progressUpsertArgs} args - Arguments to update or create a Boss_kills_progress.
     * @example
     * // Update or create a Boss_kills_progress
     * const boss_kills_progress = await prisma.boss_kills_progress.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_progress we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_progressUpsertArgs>(
      args: SelectSubset<T, boss_kills_progressUpsertArgs>
    ): Prisma__boss_kills_progressClient<boss_kills_progressGetPayload<T>>

    /**
     * Count the number of Boss_kills_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progressCountArgs} args - Arguments to filter Boss_kills_progresses to count.
     * @example
     * // Count the number of Boss_kills_progresses
     * const count = await prisma.boss_kills_progress.count({
     *   where: {
     *     // ... the filter for the Boss_kills_progresses we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_progressCountArgs>(
      args?: Subset<T, boss_kills_progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_progressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_progressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_progressAggregateArgs>(args: Subset<T, Boss_kills_progressAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_progressAggregateType<T>>

    /**
     * Group by Boss_kills_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_progressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_progressGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_progressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_progressClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_progress base type for findUnique actions
   */
  export type boss_kills_progressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * Filter, which boss_kills_progress to fetch.
     */
    where: boss_kills_progressWhereUniqueInput
  }

  /**
   * boss_kills_progress findUnique
   */
  export interface boss_kills_progressFindUniqueArgs extends boss_kills_progressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_progress findUniqueOrThrow
   */
  export type boss_kills_progressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * Filter, which boss_kills_progress to fetch.
     */
    where: boss_kills_progressWhereUniqueInput
  }


  /**
   * boss_kills_progress base type for findFirst actions
   */
  export type boss_kills_progressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * Filter, which boss_kills_progress to fetch.
     */
    where?: boss_kills_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progresses to fetch.
     */
    orderBy?: Enumerable<boss_kills_progressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_progresses.
     */
    cursor?: boss_kills_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_progresses.
     */
    distinct?: Enumerable<Boss_kills_progressScalarFieldEnum>
  }

  /**
   * boss_kills_progress findFirst
   */
  export interface boss_kills_progressFindFirstArgs extends boss_kills_progressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_progress findFirstOrThrow
   */
  export type boss_kills_progressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * Filter, which boss_kills_progress to fetch.
     */
    where?: boss_kills_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progresses to fetch.
     */
    orderBy?: Enumerable<boss_kills_progressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_progresses.
     */
    cursor?: boss_kills_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_progresses.
     */
    distinct?: Enumerable<Boss_kills_progressScalarFieldEnum>
  }


  /**
   * boss_kills_progress findMany
   */
  export type boss_kills_progressFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * Filter, which boss_kills_progresses to fetch.
     */
    where?: boss_kills_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progresses to fetch.
     */
    orderBy?: Enumerable<boss_kills_progressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_progresses.
     */
    cursor?: boss_kills_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progresses.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_progressScalarFieldEnum>
  }


  /**
   * boss_kills_progress create
   */
  export type boss_kills_progressCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * The data needed to create a boss_kills_progress.
     */
    data?: XOR<boss_kills_progressCreateInput, boss_kills_progressUncheckedCreateInput>
  }


  /**
   * boss_kills_progress createMany
   */
  export type boss_kills_progressCreateManyArgs = {
    /**
     * The data used to create many boss_kills_progresses.
     */
    data: Enumerable<boss_kills_progressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_progress update
   */
  export type boss_kills_progressUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * The data needed to update a boss_kills_progress.
     */
    data: XOR<boss_kills_progressUpdateInput, boss_kills_progressUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_progress to update.
     */
    where: boss_kills_progressWhereUniqueInput
  }


  /**
   * boss_kills_progress updateMany
   */
  export type boss_kills_progressUpdateManyArgs = {
    /**
     * The data used to update boss_kills_progresses.
     */
    data: XOR<boss_kills_progressUpdateManyMutationInput, boss_kills_progressUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_progresses to update
     */
    where?: boss_kills_progressWhereInput
  }


  /**
   * boss_kills_progress upsert
   */
  export type boss_kills_progressUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * The filter to search for the boss_kills_progress to update in case it exists.
     */
    where: boss_kills_progressWhereUniqueInput
    /**
     * In case the boss_kills_progress found by the `where` argument doesn't exist, create a new boss_kills_progress with this data.
     */
    create: XOR<boss_kills_progressCreateInput, boss_kills_progressUncheckedCreateInput>
    /**
     * In case the boss_kills_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_progressUpdateInput, boss_kills_progressUncheckedUpdateInput>
  }


  /**
   * boss_kills_progress delete
   */
  export type boss_kills_progressDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
    /**
     * Filter which boss_kills_progress to delete.
     */
    where: boss_kills_progressWhereUniqueInput
  }


  /**
   * boss_kills_progress deleteMany
   */
  export type boss_kills_progressDeleteManyArgs = {
    /**
     * Filter which boss_kills_progresses to delete
     */
    where?: boss_kills_progressWhereInput
  }


  /**
   * boss_kills_progress without action
   */
  export type boss_kills_progressArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress
     */
    select?: boss_kills_progressSelect | null
  }



  /**
   * Model boss_kills_progress_cache
   */


  export type AggregateBoss_kills_progress_cache = {
    _count: Boss_kills_progress_cacheCountAggregateOutputType | null
    _avg: Boss_kills_progress_cacheAvgAggregateOutputType | null
    _sum: Boss_kills_progress_cacheSumAggregateOutputType | null
    _min: Boss_kills_progress_cacheMinAggregateOutputType | null
    _max: Boss_kills_progress_cacheMaxAggregateOutputType | null
  }

  export type Boss_kills_progress_cacheAvgAggregateOutputType = {
    season: number | null
    mode: number | null
    entry: number | null
    position: number | null
    realm: number | null
    length: number | null
    kill_id: number | null
  }

  export type Boss_kills_progress_cacheSumAggregateOutputType = {
    season: number | null
    mode: number | null
    entry: number | null
    position: number | null
    realm: number | null
    length: number | null
    kill_id: number | null
  }

  export type Boss_kills_progress_cacheMinAggregateOutputType = {
    season: number | null
    mode: number | null
    entry: number | null
    position: number | null
    guild: string | null
    first_kill: Date | null
    realm: number | null
    length: number | null
    kill_id: number | null
  }

  export type Boss_kills_progress_cacheMaxAggregateOutputType = {
    season: number | null
    mode: number | null
    entry: number | null
    position: number | null
    guild: string | null
    first_kill: Date | null
    realm: number | null
    length: number | null
    kill_id: number | null
  }

  export type Boss_kills_progress_cacheCountAggregateOutputType = {
    season: number
    mode: number
    entry: number
    position: number
    guild: number
    first_kill: number
    realm: number
    length: number
    kill_id: number
    _all: number
  }


  export type Boss_kills_progress_cacheAvgAggregateInputType = {
    season?: true
    mode?: true
    entry?: true
    position?: true
    realm?: true
    length?: true
    kill_id?: true
  }

  export type Boss_kills_progress_cacheSumAggregateInputType = {
    season?: true
    mode?: true
    entry?: true
    position?: true
    realm?: true
    length?: true
    kill_id?: true
  }

  export type Boss_kills_progress_cacheMinAggregateInputType = {
    season?: true
    mode?: true
    entry?: true
    position?: true
    guild?: true
    first_kill?: true
    realm?: true
    length?: true
    kill_id?: true
  }

  export type Boss_kills_progress_cacheMaxAggregateInputType = {
    season?: true
    mode?: true
    entry?: true
    position?: true
    guild?: true
    first_kill?: true
    realm?: true
    length?: true
    kill_id?: true
  }

  export type Boss_kills_progress_cacheCountAggregateInputType = {
    season?: true
    mode?: true
    entry?: true
    position?: true
    guild?: true
    first_kill?: true
    realm?: true
    length?: true
    kill_id?: true
    _all?: true
  }

  export type Boss_kills_progress_cacheAggregateArgs = {
    /**
     * Filter which boss_kills_progress_cache to aggregate.
     */
    where?: boss_kills_progress_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progress_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_progress_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_progress_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progress_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progress_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_progress_caches
    **/
    _count?: true | Boss_kills_progress_cacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_progress_cacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_progress_cacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_progress_cacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_progress_cacheMaxAggregateInputType
  }

  export type GetBoss_kills_progress_cacheAggregateType<T extends Boss_kills_progress_cacheAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_progress_cache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_progress_cache[P]>
      : GetScalarType<T[P], AggregateBoss_kills_progress_cache[P]>
  }




  export type Boss_kills_progress_cacheGroupByArgs = {
    where?: boss_kills_progress_cacheWhereInput
    orderBy?: Enumerable<boss_kills_progress_cacheOrderByWithAggregationInput>
    by: Boss_kills_progress_cacheScalarFieldEnum[]
    having?: boss_kills_progress_cacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_progress_cacheCountAggregateInputType | true
    _avg?: Boss_kills_progress_cacheAvgAggregateInputType
    _sum?: Boss_kills_progress_cacheSumAggregateInputType
    _min?: Boss_kills_progress_cacheMinAggregateInputType
    _max?: Boss_kills_progress_cacheMaxAggregateInputType
  }


  export type Boss_kills_progress_cacheGroupByOutputType = {
    season: number
    mode: number
    entry: number
    position: number
    guild: string | null
    first_kill: Date | null
    realm: number
    length: number
    kill_id: number | null
    _count: Boss_kills_progress_cacheCountAggregateOutputType | null
    _avg: Boss_kills_progress_cacheAvgAggregateOutputType | null
    _sum: Boss_kills_progress_cacheSumAggregateOutputType | null
    _min: Boss_kills_progress_cacheMinAggregateOutputType | null
    _max: Boss_kills_progress_cacheMaxAggregateOutputType | null
  }

  type GetBoss_kills_progress_cacheGroupByPayload<T extends Boss_kills_progress_cacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_progress_cacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_progress_cacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_progress_cacheGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_progress_cacheGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_progress_cacheSelect = {
    season?: boolean
    mode?: boolean
    entry?: boolean
    position?: boolean
    guild?: boolean
    first_kill?: boolean
    realm?: boolean
    length?: boolean
    kill_id?: boolean
  }


  export type boss_kills_progress_cacheGetPayload<S extends boolean | null | undefined | boss_kills_progress_cacheArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_progress_cache :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_progress_cacheArgs | boss_kills_progress_cacheFindManyArgs)
    ? boss_kills_progress_cache 
    : S extends { select: any } & (boss_kills_progress_cacheArgs | boss_kills_progress_cacheFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof boss_kills_progress_cache ? boss_kills_progress_cache[P] : never
  } 
      : boss_kills_progress_cache


  type boss_kills_progress_cacheCountArgs = 
    Omit<boss_kills_progress_cacheFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_progress_cacheCountAggregateInputType | true
    }

  export interface boss_kills_progress_cacheDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_progress_cache that matches the filter.
     * @param {boss_kills_progress_cacheFindUniqueArgs} args - Arguments to find a Boss_kills_progress_cache
     * @example
     * // Get one Boss_kills_progress_cache
     * const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_progress_cacheFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_progress_cacheFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_progress_cache'> extends True ? Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>> : Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_progress_cache that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_progress_cacheFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_progress_cache
     * @example
     * // Get one Boss_kills_progress_cache
     * const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_progress_cacheFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_progress_cacheFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>>

    /**
     * Find the first Boss_kills_progress_cache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progress_cacheFindFirstArgs} args - Arguments to find a Boss_kills_progress_cache
     * @example
     * // Get one Boss_kills_progress_cache
     * const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_progress_cacheFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_progress_cacheFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_progress_cache'> extends True ? Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>> : Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_progress_cache that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progress_cacheFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_progress_cache
     * @example
     * // Get one Boss_kills_progress_cache
     * const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_progress_cacheFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_progress_cacheFindFirstOrThrowArgs>
    ): Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>>

    /**
     * Find zero or more Boss_kills_progress_caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progress_cacheFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_progress_caches
     * const boss_kills_progress_caches = await prisma.boss_kills_progress_cache.findMany()
     * 
     * // Get first 10 Boss_kills_progress_caches
     * const boss_kills_progress_caches = await prisma.boss_kills_progress_cache.findMany({ take: 10 })
     * 
     * // Only select the `season`
     * const boss_kills_progress_cacheWithSeasonOnly = await prisma.boss_kills_progress_cache.findMany({ select: { season: true } })
     * 
    **/
    findMany<T extends boss_kills_progress_cacheFindManyArgs>(
      args?: SelectSubset<T, boss_kills_progress_cacheFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_progress_cacheGetPayload<T>>>

    /**
     * Create a Boss_kills_progress_cache.
     * @param {boss_kills_progress_cacheCreateArgs} args - Arguments to create a Boss_kills_progress_cache.
     * @example
     * // Create one Boss_kills_progress_cache
     * const Boss_kills_progress_cache = await prisma.boss_kills_progress_cache.create({
     *   data: {
     *     // ... data to create a Boss_kills_progress_cache
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_progress_cacheCreateArgs>(
      args: SelectSubset<T, boss_kills_progress_cacheCreateArgs>
    ): Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>>

    /**
     * Create many Boss_kills_progress_caches.
     *     @param {boss_kills_progress_cacheCreateManyArgs} args - Arguments to create many Boss_kills_progress_caches.
     *     @example
     *     // Create many Boss_kills_progress_caches
     *     const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_progress_cacheCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_progress_cacheCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_progress_cache.
     * @param {boss_kills_progress_cacheDeleteArgs} args - Arguments to delete one Boss_kills_progress_cache.
     * @example
     * // Delete one Boss_kills_progress_cache
     * const Boss_kills_progress_cache = await prisma.boss_kills_progress_cache.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_progress_cache
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_progress_cacheDeleteArgs>(
      args: SelectSubset<T, boss_kills_progress_cacheDeleteArgs>
    ): Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>>

    /**
     * Update one Boss_kills_progress_cache.
     * @param {boss_kills_progress_cacheUpdateArgs} args - Arguments to update one Boss_kills_progress_cache.
     * @example
     * // Update one Boss_kills_progress_cache
     * const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_progress_cacheUpdateArgs>(
      args: SelectSubset<T, boss_kills_progress_cacheUpdateArgs>
    ): Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_progress_caches.
     * @param {boss_kills_progress_cacheDeleteManyArgs} args - Arguments to filter Boss_kills_progress_caches to delete.
     * @example
     * // Delete a few Boss_kills_progress_caches
     * const { count } = await prisma.boss_kills_progress_cache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_progress_cacheDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_progress_cacheDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_progress_caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progress_cacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_progress_caches
     * const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_progress_cacheUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_progress_cacheUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_progress_cache.
     * @param {boss_kills_progress_cacheUpsertArgs} args - Arguments to update or create a Boss_kills_progress_cache.
     * @example
     * // Update or create a Boss_kills_progress_cache
     * const boss_kills_progress_cache = await prisma.boss_kills_progress_cache.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_progress_cache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_progress_cache we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_progress_cacheUpsertArgs>(
      args: SelectSubset<T, boss_kills_progress_cacheUpsertArgs>
    ): Prisma__boss_kills_progress_cacheClient<boss_kills_progress_cacheGetPayload<T>>

    /**
     * Count the number of Boss_kills_progress_caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_progress_cacheCountArgs} args - Arguments to filter Boss_kills_progress_caches to count.
     * @example
     * // Count the number of Boss_kills_progress_caches
     * const count = await prisma.boss_kills_progress_cache.count({
     *   where: {
     *     // ... the filter for the Boss_kills_progress_caches we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_progress_cacheCountArgs>(
      args?: Subset<T, boss_kills_progress_cacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_progress_cacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_progress_cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_progress_cacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_progress_cacheAggregateArgs>(args: Subset<T, Boss_kills_progress_cacheAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_progress_cacheAggregateType<T>>

    /**
     * Group by Boss_kills_progress_cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_progress_cacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_progress_cacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_progress_cacheGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_progress_cacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_progress_cacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_progress_cacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_progress_cache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_progress_cacheClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_progress_cache base type for findUnique actions
   */
  export type boss_kills_progress_cacheFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * Filter, which boss_kills_progress_cache to fetch.
     */
    where: boss_kills_progress_cacheWhereUniqueInput
  }

  /**
   * boss_kills_progress_cache findUnique
   */
  export interface boss_kills_progress_cacheFindUniqueArgs extends boss_kills_progress_cacheFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_progress_cache findUniqueOrThrow
   */
  export type boss_kills_progress_cacheFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * Filter, which boss_kills_progress_cache to fetch.
     */
    where: boss_kills_progress_cacheWhereUniqueInput
  }


  /**
   * boss_kills_progress_cache base type for findFirst actions
   */
  export type boss_kills_progress_cacheFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * Filter, which boss_kills_progress_cache to fetch.
     */
    where?: boss_kills_progress_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progress_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_progress_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_progress_caches.
     */
    cursor?: boss_kills_progress_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progress_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progress_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_progress_caches.
     */
    distinct?: Enumerable<Boss_kills_progress_cacheScalarFieldEnum>
  }

  /**
   * boss_kills_progress_cache findFirst
   */
  export interface boss_kills_progress_cacheFindFirstArgs extends boss_kills_progress_cacheFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_progress_cache findFirstOrThrow
   */
  export type boss_kills_progress_cacheFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * Filter, which boss_kills_progress_cache to fetch.
     */
    where?: boss_kills_progress_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progress_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_progress_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_progress_caches.
     */
    cursor?: boss_kills_progress_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progress_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progress_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_progress_caches.
     */
    distinct?: Enumerable<Boss_kills_progress_cacheScalarFieldEnum>
  }


  /**
   * boss_kills_progress_cache findMany
   */
  export type boss_kills_progress_cacheFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * Filter, which boss_kills_progress_caches to fetch.
     */
    where?: boss_kills_progress_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_progress_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_progress_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_progress_caches.
     */
    cursor?: boss_kills_progress_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_progress_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_progress_caches.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_progress_cacheScalarFieldEnum>
  }


  /**
   * boss_kills_progress_cache create
   */
  export type boss_kills_progress_cacheCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * The data needed to create a boss_kills_progress_cache.
     */
    data?: XOR<boss_kills_progress_cacheCreateInput, boss_kills_progress_cacheUncheckedCreateInput>
  }


  /**
   * boss_kills_progress_cache createMany
   */
  export type boss_kills_progress_cacheCreateManyArgs = {
    /**
     * The data used to create many boss_kills_progress_caches.
     */
    data: Enumerable<boss_kills_progress_cacheCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_progress_cache update
   */
  export type boss_kills_progress_cacheUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * The data needed to update a boss_kills_progress_cache.
     */
    data: XOR<boss_kills_progress_cacheUpdateInput, boss_kills_progress_cacheUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_progress_cache to update.
     */
    where: boss_kills_progress_cacheWhereUniqueInput
  }


  /**
   * boss_kills_progress_cache updateMany
   */
  export type boss_kills_progress_cacheUpdateManyArgs = {
    /**
     * The data used to update boss_kills_progress_caches.
     */
    data: XOR<boss_kills_progress_cacheUpdateManyMutationInput, boss_kills_progress_cacheUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_progress_caches to update
     */
    where?: boss_kills_progress_cacheWhereInput
  }


  /**
   * boss_kills_progress_cache upsert
   */
  export type boss_kills_progress_cacheUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * The filter to search for the boss_kills_progress_cache to update in case it exists.
     */
    where: boss_kills_progress_cacheWhereUniqueInput
    /**
     * In case the boss_kills_progress_cache found by the `where` argument doesn't exist, create a new boss_kills_progress_cache with this data.
     */
    create: XOR<boss_kills_progress_cacheCreateInput, boss_kills_progress_cacheUncheckedCreateInput>
    /**
     * In case the boss_kills_progress_cache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_progress_cacheUpdateInput, boss_kills_progress_cacheUncheckedUpdateInput>
  }


  /**
   * boss_kills_progress_cache delete
   */
  export type boss_kills_progress_cacheDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
    /**
     * Filter which boss_kills_progress_cache to delete.
     */
    where: boss_kills_progress_cacheWhereUniqueInput
  }


  /**
   * boss_kills_progress_cache deleteMany
   */
  export type boss_kills_progress_cacheDeleteManyArgs = {
    /**
     * Filter which boss_kills_progress_caches to delete
     */
    where?: boss_kills_progress_cacheWhereInput
  }


  /**
   * boss_kills_progress_cache without action
   */
  export type boss_kills_progress_cacheArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_progress_cache
     */
    select?: boss_kills_progress_cacheSelect | null
  }



  /**
   * Model boss_kills_rankings_guild
   */


  export type AggregateBoss_kills_rankings_guild = {
    _count: Boss_kills_rankings_guildCountAggregateOutputType | null
    _avg: Boss_kills_rankings_guildAvgAggregateOutputType | null
    _sum: Boss_kills_rankings_guildSumAggregateOutputType | null
    _min: Boss_kills_rankings_guildMinAggregateOutputType | null
    _max: Boss_kills_rankings_guildMaxAggregateOutputType | null
  }

  export type Boss_kills_rankings_guildAvgAggregateOutputType = {
    season: number | null
    mode: number | null
    ranking: number | null
    points: number | null
    realm: number | null
  }

  export type Boss_kills_rankings_guildSumAggregateOutputType = {
    season: number | null
    mode: number | null
    ranking: number | null
    points: number | null
    realm: number | null
  }

  export type Boss_kills_rankings_guildMinAggregateOutputType = {
    season: number | null
    mode: number | null
    ranking: number | null
    guild: string | null
    points: number | null
    realm: number | null
  }

  export type Boss_kills_rankings_guildMaxAggregateOutputType = {
    season: number | null
    mode: number | null
    ranking: number | null
    guild: string | null
    points: number | null
    realm: number | null
  }

  export type Boss_kills_rankings_guildCountAggregateOutputType = {
    season: number
    mode: number
    ranking: number
    guild: number
    points: number
    realm: number
    _all: number
  }


  export type Boss_kills_rankings_guildAvgAggregateInputType = {
    season?: true
    mode?: true
    ranking?: true
    points?: true
    realm?: true
  }

  export type Boss_kills_rankings_guildSumAggregateInputType = {
    season?: true
    mode?: true
    ranking?: true
    points?: true
    realm?: true
  }

  export type Boss_kills_rankings_guildMinAggregateInputType = {
    season?: true
    mode?: true
    ranking?: true
    guild?: true
    points?: true
    realm?: true
  }

  export type Boss_kills_rankings_guildMaxAggregateInputType = {
    season?: true
    mode?: true
    ranking?: true
    guild?: true
    points?: true
    realm?: true
  }

  export type Boss_kills_rankings_guildCountAggregateInputType = {
    season?: true
    mode?: true
    ranking?: true
    guild?: true
    points?: true
    realm?: true
    _all?: true
  }

  export type Boss_kills_rankings_guildAggregateArgs = {
    /**
     * Filter which boss_kills_rankings_guild to aggregate.
     */
    where?: boss_kills_rankings_guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guilds to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guildOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_rankings_guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_rankings_guilds
    **/
    _count?: true | Boss_kills_rankings_guildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_rankings_guildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_rankings_guildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_rankings_guildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_rankings_guildMaxAggregateInputType
  }

  export type GetBoss_kills_rankings_guildAggregateType<T extends Boss_kills_rankings_guildAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_rankings_guild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_rankings_guild[P]>
      : GetScalarType<T[P], AggregateBoss_kills_rankings_guild[P]>
  }




  export type Boss_kills_rankings_guildGroupByArgs = {
    where?: boss_kills_rankings_guildWhereInput
    orderBy?: Enumerable<boss_kills_rankings_guildOrderByWithAggregationInput>
    by: Boss_kills_rankings_guildScalarFieldEnum[]
    having?: boss_kills_rankings_guildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_rankings_guildCountAggregateInputType | true
    _avg?: Boss_kills_rankings_guildAvgAggregateInputType
    _sum?: Boss_kills_rankings_guildSumAggregateInputType
    _min?: Boss_kills_rankings_guildMinAggregateInputType
    _max?: Boss_kills_rankings_guildMaxAggregateInputType
  }


  export type Boss_kills_rankings_guildGroupByOutputType = {
    season: number
    mode: number
    ranking: number
    guild: string | null
    points: number
    realm: number
    _count: Boss_kills_rankings_guildCountAggregateOutputType | null
    _avg: Boss_kills_rankings_guildAvgAggregateOutputType | null
    _sum: Boss_kills_rankings_guildSumAggregateOutputType | null
    _min: Boss_kills_rankings_guildMinAggregateOutputType | null
    _max: Boss_kills_rankings_guildMaxAggregateOutputType | null
  }

  type GetBoss_kills_rankings_guildGroupByPayload<T extends Boss_kills_rankings_guildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_rankings_guildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_rankings_guildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_rankings_guildGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_rankings_guildGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_rankings_guildSelect = {
    season?: boolean
    mode?: boolean
    ranking?: boolean
    guild?: boolean
    points?: boolean
    realm?: boolean
  }


  export type boss_kills_rankings_guildGetPayload<S extends boolean | null | undefined | boss_kills_rankings_guildArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_rankings_guild :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_rankings_guildArgs | boss_kills_rankings_guildFindManyArgs)
    ? boss_kills_rankings_guild 
    : S extends { select: any } & (boss_kills_rankings_guildArgs | boss_kills_rankings_guildFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof boss_kills_rankings_guild ? boss_kills_rankings_guild[P] : never
  } 
      : boss_kills_rankings_guild


  type boss_kills_rankings_guildCountArgs = 
    Omit<boss_kills_rankings_guildFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_rankings_guildCountAggregateInputType | true
    }

  export interface boss_kills_rankings_guildDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_rankings_guild that matches the filter.
     * @param {boss_kills_rankings_guildFindUniqueArgs} args - Arguments to find a Boss_kills_rankings_guild
     * @example
     * // Get one Boss_kills_rankings_guild
     * const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_rankings_guildFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_rankings_guildFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_rankings_guild'> extends True ? Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>> : Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_rankings_guild that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_rankings_guildFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_rankings_guild
     * @example
     * // Get one Boss_kills_rankings_guild
     * const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_rankings_guildFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guildFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>>

    /**
     * Find the first Boss_kills_rankings_guild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guildFindFirstArgs} args - Arguments to find a Boss_kills_rankings_guild
     * @example
     * // Get one Boss_kills_rankings_guild
     * const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_rankings_guildFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_rankings_guildFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_rankings_guild'> extends True ? Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>> : Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_rankings_guild that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guildFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_rankings_guild
     * @example
     * // Get one Boss_kills_rankings_guild
     * const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_rankings_guildFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guildFindFirstOrThrowArgs>
    ): Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>>

    /**
     * Find zero or more Boss_kills_rankings_guilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guildFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_rankings_guilds
     * const boss_kills_rankings_guilds = await prisma.boss_kills_rankings_guild.findMany()
     * 
     * // Get first 10 Boss_kills_rankings_guilds
     * const boss_kills_rankings_guilds = await prisma.boss_kills_rankings_guild.findMany({ take: 10 })
     * 
     * // Only select the `season`
     * const boss_kills_rankings_guildWithSeasonOnly = await prisma.boss_kills_rankings_guild.findMany({ select: { season: true } })
     * 
    **/
    findMany<T extends boss_kills_rankings_guildFindManyArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guildFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_rankings_guildGetPayload<T>>>

    /**
     * Create a Boss_kills_rankings_guild.
     * @param {boss_kills_rankings_guildCreateArgs} args - Arguments to create a Boss_kills_rankings_guild.
     * @example
     * // Create one Boss_kills_rankings_guild
     * const Boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.create({
     *   data: {
     *     // ... data to create a Boss_kills_rankings_guild
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_rankings_guildCreateArgs>(
      args: SelectSubset<T, boss_kills_rankings_guildCreateArgs>
    ): Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>>

    /**
     * Create many Boss_kills_rankings_guilds.
     *     @param {boss_kills_rankings_guildCreateManyArgs} args - Arguments to create many Boss_kills_rankings_guilds.
     *     @example
     *     // Create many Boss_kills_rankings_guilds
     *     const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_rankings_guildCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guildCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_rankings_guild.
     * @param {boss_kills_rankings_guildDeleteArgs} args - Arguments to delete one Boss_kills_rankings_guild.
     * @example
     * // Delete one Boss_kills_rankings_guild
     * const Boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_rankings_guild
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_rankings_guildDeleteArgs>(
      args: SelectSubset<T, boss_kills_rankings_guildDeleteArgs>
    ): Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>>

    /**
     * Update one Boss_kills_rankings_guild.
     * @param {boss_kills_rankings_guildUpdateArgs} args - Arguments to update one Boss_kills_rankings_guild.
     * @example
     * // Update one Boss_kills_rankings_guild
     * const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_rankings_guildUpdateArgs>(
      args: SelectSubset<T, boss_kills_rankings_guildUpdateArgs>
    ): Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_rankings_guilds.
     * @param {boss_kills_rankings_guildDeleteManyArgs} args - Arguments to filter Boss_kills_rankings_guilds to delete.
     * @example
     * // Delete a few Boss_kills_rankings_guilds
     * const { count } = await prisma.boss_kills_rankings_guild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_rankings_guildDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guildDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_rankings_guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_rankings_guilds
     * const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_rankings_guildUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_rankings_guildUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_rankings_guild.
     * @param {boss_kills_rankings_guildUpsertArgs} args - Arguments to update or create a Boss_kills_rankings_guild.
     * @example
     * // Update or create a Boss_kills_rankings_guild
     * const boss_kills_rankings_guild = await prisma.boss_kills_rankings_guild.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_rankings_guild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_rankings_guild we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_rankings_guildUpsertArgs>(
      args: SelectSubset<T, boss_kills_rankings_guildUpsertArgs>
    ): Prisma__boss_kills_rankings_guildClient<boss_kills_rankings_guildGetPayload<T>>

    /**
     * Count the number of Boss_kills_rankings_guilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guildCountArgs} args - Arguments to filter Boss_kills_rankings_guilds to count.
     * @example
     * // Count the number of Boss_kills_rankings_guilds
     * const count = await prisma.boss_kills_rankings_guild.count({
     *   where: {
     *     // ... the filter for the Boss_kills_rankings_guilds we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_rankings_guildCountArgs>(
      args?: Subset<T, boss_kills_rankings_guildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_rankings_guildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_rankings_guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_rankings_guildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_rankings_guildAggregateArgs>(args: Subset<T, Boss_kills_rankings_guildAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_rankings_guildAggregateType<T>>

    /**
     * Group by Boss_kills_rankings_guild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_rankings_guildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_rankings_guildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_rankings_guildGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_rankings_guildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_rankings_guildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_rankings_guildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_rankings_guild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_rankings_guildClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_rankings_guild base type for findUnique actions
   */
  export type boss_kills_rankings_guildFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * Filter, which boss_kills_rankings_guild to fetch.
     */
    where: boss_kills_rankings_guildWhereUniqueInput
  }

  /**
   * boss_kills_rankings_guild findUnique
   */
  export interface boss_kills_rankings_guildFindUniqueArgs extends boss_kills_rankings_guildFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_rankings_guild findUniqueOrThrow
   */
  export type boss_kills_rankings_guildFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * Filter, which boss_kills_rankings_guild to fetch.
     */
    where: boss_kills_rankings_guildWhereUniqueInput
  }


  /**
   * boss_kills_rankings_guild base type for findFirst actions
   */
  export type boss_kills_rankings_guildFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * Filter, which boss_kills_rankings_guild to fetch.
     */
    where?: boss_kills_rankings_guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guilds to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guildOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_rankings_guilds.
     */
    cursor?: boss_kills_rankings_guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_rankings_guilds.
     */
    distinct?: Enumerable<Boss_kills_rankings_guildScalarFieldEnum>
  }

  /**
   * boss_kills_rankings_guild findFirst
   */
  export interface boss_kills_rankings_guildFindFirstArgs extends boss_kills_rankings_guildFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_rankings_guild findFirstOrThrow
   */
  export type boss_kills_rankings_guildFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * Filter, which boss_kills_rankings_guild to fetch.
     */
    where?: boss_kills_rankings_guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guilds to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guildOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_rankings_guilds.
     */
    cursor?: boss_kills_rankings_guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_rankings_guilds.
     */
    distinct?: Enumerable<Boss_kills_rankings_guildScalarFieldEnum>
  }


  /**
   * boss_kills_rankings_guild findMany
   */
  export type boss_kills_rankings_guildFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * Filter, which boss_kills_rankings_guilds to fetch.
     */
    where?: boss_kills_rankings_guildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guilds to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guildOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_rankings_guilds.
     */
    cursor?: boss_kills_rankings_guildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guilds.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_rankings_guildScalarFieldEnum>
  }


  /**
   * boss_kills_rankings_guild create
   */
  export type boss_kills_rankings_guildCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * The data needed to create a boss_kills_rankings_guild.
     */
    data?: XOR<boss_kills_rankings_guildCreateInput, boss_kills_rankings_guildUncheckedCreateInput>
  }


  /**
   * boss_kills_rankings_guild createMany
   */
  export type boss_kills_rankings_guildCreateManyArgs = {
    /**
     * The data used to create many boss_kills_rankings_guilds.
     */
    data: Enumerable<boss_kills_rankings_guildCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_rankings_guild update
   */
  export type boss_kills_rankings_guildUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * The data needed to update a boss_kills_rankings_guild.
     */
    data: XOR<boss_kills_rankings_guildUpdateInput, boss_kills_rankings_guildUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_rankings_guild to update.
     */
    where: boss_kills_rankings_guildWhereUniqueInput
  }


  /**
   * boss_kills_rankings_guild updateMany
   */
  export type boss_kills_rankings_guildUpdateManyArgs = {
    /**
     * The data used to update boss_kills_rankings_guilds.
     */
    data: XOR<boss_kills_rankings_guildUpdateManyMutationInput, boss_kills_rankings_guildUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_rankings_guilds to update
     */
    where?: boss_kills_rankings_guildWhereInput
  }


  /**
   * boss_kills_rankings_guild upsert
   */
  export type boss_kills_rankings_guildUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * The filter to search for the boss_kills_rankings_guild to update in case it exists.
     */
    where: boss_kills_rankings_guildWhereUniqueInput
    /**
     * In case the boss_kills_rankings_guild found by the `where` argument doesn't exist, create a new boss_kills_rankings_guild with this data.
     */
    create: XOR<boss_kills_rankings_guildCreateInput, boss_kills_rankings_guildUncheckedCreateInput>
    /**
     * In case the boss_kills_rankings_guild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_rankings_guildUpdateInput, boss_kills_rankings_guildUncheckedUpdateInput>
  }


  /**
   * boss_kills_rankings_guild delete
   */
  export type boss_kills_rankings_guildDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
    /**
     * Filter which boss_kills_rankings_guild to delete.
     */
    where: boss_kills_rankings_guildWhereUniqueInput
  }


  /**
   * boss_kills_rankings_guild deleteMany
   */
  export type boss_kills_rankings_guildDeleteManyArgs = {
    /**
     * Filter which boss_kills_rankings_guilds to delete
     */
    where?: boss_kills_rankings_guildWhereInput
  }


  /**
   * boss_kills_rankings_guild without action
   */
  export type boss_kills_rankings_guildArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild
     */
    select?: boss_kills_rankings_guildSelect | null
  }



  /**
   * Model boss_kills_rankings_guild_cache
   */


  export type AggregateBoss_kills_rankings_guild_cache = {
    _count: Boss_kills_rankings_guild_cacheCountAggregateOutputType | null
    _avg: Boss_kills_rankings_guild_cacheAvgAggregateOutputType | null
    _sum: Boss_kills_rankings_guild_cacheSumAggregateOutputType | null
    _min: Boss_kills_rankings_guild_cacheMinAggregateOutputType | null
    _max: Boss_kills_rankings_guild_cacheMaxAggregateOutputType | null
  }

  export type Boss_kills_rankings_guild_cacheAvgAggregateOutputType = {
    id: number | null
    entry: number | null
    mode: number | null
    realm: number | null
    length: number | null
    points: number | null
    ranking: number | null
    season: number | null
  }

  export type Boss_kills_rankings_guild_cacheSumAggregateOutputType = {
    id: number | null
    entry: number | null
    mode: number | null
    realm: number | null
    length: number | null
    points: number | null
    ranking: number | null
    season: number | null
  }

  export type Boss_kills_rankings_guild_cacheMinAggregateOutputType = {
    id: number | null
    entry: number | null
    mode: number | null
    guild: string | null
    time: Date | null
    realm: number | null
    length: number | null
    points: number | null
    ranking: number | null
    season: number | null
  }

  export type Boss_kills_rankings_guild_cacheMaxAggregateOutputType = {
    id: number | null
    entry: number | null
    mode: number | null
    guild: string | null
    time: Date | null
    realm: number | null
    length: number | null
    points: number | null
    ranking: number | null
    season: number | null
  }

  export type Boss_kills_rankings_guild_cacheCountAggregateOutputType = {
    id: number
    entry: number
    mode: number
    guild: number
    time: number
    realm: number
    length: number
    points: number
    ranking: number
    season: number
    _all: number
  }


  export type Boss_kills_rankings_guild_cacheAvgAggregateInputType = {
    id?: true
    entry?: true
    mode?: true
    realm?: true
    length?: true
    points?: true
    ranking?: true
    season?: true
  }

  export type Boss_kills_rankings_guild_cacheSumAggregateInputType = {
    id?: true
    entry?: true
    mode?: true
    realm?: true
    length?: true
    points?: true
    ranking?: true
    season?: true
  }

  export type Boss_kills_rankings_guild_cacheMinAggregateInputType = {
    id?: true
    entry?: true
    mode?: true
    guild?: true
    time?: true
    realm?: true
    length?: true
    points?: true
    ranking?: true
    season?: true
  }

  export type Boss_kills_rankings_guild_cacheMaxAggregateInputType = {
    id?: true
    entry?: true
    mode?: true
    guild?: true
    time?: true
    realm?: true
    length?: true
    points?: true
    ranking?: true
    season?: true
  }

  export type Boss_kills_rankings_guild_cacheCountAggregateInputType = {
    id?: true
    entry?: true
    mode?: true
    guild?: true
    time?: true
    realm?: true
    length?: true
    points?: true
    ranking?: true
    season?: true
    _all?: true
  }

  export type Boss_kills_rankings_guild_cacheAggregateArgs = {
    /**
     * Filter which boss_kills_rankings_guild_cache to aggregate.
     */
    where?: boss_kills_rankings_guild_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guild_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guild_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: boss_kills_rankings_guild_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guild_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guild_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned boss_kills_rankings_guild_caches
    **/
    _count?: true | Boss_kills_rankings_guild_cacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Boss_kills_rankings_guild_cacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Boss_kills_rankings_guild_cacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Boss_kills_rankings_guild_cacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Boss_kills_rankings_guild_cacheMaxAggregateInputType
  }

  export type GetBoss_kills_rankings_guild_cacheAggregateType<T extends Boss_kills_rankings_guild_cacheAggregateArgs> = {
        [P in keyof T & keyof AggregateBoss_kills_rankings_guild_cache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoss_kills_rankings_guild_cache[P]>
      : GetScalarType<T[P], AggregateBoss_kills_rankings_guild_cache[P]>
  }




  export type Boss_kills_rankings_guild_cacheGroupByArgs = {
    where?: boss_kills_rankings_guild_cacheWhereInput
    orderBy?: Enumerable<boss_kills_rankings_guild_cacheOrderByWithAggregationInput>
    by: Boss_kills_rankings_guild_cacheScalarFieldEnum[]
    having?: boss_kills_rankings_guild_cacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Boss_kills_rankings_guild_cacheCountAggregateInputType | true
    _avg?: Boss_kills_rankings_guild_cacheAvgAggregateInputType
    _sum?: Boss_kills_rankings_guild_cacheSumAggregateInputType
    _min?: Boss_kills_rankings_guild_cacheMinAggregateInputType
    _max?: Boss_kills_rankings_guild_cacheMaxAggregateInputType
  }


  export type Boss_kills_rankings_guild_cacheGroupByOutputType = {
    id: number
    entry: number | null
    mode: number | null
    guild: string | null
    time: Date | null
    realm: number | null
    length: number
    points: number
    ranking: number
    season: number
    _count: Boss_kills_rankings_guild_cacheCountAggregateOutputType | null
    _avg: Boss_kills_rankings_guild_cacheAvgAggregateOutputType | null
    _sum: Boss_kills_rankings_guild_cacheSumAggregateOutputType | null
    _min: Boss_kills_rankings_guild_cacheMinAggregateOutputType | null
    _max: Boss_kills_rankings_guild_cacheMaxAggregateOutputType | null
  }

  type GetBoss_kills_rankings_guild_cacheGroupByPayload<T extends Boss_kills_rankings_guild_cacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Boss_kills_rankings_guild_cacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Boss_kills_rankings_guild_cacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Boss_kills_rankings_guild_cacheGroupByOutputType[P]>
            : GetScalarType<T[P], Boss_kills_rankings_guild_cacheGroupByOutputType[P]>
        }
      >
    >


  export type boss_kills_rankings_guild_cacheSelect = {
    id?: boolean
    entry?: boolean
    mode?: boolean
    guild?: boolean
    time?: boolean
    realm?: boolean
    length?: boolean
    points?: boolean
    ranking?: boolean
    season?: boolean
  }


  export type boss_kills_rankings_guild_cacheGetPayload<S extends boolean | null | undefined | boss_kills_rankings_guild_cacheArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? boss_kills_rankings_guild_cache :
    S extends undefined ? never :
    S extends { include: any } & (boss_kills_rankings_guild_cacheArgs | boss_kills_rankings_guild_cacheFindManyArgs)
    ? boss_kills_rankings_guild_cache 
    : S extends { select: any } & (boss_kills_rankings_guild_cacheArgs | boss_kills_rankings_guild_cacheFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof boss_kills_rankings_guild_cache ? boss_kills_rankings_guild_cache[P] : never
  } 
      : boss_kills_rankings_guild_cache


  type boss_kills_rankings_guild_cacheCountArgs = 
    Omit<boss_kills_rankings_guild_cacheFindManyArgs, 'select' | 'include'> & {
      select?: Boss_kills_rankings_guild_cacheCountAggregateInputType | true
    }

  export interface boss_kills_rankings_guild_cacheDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Boss_kills_rankings_guild_cache that matches the filter.
     * @param {boss_kills_rankings_guild_cacheFindUniqueArgs} args - Arguments to find a Boss_kills_rankings_guild_cache
     * @example
     * // Get one Boss_kills_rankings_guild_cache
     * const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends boss_kills_rankings_guild_cacheFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, boss_kills_rankings_guild_cacheFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'boss_kills_rankings_guild_cache'> extends True ? Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>> : Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T> | null, null>

    /**
     * Find one Boss_kills_rankings_guild_cache that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {boss_kills_rankings_guild_cacheFindUniqueOrThrowArgs} args - Arguments to find a Boss_kills_rankings_guild_cache
     * @example
     * // Get one Boss_kills_rankings_guild_cache
     * const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends boss_kills_rankings_guild_cacheFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guild_cacheFindUniqueOrThrowArgs>
    ): Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>>

    /**
     * Find the first Boss_kills_rankings_guild_cache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guild_cacheFindFirstArgs} args - Arguments to find a Boss_kills_rankings_guild_cache
     * @example
     * // Get one Boss_kills_rankings_guild_cache
     * const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends boss_kills_rankings_guild_cacheFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, boss_kills_rankings_guild_cacheFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'boss_kills_rankings_guild_cache'> extends True ? Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>> : Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T> | null, null>

    /**
     * Find the first Boss_kills_rankings_guild_cache that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guild_cacheFindFirstOrThrowArgs} args - Arguments to find a Boss_kills_rankings_guild_cache
     * @example
     * // Get one Boss_kills_rankings_guild_cache
     * const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends boss_kills_rankings_guild_cacheFindFirstOrThrowArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guild_cacheFindFirstOrThrowArgs>
    ): Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>>

    /**
     * Find zero or more Boss_kills_rankings_guild_caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guild_cacheFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boss_kills_rankings_guild_caches
     * const boss_kills_rankings_guild_caches = await prisma.boss_kills_rankings_guild_cache.findMany()
     * 
     * // Get first 10 Boss_kills_rankings_guild_caches
     * const boss_kills_rankings_guild_caches = await prisma.boss_kills_rankings_guild_cache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boss_kills_rankings_guild_cacheWithIdOnly = await prisma.boss_kills_rankings_guild_cache.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends boss_kills_rankings_guild_cacheFindManyArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guild_cacheFindManyArgs>
    ): Prisma.PrismaPromise<Array<boss_kills_rankings_guild_cacheGetPayload<T>>>

    /**
     * Create a Boss_kills_rankings_guild_cache.
     * @param {boss_kills_rankings_guild_cacheCreateArgs} args - Arguments to create a Boss_kills_rankings_guild_cache.
     * @example
     * // Create one Boss_kills_rankings_guild_cache
     * const Boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.create({
     *   data: {
     *     // ... data to create a Boss_kills_rankings_guild_cache
     *   }
     * })
     * 
    **/
    create<T extends boss_kills_rankings_guild_cacheCreateArgs>(
      args: SelectSubset<T, boss_kills_rankings_guild_cacheCreateArgs>
    ): Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>>

    /**
     * Create many Boss_kills_rankings_guild_caches.
     *     @param {boss_kills_rankings_guild_cacheCreateManyArgs} args - Arguments to create many Boss_kills_rankings_guild_caches.
     *     @example
     *     // Create many Boss_kills_rankings_guild_caches
     *     const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends boss_kills_rankings_guild_cacheCreateManyArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guild_cacheCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Boss_kills_rankings_guild_cache.
     * @param {boss_kills_rankings_guild_cacheDeleteArgs} args - Arguments to delete one Boss_kills_rankings_guild_cache.
     * @example
     * // Delete one Boss_kills_rankings_guild_cache
     * const Boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.delete({
     *   where: {
     *     // ... filter to delete one Boss_kills_rankings_guild_cache
     *   }
     * })
     * 
    **/
    delete<T extends boss_kills_rankings_guild_cacheDeleteArgs>(
      args: SelectSubset<T, boss_kills_rankings_guild_cacheDeleteArgs>
    ): Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>>

    /**
     * Update one Boss_kills_rankings_guild_cache.
     * @param {boss_kills_rankings_guild_cacheUpdateArgs} args - Arguments to update one Boss_kills_rankings_guild_cache.
     * @example
     * // Update one Boss_kills_rankings_guild_cache
     * const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends boss_kills_rankings_guild_cacheUpdateArgs>(
      args: SelectSubset<T, boss_kills_rankings_guild_cacheUpdateArgs>
    ): Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>>

    /**
     * Delete zero or more Boss_kills_rankings_guild_caches.
     * @param {boss_kills_rankings_guild_cacheDeleteManyArgs} args - Arguments to filter Boss_kills_rankings_guild_caches to delete.
     * @example
     * // Delete a few Boss_kills_rankings_guild_caches
     * const { count } = await prisma.boss_kills_rankings_guild_cache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends boss_kills_rankings_guild_cacheDeleteManyArgs>(
      args?: SelectSubset<T, boss_kills_rankings_guild_cacheDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boss_kills_rankings_guild_caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guild_cacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boss_kills_rankings_guild_caches
     * const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends boss_kills_rankings_guild_cacheUpdateManyArgs>(
      args: SelectSubset<T, boss_kills_rankings_guild_cacheUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Boss_kills_rankings_guild_cache.
     * @param {boss_kills_rankings_guild_cacheUpsertArgs} args - Arguments to update or create a Boss_kills_rankings_guild_cache.
     * @example
     * // Update or create a Boss_kills_rankings_guild_cache
     * const boss_kills_rankings_guild_cache = await prisma.boss_kills_rankings_guild_cache.upsert({
     *   create: {
     *     // ... data to create a Boss_kills_rankings_guild_cache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Boss_kills_rankings_guild_cache we want to update
     *   }
     * })
    **/
    upsert<T extends boss_kills_rankings_guild_cacheUpsertArgs>(
      args: SelectSubset<T, boss_kills_rankings_guild_cacheUpsertArgs>
    ): Prisma__boss_kills_rankings_guild_cacheClient<boss_kills_rankings_guild_cacheGetPayload<T>>

    /**
     * Count the number of Boss_kills_rankings_guild_caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {boss_kills_rankings_guild_cacheCountArgs} args - Arguments to filter Boss_kills_rankings_guild_caches to count.
     * @example
     * // Count the number of Boss_kills_rankings_guild_caches
     * const count = await prisma.boss_kills_rankings_guild_cache.count({
     *   where: {
     *     // ... the filter for the Boss_kills_rankings_guild_caches we want to count
     *   }
     * })
    **/
    count<T extends boss_kills_rankings_guild_cacheCountArgs>(
      args?: Subset<T, boss_kills_rankings_guild_cacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Boss_kills_rankings_guild_cacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Boss_kills_rankings_guild_cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_rankings_guild_cacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Boss_kills_rankings_guild_cacheAggregateArgs>(args: Subset<T, Boss_kills_rankings_guild_cacheAggregateArgs>): Prisma.PrismaPromise<GetBoss_kills_rankings_guild_cacheAggregateType<T>>

    /**
     * Group by Boss_kills_rankings_guild_cache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Boss_kills_rankings_guild_cacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Boss_kills_rankings_guild_cacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Boss_kills_rankings_guild_cacheGroupByArgs['orderBy'] }
        : { orderBy?: Boss_kills_rankings_guild_cacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Boss_kills_rankings_guild_cacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoss_kills_rankings_guild_cacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for boss_kills_rankings_guild_cache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__boss_kills_rankings_guild_cacheClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * boss_kills_rankings_guild_cache base type for findUnique actions
   */
  export type boss_kills_rankings_guild_cacheFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * Filter, which boss_kills_rankings_guild_cache to fetch.
     */
    where: boss_kills_rankings_guild_cacheWhereUniqueInput
  }

  /**
   * boss_kills_rankings_guild_cache findUnique
   */
  export interface boss_kills_rankings_guild_cacheFindUniqueArgs extends boss_kills_rankings_guild_cacheFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_rankings_guild_cache findUniqueOrThrow
   */
  export type boss_kills_rankings_guild_cacheFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * Filter, which boss_kills_rankings_guild_cache to fetch.
     */
    where: boss_kills_rankings_guild_cacheWhereUniqueInput
  }


  /**
   * boss_kills_rankings_guild_cache base type for findFirst actions
   */
  export type boss_kills_rankings_guild_cacheFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * Filter, which boss_kills_rankings_guild_cache to fetch.
     */
    where?: boss_kills_rankings_guild_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guild_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guild_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_rankings_guild_caches.
     */
    cursor?: boss_kills_rankings_guild_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guild_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guild_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_rankings_guild_caches.
     */
    distinct?: Enumerable<Boss_kills_rankings_guild_cacheScalarFieldEnum>
  }

  /**
   * boss_kills_rankings_guild_cache findFirst
   */
  export interface boss_kills_rankings_guild_cacheFindFirstArgs extends boss_kills_rankings_guild_cacheFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * boss_kills_rankings_guild_cache findFirstOrThrow
   */
  export type boss_kills_rankings_guild_cacheFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * Filter, which boss_kills_rankings_guild_cache to fetch.
     */
    where?: boss_kills_rankings_guild_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guild_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guild_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for boss_kills_rankings_guild_caches.
     */
    cursor?: boss_kills_rankings_guild_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guild_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guild_caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of boss_kills_rankings_guild_caches.
     */
    distinct?: Enumerable<Boss_kills_rankings_guild_cacheScalarFieldEnum>
  }


  /**
   * boss_kills_rankings_guild_cache findMany
   */
  export type boss_kills_rankings_guild_cacheFindManyArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * Filter, which boss_kills_rankings_guild_caches to fetch.
     */
    where?: boss_kills_rankings_guild_cacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of boss_kills_rankings_guild_caches to fetch.
     */
    orderBy?: Enumerable<boss_kills_rankings_guild_cacheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing boss_kills_rankings_guild_caches.
     */
    cursor?: boss_kills_rankings_guild_cacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` boss_kills_rankings_guild_caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` boss_kills_rankings_guild_caches.
     */
    skip?: number
    distinct?: Enumerable<Boss_kills_rankings_guild_cacheScalarFieldEnum>
  }


  /**
   * boss_kills_rankings_guild_cache create
   */
  export type boss_kills_rankings_guild_cacheCreateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * The data needed to create a boss_kills_rankings_guild_cache.
     */
    data: XOR<boss_kills_rankings_guild_cacheCreateInput, boss_kills_rankings_guild_cacheUncheckedCreateInput>
  }


  /**
   * boss_kills_rankings_guild_cache createMany
   */
  export type boss_kills_rankings_guild_cacheCreateManyArgs = {
    /**
     * The data used to create many boss_kills_rankings_guild_caches.
     */
    data: Enumerable<boss_kills_rankings_guild_cacheCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * boss_kills_rankings_guild_cache update
   */
  export type boss_kills_rankings_guild_cacheUpdateArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * The data needed to update a boss_kills_rankings_guild_cache.
     */
    data: XOR<boss_kills_rankings_guild_cacheUpdateInput, boss_kills_rankings_guild_cacheUncheckedUpdateInput>
    /**
     * Choose, which boss_kills_rankings_guild_cache to update.
     */
    where: boss_kills_rankings_guild_cacheWhereUniqueInput
  }


  /**
   * boss_kills_rankings_guild_cache updateMany
   */
  export type boss_kills_rankings_guild_cacheUpdateManyArgs = {
    /**
     * The data used to update boss_kills_rankings_guild_caches.
     */
    data: XOR<boss_kills_rankings_guild_cacheUpdateManyMutationInput, boss_kills_rankings_guild_cacheUncheckedUpdateManyInput>
    /**
     * Filter which boss_kills_rankings_guild_caches to update
     */
    where?: boss_kills_rankings_guild_cacheWhereInput
  }


  /**
   * boss_kills_rankings_guild_cache upsert
   */
  export type boss_kills_rankings_guild_cacheUpsertArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * The filter to search for the boss_kills_rankings_guild_cache to update in case it exists.
     */
    where: boss_kills_rankings_guild_cacheWhereUniqueInput
    /**
     * In case the boss_kills_rankings_guild_cache found by the `where` argument doesn't exist, create a new boss_kills_rankings_guild_cache with this data.
     */
    create: XOR<boss_kills_rankings_guild_cacheCreateInput, boss_kills_rankings_guild_cacheUncheckedCreateInput>
    /**
     * In case the boss_kills_rankings_guild_cache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<boss_kills_rankings_guild_cacheUpdateInput, boss_kills_rankings_guild_cacheUncheckedUpdateInput>
  }


  /**
   * boss_kills_rankings_guild_cache delete
   */
  export type boss_kills_rankings_guild_cacheDeleteArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
    /**
     * Filter which boss_kills_rankings_guild_cache to delete.
     */
    where: boss_kills_rankings_guild_cacheWhereUniqueInput
  }


  /**
   * boss_kills_rankings_guild_cache deleteMany
   */
  export type boss_kills_rankings_guild_cacheDeleteManyArgs = {
    /**
     * Filter which boss_kills_rankings_guild_caches to delete
     */
    where?: boss_kills_rankings_guild_cacheWhereInput
  }


  /**
   * boss_kills_rankings_guild_cache without action
   */
  export type boss_kills_rankings_guild_cacheArgs = {
    /**
     * Select specific fields to fetch from the boss_kills_rankings_guild_cache
     */
    select?: boss_kills_rankings_guild_cacheSelect | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Boss_killsScalarFieldEnum: {
    id: 'id',
    reserver: 'reserver',
    entry: 'entry',
    map: 'map',
    mode: 'mode',
    guild: 'guild',
    time: 'time',
    realm: 'realm',
    length: 'length',
    wipes: 'wipes',
    deaths: 'deaths',
    ressUsed: 'ressUsed',
    progressLenght: 'progressLenght',
    hidden: 'hidden',
    cleanupDisabled: 'cleanupDisabled',
    instanceId: 'instanceId',
    newGuildName: 'newGuildName'
  };

  export type Boss_killsScalarFieldEnum = (typeof Boss_killsScalarFieldEnum)[keyof typeof Boss_killsScalarFieldEnum]


  export const Boss_kills_deathsScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    time: 'time'
  };

  export type Boss_kills_deathsScalarFieldEnum = (typeof Boss_kills_deathsScalarFieldEnum)[keyof typeof Boss_kills_deathsScalarFieldEnum]


  export const Boss_kills_lootScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    count: 'count',
    randomPropertyId: 'randomPropertyId',
    randomSuffixId: 'randomSuffixId'
  };

  export type Boss_kills_lootScalarFieldEnum = (typeof Boss_kills_lootScalarFieldEnum)[keyof typeof Boss_kills_lootScalarFieldEnum]


  export const Boss_kills_mapsScalarFieldEnum: {
    id: 'id',
    time: 'time',
    encounterDamage: 'encounterDamage',
    encounterHeal: 'encounterHeal',
    raidDamage: 'raidDamage',
    raidHeal: 'raidHeal'
  };

  export type Boss_kills_mapsScalarFieldEnum = (typeof Boss_kills_mapsScalarFieldEnum)[keyof typeof Boss_kills_mapsScalarFieldEnum]


  export const Boss_kills_playersScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    talent_spec: 'talent_spec',
    avg_item_lvl: 'avg_item_lvl',
    dmgDone: 'dmgDone',
    healingDone: 'healingDone',
    overhealingDone: 'overhealingDone',
    absorbDone: 'absorbDone',
    dmgTaken: 'dmgTaken',
    dmgAbsorbed: 'dmgAbsorbed',
    healingTaken: 'healingTaken',
    usefullTime: 'usefullTime',
    dispels: 'dispels',
    interrupts: 'interrupts',
    hidden: 'hidden'
  };

  export type Boss_kills_playersScalarFieldEnum = (typeof Boss_kills_playersScalarFieldEnum)[keyof typeof Boss_kills_playersScalarFieldEnum]


  export const Boss_kills_progressScalarFieldEnum: {
    mode: 'mode',
    season: 'season',
    position: 'position',
    progress: 'progress',
    finished: 'finished',
    guild: 'guild',
    realm: 'realm',
    raid1: 'raid1',
    raid2: 'raid2',
    raid3: 'raid3'
  };

  export type Boss_kills_progressScalarFieldEnum = (typeof Boss_kills_progressScalarFieldEnum)[keyof typeof Boss_kills_progressScalarFieldEnum]


  export const Boss_kills_progress_cacheScalarFieldEnum: {
    season: 'season',
    mode: 'mode',
    entry: 'entry',
    position: 'position',
    guild: 'guild',
    first_kill: 'first_kill',
    realm: 'realm',
    length: 'length',
    kill_id: 'kill_id'
  };

  export type Boss_kills_progress_cacheScalarFieldEnum = (typeof Boss_kills_progress_cacheScalarFieldEnum)[keyof typeof Boss_kills_progress_cacheScalarFieldEnum]


  export const Boss_kills_rankings_guildScalarFieldEnum: {
    season: 'season',
    mode: 'mode',
    ranking: 'ranking',
    guild: 'guild',
    points: 'points',
    realm: 'realm'
  };

  export type Boss_kills_rankings_guildScalarFieldEnum = (typeof Boss_kills_rankings_guildScalarFieldEnum)[keyof typeof Boss_kills_rankings_guildScalarFieldEnum]


  export const Boss_kills_rankings_guild_cacheScalarFieldEnum: {
    id: 'id',
    entry: 'entry',
    mode: 'mode',
    guild: 'guild',
    time: 'time',
    realm: 'realm',
    length: 'length',
    points: 'points',
    ranking: 'ranking',
    season: 'season'
  };

  export type Boss_kills_rankings_guild_cacheScalarFieldEnum = (typeof Boss_kills_rankings_guild_cacheScalarFieldEnum)[keyof typeof Boss_kills_rankings_guild_cacheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type boss_killsWhereInput = {
    AND?: Enumerable<boss_killsWhereInput>
    OR?: Enumerable<boss_killsWhereInput>
    NOT?: Enumerable<boss_killsWhereInput>
    id?: IntFilter | number
    reserver?: IntNullableFilter | number | null
    entry?: IntFilter | number
    map?: StringFilter | string
    mode?: IntFilter | number
    guild?: StringFilter | string
    time?: DateTimeNullableFilter | Date | string | null
    realm?: IntFilter | number
    length?: IntFilter | number
    wipes?: IntFilter | number
    deaths?: IntFilter | number
    ressUsed?: IntFilter | number
    progressLenght?: IntFilter | number
    hidden?: BoolFilter | boolean
    cleanupDisabled?: BoolFilter | boolean
    instanceId?: IntFilter | number
    newGuildName?: StringNullableFilter | string | null
    boss_kills_deaths?: Boss_kills_deathsListRelationFilter
    boss_kills_maps?: Boss_kills_mapsListRelationFilter
    boss_kills_players?: Boss_kills_playersListRelationFilter
  }

  export type boss_killsOrderByWithRelationInput = {
    id?: SortOrder
    reserver?: SortOrderInput | SortOrder
    entry?: SortOrder
    map?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrderInput | SortOrder
    realm?: SortOrder
    length?: SortOrder
    wipes?: SortOrder
    deaths?: SortOrder
    ressUsed?: SortOrder
    progressLenght?: SortOrder
    hidden?: SortOrder
    cleanupDisabled?: SortOrder
    instanceId?: SortOrder
    newGuildName?: SortOrderInput | SortOrder
    boss_kills_deaths?: boss_kills_deathsOrderByRelationAggregateInput
    boss_kills_maps?: boss_kills_mapsOrderByRelationAggregateInput
    boss_kills_players?: boss_kills_playersOrderByRelationAggregateInput
  }

  export type boss_killsWhereUniqueInput = {
    id?: number
  }

  export type boss_killsOrderByWithAggregationInput = {
    id?: SortOrder
    reserver?: SortOrderInput | SortOrder
    entry?: SortOrder
    map?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrderInput | SortOrder
    realm?: SortOrder
    length?: SortOrder
    wipes?: SortOrder
    deaths?: SortOrder
    ressUsed?: SortOrder
    progressLenght?: SortOrder
    hidden?: SortOrder
    cleanupDisabled?: SortOrder
    instanceId?: SortOrder
    newGuildName?: SortOrderInput | SortOrder
    _count?: boss_killsCountOrderByAggregateInput
    _avg?: boss_killsAvgOrderByAggregateInput
    _max?: boss_killsMaxOrderByAggregateInput
    _min?: boss_killsMinOrderByAggregateInput
    _sum?: boss_killsSumOrderByAggregateInput
  }

  export type boss_killsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_killsScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_killsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_killsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    reserver?: IntNullableWithAggregatesFilter | number | null
    entry?: IntWithAggregatesFilter | number
    map?: StringWithAggregatesFilter | string
    mode?: IntWithAggregatesFilter | number
    guild?: StringWithAggregatesFilter | string
    time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    realm?: IntWithAggregatesFilter | number
    length?: IntWithAggregatesFilter | number
    wipes?: IntWithAggregatesFilter | number
    deaths?: IntWithAggregatesFilter | number
    ressUsed?: IntWithAggregatesFilter | number
    progressLenght?: IntWithAggregatesFilter | number
    hidden?: BoolWithAggregatesFilter | boolean
    cleanupDisabled?: BoolWithAggregatesFilter | boolean
    instanceId?: IntWithAggregatesFilter | number
    newGuildName?: StringNullableWithAggregatesFilter | string | null
  }

  export type boss_kills_deathsWhereInput = {
    AND?: Enumerable<boss_kills_deathsWhereInput>
    OR?: Enumerable<boss_kills_deathsWhereInput>
    NOT?: Enumerable<boss_kills_deathsWhereInput>
    id?: IntFilter | number
    guid?: IntFilter | number
    time?: IntFilter | number
    boss_kills?: XOR<Boss_killsRelationFilter, boss_killsWhereInput>
  }

  export type boss_kills_deathsOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    time?: SortOrder
    boss_kills?: boss_killsOrderByWithRelationInput
  }

  export type boss_kills_deathsWhereUniqueInput = {
    id_guid_time?: boss_kills_deathsIdGuidTimeCompoundUniqueInput
  }

  export type boss_kills_deathsOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    time?: SortOrder
    _count?: boss_kills_deathsCountOrderByAggregateInput
    _avg?: boss_kills_deathsAvgOrderByAggregateInput
    _max?: boss_kills_deathsMaxOrderByAggregateInput
    _min?: boss_kills_deathsMinOrderByAggregateInput
    _sum?: boss_kills_deathsSumOrderByAggregateInput
  }

  export type boss_kills_deathsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_deathsScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_deathsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_deathsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    guid?: IntWithAggregatesFilter | number
    time?: IntWithAggregatesFilter | number
  }

  export type boss_kills_lootWhereInput = {
    AND?: Enumerable<boss_kills_lootWhereInput>
    OR?: Enumerable<boss_kills_lootWhereInput>
    NOT?: Enumerable<boss_kills_lootWhereInput>
    id?: IntFilter | number
    itemId?: IntFilter | number
    count?: IntFilter | number
    randomPropertyId?: IntFilter | number
    randomSuffixId?: IntFilter | number
  }

  export type boss_kills_lootOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    randomPropertyId?: SortOrder
    randomSuffixId?: SortOrder
  }

  export type boss_kills_lootWhereUniqueInput = {
    id_itemId?: boss_kills_lootIdItemIdCompoundUniqueInput
  }

  export type boss_kills_lootOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    randomPropertyId?: SortOrder
    randomSuffixId?: SortOrder
    _count?: boss_kills_lootCountOrderByAggregateInput
    _avg?: boss_kills_lootAvgOrderByAggregateInput
    _max?: boss_kills_lootMaxOrderByAggregateInput
    _min?: boss_kills_lootMinOrderByAggregateInput
    _sum?: boss_kills_lootSumOrderByAggregateInput
  }

  export type boss_kills_lootScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_lootScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_lootScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_lootScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    itemId?: IntWithAggregatesFilter | number
    count?: IntWithAggregatesFilter | number
    randomPropertyId?: IntWithAggregatesFilter | number
    randomSuffixId?: IntWithAggregatesFilter | number
  }

  export type boss_kills_mapsWhereInput = {
    AND?: Enumerable<boss_kills_mapsWhereInput>
    OR?: Enumerable<boss_kills_mapsWhereInput>
    NOT?: Enumerable<boss_kills_mapsWhereInput>
    id?: IntFilter | number
    time?: IntFilter | number
    encounterDamage?: BigIntFilter | bigint | number
    encounterHeal?: BigIntFilter | bigint | number
    raidDamage?: BigIntFilter | bigint | number
    raidHeal?: BigIntFilter | bigint | number
    boss_kills?: XOR<Boss_killsRelationFilter, boss_killsWhereInput>
  }

  export type boss_kills_mapsOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    encounterDamage?: SortOrder
    encounterHeal?: SortOrder
    raidDamage?: SortOrder
    raidHeal?: SortOrder
    boss_kills?: boss_killsOrderByWithRelationInput
  }

  export type boss_kills_mapsWhereUniqueInput = {
    id_time?: boss_kills_mapsIdTimeCompoundUniqueInput
  }

  export type boss_kills_mapsOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    encounterDamage?: SortOrder
    encounterHeal?: SortOrder
    raidDamage?: SortOrder
    raidHeal?: SortOrder
    _count?: boss_kills_mapsCountOrderByAggregateInput
    _avg?: boss_kills_mapsAvgOrderByAggregateInput
    _max?: boss_kills_mapsMaxOrderByAggregateInput
    _min?: boss_kills_mapsMinOrderByAggregateInput
    _sum?: boss_kills_mapsSumOrderByAggregateInput
  }

  export type boss_kills_mapsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_mapsScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_mapsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_mapsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    time?: IntWithAggregatesFilter | number
    encounterDamage?: BigIntWithAggregatesFilter | bigint | number
    encounterHeal?: BigIntWithAggregatesFilter | bigint | number
    raidDamage?: BigIntWithAggregatesFilter | bigint | number
    raidHeal?: BigIntWithAggregatesFilter | bigint | number
  }

  export type boss_kills_playersWhereInput = {
    AND?: Enumerable<boss_kills_playersWhereInput>
    OR?: Enumerable<boss_kills_playersWhereInput>
    NOT?: Enumerable<boss_kills_playersWhereInput>
    id?: IntFilter | number
    guid?: IntFilter | number
    talent_spec?: IntFilter | number
    avg_item_lvl?: FloatFilter | number
    dmgDone?: BigIntFilter | bigint | number
    healingDone?: BigIntFilter | bigint | number
    overhealingDone?: BigIntFilter | bigint | number
    absorbDone?: BigIntFilter | bigint | number
    dmgTaken?: BigIntFilter | bigint | number
    dmgAbsorbed?: BigIntFilter | bigint | number
    healingTaken?: BigIntFilter | bigint | number
    usefullTime?: IntFilter | number
    dispels?: IntFilter | number
    interrupts?: IntFilter | number
    hidden?: BoolFilter | boolean
    boss_kills?: XOR<Boss_killsRelationFilter, boss_killsWhereInput>
  }

  export type boss_kills_playersOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    talent_spec?: SortOrder
    avg_item_lvl?: SortOrder
    dmgDone?: SortOrder
    healingDone?: SortOrder
    overhealingDone?: SortOrder
    absorbDone?: SortOrder
    dmgTaken?: SortOrder
    dmgAbsorbed?: SortOrder
    healingTaken?: SortOrder
    usefullTime?: SortOrder
    dispels?: SortOrder
    interrupts?: SortOrder
    hidden?: SortOrder
    boss_kills?: boss_killsOrderByWithRelationInput
  }

  export type boss_kills_playersWhereUniqueInput = {
    id_guid?: boss_kills_playersIdGuidCompoundUniqueInput
  }

  export type boss_kills_playersOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    talent_spec?: SortOrder
    avg_item_lvl?: SortOrder
    dmgDone?: SortOrder
    healingDone?: SortOrder
    overhealingDone?: SortOrder
    absorbDone?: SortOrder
    dmgTaken?: SortOrder
    dmgAbsorbed?: SortOrder
    healingTaken?: SortOrder
    usefullTime?: SortOrder
    dispels?: SortOrder
    interrupts?: SortOrder
    hidden?: SortOrder
    _count?: boss_kills_playersCountOrderByAggregateInput
    _avg?: boss_kills_playersAvgOrderByAggregateInput
    _max?: boss_kills_playersMaxOrderByAggregateInput
    _min?: boss_kills_playersMinOrderByAggregateInput
    _sum?: boss_kills_playersSumOrderByAggregateInput
  }

  export type boss_kills_playersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_playersScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_playersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_playersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    guid?: IntWithAggregatesFilter | number
    talent_spec?: IntWithAggregatesFilter | number
    avg_item_lvl?: FloatWithAggregatesFilter | number
    dmgDone?: BigIntWithAggregatesFilter | bigint | number
    healingDone?: BigIntWithAggregatesFilter | bigint | number
    overhealingDone?: BigIntWithAggregatesFilter | bigint | number
    absorbDone?: BigIntWithAggregatesFilter | bigint | number
    dmgTaken?: BigIntWithAggregatesFilter | bigint | number
    dmgAbsorbed?: BigIntWithAggregatesFilter | bigint | number
    healingTaken?: BigIntWithAggregatesFilter | bigint | number
    usefullTime?: IntWithAggregatesFilter | number
    dispels?: IntWithAggregatesFilter | number
    interrupts?: IntWithAggregatesFilter | number
    hidden?: BoolWithAggregatesFilter | boolean
  }

  export type boss_kills_progressWhereInput = {
    AND?: Enumerable<boss_kills_progressWhereInput>
    OR?: Enumerable<boss_kills_progressWhereInput>
    NOT?: Enumerable<boss_kills_progressWhereInput>
    mode?: IntFilter | number
    season?: IntFilter | number
    position?: IntFilter | number
    progress?: IntFilter | number
    finished?: DateTimeNullableFilter | Date | string | null
    guild?: StringNullableFilter | string | null
    realm?: IntFilter | number
    raid1?: IntFilter | number
    raid2?: IntFilter | number
    raid3?: IntFilter | number
  }

  export type boss_kills_progressOrderByWithRelationInput = {
    mode?: SortOrder
    season?: SortOrder
    position?: SortOrder
    progress?: SortOrder
    finished?: SortOrderInput | SortOrder
    guild?: SortOrderInput | SortOrder
    realm?: SortOrder
    raid1?: SortOrder
    raid2?: SortOrder
    raid3?: SortOrder
  }

  export type boss_kills_progressWhereUniqueInput = {
    mode_season?: boss_kills_progressModeSeasonCompoundUniqueInput
  }

  export type boss_kills_progressOrderByWithAggregationInput = {
    mode?: SortOrder
    season?: SortOrder
    position?: SortOrder
    progress?: SortOrder
    finished?: SortOrderInput | SortOrder
    guild?: SortOrderInput | SortOrder
    realm?: SortOrder
    raid1?: SortOrder
    raid2?: SortOrder
    raid3?: SortOrder
    _count?: boss_kills_progressCountOrderByAggregateInput
    _avg?: boss_kills_progressAvgOrderByAggregateInput
    _max?: boss_kills_progressMaxOrderByAggregateInput
    _min?: boss_kills_progressMinOrderByAggregateInput
    _sum?: boss_kills_progressSumOrderByAggregateInput
  }

  export type boss_kills_progressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_progressScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_progressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_progressScalarWhereWithAggregatesInput>
    mode?: IntWithAggregatesFilter | number
    season?: IntWithAggregatesFilter | number
    position?: IntWithAggregatesFilter | number
    progress?: IntWithAggregatesFilter | number
    finished?: DateTimeNullableWithAggregatesFilter | Date | string | null
    guild?: StringNullableWithAggregatesFilter | string | null
    realm?: IntWithAggregatesFilter | number
    raid1?: IntWithAggregatesFilter | number
    raid2?: IntWithAggregatesFilter | number
    raid3?: IntWithAggregatesFilter | number
  }

  export type boss_kills_progress_cacheWhereInput = {
    AND?: Enumerable<boss_kills_progress_cacheWhereInput>
    OR?: Enumerable<boss_kills_progress_cacheWhereInput>
    NOT?: Enumerable<boss_kills_progress_cacheWhereInput>
    season?: IntFilter | number
    mode?: IntFilter | number
    entry?: IntFilter | number
    position?: IntFilter | number
    guild?: StringNullableFilter | string | null
    first_kill?: DateTimeNullableFilter | Date | string | null
    realm?: IntFilter | number
    length?: IntFilter | number
    kill_id?: IntNullableFilter | number | null
  }

  export type boss_kills_progress_cacheOrderByWithRelationInput = {
    season?: SortOrder
    mode?: SortOrder
    entry?: SortOrder
    position?: SortOrder
    guild?: SortOrderInput | SortOrder
    first_kill?: SortOrderInput | SortOrder
    realm?: SortOrder
    length?: SortOrder
    kill_id?: SortOrderInput | SortOrder
  }

  export type boss_kills_progress_cacheWhereUniqueInput = {
    season_mode_entry_position_realm?: boss_kills_progress_cacheSeasonModeEntryPositionRealmCompoundUniqueInput
  }

  export type boss_kills_progress_cacheOrderByWithAggregationInput = {
    season?: SortOrder
    mode?: SortOrder
    entry?: SortOrder
    position?: SortOrder
    guild?: SortOrderInput | SortOrder
    first_kill?: SortOrderInput | SortOrder
    realm?: SortOrder
    length?: SortOrder
    kill_id?: SortOrderInput | SortOrder
    _count?: boss_kills_progress_cacheCountOrderByAggregateInput
    _avg?: boss_kills_progress_cacheAvgOrderByAggregateInput
    _max?: boss_kills_progress_cacheMaxOrderByAggregateInput
    _min?: boss_kills_progress_cacheMinOrderByAggregateInput
    _sum?: boss_kills_progress_cacheSumOrderByAggregateInput
  }

  export type boss_kills_progress_cacheScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_progress_cacheScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_progress_cacheScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_progress_cacheScalarWhereWithAggregatesInput>
    season?: IntWithAggregatesFilter | number
    mode?: IntWithAggregatesFilter | number
    entry?: IntWithAggregatesFilter | number
    position?: IntWithAggregatesFilter | number
    guild?: StringNullableWithAggregatesFilter | string | null
    first_kill?: DateTimeNullableWithAggregatesFilter | Date | string | null
    realm?: IntWithAggregatesFilter | number
    length?: IntWithAggregatesFilter | number
    kill_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type boss_kills_rankings_guildWhereInput = {
    AND?: Enumerable<boss_kills_rankings_guildWhereInput>
    OR?: Enumerable<boss_kills_rankings_guildWhereInput>
    NOT?: Enumerable<boss_kills_rankings_guildWhereInput>
    season?: IntFilter | number
    mode?: IntFilter | number
    ranking?: IntFilter | number
    guild?: StringNullableFilter | string | null
    points?: IntFilter | number
    realm?: IntFilter | number
  }

  export type boss_kills_rankings_guildOrderByWithRelationInput = {
    season?: SortOrder
    mode?: SortOrder
    ranking?: SortOrder
    guild?: SortOrderInput | SortOrder
    points?: SortOrder
    realm?: SortOrder
  }

  export type boss_kills_rankings_guildWhereUniqueInput = {
    season_mode_ranking_realm?: boss_kills_rankings_guildSeasonModeRankingRealmCompoundUniqueInput
  }

  export type boss_kills_rankings_guildOrderByWithAggregationInput = {
    season?: SortOrder
    mode?: SortOrder
    ranking?: SortOrder
    guild?: SortOrderInput | SortOrder
    points?: SortOrder
    realm?: SortOrder
    _count?: boss_kills_rankings_guildCountOrderByAggregateInput
    _avg?: boss_kills_rankings_guildAvgOrderByAggregateInput
    _max?: boss_kills_rankings_guildMaxOrderByAggregateInput
    _min?: boss_kills_rankings_guildMinOrderByAggregateInput
    _sum?: boss_kills_rankings_guildSumOrderByAggregateInput
  }

  export type boss_kills_rankings_guildScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_rankings_guildScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_rankings_guildScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_rankings_guildScalarWhereWithAggregatesInput>
    season?: IntWithAggregatesFilter | number
    mode?: IntWithAggregatesFilter | number
    ranking?: IntWithAggregatesFilter | number
    guild?: StringNullableWithAggregatesFilter | string | null
    points?: IntWithAggregatesFilter | number
    realm?: IntWithAggregatesFilter | number
  }

  export type boss_kills_rankings_guild_cacheWhereInput = {
    AND?: Enumerable<boss_kills_rankings_guild_cacheWhereInput>
    OR?: Enumerable<boss_kills_rankings_guild_cacheWhereInput>
    NOT?: Enumerable<boss_kills_rankings_guild_cacheWhereInput>
    id?: IntFilter | number
    entry?: IntNullableFilter | number | null
    mode?: IntNullableFilter | number | null
    guild?: StringNullableFilter | string | null
    time?: DateTimeNullableFilter | Date | string | null
    realm?: IntNullableFilter | number | null
    length?: IntFilter | number
    points?: IntFilter | number
    ranking?: IntFilter | number
    season?: IntFilter | number
  }

  export type boss_kills_rankings_guild_cacheOrderByWithRelationInput = {
    id?: SortOrder
    entry?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    guild?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    realm?: SortOrderInput | SortOrder
    length?: SortOrder
    points?: SortOrder
    ranking?: SortOrder
    season?: SortOrder
  }

  export type boss_kills_rankings_guild_cacheWhereUniqueInput = {
    id?: number
  }

  export type boss_kills_rankings_guild_cacheOrderByWithAggregationInput = {
    id?: SortOrder
    entry?: SortOrderInput | SortOrder
    mode?: SortOrderInput | SortOrder
    guild?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    realm?: SortOrderInput | SortOrder
    length?: SortOrder
    points?: SortOrder
    ranking?: SortOrder
    season?: SortOrder
    _count?: boss_kills_rankings_guild_cacheCountOrderByAggregateInput
    _avg?: boss_kills_rankings_guild_cacheAvgOrderByAggregateInput
    _max?: boss_kills_rankings_guild_cacheMaxOrderByAggregateInput
    _min?: boss_kills_rankings_guild_cacheMinOrderByAggregateInput
    _sum?: boss_kills_rankings_guild_cacheSumOrderByAggregateInput
  }

  export type boss_kills_rankings_guild_cacheScalarWhereWithAggregatesInput = {
    AND?: Enumerable<boss_kills_rankings_guild_cacheScalarWhereWithAggregatesInput>
    OR?: Enumerable<boss_kills_rankings_guild_cacheScalarWhereWithAggregatesInput>
    NOT?: Enumerable<boss_kills_rankings_guild_cacheScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    entry?: IntNullableWithAggregatesFilter | number | null
    mode?: IntNullableWithAggregatesFilter | number | null
    guild?: StringNullableWithAggregatesFilter | string | null
    time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    realm?: IntNullableWithAggregatesFilter | number | null
    length?: IntWithAggregatesFilter | number
    points?: IntWithAggregatesFilter | number
    ranking?: IntWithAggregatesFilter | number
    season?: IntWithAggregatesFilter | number
  }

  export type boss_killsCreateInput = {
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_deaths?: boss_kills_deathsCreateNestedManyWithoutBoss_killsInput
    boss_kills_maps?: boss_kills_mapsCreateNestedManyWithoutBoss_killsInput
    boss_kills_players?: boss_kills_playersCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsUncheckedCreateInput = {
    id?: number
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_deaths?: boss_kills_deathsUncheckedCreateNestedManyWithoutBoss_killsInput
    boss_kills_maps?: boss_kills_mapsUncheckedCreateNestedManyWithoutBoss_killsInput
    boss_kills_players?: boss_kills_playersUncheckedCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsUpdateInput = {
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_deaths?: boss_kills_deathsUpdateManyWithoutBoss_killsNestedInput
    boss_kills_maps?: boss_kills_mapsUpdateManyWithoutBoss_killsNestedInput
    boss_kills_players?: boss_kills_playersUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_killsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_deaths?: boss_kills_deathsUncheckedUpdateManyWithoutBoss_killsNestedInput
    boss_kills_maps?: boss_kills_mapsUncheckedUpdateManyWithoutBoss_killsNestedInput
    boss_kills_players?: boss_kills_playersUncheckedUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_killsCreateManyInput = {
    id?: number
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
  }

  export type boss_killsUpdateManyMutationInput = {
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type boss_killsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type boss_kills_deathsCreateInput = {
    guid?: number
    time?: number
    boss_kills: boss_killsCreateNestedOneWithoutBoss_kills_deathsInput
  }

  export type boss_kills_deathsUncheckedCreateInput = {
    id: number
    guid?: number
    time?: number
  }

  export type boss_kills_deathsUpdateInput = {
    guid?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    boss_kills?: boss_killsUpdateOneRequiredWithoutBoss_kills_deathsNestedInput
  }

  export type boss_kills_deathsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_deathsCreateManyInput = {
    id: number
    guid?: number
    time?: number
  }

  export type boss_kills_deathsUpdateManyMutationInput = {
    guid?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_deathsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_lootCreateInput = {
    itemId?: number
    count?: number
    randomPropertyId?: number
    randomSuffixId?: number
  }

  export type boss_kills_lootUncheckedCreateInput = {
    id: number
    itemId?: number
    count?: number
    randomPropertyId?: number
    randomSuffixId?: number
  }

  export type boss_kills_lootUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    randomPropertyId?: IntFieldUpdateOperationsInput | number
    randomSuffixId?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_lootUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    randomPropertyId?: IntFieldUpdateOperationsInput | number
    randomSuffixId?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_lootCreateManyInput = {
    id: number
    itemId?: number
    count?: number
    randomPropertyId?: number
    randomSuffixId?: number
  }

  export type boss_kills_lootUpdateManyMutationInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    randomPropertyId?: IntFieldUpdateOperationsInput | number
    randomSuffixId?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_lootUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    randomPropertyId?: IntFieldUpdateOperationsInput | number
    randomSuffixId?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_mapsCreateInput = {
    time?: number
    encounterDamage?: bigint | number
    encounterHeal?: bigint | number
    raidDamage?: bigint | number
    raidHeal?: bigint | number
    boss_kills: boss_killsCreateNestedOneWithoutBoss_kills_mapsInput
  }

  export type boss_kills_mapsUncheckedCreateInput = {
    id: number
    time?: number
    encounterDamage?: bigint | number
    encounterHeal?: bigint | number
    raidDamage?: bigint | number
    raidHeal?: bigint | number
  }

  export type boss_kills_mapsUpdateInput = {
    time?: IntFieldUpdateOperationsInput | number
    encounterDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    encounterHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    raidDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    raidHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    boss_kills?: boss_killsUpdateOneRequiredWithoutBoss_kills_mapsNestedInput
  }

  export type boss_kills_mapsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    encounterDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    encounterHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    raidDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    raidHeal?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type boss_kills_mapsCreateManyInput = {
    id: number
    time?: number
    encounterDamage?: bigint | number
    encounterHeal?: bigint | number
    raidDamage?: bigint | number
    raidHeal?: bigint | number
  }

  export type boss_kills_mapsUpdateManyMutationInput = {
    time?: IntFieldUpdateOperationsInput | number
    encounterDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    encounterHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    raidDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    raidHeal?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type boss_kills_mapsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    encounterDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    encounterHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    raidDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    raidHeal?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type boss_kills_playersCreateInput = {
    guid?: number
    talent_spec?: number
    avg_item_lvl?: number
    dmgDone?: bigint | number
    healingDone?: bigint | number
    overhealingDone?: bigint | number
    absorbDone?: bigint | number
    dmgTaken?: bigint | number
    dmgAbsorbed?: bigint | number
    healingTaken?: bigint | number
    usefullTime?: number
    dispels?: number
    interrupts?: number
    hidden?: boolean
    boss_kills: boss_killsCreateNestedOneWithoutBoss_kills_playersInput
  }

  export type boss_kills_playersUncheckedCreateInput = {
    id: number
    guid?: number
    talent_spec?: number
    avg_item_lvl?: number
    dmgDone?: bigint | number
    healingDone?: bigint | number
    overhealingDone?: bigint | number
    absorbDone?: bigint | number
    dmgTaken?: bigint | number
    dmgAbsorbed?: bigint | number
    healingTaken?: bigint | number
    usefullTime?: number
    dispels?: number
    interrupts?: number
    hidden?: boolean
  }

  export type boss_kills_playersUpdateInput = {
    guid?: IntFieldUpdateOperationsInput | number
    talent_spec?: IntFieldUpdateOperationsInput | number
    avg_item_lvl?: FloatFieldUpdateOperationsInput | number
    dmgDone?: BigIntFieldUpdateOperationsInput | bigint | number
    healingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    overhealingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    absorbDone?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgAbsorbed?: BigIntFieldUpdateOperationsInput | bigint | number
    healingTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    usefullTime?: IntFieldUpdateOperationsInput | number
    dispels?: IntFieldUpdateOperationsInput | number
    interrupts?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    boss_kills?: boss_killsUpdateOneRequiredWithoutBoss_kills_playersNestedInput
  }

  export type boss_kills_playersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: IntFieldUpdateOperationsInput | number
    talent_spec?: IntFieldUpdateOperationsInput | number
    avg_item_lvl?: FloatFieldUpdateOperationsInput | number
    dmgDone?: BigIntFieldUpdateOperationsInput | bigint | number
    healingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    overhealingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    absorbDone?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgAbsorbed?: BigIntFieldUpdateOperationsInput | bigint | number
    healingTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    usefullTime?: IntFieldUpdateOperationsInput | number
    dispels?: IntFieldUpdateOperationsInput | number
    interrupts?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type boss_kills_playersCreateManyInput = {
    id: number
    guid?: number
    talent_spec?: number
    avg_item_lvl?: number
    dmgDone?: bigint | number
    healingDone?: bigint | number
    overhealingDone?: bigint | number
    absorbDone?: bigint | number
    dmgTaken?: bigint | number
    dmgAbsorbed?: bigint | number
    healingTaken?: bigint | number
    usefullTime?: number
    dispels?: number
    interrupts?: number
    hidden?: boolean
  }

  export type boss_kills_playersUpdateManyMutationInput = {
    guid?: IntFieldUpdateOperationsInput | number
    talent_spec?: IntFieldUpdateOperationsInput | number
    avg_item_lvl?: FloatFieldUpdateOperationsInput | number
    dmgDone?: BigIntFieldUpdateOperationsInput | bigint | number
    healingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    overhealingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    absorbDone?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgAbsorbed?: BigIntFieldUpdateOperationsInput | bigint | number
    healingTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    usefullTime?: IntFieldUpdateOperationsInput | number
    dispels?: IntFieldUpdateOperationsInput | number
    interrupts?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type boss_kills_playersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: IntFieldUpdateOperationsInput | number
    talent_spec?: IntFieldUpdateOperationsInput | number
    avg_item_lvl?: FloatFieldUpdateOperationsInput | number
    dmgDone?: BigIntFieldUpdateOperationsInput | bigint | number
    healingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    overhealingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    absorbDone?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgAbsorbed?: BigIntFieldUpdateOperationsInput | bigint | number
    healingTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    usefullTime?: IntFieldUpdateOperationsInput | number
    dispels?: IntFieldUpdateOperationsInput | number
    interrupts?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type boss_kills_progressCreateInput = {
    mode?: number
    season?: number
    position?: number
    progress?: number
    finished?: Date | string | null
    guild?: string | null
    realm?: number
    raid1?: number
    raid2?: number
    raid3?: number
  }

  export type boss_kills_progressUncheckedCreateInput = {
    mode?: number
    season?: number
    position?: number
    progress?: number
    finished?: Date | string | null
    guild?: string | null
    realm?: number
    raid1?: number
    raid2?: number
    raid3?: number
  }

  export type boss_kills_progressUpdateInput = {
    mode?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    realm?: IntFieldUpdateOperationsInput | number
    raid1?: IntFieldUpdateOperationsInput | number
    raid2?: IntFieldUpdateOperationsInput | number
    raid3?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_progressUncheckedUpdateInput = {
    mode?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    realm?: IntFieldUpdateOperationsInput | number
    raid1?: IntFieldUpdateOperationsInput | number
    raid2?: IntFieldUpdateOperationsInput | number
    raid3?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_progressCreateManyInput = {
    mode?: number
    season?: number
    position?: number
    progress?: number
    finished?: Date | string | null
    guild?: string | null
    realm?: number
    raid1?: number
    raid2?: number
    raid3?: number
  }

  export type boss_kills_progressUpdateManyMutationInput = {
    mode?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    realm?: IntFieldUpdateOperationsInput | number
    raid1?: IntFieldUpdateOperationsInput | number
    raid2?: IntFieldUpdateOperationsInput | number
    raid3?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_progressUncheckedUpdateManyInput = {
    mode?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    finished?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    realm?: IntFieldUpdateOperationsInput | number
    raid1?: IntFieldUpdateOperationsInput | number
    raid2?: IntFieldUpdateOperationsInput | number
    raid3?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_progress_cacheCreateInput = {
    season?: number
    mode?: number
    entry?: number
    position?: number
    guild?: string | null
    first_kill?: Date | string | null
    realm?: number
    length?: number
    kill_id?: number | null
  }

  export type boss_kills_progress_cacheUncheckedCreateInput = {
    season?: number
    mode?: number
    entry?: number
    position?: number
    guild?: string | null
    first_kill?: Date | string | null
    realm?: number
    length?: number
    kill_id?: number | null
  }

  export type boss_kills_progress_cacheUpdateInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    entry?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    first_kill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    kill_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type boss_kills_progress_cacheUncheckedUpdateInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    entry?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    first_kill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    kill_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type boss_kills_progress_cacheCreateManyInput = {
    season?: number
    mode?: number
    entry?: number
    position?: number
    guild?: string | null
    first_kill?: Date | string | null
    realm?: number
    length?: number
    kill_id?: number | null
  }

  export type boss_kills_progress_cacheUpdateManyMutationInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    entry?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    first_kill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    kill_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type boss_kills_progress_cacheUncheckedUpdateManyInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    entry?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    first_kill?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    kill_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type boss_kills_rankings_guildCreateInput = {
    season?: number
    mode?: number
    ranking?: number
    guild?: string | null
    points?: number
    realm?: number
  }

  export type boss_kills_rankings_guildUncheckedCreateInput = {
    season?: number
    mode?: number
    ranking?: number
    guild?: string | null
    points?: number
    realm?: number
  }

  export type boss_kills_rankings_guildUpdateInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_rankings_guildUncheckedUpdateInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_rankings_guildCreateManyInput = {
    season?: number
    mode?: number
    ranking?: number
    guild?: string | null
    points?: number
    realm?: number
  }

  export type boss_kills_rankings_guildUpdateManyMutationInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_rankings_guildUncheckedUpdateManyInput = {
    season?: IntFieldUpdateOperationsInput | number
    mode?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    realm?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_rankings_guild_cacheCreateInput = {
    id: number
    entry?: number | null
    mode?: number | null
    guild?: string | null
    time?: Date | string | null
    realm?: number | null
    length?: number
    points?: number
    ranking?: number
    season?: number
  }

  export type boss_kills_rankings_guild_cacheUncheckedCreateInput = {
    id: number
    entry?: number | null
    mode?: number | null
    guild?: string | null
    time?: Date | string | null
    realm?: number | null
    length?: number
    points?: number
    ranking?: number
    season?: number
  }

  export type boss_kills_rankings_guild_cacheUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableIntFieldUpdateOperationsInput | number | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    length?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_rankings_guild_cacheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableIntFieldUpdateOperationsInput | number | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    length?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_rankings_guild_cacheCreateManyInput = {
    id: number
    entry?: number | null
    mode?: number | null
    guild?: string | null
    time?: Date | string | null
    realm?: number | null
    length?: number
    points?: number
    ranking?: number
    season?: number
  }

  export type boss_kills_rankings_guild_cacheUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableIntFieldUpdateOperationsInput | number | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    length?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_rankings_guild_cacheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entry?: NullableIntFieldUpdateOperationsInput | number | null
    mode?: NullableIntFieldUpdateOperationsInput | number | null
    guild?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: NullableIntFieldUpdateOperationsInput | number | null
    length?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    ranking?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type Boss_kills_deathsListRelationFilter = {
    every?: boss_kills_deathsWhereInput
    some?: boss_kills_deathsWhereInput
    none?: boss_kills_deathsWhereInput
  }

  export type Boss_kills_mapsListRelationFilter = {
    every?: boss_kills_mapsWhereInput
    some?: boss_kills_mapsWhereInput
    none?: boss_kills_mapsWhereInput
  }

  export type Boss_kills_playersListRelationFilter = {
    every?: boss_kills_playersWhereInput
    some?: boss_kills_playersWhereInput
    none?: boss_kills_playersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type boss_kills_deathsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type boss_kills_mapsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type boss_kills_playersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type boss_killsCountOrderByAggregateInput = {
    id?: SortOrder
    reserver?: SortOrder
    entry?: SortOrder
    map?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    wipes?: SortOrder
    deaths?: SortOrder
    ressUsed?: SortOrder
    progressLenght?: SortOrder
    hidden?: SortOrder
    cleanupDisabled?: SortOrder
    instanceId?: SortOrder
    newGuildName?: SortOrder
  }

  export type boss_killsAvgOrderByAggregateInput = {
    id?: SortOrder
    reserver?: SortOrder
    entry?: SortOrder
    mode?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    wipes?: SortOrder
    deaths?: SortOrder
    ressUsed?: SortOrder
    progressLenght?: SortOrder
    instanceId?: SortOrder
  }

  export type boss_killsMaxOrderByAggregateInput = {
    id?: SortOrder
    reserver?: SortOrder
    entry?: SortOrder
    map?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    wipes?: SortOrder
    deaths?: SortOrder
    ressUsed?: SortOrder
    progressLenght?: SortOrder
    hidden?: SortOrder
    cleanupDisabled?: SortOrder
    instanceId?: SortOrder
    newGuildName?: SortOrder
  }

  export type boss_killsMinOrderByAggregateInput = {
    id?: SortOrder
    reserver?: SortOrder
    entry?: SortOrder
    map?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    wipes?: SortOrder
    deaths?: SortOrder
    ressUsed?: SortOrder
    progressLenght?: SortOrder
    hidden?: SortOrder
    cleanupDisabled?: SortOrder
    instanceId?: SortOrder
    newGuildName?: SortOrder
  }

  export type boss_killsSumOrderByAggregateInput = {
    id?: SortOrder
    reserver?: SortOrder
    entry?: SortOrder
    mode?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    wipes?: SortOrder
    deaths?: SortOrder
    ressUsed?: SortOrder
    progressLenght?: SortOrder
    instanceId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type Boss_killsRelationFilter = {
    is?: boss_killsWhereInput | null
    isNot?: boss_killsWhereInput | null
  }

  export type boss_kills_deathsIdGuidTimeCompoundUniqueInput = {
    id: number
    guid: number
    time: number
  }

  export type boss_kills_deathsCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    time?: SortOrder
  }

  export type boss_kills_deathsAvgOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    time?: SortOrder
  }

  export type boss_kills_deathsMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    time?: SortOrder
  }

  export type boss_kills_deathsMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    time?: SortOrder
  }

  export type boss_kills_deathsSumOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    time?: SortOrder
  }

  export type boss_kills_lootIdItemIdCompoundUniqueInput = {
    id: number
    itemId: number
  }

  export type boss_kills_lootCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    randomPropertyId?: SortOrder
    randomSuffixId?: SortOrder
  }

  export type boss_kills_lootAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    randomPropertyId?: SortOrder
    randomSuffixId?: SortOrder
  }

  export type boss_kills_lootMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    randomPropertyId?: SortOrder
    randomSuffixId?: SortOrder
  }

  export type boss_kills_lootMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    randomPropertyId?: SortOrder
    randomSuffixId?: SortOrder
  }

  export type boss_kills_lootSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    randomPropertyId?: SortOrder
    randomSuffixId?: SortOrder
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type boss_kills_mapsIdTimeCompoundUniqueInput = {
    id: number
    time: number
  }

  export type boss_kills_mapsCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    encounterDamage?: SortOrder
    encounterHeal?: SortOrder
    raidDamage?: SortOrder
    raidHeal?: SortOrder
  }

  export type boss_kills_mapsAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    encounterDamage?: SortOrder
    encounterHeal?: SortOrder
    raidDamage?: SortOrder
    raidHeal?: SortOrder
  }

  export type boss_kills_mapsMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    encounterDamage?: SortOrder
    encounterHeal?: SortOrder
    raidDamage?: SortOrder
    raidHeal?: SortOrder
  }

  export type boss_kills_mapsMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    encounterDamage?: SortOrder
    encounterHeal?: SortOrder
    raidDamage?: SortOrder
    raidHeal?: SortOrder
  }

  export type boss_kills_mapsSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    encounterDamage?: SortOrder
    encounterHeal?: SortOrder
    raidDamage?: SortOrder
    raidHeal?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type boss_kills_playersIdGuidCompoundUniqueInput = {
    id: number
    guid: number
  }

  export type boss_kills_playersCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    talent_spec?: SortOrder
    avg_item_lvl?: SortOrder
    dmgDone?: SortOrder
    healingDone?: SortOrder
    overhealingDone?: SortOrder
    absorbDone?: SortOrder
    dmgTaken?: SortOrder
    dmgAbsorbed?: SortOrder
    healingTaken?: SortOrder
    usefullTime?: SortOrder
    dispels?: SortOrder
    interrupts?: SortOrder
    hidden?: SortOrder
  }

  export type boss_kills_playersAvgOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    talent_spec?: SortOrder
    avg_item_lvl?: SortOrder
    dmgDone?: SortOrder
    healingDone?: SortOrder
    overhealingDone?: SortOrder
    absorbDone?: SortOrder
    dmgTaken?: SortOrder
    dmgAbsorbed?: SortOrder
    healingTaken?: SortOrder
    usefullTime?: SortOrder
    dispels?: SortOrder
    interrupts?: SortOrder
  }

  export type boss_kills_playersMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    talent_spec?: SortOrder
    avg_item_lvl?: SortOrder
    dmgDone?: SortOrder
    healingDone?: SortOrder
    overhealingDone?: SortOrder
    absorbDone?: SortOrder
    dmgTaken?: SortOrder
    dmgAbsorbed?: SortOrder
    healingTaken?: SortOrder
    usefullTime?: SortOrder
    dispels?: SortOrder
    interrupts?: SortOrder
    hidden?: SortOrder
  }

  export type boss_kills_playersMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    talent_spec?: SortOrder
    avg_item_lvl?: SortOrder
    dmgDone?: SortOrder
    healingDone?: SortOrder
    overhealingDone?: SortOrder
    absorbDone?: SortOrder
    dmgTaken?: SortOrder
    dmgAbsorbed?: SortOrder
    healingTaken?: SortOrder
    usefullTime?: SortOrder
    dispels?: SortOrder
    interrupts?: SortOrder
    hidden?: SortOrder
  }

  export type boss_kills_playersSumOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    talent_spec?: SortOrder
    avg_item_lvl?: SortOrder
    dmgDone?: SortOrder
    healingDone?: SortOrder
    overhealingDone?: SortOrder
    absorbDone?: SortOrder
    dmgTaken?: SortOrder
    dmgAbsorbed?: SortOrder
    healingTaken?: SortOrder
    usefullTime?: SortOrder
    dispels?: SortOrder
    interrupts?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type boss_kills_progressModeSeasonCompoundUniqueInput = {
    mode: number
    season: number
  }

  export type boss_kills_progressCountOrderByAggregateInput = {
    mode?: SortOrder
    season?: SortOrder
    position?: SortOrder
    progress?: SortOrder
    finished?: SortOrder
    guild?: SortOrder
    realm?: SortOrder
    raid1?: SortOrder
    raid2?: SortOrder
    raid3?: SortOrder
  }

  export type boss_kills_progressAvgOrderByAggregateInput = {
    mode?: SortOrder
    season?: SortOrder
    position?: SortOrder
    progress?: SortOrder
    realm?: SortOrder
    raid1?: SortOrder
    raid2?: SortOrder
    raid3?: SortOrder
  }

  export type boss_kills_progressMaxOrderByAggregateInput = {
    mode?: SortOrder
    season?: SortOrder
    position?: SortOrder
    progress?: SortOrder
    finished?: SortOrder
    guild?: SortOrder
    realm?: SortOrder
    raid1?: SortOrder
    raid2?: SortOrder
    raid3?: SortOrder
  }

  export type boss_kills_progressMinOrderByAggregateInput = {
    mode?: SortOrder
    season?: SortOrder
    position?: SortOrder
    progress?: SortOrder
    finished?: SortOrder
    guild?: SortOrder
    realm?: SortOrder
    raid1?: SortOrder
    raid2?: SortOrder
    raid3?: SortOrder
  }

  export type boss_kills_progressSumOrderByAggregateInput = {
    mode?: SortOrder
    season?: SortOrder
    position?: SortOrder
    progress?: SortOrder
    realm?: SortOrder
    raid1?: SortOrder
    raid2?: SortOrder
    raid3?: SortOrder
  }

  export type boss_kills_progress_cacheSeasonModeEntryPositionRealmCompoundUniqueInput = {
    season: number
    mode: number
    entry: number
    position: number
    realm: number
  }

  export type boss_kills_progress_cacheCountOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    entry?: SortOrder
    position?: SortOrder
    guild?: SortOrder
    first_kill?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    kill_id?: SortOrder
  }

  export type boss_kills_progress_cacheAvgOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    entry?: SortOrder
    position?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    kill_id?: SortOrder
  }

  export type boss_kills_progress_cacheMaxOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    entry?: SortOrder
    position?: SortOrder
    guild?: SortOrder
    first_kill?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    kill_id?: SortOrder
  }

  export type boss_kills_progress_cacheMinOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    entry?: SortOrder
    position?: SortOrder
    guild?: SortOrder
    first_kill?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    kill_id?: SortOrder
  }

  export type boss_kills_progress_cacheSumOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    entry?: SortOrder
    position?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    kill_id?: SortOrder
  }

  export type boss_kills_rankings_guildSeasonModeRankingRealmCompoundUniqueInput = {
    season: number
    mode: number
    ranking: number
    realm: number
  }

  export type boss_kills_rankings_guildCountOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    ranking?: SortOrder
    guild?: SortOrder
    points?: SortOrder
    realm?: SortOrder
  }

  export type boss_kills_rankings_guildAvgOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    ranking?: SortOrder
    points?: SortOrder
    realm?: SortOrder
  }

  export type boss_kills_rankings_guildMaxOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    ranking?: SortOrder
    guild?: SortOrder
    points?: SortOrder
    realm?: SortOrder
  }

  export type boss_kills_rankings_guildMinOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    ranking?: SortOrder
    guild?: SortOrder
    points?: SortOrder
    realm?: SortOrder
  }

  export type boss_kills_rankings_guildSumOrderByAggregateInput = {
    season?: SortOrder
    mode?: SortOrder
    ranking?: SortOrder
    points?: SortOrder
    realm?: SortOrder
  }

  export type boss_kills_rankings_guild_cacheCountOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    points?: SortOrder
    ranking?: SortOrder
    season?: SortOrder
  }

  export type boss_kills_rankings_guild_cacheAvgOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    mode?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    points?: SortOrder
    ranking?: SortOrder
    season?: SortOrder
  }

  export type boss_kills_rankings_guild_cacheMaxOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    points?: SortOrder
    ranking?: SortOrder
    season?: SortOrder
  }

  export type boss_kills_rankings_guild_cacheMinOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    mode?: SortOrder
    guild?: SortOrder
    time?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    points?: SortOrder
    ranking?: SortOrder
    season?: SortOrder
  }

  export type boss_kills_rankings_guild_cacheSumOrderByAggregateInput = {
    id?: SortOrder
    entry?: SortOrder
    mode?: SortOrder
    realm?: SortOrder
    length?: SortOrder
    points?: SortOrder
    ranking?: SortOrder
    season?: SortOrder
  }

  export type boss_kills_deathsCreateNestedManyWithoutBoss_killsInput = {
    create?: XOR<Enumerable<boss_kills_deathsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_deathsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_deathsCreateOrConnectWithoutBoss_killsInput>
    createMany?: boss_kills_deathsCreateManyBoss_killsInputEnvelope
    connect?: Enumerable<boss_kills_deathsWhereUniqueInput>
  }

  export type boss_kills_mapsCreateNestedManyWithoutBoss_killsInput = {
    create?: XOR<Enumerable<boss_kills_mapsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_mapsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_mapsCreateOrConnectWithoutBoss_killsInput>
    createMany?: boss_kills_mapsCreateManyBoss_killsInputEnvelope
    connect?: Enumerable<boss_kills_mapsWhereUniqueInput>
  }

  export type boss_kills_playersCreateNestedManyWithoutBoss_killsInput = {
    create?: XOR<Enumerable<boss_kills_playersCreateWithoutBoss_killsInput>, Enumerable<boss_kills_playersUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_playersCreateOrConnectWithoutBoss_killsInput>
    createMany?: boss_kills_playersCreateManyBoss_killsInputEnvelope
    connect?: Enumerable<boss_kills_playersWhereUniqueInput>
  }

  export type boss_kills_deathsUncheckedCreateNestedManyWithoutBoss_killsInput = {
    create?: XOR<Enumerable<boss_kills_deathsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_deathsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_deathsCreateOrConnectWithoutBoss_killsInput>
    createMany?: boss_kills_deathsCreateManyBoss_killsInputEnvelope
    connect?: Enumerable<boss_kills_deathsWhereUniqueInput>
  }

  export type boss_kills_mapsUncheckedCreateNestedManyWithoutBoss_killsInput = {
    create?: XOR<Enumerable<boss_kills_mapsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_mapsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_mapsCreateOrConnectWithoutBoss_killsInput>
    createMany?: boss_kills_mapsCreateManyBoss_killsInputEnvelope
    connect?: Enumerable<boss_kills_mapsWhereUniqueInput>
  }

  export type boss_kills_playersUncheckedCreateNestedManyWithoutBoss_killsInput = {
    create?: XOR<Enumerable<boss_kills_playersCreateWithoutBoss_killsInput>, Enumerable<boss_kills_playersUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_playersCreateOrConnectWithoutBoss_killsInput>
    createMany?: boss_kills_playersCreateManyBoss_killsInputEnvelope
    connect?: Enumerable<boss_kills_playersWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type boss_kills_deathsUpdateManyWithoutBoss_killsNestedInput = {
    create?: XOR<Enumerable<boss_kills_deathsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_deathsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_deathsCreateOrConnectWithoutBoss_killsInput>
    upsert?: Enumerable<boss_kills_deathsUpsertWithWhereUniqueWithoutBoss_killsInput>
    createMany?: boss_kills_deathsCreateManyBoss_killsInputEnvelope
    set?: Enumerable<boss_kills_deathsWhereUniqueInput>
    disconnect?: Enumerable<boss_kills_deathsWhereUniqueInput>
    delete?: Enumerable<boss_kills_deathsWhereUniqueInput>
    connect?: Enumerable<boss_kills_deathsWhereUniqueInput>
    update?: Enumerable<boss_kills_deathsUpdateWithWhereUniqueWithoutBoss_killsInput>
    updateMany?: Enumerable<boss_kills_deathsUpdateManyWithWhereWithoutBoss_killsInput>
    deleteMany?: Enumerable<boss_kills_deathsScalarWhereInput>
  }

  export type boss_kills_mapsUpdateManyWithoutBoss_killsNestedInput = {
    create?: XOR<Enumerable<boss_kills_mapsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_mapsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_mapsCreateOrConnectWithoutBoss_killsInput>
    upsert?: Enumerable<boss_kills_mapsUpsertWithWhereUniqueWithoutBoss_killsInput>
    createMany?: boss_kills_mapsCreateManyBoss_killsInputEnvelope
    set?: Enumerable<boss_kills_mapsWhereUniqueInput>
    disconnect?: Enumerable<boss_kills_mapsWhereUniqueInput>
    delete?: Enumerable<boss_kills_mapsWhereUniqueInput>
    connect?: Enumerable<boss_kills_mapsWhereUniqueInput>
    update?: Enumerable<boss_kills_mapsUpdateWithWhereUniqueWithoutBoss_killsInput>
    updateMany?: Enumerable<boss_kills_mapsUpdateManyWithWhereWithoutBoss_killsInput>
    deleteMany?: Enumerable<boss_kills_mapsScalarWhereInput>
  }

  export type boss_kills_playersUpdateManyWithoutBoss_killsNestedInput = {
    create?: XOR<Enumerable<boss_kills_playersCreateWithoutBoss_killsInput>, Enumerable<boss_kills_playersUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_playersCreateOrConnectWithoutBoss_killsInput>
    upsert?: Enumerable<boss_kills_playersUpsertWithWhereUniqueWithoutBoss_killsInput>
    createMany?: boss_kills_playersCreateManyBoss_killsInputEnvelope
    set?: Enumerable<boss_kills_playersWhereUniqueInput>
    disconnect?: Enumerable<boss_kills_playersWhereUniqueInput>
    delete?: Enumerable<boss_kills_playersWhereUniqueInput>
    connect?: Enumerable<boss_kills_playersWhereUniqueInput>
    update?: Enumerable<boss_kills_playersUpdateWithWhereUniqueWithoutBoss_killsInput>
    updateMany?: Enumerable<boss_kills_playersUpdateManyWithWhereWithoutBoss_killsInput>
    deleteMany?: Enumerable<boss_kills_playersScalarWhereInput>
  }

  export type boss_kills_deathsUncheckedUpdateManyWithoutBoss_killsNestedInput = {
    create?: XOR<Enumerable<boss_kills_deathsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_deathsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_deathsCreateOrConnectWithoutBoss_killsInput>
    upsert?: Enumerable<boss_kills_deathsUpsertWithWhereUniqueWithoutBoss_killsInput>
    createMany?: boss_kills_deathsCreateManyBoss_killsInputEnvelope
    set?: Enumerable<boss_kills_deathsWhereUniqueInput>
    disconnect?: Enumerable<boss_kills_deathsWhereUniqueInput>
    delete?: Enumerable<boss_kills_deathsWhereUniqueInput>
    connect?: Enumerable<boss_kills_deathsWhereUniqueInput>
    update?: Enumerable<boss_kills_deathsUpdateWithWhereUniqueWithoutBoss_killsInput>
    updateMany?: Enumerable<boss_kills_deathsUpdateManyWithWhereWithoutBoss_killsInput>
    deleteMany?: Enumerable<boss_kills_deathsScalarWhereInput>
  }

  export type boss_kills_mapsUncheckedUpdateManyWithoutBoss_killsNestedInput = {
    create?: XOR<Enumerable<boss_kills_mapsCreateWithoutBoss_killsInput>, Enumerable<boss_kills_mapsUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_mapsCreateOrConnectWithoutBoss_killsInput>
    upsert?: Enumerable<boss_kills_mapsUpsertWithWhereUniqueWithoutBoss_killsInput>
    createMany?: boss_kills_mapsCreateManyBoss_killsInputEnvelope
    set?: Enumerable<boss_kills_mapsWhereUniqueInput>
    disconnect?: Enumerable<boss_kills_mapsWhereUniqueInput>
    delete?: Enumerable<boss_kills_mapsWhereUniqueInput>
    connect?: Enumerable<boss_kills_mapsWhereUniqueInput>
    update?: Enumerable<boss_kills_mapsUpdateWithWhereUniqueWithoutBoss_killsInput>
    updateMany?: Enumerable<boss_kills_mapsUpdateManyWithWhereWithoutBoss_killsInput>
    deleteMany?: Enumerable<boss_kills_mapsScalarWhereInput>
  }

  export type boss_kills_playersUncheckedUpdateManyWithoutBoss_killsNestedInput = {
    create?: XOR<Enumerable<boss_kills_playersCreateWithoutBoss_killsInput>, Enumerable<boss_kills_playersUncheckedCreateWithoutBoss_killsInput>>
    connectOrCreate?: Enumerable<boss_kills_playersCreateOrConnectWithoutBoss_killsInput>
    upsert?: Enumerable<boss_kills_playersUpsertWithWhereUniqueWithoutBoss_killsInput>
    createMany?: boss_kills_playersCreateManyBoss_killsInputEnvelope
    set?: Enumerable<boss_kills_playersWhereUniqueInput>
    disconnect?: Enumerable<boss_kills_playersWhereUniqueInput>
    delete?: Enumerable<boss_kills_playersWhereUniqueInput>
    connect?: Enumerable<boss_kills_playersWhereUniqueInput>
    update?: Enumerable<boss_kills_playersUpdateWithWhereUniqueWithoutBoss_killsInput>
    updateMany?: Enumerable<boss_kills_playersUpdateManyWithWhereWithoutBoss_killsInput>
    deleteMany?: Enumerable<boss_kills_playersScalarWhereInput>
  }

  export type boss_killsCreateNestedOneWithoutBoss_kills_deathsInput = {
    create?: XOR<boss_killsCreateWithoutBoss_kills_deathsInput, boss_killsUncheckedCreateWithoutBoss_kills_deathsInput>
    connectOrCreate?: boss_killsCreateOrConnectWithoutBoss_kills_deathsInput
    connect?: boss_killsWhereUniqueInput
  }

  export type boss_killsUpdateOneRequiredWithoutBoss_kills_deathsNestedInput = {
    create?: XOR<boss_killsCreateWithoutBoss_kills_deathsInput, boss_killsUncheckedCreateWithoutBoss_kills_deathsInput>
    connectOrCreate?: boss_killsCreateOrConnectWithoutBoss_kills_deathsInput
    upsert?: boss_killsUpsertWithoutBoss_kills_deathsInput
    connect?: boss_killsWhereUniqueInput
    update?: XOR<boss_killsUpdateWithoutBoss_kills_deathsInput, boss_killsUncheckedUpdateWithoutBoss_kills_deathsInput>
  }

  export type boss_killsCreateNestedOneWithoutBoss_kills_mapsInput = {
    create?: XOR<boss_killsCreateWithoutBoss_kills_mapsInput, boss_killsUncheckedCreateWithoutBoss_kills_mapsInput>
    connectOrCreate?: boss_killsCreateOrConnectWithoutBoss_kills_mapsInput
    connect?: boss_killsWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type boss_killsUpdateOneRequiredWithoutBoss_kills_mapsNestedInput = {
    create?: XOR<boss_killsCreateWithoutBoss_kills_mapsInput, boss_killsUncheckedCreateWithoutBoss_kills_mapsInput>
    connectOrCreate?: boss_killsCreateOrConnectWithoutBoss_kills_mapsInput
    upsert?: boss_killsUpsertWithoutBoss_kills_mapsInput
    connect?: boss_killsWhereUniqueInput
    update?: XOR<boss_killsUpdateWithoutBoss_kills_mapsInput, boss_killsUncheckedUpdateWithoutBoss_kills_mapsInput>
  }

  export type boss_killsCreateNestedOneWithoutBoss_kills_playersInput = {
    create?: XOR<boss_killsCreateWithoutBoss_kills_playersInput, boss_killsUncheckedCreateWithoutBoss_kills_playersInput>
    connectOrCreate?: boss_killsCreateOrConnectWithoutBoss_kills_playersInput
    connect?: boss_killsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type boss_killsUpdateOneRequiredWithoutBoss_kills_playersNestedInput = {
    create?: XOR<boss_killsCreateWithoutBoss_kills_playersInput, boss_killsUncheckedCreateWithoutBoss_kills_playersInput>
    connectOrCreate?: boss_killsCreateOrConnectWithoutBoss_kills_playersInput
    upsert?: boss_killsUpsertWithoutBoss_kills_playersInput
    connect?: boss_killsWhereUniqueInput
    update?: XOR<boss_killsUpdateWithoutBoss_kills_playersInput, boss_killsUncheckedUpdateWithoutBoss_kills_playersInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type boss_kills_deathsCreateWithoutBoss_killsInput = {
    guid?: number
    time?: number
  }

  export type boss_kills_deathsUncheckedCreateWithoutBoss_killsInput = {
    guid?: number
    time?: number
  }

  export type boss_kills_deathsCreateOrConnectWithoutBoss_killsInput = {
    where: boss_kills_deathsWhereUniqueInput
    create: XOR<boss_kills_deathsCreateWithoutBoss_killsInput, boss_kills_deathsUncheckedCreateWithoutBoss_killsInput>
  }

  export type boss_kills_deathsCreateManyBoss_killsInputEnvelope = {
    data: Enumerable<boss_kills_deathsCreateManyBoss_killsInput>
    skipDuplicates?: boolean
  }

  export type boss_kills_mapsCreateWithoutBoss_killsInput = {
    time?: number
    encounterDamage?: bigint | number
    encounterHeal?: bigint | number
    raidDamage?: bigint | number
    raidHeal?: bigint | number
  }

  export type boss_kills_mapsUncheckedCreateWithoutBoss_killsInput = {
    time?: number
    encounterDamage?: bigint | number
    encounterHeal?: bigint | number
    raidDamage?: bigint | number
    raidHeal?: bigint | number
  }

  export type boss_kills_mapsCreateOrConnectWithoutBoss_killsInput = {
    where: boss_kills_mapsWhereUniqueInput
    create: XOR<boss_kills_mapsCreateWithoutBoss_killsInput, boss_kills_mapsUncheckedCreateWithoutBoss_killsInput>
  }

  export type boss_kills_mapsCreateManyBoss_killsInputEnvelope = {
    data: Enumerable<boss_kills_mapsCreateManyBoss_killsInput>
    skipDuplicates?: boolean
  }

  export type boss_kills_playersCreateWithoutBoss_killsInput = {
    guid?: number
    talent_spec?: number
    avg_item_lvl?: number
    dmgDone?: bigint | number
    healingDone?: bigint | number
    overhealingDone?: bigint | number
    absorbDone?: bigint | number
    dmgTaken?: bigint | number
    dmgAbsorbed?: bigint | number
    healingTaken?: bigint | number
    usefullTime?: number
    dispels?: number
    interrupts?: number
    hidden?: boolean
  }

  export type boss_kills_playersUncheckedCreateWithoutBoss_killsInput = {
    guid?: number
    talent_spec?: number
    avg_item_lvl?: number
    dmgDone?: bigint | number
    healingDone?: bigint | number
    overhealingDone?: bigint | number
    absorbDone?: bigint | number
    dmgTaken?: bigint | number
    dmgAbsorbed?: bigint | number
    healingTaken?: bigint | number
    usefullTime?: number
    dispels?: number
    interrupts?: number
    hidden?: boolean
  }

  export type boss_kills_playersCreateOrConnectWithoutBoss_killsInput = {
    where: boss_kills_playersWhereUniqueInput
    create: XOR<boss_kills_playersCreateWithoutBoss_killsInput, boss_kills_playersUncheckedCreateWithoutBoss_killsInput>
  }

  export type boss_kills_playersCreateManyBoss_killsInputEnvelope = {
    data: Enumerable<boss_kills_playersCreateManyBoss_killsInput>
    skipDuplicates?: boolean
  }

  export type boss_kills_deathsUpsertWithWhereUniqueWithoutBoss_killsInput = {
    where: boss_kills_deathsWhereUniqueInput
    update: XOR<boss_kills_deathsUpdateWithoutBoss_killsInput, boss_kills_deathsUncheckedUpdateWithoutBoss_killsInput>
    create: XOR<boss_kills_deathsCreateWithoutBoss_killsInput, boss_kills_deathsUncheckedCreateWithoutBoss_killsInput>
  }

  export type boss_kills_deathsUpdateWithWhereUniqueWithoutBoss_killsInput = {
    where: boss_kills_deathsWhereUniqueInput
    data: XOR<boss_kills_deathsUpdateWithoutBoss_killsInput, boss_kills_deathsUncheckedUpdateWithoutBoss_killsInput>
  }

  export type boss_kills_deathsUpdateManyWithWhereWithoutBoss_killsInput = {
    where: boss_kills_deathsScalarWhereInput
    data: XOR<boss_kills_deathsUpdateManyMutationInput, boss_kills_deathsUncheckedUpdateManyWithoutBoss_kills_deathsInput>
  }

  export type boss_kills_deathsScalarWhereInput = {
    AND?: Enumerable<boss_kills_deathsScalarWhereInput>
    OR?: Enumerable<boss_kills_deathsScalarWhereInput>
    NOT?: Enumerable<boss_kills_deathsScalarWhereInput>
    id?: IntFilter | number
    guid?: IntFilter | number
    time?: IntFilter | number
  }

  export type boss_kills_mapsUpsertWithWhereUniqueWithoutBoss_killsInput = {
    where: boss_kills_mapsWhereUniqueInput
    update: XOR<boss_kills_mapsUpdateWithoutBoss_killsInput, boss_kills_mapsUncheckedUpdateWithoutBoss_killsInput>
    create: XOR<boss_kills_mapsCreateWithoutBoss_killsInput, boss_kills_mapsUncheckedCreateWithoutBoss_killsInput>
  }

  export type boss_kills_mapsUpdateWithWhereUniqueWithoutBoss_killsInput = {
    where: boss_kills_mapsWhereUniqueInput
    data: XOR<boss_kills_mapsUpdateWithoutBoss_killsInput, boss_kills_mapsUncheckedUpdateWithoutBoss_killsInput>
  }

  export type boss_kills_mapsUpdateManyWithWhereWithoutBoss_killsInput = {
    where: boss_kills_mapsScalarWhereInput
    data: XOR<boss_kills_mapsUpdateManyMutationInput, boss_kills_mapsUncheckedUpdateManyWithoutBoss_kills_mapsInput>
  }

  export type boss_kills_mapsScalarWhereInput = {
    AND?: Enumerable<boss_kills_mapsScalarWhereInput>
    OR?: Enumerable<boss_kills_mapsScalarWhereInput>
    NOT?: Enumerable<boss_kills_mapsScalarWhereInput>
    id?: IntFilter | number
    time?: IntFilter | number
    encounterDamage?: BigIntFilter | bigint | number
    encounterHeal?: BigIntFilter | bigint | number
    raidDamage?: BigIntFilter | bigint | number
    raidHeal?: BigIntFilter | bigint | number
  }

  export type boss_kills_playersUpsertWithWhereUniqueWithoutBoss_killsInput = {
    where: boss_kills_playersWhereUniqueInput
    update: XOR<boss_kills_playersUpdateWithoutBoss_killsInput, boss_kills_playersUncheckedUpdateWithoutBoss_killsInput>
    create: XOR<boss_kills_playersCreateWithoutBoss_killsInput, boss_kills_playersUncheckedCreateWithoutBoss_killsInput>
  }

  export type boss_kills_playersUpdateWithWhereUniqueWithoutBoss_killsInput = {
    where: boss_kills_playersWhereUniqueInput
    data: XOR<boss_kills_playersUpdateWithoutBoss_killsInput, boss_kills_playersUncheckedUpdateWithoutBoss_killsInput>
  }

  export type boss_kills_playersUpdateManyWithWhereWithoutBoss_killsInput = {
    where: boss_kills_playersScalarWhereInput
    data: XOR<boss_kills_playersUpdateManyMutationInput, boss_kills_playersUncheckedUpdateManyWithoutBoss_kills_playersInput>
  }

  export type boss_kills_playersScalarWhereInput = {
    AND?: Enumerable<boss_kills_playersScalarWhereInput>
    OR?: Enumerable<boss_kills_playersScalarWhereInput>
    NOT?: Enumerable<boss_kills_playersScalarWhereInput>
    id?: IntFilter | number
    guid?: IntFilter | number
    talent_spec?: IntFilter | number
    avg_item_lvl?: FloatFilter | number
    dmgDone?: BigIntFilter | bigint | number
    healingDone?: BigIntFilter | bigint | number
    overhealingDone?: BigIntFilter | bigint | number
    absorbDone?: BigIntFilter | bigint | number
    dmgTaken?: BigIntFilter | bigint | number
    dmgAbsorbed?: BigIntFilter | bigint | number
    healingTaken?: BigIntFilter | bigint | number
    usefullTime?: IntFilter | number
    dispels?: IntFilter | number
    interrupts?: IntFilter | number
    hidden?: BoolFilter | boolean
  }

  export type boss_killsCreateWithoutBoss_kills_deathsInput = {
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_maps?: boss_kills_mapsCreateNestedManyWithoutBoss_killsInput
    boss_kills_players?: boss_kills_playersCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsUncheckedCreateWithoutBoss_kills_deathsInput = {
    id?: number
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_maps?: boss_kills_mapsUncheckedCreateNestedManyWithoutBoss_killsInput
    boss_kills_players?: boss_kills_playersUncheckedCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsCreateOrConnectWithoutBoss_kills_deathsInput = {
    where: boss_killsWhereUniqueInput
    create: XOR<boss_killsCreateWithoutBoss_kills_deathsInput, boss_killsUncheckedCreateWithoutBoss_kills_deathsInput>
  }

  export type boss_killsUpsertWithoutBoss_kills_deathsInput = {
    update: XOR<boss_killsUpdateWithoutBoss_kills_deathsInput, boss_killsUncheckedUpdateWithoutBoss_kills_deathsInput>
    create: XOR<boss_killsCreateWithoutBoss_kills_deathsInput, boss_killsUncheckedCreateWithoutBoss_kills_deathsInput>
  }

  export type boss_killsUpdateWithoutBoss_kills_deathsInput = {
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_maps?: boss_kills_mapsUpdateManyWithoutBoss_killsNestedInput
    boss_kills_players?: boss_kills_playersUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_killsUncheckedUpdateWithoutBoss_kills_deathsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_maps?: boss_kills_mapsUncheckedUpdateManyWithoutBoss_killsNestedInput
    boss_kills_players?: boss_kills_playersUncheckedUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_killsCreateWithoutBoss_kills_mapsInput = {
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_deaths?: boss_kills_deathsCreateNestedManyWithoutBoss_killsInput
    boss_kills_players?: boss_kills_playersCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsUncheckedCreateWithoutBoss_kills_mapsInput = {
    id?: number
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_deaths?: boss_kills_deathsUncheckedCreateNestedManyWithoutBoss_killsInput
    boss_kills_players?: boss_kills_playersUncheckedCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsCreateOrConnectWithoutBoss_kills_mapsInput = {
    where: boss_killsWhereUniqueInput
    create: XOR<boss_killsCreateWithoutBoss_kills_mapsInput, boss_killsUncheckedCreateWithoutBoss_kills_mapsInput>
  }

  export type boss_killsUpsertWithoutBoss_kills_mapsInput = {
    update: XOR<boss_killsUpdateWithoutBoss_kills_mapsInput, boss_killsUncheckedUpdateWithoutBoss_kills_mapsInput>
    create: XOR<boss_killsCreateWithoutBoss_kills_mapsInput, boss_killsUncheckedCreateWithoutBoss_kills_mapsInput>
  }

  export type boss_killsUpdateWithoutBoss_kills_mapsInput = {
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_deaths?: boss_kills_deathsUpdateManyWithoutBoss_killsNestedInput
    boss_kills_players?: boss_kills_playersUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_killsUncheckedUpdateWithoutBoss_kills_mapsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_deaths?: boss_kills_deathsUncheckedUpdateManyWithoutBoss_killsNestedInput
    boss_kills_players?: boss_kills_playersUncheckedUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_killsCreateWithoutBoss_kills_playersInput = {
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_deaths?: boss_kills_deathsCreateNestedManyWithoutBoss_killsInput
    boss_kills_maps?: boss_kills_mapsCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsUncheckedCreateWithoutBoss_kills_playersInput = {
    id?: number
    reserver?: number | null
    entry?: number
    map?: string
    mode?: number
    guild?: string
    time?: Date | string | null
    realm?: number
    length?: number
    wipes?: number
    deaths?: number
    ressUsed?: number
    progressLenght?: number
    hidden?: boolean
    cleanupDisabled?: boolean
    instanceId?: number
    newGuildName?: string | null
    boss_kills_deaths?: boss_kills_deathsUncheckedCreateNestedManyWithoutBoss_killsInput
    boss_kills_maps?: boss_kills_mapsUncheckedCreateNestedManyWithoutBoss_killsInput
  }

  export type boss_killsCreateOrConnectWithoutBoss_kills_playersInput = {
    where: boss_killsWhereUniqueInput
    create: XOR<boss_killsCreateWithoutBoss_kills_playersInput, boss_killsUncheckedCreateWithoutBoss_kills_playersInput>
  }

  export type boss_killsUpsertWithoutBoss_kills_playersInput = {
    update: XOR<boss_killsUpdateWithoutBoss_kills_playersInput, boss_killsUncheckedUpdateWithoutBoss_kills_playersInput>
    create: XOR<boss_killsCreateWithoutBoss_kills_playersInput, boss_killsUncheckedCreateWithoutBoss_kills_playersInput>
  }

  export type boss_killsUpdateWithoutBoss_kills_playersInput = {
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_deaths?: boss_kills_deathsUpdateManyWithoutBoss_killsNestedInput
    boss_kills_maps?: boss_kills_mapsUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_killsUncheckedUpdateWithoutBoss_kills_playersInput = {
    id?: IntFieldUpdateOperationsInput | number
    reserver?: NullableIntFieldUpdateOperationsInput | number | null
    entry?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    mode?: IntFieldUpdateOperationsInput | number
    guild?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realm?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    wipes?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    ressUsed?: IntFieldUpdateOperationsInput | number
    progressLenght?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    cleanupDisabled?: BoolFieldUpdateOperationsInput | boolean
    instanceId?: IntFieldUpdateOperationsInput | number
    newGuildName?: NullableStringFieldUpdateOperationsInput | string | null
    boss_kills_deaths?: boss_kills_deathsUncheckedUpdateManyWithoutBoss_killsNestedInput
    boss_kills_maps?: boss_kills_mapsUncheckedUpdateManyWithoutBoss_killsNestedInput
  }

  export type boss_kills_deathsCreateManyBoss_killsInput = {
    guid?: number
    time?: number
  }

  export type boss_kills_mapsCreateManyBoss_killsInput = {
    time?: number
    encounterDamage?: bigint | number
    encounterHeal?: bigint | number
    raidDamage?: bigint | number
    raidHeal?: bigint | number
  }

  export type boss_kills_playersCreateManyBoss_killsInput = {
    guid?: number
    talent_spec?: number
    avg_item_lvl?: number
    dmgDone?: bigint | number
    healingDone?: bigint | number
    overhealingDone?: bigint | number
    absorbDone?: bigint | number
    dmgTaken?: bigint | number
    dmgAbsorbed?: bigint | number
    healingTaken?: bigint | number
    usefullTime?: number
    dispels?: number
    interrupts?: number
    hidden?: boolean
  }

  export type boss_kills_deathsUpdateWithoutBoss_killsInput = {
    guid?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_deathsUncheckedUpdateWithoutBoss_killsInput = {
    guid?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_deathsUncheckedUpdateManyWithoutBoss_kills_deathsInput = {
    guid?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type boss_kills_mapsUpdateWithoutBoss_killsInput = {
    time?: IntFieldUpdateOperationsInput | number
    encounterDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    encounterHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    raidDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    raidHeal?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type boss_kills_mapsUncheckedUpdateWithoutBoss_killsInput = {
    time?: IntFieldUpdateOperationsInput | number
    encounterDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    encounterHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    raidDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    raidHeal?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type boss_kills_mapsUncheckedUpdateManyWithoutBoss_kills_mapsInput = {
    time?: IntFieldUpdateOperationsInput | number
    encounterDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    encounterHeal?: BigIntFieldUpdateOperationsInput | bigint | number
    raidDamage?: BigIntFieldUpdateOperationsInput | bigint | number
    raidHeal?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type boss_kills_playersUpdateWithoutBoss_killsInput = {
    guid?: IntFieldUpdateOperationsInput | number
    talent_spec?: IntFieldUpdateOperationsInput | number
    avg_item_lvl?: FloatFieldUpdateOperationsInput | number
    dmgDone?: BigIntFieldUpdateOperationsInput | bigint | number
    healingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    overhealingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    absorbDone?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgAbsorbed?: BigIntFieldUpdateOperationsInput | bigint | number
    healingTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    usefullTime?: IntFieldUpdateOperationsInput | number
    dispels?: IntFieldUpdateOperationsInput | number
    interrupts?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type boss_kills_playersUncheckedUpdateWithoutBoss_killsInput = {
    guid?: IntFieldUpdateOperationsInput | number
    talent_spec?: IntFieldUpdateOperationsInput | number
    avg_item_lvl?: FloatFieldUpdateOperationsInput | number
    dmgDone?: BigIntFieldUpdateOperationsInput | bigint | number
    healingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    overhealingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    absorbDone?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgAbsorbed?: BigIntFieldUpdateOperationsInput | bigint | number
    healingTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    usefullTime?: IntFieldUpdateOperationsInput | number
    dispels?: IntFieldUpdateOperationsInput | number
    interrupts?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type boss_kills_playersUncheckedUpdateManyWithoutBoss_kills_playersInput = {
    guid?: IntFieldUpdateOperationsInput | number
    talent_spec?: IntFieldUpdateOperationsInput | number
    avg_item_lvl?: FloatFieldUpdateOperationsInput | number
    dmgDone?: BigIntFieldUpdateOperationsInput | bigint | number
    healingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    overhealingDone?: BigIntFieldUpdateOperationsInput | bigint | number
    absorbDone?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    dmgAbsorbed?: BigIntFieldUpdateOperationsInput | bigint | number
    healingTaken?: BigIntFieldUpdateOperationsInput | bigint | number
    usefullTime?: IntFieldUpdateOperationsInput | number
    dispels?: IntFieldUpdateOperationsInput | number
    interrupts?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}