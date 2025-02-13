
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CableCustomer
 * 
 */
export type CableCustomer = $Result.DefaultSelection<Prisma.$CableCustomerPayload>
/**
 * Model CableCollection
 * 
 */
export type CableCollection = $Result.DefaultSelection<Prisma.$CableCollectionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.cableCustomer`: Exposes CRUD operations for the **CableCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CableCustomers
    * const cableCustomers = await prisma.cableCustomer.findMany()
    * ```
    */
  get cableCustomer(): Prisma.CableCustomerDelegate<ExtArgs>;

  /**
   * `prisma.cableCollection`: Exposes CRUD operations for the **CableCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CableCollections
    * const cableCollections = await prisma.cableCollection.findMany()
    * ```
    */
  get cableCollection(): Prisma.CableCollectionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CableCustomer: 'CableCustomer',
    CableCollection: 'CableCollection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'cableCustomer' | 'cableCollection'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CableCustomer: {
        payload: Prisma.$CableCustomerPayload<ExtArgs>
        fields: Prisma.CableCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CableCustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CableCustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload>
          }
          findFirst: {
            args: Prisma.CableCustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CableCustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload>
          }
          findMany: {
            args: Prisma.CableCustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload>[]
          }
          create: {
            args: Prisma.CableCustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload>
          }
          delete: {
            args: Prisma.CableCustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload>
          }
          update: {
            args: Prisma.CableCustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload>
          }
          deleteMany: {
            args: Prisma.CableCustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CableCustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CableCustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCustomerPayload>
          }
          aggregate: {
            args: Prisma.CableCustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCableCustomer>
          }
          groupBy: {
            args: Prisma.CableCustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CableCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CableCustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CableCustomerCountAggregateOutputType> | number
          }
        }
      }
      CableCollection: {
        payload: Prisma.$CableCollectionPayload<ExtArgs>
        fields: Prisma.CableCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CableCollectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CableCollectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload>
          }
          findFirst: {
            args: Prisma.CableCollectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CableCollectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload>
          }
          findMany: {
            args: Prisma.CableCollectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload>[]
          }
          create: {
            args: Prisma.CableCollectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload>
          }
          delete: {
            args: Prisma.CableCollectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload>
          }
          update: {
            args: Prisma.CableCollectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload>
          }
          deleteMany: {
            args: Prisma.CableCollectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CableCollectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CableCollectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableCollectionPayload>
          }
          aggregate: {
            args: Prisma.CableCollectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCableCollection>
          }
          groupBy: {
            args: Prisma.CableCollectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CableCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CableCollectionCountArgs<ExtArgs>,
            result: $Utils.Optional<CableCollectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    CollectionBy: number
    SettlementTo: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    CollectionBy?: boolean | UserCountOutputTypeCountCollectionByArgs
    SettlementTo?: boolean | UserCountOutputTypeCountSettlementToArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CableCollectionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettlementToArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CableCollectionWhereInput
  }



  /**
   * Count Type CableCustomerCountOutputType
   */

  export type CableCustomerCountOutputType = {
    CableCollection: number
  }

  export type CableCustomerCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    CableCollection?: boolean | CableCustomerCountOutputTypeCountCableCollectionArgs
  }

  // Custom InputTypes

  /**
   * CableCustomerCountOutputType without action
   */
  export type CableCustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomerCountOutputType
     */
    select?: CableCustomerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CableCustomerCountOutputType without action
   */
  export type CableCustomerCountOutputTypeCountCableCollectionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CableCollectionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    enabled: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    enabled: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    enabled: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    enabled?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    enabled?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    enabled?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userId: string
    name: string | null
    enabled: boolean | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    enabled?: boolean
    CollectionBy?: boolean | User$CollectionByArgs<ExtArgs>
    SettlementTo?: boolean | User$SettlementToArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    enabled?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    CollectionBy?: boolean | User$CollectionByArgs<ExtArgs>
    SettlementTo?: boolean | User$SettlementToArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      CollectionBy: Prisma.$CableCollectionPayload<ExtArgs>[]
      SettlementTo: Prisma.$CableCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      userId: string
      name: string | null
      enabled: boolean | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CollectionBy<T extends User$CollectionByArgs<ExtArgs> = {}>(args?: Subset<T, User$CollectionByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    SettlementTo<T extends User$SettlementToArgs<ExtArgs> = {}>(args?: Subset<T, User$SettlementToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly enabled: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.CollectionBy
   */
  export type User$CollectionByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    where?: CableCollectionWhereInput
    orderBy?: CableCollectionOrderByWithRelationInput | CableCollectionOrderByWithRelationInput[]
    cursor?: CableCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CableCollectionScalarFieldEnum | CableCollectionScalarFieldEnum[]
  }


  /**
   * User.SettlementTo
   */
  export type User$SettlementToArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    where?: CableCollectionWhereInput
    orderBy?: CableCollectionOrderByWithRelationInput | CableCollectionOrderByWithRelationInput[]
    cursor?: CableCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CableCollectionScalarFieldEnum | CableCollectionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model CableCustomer
   */

  export type AggregateCableCustomer = {
    _count: CableCustomerCountAggregateOutputType | null
    _avg: CableCustomerAvgAggregateOutputType | null
    _sum: CableCustomerSumAggregateOutputType | null
    _min: CableCustomerMinAggregateOutputType | null
    _max: CableCustomerMaxAggregateOutputType | null
  }

  export type CableCustomerAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    bill: number | null
    balance: number | null
    custom1Num: number | null
    custom2Num: number | null
  }

  export type CableCustomerSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    bill: number | null
    balance: number | null
    custom1Num: number | null
    custom2Num: number | null
  }

  export type CableCustomerMinAggregateOutputType = {
    customerId: string | null
    name: string | null
    area: string | null
    mobile: string | null
    stb: string | null
    stbStatus: string | null
    stbType: string | null
    allowCredit: boolean | null
    status: boolean | null
    latitude: number | null
    longitude: number | null
    connectionOn: Date | null
    notes: string | null
    upiIds: string | null
    bill: number | null
    balance: number | null
    custom1Str: string | null
    custom2Str: string | null
    custom3Str: string | null
    custom4Str: string | null
    custom1Num: number | null
    custom2Num: number | null
  }

  export type CableCustomerMaxAggregateOutputType = {
    customerId: string | null
    name: string | null
    area: string | null
    mobile: string | null
    stb: string | null
    stbStatus: string | null
    stbType: string | null
    allowCredit: boolean | null
    status: boolean | null
    latitude: number | null
    longitude: number | null
    connectionOn: Date | null
    notes: string | null
    upiIds: string | null
    bill: number | null
    balance: number | null
    custom1Str: string | null
    custom2Str: string | null
    custom3Str: string | null
    custom4Str: string | null
    custom1Num: number | null
    custom2Num: number | null
  }

  export type CableCustomerCountAggregateOutputType = {
    customerId: number
    name: number
    area: number
    mobile: number
    stb: number
    stbStatus: number
    stbType: number
    allowCredit: number
    status: number
    latitude: number
    longitude: number
    connectionOn: number
    notes: number
    upiIds: number
    bill: number
    balance: number
    custom1Str: number
    custom2Str: number
    custom3Str: number
    custom4Str: number
    custom1Num: number
    custom2Num: number
    _all: number
  }


  export type CableCustomerAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    bill?: true
    balance?: true
    custom1Num?: true
    custom2Num?: true
  }

  export type CableCustomerSumAggregateInputType = {
    latitude?: true
    longitude?: true
    bill?: true
    balance?: true
    custom1Num?: true
    custom2Num?: true
  }

  export type CableCustomerMinAggregateInputType = {
    customerId?: true
    name?: true
    area?: true
    mobile?: true
    stb?: true
    stbStatus?: true
    stbType?: true
    allowCredit?: true
    status?: true
    latitude?: true
    longitude?: true
    connectionOn?: true
    notes?: true
    upiIds?: true
    bill?: true
    balance?: true
    custom1Str?: true
    custom2Str?: true
    custom3Str?: true
    custom4Str?: true
    custom1Num?: true
    custom2Num?: true
  }

  export type CableCustomerMaxAggregateInputType = {
    customerId?: true
    name?: true
    area?: true
    mobile?: true
    stb?: true
    stbStatus?: true
    stbType?: true
    allowCredit?: true
    status?: true
    latitude?: true
    longitude?: true
    connectionOn?: true
    notes?: true
    upiIds?: true
    bill?: true
    balance?: true
    custom1Str?: true
    custom2Str?: true
    custom3Str?: true
    custom4Str?: true
    custom1Num?: true
    custom2Num?: true
  }

  export type CableCustomerCountAggregateInputType = {
    customerId?: true
    name?: true
    area?: true
    mobile?: true
    stb?: true
    stbStatus?: true
    stbType?: true
    allowCredit?: true
    status?: true
    latitude?: true
    longitude?: true
    connectionOn?: true
    notes?: true
    upiIds?: true
    bill?: true
    balance?: true
    custom1Str?: true
    custom2Str?: true
    custom3Str?: true
    custom4Str?: true
    custom1Num?: true
    custom2Num?: true
    _all?: true
  }

  export type CableCustomerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableCustomer to aggregate.
     */
    where?: CableCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCustomers to fetch.
     */
    orderBy?: CableCustomerOrderByWithRelationInput | CableCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CableCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CableCustomers
    **/
    _count?: true | CableCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CableCustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CableCustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CableCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CableCustomerMaxAggregateInputType
  }

  export type GetCableCustomerAggregateType<T extends CableCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCableCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCableCustomer[P]>
      : GetScalarType<T[P], AggregateCableCustomer[P]>
  }




  export type CableCustomerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CableCustomerWhereInput
    orderBy?: CableCustomerOrderByWithAggregationInput | CableCustomerOrderByWithAggregationInput[]
    by: CableCustomerScalarFieldEnum[] | CableCustomerScalarFieldEnum
    having?: CableCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CableCustomerCountAggregateInputType | true
    _avg?: CableCustomerAvgAggregateInputType
    _sum?: CableCustomerSumAggregateInputType
    _min?: CableCustomerMinAggregateInputType
    _max?: CableCustomerMaxAggregateInputType
  }

  export type CableCustomerGroupByOutputType = {
    customerId: string
    name: string
    area: string | null
    mobile: string | null
    stb: string | null
    stbStatus: string | null
    stbType: string | null
    allowCredit: boolean
    status: boolean
    latitude: number | null
    longitude: number | null
    connectionOn: Date
    notes: string | null
    upiIds: string | null
    bill: number | null
    balance: number | null
    custom1Str: string | null
    custom2Str: string | null
    custom3Str: string | null
    custom4Str: string | null
    custom1Num: number | null
    custom2Num: number | null
    _count: CableCustomerCountAggregateOutputType | null
    _avg: CableCustomerAvgAggregateOutputType | null
    _sum: CableCustomerSumAggregateOutputType | null
    _min: CableCustomerMinAggregateOutputType | null
    _max: CableCustomerMaxAggregateOutputType | null
  }

  type GetCableCustomerGroupByPayload<T extends CableCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CableCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CableCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CableCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CableCustomerGroupByOutputType[P]>
        }
      >
    >


  export type CableCustomerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    name?: boolean
    area?: boolean
    mobile?: boolean
    stb?: boolean
    stbStatus?: boolean
    stbType?: boolean
    allowCredit?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    connectionOn?: boolean
    notes?: boolean
    upiIds?: boolean
    bill?: boolean
    balance?: boolean
    custom1Str?: boolean
    custom2Str?: boolean
    custom3Str?: boolean
    custom4Str?: boolean
    custom1Num?: boolean
    custom2Num?: boolean
    CableCollection?: boolean | CableCustomer$CableCollectionArgs<ExtArgs>
    _count?: boolean | CableCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cableCustomer"]>

  export type CableCustomerSelectScalar = {
    customerId?: boolean
    name?: boolean
    area?: boolean
    mobile?: boolean
    stb?: boolean
    stbStatus?: boolean
    stbType?: boolean
    allowCredit?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    connectionOn?: boolean
    notes?: boolean
    upiIds?: boolean
    bill?: boolean
    balance?: boolean
    custom1Str?: boolean
    custom2Str?: boolean
    custom3Str?: boolean
    custom4Str?: boolean
    custom1Num?: boolean
    custom2Num?: boolean
  }

  export type CableCustomerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    CableCollection?: boolean | CableCustomer$CableCollectionArgs<ExtArgs>
    _count?: boolean | CableCustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CableCustomerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "CableCustomer"
    objects: {
      CableCollection: Prisma.$CableCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      customerId: string
      name: string
      area: string | null
      mobile: string | null
      stb: string | null
      stbStatus: string | null
      stbType: string | null
      allowCredit: boolean
      status: boolean
      latitude: number | null
      longitude: number | null
      connectionOn: Date
      notes: string | null
      upiIds: string | null
      bill: number | null
      balance: number | null
      custom1Str: string | null
      custom2Str: string | null
      custom3Str: string | null
      custom4Str: string | null
      custom1Num: number | null
      custom2Num: number | null
    }, ExtArgs["result"]["cableCustomer"]>
    composites: {}
  }


  type CableCustomerGetPayload<S extends boolean | null | undefined | CableCustomerDefaultArgs> = $Result.GetResult<Prisma.$CableCustomerPayload, S>

  type CableCustomerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CableCustomerFindManyArgs, 'select' | 'include'> & {
      select?: CableCustomerCountAggregateInputType | true
    }

  export interface CableCustomerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CableCustomer'], meta: { name: 'CableCustomer' } }
    /**
     * Find zero or one CableCustomer that matches the filter.
     * @param {CableCustomerFindUniqueArgs} args - Arguments to find a CableCustomer
     * @example
     * // Get one CableCustomer
     * const cableCustomer = await prisma.cableCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CableCustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CableCustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CableCustomer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CableCustomerFindUniqueOrThrowArgs} args - Arguments to find a CableCustomer
     * @example
     * // Get one CableCustomer
     * const cableCustomer = await prisma.cableCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CableCustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CableCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCustomerFindFirstArgs} args - Arguments to find a CableCustomer
     * @example
     * // Get one CableCustomer
     * const cableCustomer = await prisma.cableCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CableCustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CableCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCustomerFindFirstOrThrowArgs} args - Arguments to find a CableCustomer
     * @example
     * // Get one CableCustomer
     * const cableCustomer = await prisma.cableCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CableCustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CableCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CableCustomers
     * const cableCustomers = await prisma.cableCustomer.findMany()
     * 
     * // Get first 10 CableCustomers
     * const cableCustomers = await prisma.cableCustomer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const cableCustomerWithCustomerIdOnly = await prisma.cableCustomer.findMany({ select: { customerId: true } })
     * 
    **/
    findMany<T extends CableCustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CableCustomer.
     * @param {CableCustomerCreateArgs} args - Arguments to create a CableCustomer.
     * @example
     * // Create one CableCustomer
     * const CableCustomer = await prisma.cableCustomer.create({
     *   data: {
     *     // ... data to create a CableCustomer
     *   }
     * })
     * 
    **/
    create<T extends CableCustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CableCustomerCreateArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a CableCustomer.
     * @param {CableCustomerDeleteArgs} args - Arguments to delete one CableCustomer.
     * @example
     * // Delete one CableCustomer
     * const CableCustomer = await prisma.cableCustomer.delete({
     *   where: {
     *     // ... filter to delete one CableCustomer
     *   }
     * })
     * 
    **/
    delete<T extends CableCustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CableCustomerDeleteArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CableCustomer.
     * @param {CableCustomerUpdateArgs} args - Arguments to update one CableCustomer.
     * @example
     * // Update one CableCustomer
     * const cableCustomer = await prisma.cableCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CableCustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CableCustomerUpdateArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CableCustomers.
     * @param {CableCustomerDeleteManyArgs} args - Arguments to filter CableCustomers to delete.
     * @example
     * // Delete a few CableCustomers
     * const { count } = await prisma.cableCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CableCustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CableCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CableCustomers
     * const cableCustomer = await prisma.cableCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CableCustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CableCustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CableCustomer.
     * @param {CableCustomerUpsertArgs} args - Arguments to update or create a CableCustomer.
     * @example
     * // Update or create a CableCustomer
     * const cableCustomer = await prisma.cableCustomer.upsert({
     *   create: {
     *     // ... data to create a CableCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CableCustomer we want to update
     *   }
     * })
    **/
    upsert<T extends CableCustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CableCustomerUpsertArgs<ExtArgs>>
    ): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CableCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCustomerCountArgs} args - Arguments to filter CableCustomers to count.
     * @example
     * // Count the number of CableCustomers
     * const count = await prisma.cableCustomer.count({
     *   where: {
     *     // ... the filter for the CableCustomers we want to count
     *   }
     * })
    **/
    count<T extends CableCustomerCountArgs>(
      args?: Subset<T, CableCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CableCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CableCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CableCustomerAggregateArgs>(args: Subset<T, CableCustomerAggregateArgs>): Prisma.PrismaPromise<GetCableCustomerAggregateType<T>>

    /**
     * Group by CableCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCustomerGroupByArgs} args - Group by arguments.
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
      T extends CableCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CableCustomerGroupByArgs['orderBy'] }
        : { orderBy?: CableCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CableCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCableCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CableCustomer model
   */
  readonly fields: CableCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CableCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CableCustomerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    CableCollection<T extends CableCustomer$CableCollectionArgs<ExtArgs> = {}>(args?: Subset<T, CableCustomer$CableCollectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CableCustomer model
   */ 
  interface CableCustomerFieldRefs {
    readonly customerId: FieldRef<"CableCustomer", 'String'>
    readonly name: FieldRef<"CableCustomer", 'String'>
    readonly area: FieldRef<"CableCustomer", 'String'>
    readonly mobile: FieldRef<"CableCustomer", 'String'>
    readonly stb: FieldRef<"CableCustomer", 'String'>
    readonly stbStatus: FieldRef<"CableCustomer", 'String'>
    readonly stbType: FieldRef<"CableCustomer", 'String'>
    readonly allowCredit: FieldRef<"CableCustomer", 'Boolean'>
    readonly status: FieldRef<"CableCustomer", 'Boolean'>
    readonly latitude: FieldRef<"CableCustomer", 'Float'>
    readonly longitude: FieldRef<"CableCustomer", 'Float'>
    readonly connectionOn: FieldRef<"CableCustomer", 'DateTime'>
    readonly notes: FieldRef<"CableCustomer", 'String'>
    readonly upiIds: FieldRef<"CableCustomer", 'String'>
    readonly bill: FieldRef<"CableCustomer", 'Int'>
    readonly balance: FieldRef<"CableCustomer", 'Int'>
    readonly custom1Str: FieldRef<"CableCustomer", 'String'>
    readonly custom2Str: FieldRef<"CableCustomer", 'String'>
    readonly custom3Str: FieldRef<"CableCustomer", 'String'>
    readonly custom4Str: FieldRef<"CableCustomer", 'String'>
    readonly custom1Num: FieldRef<"CableCustomer", 'Int'>
    readonly custom2Num: FieldRef<"CableCustomer", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * CableCustomer findUnique
   */
  export type CableCustomerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * Filter, which CableCustomer to fetch.
     */
    where: CableCustomerWhereUniqueInput
  }


  /**
   * CableCustomer findUniqueOrThrow
   */
  export type CableCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * Filter, which CableCustomer to fetch.
     */
    where: CableCustomerWhereUniqueInput
  }


  /**
   * CableCustomer findFirst
   */
  export type CableCustomerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * Filter, which CableCustomer to fetch.
     */
    where?: CableCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCustomers to fetch.
     */
    orderBy?: CableCustomerOrderByWithRelationInput | CableCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableCustomers.
     */
    cursor?: CableCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableCustomers.
     */
    distinct?: CableCustomerScalarFieldEnum | CableCustomerScalarFieldEnum[]
  }


  /**
   * CableCustomer findFirstOrThrow
   */
  export type CableCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * Filter, which CableCustomer to fetch.
     */
    where?: CableCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCustomers to fetch.
     */
    orderBy?: CableCustomerOrderByWithRelationInput | CableCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableCustomers.
     */
    cursor?: CableCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableCustomers.
     */
    distinct?: CableCustomerScalarFieldEnum | CableCustomerScalarFieldEnum[]
  }


  /**
   * CableCustomer findMany
   */
  export type CableCustomerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * Filter, which CableCustomers to fetch.
     */
    where?: CableCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCustomers to fetch.
     */
    orderBy?: CableCustomerOrderByWithRelationInput | CableCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CableCustomers.
     */
    cursor?: CableCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCustomers.
     */
    skip?: number
    distinct?: CableCustomerScalarFieldEnum | CableCustomerScalarFieldEnum[]
  }


  /**
   * CableCustomer create
   */
  export type CableCustomerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a CableCustomer.
     */
    data: XOR<CableCustomerCreateInput, CableCustomerUncheckedCreateInput>
  }


  /**
   * CableCustomer update
   */
  export type CableCustomerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a CableCustomer.
     */
    data: XOR<CableCustomerUpdateInput, CableCustomerUncheckedUpdateInput>
    /**
     * Choose, which CableCustomer to update.
     */
    where: CableCustomerWhereUniqueInput
  }


  /**
   * CableCustomer updateMany
   */
  export type CableCustomerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CableCustomers.
     */
    data: XOR<CableCustomerUpdateManyMutationInput, CableCustomerUncheckedUpdateManyInput>
    /**
     * Filter which CableCustomers to update
     */
    where?: CableCustomerWhereInput
  }


  /**
   * CableCustomer upsert
   */
  export type CableCustomerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the CableCustomer to update in case it exists.
     */
    where: CableCustomerWhereUniqueInput
    /**
     * In case the CableCustomer found by the `where` argument doesn't exist, create a new CableCustomer with this data.
     */
    create: XOR<CableCustomerCreateInput, CableCustomerUncheckedCreateInput>
    /**
     * In case the CableCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CableCustomerUpdateInput, CableCustomerUncheckedUpdateInput>
  }


  /**
   * CableCustomer delete
   */
  export type CableCustomerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
    /**
     * Filter which CableCustomer to delete.
     */
    where: CableCustomerWhereUniqueInput
  }


  /**
   * CableCustomer deleteMany
   */
  export type CableCustomerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableCustomers to delete
     */
    where?: CableCustomerWhereInput
  }


  /**
   * CableCustomer.CableCollection
   */
  export type CableCustomer$CableCollectionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    where?: CableCollectionWhereInput
    orderBy?: CableCollectionOrderByWithRelationInput | CableCollectionOrderByWithRelationInput[]
    cursor?: CableCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CableCollectionScalarFieldEnum | CableCollectionScalarFieldEnum[]
  }


  /**
   * CableCustomer without action
   */
  export type CableCustomerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCustomer
     */
    select?: CableCustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCustomerInclude<ExtArgs> | null
  }



  /**
   * Model CableCollection
   */

  export type AggregateCableCollection = {
    _count: CableCollectionCountAggregateOutputType | null
    _avg: CableCollectionAvgAggregateOutputType | null
    _sum: CableCollectionSumAggregateOutputType | null
    _min: CableCollectionMinAggregateOutputType | null
    _max: CableCollectionMaxAggregateOutputType | null
  }

  export type CableCollectionAvgAggregateOutputType = {
    collectionBy: number | null
    settlementTo: number | null
  }

  export type CableCollectionSumAggregateOutputType = {
    collectionBy: number | null
    settlementTo: number | null
  }

  export type CableCollectionMinAggregateOutputType = {
    customerId: string | null
    month: string | null
    collectionDate: Date | null
    collectionBy: number | null
    settlementDate: Date | null
    settlementTo: number | null
    notes: string | null
  }

  export type CableCollectionMaxAggregateOutputType = {
    customerId: string | null
    month: string | null
    collectionDate: Date | null
    collectionBy: number | null
    settlementDate: Date | null
    settlementTo: number | null
    notes: string | null
  }

  export type CableCollectionCountAggregateOutputType = {
    customerId: number
    month: number
    collectionDate: number
    collectionBy: number
    settlementDate: number
    settlementTo: number
    notes: number
    _all: number
  }


  export type CableCollectionAvgAggregateInputType = {
    collectionBy?: true
    settlementTo?: true
  }

  export type CableCollectionSumAggregateInputType = {
    collectionBy?: true
    settlementTo?: true
  }

  export type CableCollectionMinAggregateInputType = {
    customerId?: true
    month?: true
    collectionDate?: true
    collectionBy?: true
    settlementDate?: true
    settlementTo?: true
    notes?: true
  }

  export type CableCollectionMaxAggregateInputType = {
    customerId?: true
    month?: true
    collectionDate?: true
    collectionBy?: true
    settlementDate?: true
    settlementTo?: true
    notes?: true
  }

  export type CableCollectionCountAggregateInputType = {
    customerId?: true
    month?: true
    collectionDate?: true
    collectionBy?: true
    settlementDate?: true
    settlementTo?: true
    notes?: true
    _all?: true
  }

  export type CableCollectionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableCollection to aggregate.
     */
    where?: CableCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCollections to fetch.
     */
    orderBy?: CableCollectionOrderByWithRelationInput | CableCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CableCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CableCollections
    **/
    _count?: true | CableCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CableCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CableCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CableCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CableCollectionMaxAggregateInputType
  }

  export type GetCableCollectionAggregateType<T extends CableCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCableCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCableCollection[P]>
      : GetScalarType<T[P], AggregateCableCollection[P]>
  }




  export type CableCollectionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CableCollectionWhereInput
    orderBy?: CableCollectionOrderByWithAggregationInput | CableCollectionOrderByWithAggregationInput[]
    by: CableCollectionScalarFieldEnum[] | CableCollectionScalarFieldEnum
    having?: CableCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CableCollectionCountAggregateInputType | true
    _avg?: CableCollectionAvgAggregateInputType
    _sum?: CableCollectionSumAggregateInputType
    _min?: CableCollectionMinAggregateInputType
    _max?: CableCollectionMaxAggregateInputType
  }

  export type CableCollectionGroupByOutputType = {
    customerId: string
    month: string
    collectionDate: Date
    collectionBy: number
    settlementDate: Date | null
    settlementTo: number
    notes: string
    _count: CableCollectionCountAggregateOutputType | null
    _avg: CableCollectionAvgAggregateOutputType | null
    _sum: CableCollectionSumAggregateOutputType | null
    _min: CableCollectionMinAggregateOutputType | null
    _max: CableCollectionMaxAggregateOutputType | null
  }

  type GetCableCollectionGroupByPayload<T extends CableCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CableCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CableCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CableCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CableCollectionGroupByOutputType[P]>
        }
      >
    >


  export type CableCollectionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    month?: boolean
    collectionDate?: boolean
    collectionBy?: boolean
    settlementDate?: boolean
    settlementTo?: boolean
    notes?: boolean
    customer?: boolean | CableCustomerDefaultArgs<ExtArgs>
    collectionByUser?: boolean | UserDefaultArgs<ExtArgs>
    settlementToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cableCollection"]>

  export type CableCollectionSelectScalar = {
    customerId?: boolean
    month?: boolean
    collectionDate?: boolean
    collectionBy?: boolean
    settlementDate?: boolean
    settlementTo?: boolean
    notes?: boolean
  }

  export type CableCollectionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    customer?: boolean | CableCustomerDefaultArgs<ExtArgs>
    collectionByUser?: boolean | UserDefaultArgs<ExtArgs>
    settlementToUser?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CableCollectionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "CableCollection"
    objects: {
      customer: Prisma.$CableCustomerPayload<ExtArgs>
      collectionByUser: Prisma.$UserPayload<ExtArgs>
      settlementToUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      customerId: string
      month: string
      collectionDate: Date
      collectionBy: number
      settlementDate: Date | null
      settlementTo: number
      notes: string
    }, ExtArgs["result"]["cableCollection"]>
    composites: {}
  }


  type CableCollectionGetPayload<S extends boolean | null | undefined | CableCollectionDefaultArgs> = $Result.GetResult<Prisma.$CableCollectionPayload, S>

  type CableCollectionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CableCollectionFindManyArgs, 'select' | 'include'> & {
      select?: CableCollectionCountAggregateInputType | true
    }

  export interface CableCollectionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CableCollection'], meta: { name: 'CableCollection' } }
    /**
     * Find zero or one CableCollection that matches the filter.
     * @param {CableCollectionFindUniqueArgs} args - Arguments to find a CableCollection
     * @example
     * // Get one CableCollection
     * const cableCollection = await prisma.cableCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CableCollectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CableCollectionFindUniqueArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CableCollection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CableCollectionFindUniqueOrThrowArgs} args - Arguments to find a CableCollection
     * @example
     * // Get one CableCollection
     * const cableCollection = await prisma.cableCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CableCollectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCollectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CableCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCollectionFindFirstArgs} args - Arguments to find a CableCollection
     * @example
     * // Get one CableCollection
     * const cableCollection = await prisma.cableCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CableCollectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCollectionFindFirstArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CableCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCollectionFindFirstOrThrowArgs} args - Arguments to find a CableCollection
     * @example
     * // Get one CableCollection
     * const cableCollection = await prisma.cableCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CableCollectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCollectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CableCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CableCollections
     * const cableCollections = await prisma.cableCollection.findMany()
     * 
     * // Get first 10 CableCollections
     * const cableCollections = await prisma.cableCollection.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const cableCollectionWithCustomerIdOnly = await prisma.cableCollection.findMany({ select: { customerId: true } })
     * 
    **/
    findMany<T extends CableCollectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCollectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CableCollection.
     * @param {CableCollectionCreateArgs} args - Arguments to create a CableCollection.
     * @example
     * // Create one CableCollection
     * const CableCollection = await prisma.cableCollection.create({
     *   data: {
     *     // ... data to create a CableCollection
     *   }
     * })
     * 
    **/
    create<T extends CableCollectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CableCollectionCreateArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a CableCollection.
     * @param {CableCollectionDeleteArgs} args - Arguments to delete one CableCollection.
     * @example
     * // Delete one CableCollection
     * const CableCollection = await prisma.cableCollection.delete({
     *   where: {
     *     // ... filter to delete one CableCollection
     *   }
     * })
     * 
    **/
    delete<T extends CableCollectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CableCollectionDeleteArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CableCollection.
     * @param {CableCollectionUpdateArgs} args - Arguments to update one CableCollection.
     * @example
     * // Update one CableCollection
     * const cableCollection = await prisma.cableCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CableCollectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CableCollectionUpdateArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CableCollections.
     * @param {CableCollectionDeleteManyArgs} args - Arguments to filter CableCollections to delete.
     * @example
     * // Delete a few CableCollections
     * const { count } = await prisma.cableCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CableCollectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CableCollectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CableCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CableCollections
     * const cableCollection = await prisma.cableCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CableCollectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CableCollectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CableCollection.
     * @param {CableCollectionUpsertArgs} args - Arguments to update or create a CableCollection.
     * @example
     * // Update or create a CableCollection
     * const cableCollection = await prisma.cableCollection.upsert({
     *   create: {
     *     // ... data to create a CableCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CableCollection we want to update
     *   }
     * })
    **/
    upsert<T extends CableCollectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CableCollectionUpsertArgs<ExtArgs>>
    ): Prisma__CableCollectionClient<$Result.GetResult<Prisma.$CableCollectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CableCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCollectionCountArgs} args - Arguments to filter CableCollections to count.
     * @example
     * // Count the number of CableCollections
     * const count = await prisma.cableCollection.count({
     *   where: {
     *     // ... the filter for the CableCollections we want to count
     *   }
     * })
    **/
    count<T extends CableCollectionCountArgs>(
      args?: Subset<T, CableCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CableCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CableCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CableCollectionAggregateArgs>(args: Subset<T, CableCollectionAggregateArgs>): Prisma.PrismaPromise<GetCableCollectionAggregateType<T>>

    /**
     * Group by CableCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableCollectionGroupByArgs} args - Group by arguments.
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
      T extends CableCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CableCollectionGroupByArgs['orderBy'] }
        : { orderBy?: CableCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CableCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCableCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CableCollection model
   */
  readonly fields: CableCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CableCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CableCollectionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends CableCustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CableCustomerDefaultArgs<ExtArgs>>): Prisma__CableCustomerClient<$Result.GetResult<Prisma.$CableCustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    collectionByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    settlementToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CableCollection model
   */ 
  interface CableCollectionFieldRefs {
    readonly customerId: FieldRef<"CableCollection", 'String'>
    readonly month: FieldRef<"CableCollection", 'String'>
    readonly collectionDate: FieldRef<"CableCollection", 'DateTime'>
    readonly collectionBy: FieldRef<"CableCollection", 'Int'>
    readonly settlementDate: FieldRef<"CableCollection", 'DateTime'>
    readonly settlementTo: FieldRef<"CableCollection", 'Int'>
    readonly notes: FieldRef<"CableCollection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CableCollection findUnique
   */
  export type CableCollectionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * Filter, which CableCollection to fetch.
     */
    where: CableCollectionWhereUniqueInput
  }


  /**
   * CableCollection findUniqueOrThrow
   */
  export type CableCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * Filter, which CableCollection to fetch.
     */
    where: CableCollectionWhereUniqueInput
  }


  /**
   * CableCollection findFirst
   */
  export type CableCollectionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * Filter, which CableCollection to fetch.
     */
    where?: CableCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCollections to fetch.
     */
    orderBy?: CableCollectionOrderByWithRelationInput | CableCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableCollections.
     */
    cursor?: CableCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableCollections.
     */
    distinct?: CableCollectionScalarFieldEnum | CableCollectionScalarFieldEnum[]
  }


  /**
   * CableCollection findFirstOrThrow
   */
  export type CableCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * Filter, which CableCollection to fetch.
     */
    where?: CableCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCollections to fetch.
     */
    orderBy?: CableCollectionOrderByWithRelationInput | CableCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableCollections.
     */
    cursor?: CableCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableCollections.
     */
    distinct?: CableCollectionScalarFieldEnum | CableCollectionScalarFieldEnum[]
  }


  /**
   * CableCollection findMany
   */
  export type CableCollectionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * Filter, which CableCollections to fetch.
     */
    where?: CableCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableCollections to fetch.
     */
    orderBy?: CableCollectionOrderByWithRelationInput | CableCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CableCollections.
     */
    cursor?: CableCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableCollections.
     */
    skip?: number
    distinct?: CableCollectionScalarFieldEnum | CableCollectionScalarFieldEnum[]
  }


  /**
   * CableCollection create
   */
  export type CableCollectionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a CableCollection.
     */
    data: XOR<CableCollectionCreateInput, CableCollectionUncheckedCreateInput>
  }


  /**
   * CableCollection update
   */
  export type CableCollectionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a CableCollection.
     */
    data: XOR<CableCollectionUpdateInput, CableCollectionUncheckedUpdateInput>
    /**
     * Choose, which CableCollection to update.
     */
    where: CableCollectionWhereUniqueInput
  }


  /**
   * CableCollection updateMany
   */
  export type CableCollectionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CableCollections.
     */
    data: XOR<CableCollectionUpdateManyMutationInput, CableCollectionUncheckedUpdateManyInput>
    /**
     * Filter which CableCollections to update
     */
    where?: CableCollectionWhereInput
  }


  /**
   * CableCollection upsert
   */
  export type CableCollectionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the CableCollection to update in case it exists.
     */
    where: CableCollectionWhereUniqueInput
    /**
     * In case the CableCollection found by the `where` argument doesn't exist, create a new CableCollection with this data.
     */
    create: XOR<CableCollectionCreateInput, CableCollectionUncheckedCreateInput>
    /**
     * In case the CableCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CableCollectionUpdateInput, CableCollectionUncheckedUpdateInput>
  }


  /**
   * CableCollection delete
   */
  export type CableCollectionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
    /**
     * Filter which CableCollection to delete.
     */
    where: CableCollectionWhereUniqueInput
  }


  /**
   * CableCollection deleteMany
   */
  export type CableCollectionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableCollections to delete
     */
    where?: CableCollectionWhereInput
  }


  /**
   * CableCollection without action
   */
  export type CableCollectionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableCollection
     */
    select?: CableCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableCollectionInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    enabled: 'enabled'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CableCustomerScalarFieldEnum: {
    customerId: 'customerId',
    name: 'name',
    area: 'area',
    mobile: 'mobile',
    stb: 'stb',
    stbStatus: 'stbStatus',
    stbType: 'stbType',
    allowCredit: 'allowCredit',
    status: 'status',
    latitude: 'latitude',
    longitude: 'longitude',
    connectionOn: 'connectionOn',
    notes: 'notes',
    upiIds: 'upiIds',
    bill: 'bill',
    balance: 'balance',
    custom1Str: 'custom1Str',
    custom2Str: 'custom2Str',
    custom3Str: 'custom3Str',
    custom4Str: 'custom4Str',
    custom1Num: 'custom1Num',
    custom2Num: 'custom2Num'
  };

  export type CableCustomerScalarFieldEnum = (typeof CableCustomerScalarFieldEnum)[keyof typeof CableCustomerScalarFieldEnum]


  export const CableCollectionScalarFieldEnum: {
    customerId: 'customerId',
    month: 'month',
    collectionDate: 'collectionDate',
    collectionBy: 'collectionBy',
    settlementDate: 'settlementDate',
    settlementTo: 'settlementTo',
    notes: 'notes'
  };

  export type CableCollectionScalarFieldEnum = (typeof CableCollectionScalarFieldEnum)[keyof typeof CableCollectionScalarFieldEnum]


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
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    enabled?: BoolNullableFilter<"User"> | boolean | null
    CollectionBy?: CableCollectionListRelationFilter
    SettlementTo?: CableCollectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    CollectionBy?: CableCollectionOrderByRelationAggregateInput
    SettlementTo?: CableCollectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    enabled?: BoolNullableFilter<"User"> | boolean | null
    CollectionBy?: CableCollectionListRelationFilter
    SettlementTo?: CableCollectionListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    enabled?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
  }

  export type CableCustomerWhereInput = {
    AND?: CableCustomerWhereInput | CableCustomerWhereInput[]
    OR?: CableCustomerWhereInput[]
    NOT?: CableCustomerWhereInput | CableCustomerWhereInput[]
    customerId?: StringFilter<"CableCustomer"> | string
    name?: StringFilter<"CableCustomer"> | string
    area?: StringNullableFilter<"CableCustomer"> | string | null
    mobile?: StringNullableFilter<"CableCustomer"> | string | null
    stb?: StringNullableFilter<"CableCustomer"> | string | null
    stbStatus?: StringNullableFilter<"CableCustomer"> | string | null
    stbType?: StringNullableFilter<"CableCustomer"> | string | null
    allowCredit?: BoolFilter<"CableCustomer"> | boolean
    status?: BoolFilter<"CableCustomer"> | boolean
    latitude?: FloatNullableFilter<"CableCustomer"> | number | null
    longitude?: FloatNullableFilter<"CableCustomer"> | number | null
    connectionOn?: DateTimeFilter<"CableCustomer"> | Date | string
    notes?: StringNullableFilter<"CableCustomer"> | string | null
    upiIds?: StringNullableFilter<"CableCustomer"> | string | null
    bill?: IntNullableFilter<"CableCustomer"> | number | null
    balance?: IntNullableFilter<"CableCustomer"> | number | null
    custom1Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom2Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom3Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom4Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom1Num?: IntNullableFilter<"CableCustomer"> | number | null
    custom2Num?: IntNullableFilter<"CableCustomer"> | number | null
    CableCollection?: CableCollectionListRelationFilter
  }

  export type CableCustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    name?: SortOrder
    area?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    stb?: SortOrderInput | SortOrder
    stbStatus?: SortOrderInput | SortOrder
    stbType?: SortOrderInput | SortOrder
    allowCredit?: SortOrder
    status?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    connectionOn?: SortOrder
    notes?: SortOrderInput | SortOrder
    upiIds?: SortOrderInput | SortOrder
    bill?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    custom1Str?: SortOrderInput | SortOrder
    custom2Str?: SortOrderInput | SortOrder
    custom3Str?: SortOrderInput | SortOrder
    custom4Str?: SortOrderInput | SortOrder
    custom1Num?: SortOrderInput | SortOrder
    custom2Num?: SortOrderInput | SortOrder
    CableCollection?: CableCollectionOrderByRelationAggregateInput
  }

  export type CableCustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: string
    AND?: CableCustomerWhereInput | CableCustomerWhereInput[]
    OR?: CableCustomerWhereInput[]
    NOT?: CableCustomerWhereInput | CableCustomerWhereInput[]
    name?: StringFilter<"CableCustomer"> | string
    area?: StringNullableFilter<"CableCustomer"> | string | null
    mobile?: StringNullableFilter<"CableCustomer"> | string | null
    stb?: StringNullableFilter<"CableCustomer"> | string | null
    stbStatus?: StringNullableFilter<"CableCustomer"> | string | null
    stbType?: StringNullableFilter<"CableCustomer"> | string | null
    allowCredit?: BoolFilter<"CableCustomer"> | boolean
    status?: BoolFilter<"CableCustomer"> | boolean
    latitude?: FloatNullableFilter<"CableCustomer"> | number | null
    longitude?: FloatNullableFilter<"CableCustomer"> | number | null
    connectionOn?: DateTimeFilter<"CableCustomer"> | Date | string
    notes?: StringNullableFilter<"CableCustomer"> | string | null
    upiIds?: StringNullableFilter<"CableCustomer"> | string | null
    bill?: IntNullableFilter<"CableCustomer"> | number | null
    balance?: IntNullableFilter<"CableCustomer"> | number | null
    custom1Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom2Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom3Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom4Str?: StringNullableFilter<"CableCustomer"> | string | null
    custom1Num?: IntNullableFilter<"CableCustomer"> | number | null
    custom2Num?: IntNullableFilter<"CableCustomer"> | number | null
    CableCollection?: CableCollectionListRelationFilter
  }, "customerId">

  export type CableCustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    name?: SortOrder
    area?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    stb?: SortOrderInput | SortOrder
    stbStatus?: SortOrderInput | SortOrder
    stbType?: SortOrderInput | SortOrder
    allowCredit?: SortOrder
    status?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    connectionOn?: SortOrder
    notes?: SortOrderInput | SortOrder
    upiIds?: SortOrderInput | SortOrder
    bill?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    custom1Str?: SortOrderInput | SortOrder
    custom2Str?: SortOrderInput | SortOrder
    custom3Str?: SortOrderInput | SortOrder
    custom4Str?: SortOrderInput | SortOrder
    custom1Num?: SortOrderInput | SortOrder
    custom2Num?: SortOrderInput | SortOrder
    _count?: CableCustomerCountOrderByAggregateInput
    _avg?: CableCustomerAvgOrderByAggregateInput
    _max?: CableCustomerMaxOrderByAggregateInput
    _min?: CableCustomerMinOrderByAggregateInput
    _sum?: CableCustomerSumOrderByAggregateInput
  }

  export type CableCustomerScalarWhereWithAggregatesInput = {
    AND?: CableCustomerScalarWhereWithAggregatesInput | CableCustomerScalarWhereWithAggregatesInput[]
    OR?: CableCustomerScalarWhereWithAggregatesInput[]
    NOT?: CableCustomerScalarWhereWithAggregatesInput | CableCustomerScalarWhereWithAggregatesInput[]
    customerId?: StringWithAggregatesFilter<"CableCustomer"> | string
    name?: StringWithAggregatesFilter<"CableCustomer"> | string
    area?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    stb?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    stbStatus?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    stbType?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    allowCredit?: BoolWithAggregatesFilter<"CableCustomer"> | boolean
    status?: BoolWithAggregatesFilter<"CableCustomer"> | boolean
    latitude?: FloatNullableWithAggregatesFilter<"CableCustomer"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"CableCustomer"> | number | null
    connectionOn?: DateTimeWithAggregatesFilter<"CableCustomer"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    upiIds?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    bill?: IntNullableWithAggregatesFilter<"CableCustomer"> | number | null
    balance?: IntNullableWithAggregatesFilter<"CableCustomer"> | number | null
    custom1Str?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    custom2Str?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    custom3Str?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    custom4Str?: StringNullableWithAggregatesFilter<"CableCustomer"> | string | null
    custom1Num?: IntNullableWithAggregatesFilter<"CableCustomer"> | number | null
    custom2Num?: IntNullableWithAggregatesFilter<"CableCustomer"> | number | null
  }

  export type CableCollectionWhereInput = {
    AND?: CableCollectionWhereInput | CableCollectionWhereInput[]
    OR?: CableCollectionWhereInput[]
    NOT?: CableCollectionWhereInput | CableCollectionWhereInput[]
    customerId?: StringFilter<"CableCollection"> | string
    month?: StringFilter<"CableCollection"> | string
    collectionDate?: DateTimeFilter<"CableCollection"> | Date | string
    collectionBy?: IntFilter<"CableCollection"> | number
    settlementDate?: DateTimeNullableFilter<"CableCollection"> | Date | string | null
    settlementTo?: IntFilter<"CableCollection"> | number
    notes?: StringFilter<"CableCollection"> | string
    customer?: XOR<CableCustomerRelationFilter, CableCustomerWhereInput>
    collectionByUser?: XOR<UserRelationFilter, UserWhereInput>
    settlementToUser?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CableCollectionOrderByWithRelationInput = {
    customerId?: SortOrder
    month?: SortOrder
    collectionDate?: SortOrder
    collectionBy?: SortOrder
    settlementDate?: SortOrderInput | SortOrder
    settlementTo?: SortOrder
    notes?: SortOrder
    customer?: CableCustomerOrderByWithRelationInput
    collectionByUser?: UserOrderByWithRelationInput
    settlementToUser?: UserOrderByWithRelationInput
  }

  export type CableCollectionWhereUniqueInput = Prisma.AtLeast<{
    customerId_month?: CableCollectionCustomerIdMonthCompoundUniqueInput
    AND?: CableCollectionWhereInput | CableCollectionWhereInput[]
    OR?: CableCollectionWhereInput[]
    NOT?: CableCollectionWhereInput | CableCollectionWhereInput[]
    customerId?: StringFilter<"CableCollection"> | string
    month?: StringFilter<"CableCollection"> | string
    collectionDate?: DateTimeFilter<"CableCollection"> | Date | string
    collectionBy?: IntFilter<"CableCollection"> | number
    settlementDate?: DateTimeNullableFilter<"CableCollection"> | Date | string | null
    settlementTo?: IntFilter<"CableCollection"> | number
    notes?: StringFilter<"CableCollection"> | string
    customer?: XOR<CableCustomerRelationFilter, CableCustomerWhereInput>
    collectionByUser?: XOR<UserRelationFilter, UserWhereInput>
    settlementToUser?: XOR<UserRelationFilter, UserWhereInput>
  }, "customerId_month">

  export type CableCollectionOrderByWithAggregationInput = {
    customerId?: SortOrder
    month?: SortOrder
    collectionDate?: SortOrder
    collectionBy?: SortOrder
    settlementDate?: SortOrderInput | SortOrder
    settlementTo?: SortOrder
    notes?: SortOrder
    _count?: CableCollectionCountOrderByAggregateInput
    _avg?: CableCollectionAvgOrderByAggregateInput
    _max?: CableCollectionMaxOrderByAggregateInput
    _min?: CableCollectionMinOrderByAggregateInput
    _sum?: CableCollectionSumOrderByAggregateInput
  }

  export type CableCollectionScalarWhereWithAggregatesInput = {
    AND?: CableCollectionScalarWhereWithAggregatesInput | CableCollectionScalarWhereWithAggregatesInput[]
    OR?: CableCollectionScalarWhereWithAggregatesInput[]
    NOT?: CableCollectionScalarWhereWithAggregatesInput | CableCollectionScalarWhereWithAggregatesInput[]
    customerId?: StringWithAggregatesFilter<"CableCollection"> | string
    month?: StringWithAggregatesFilter<"CableCollection"> | string
    collectionDate?: DateTimeWithAggregatesFilter<"CableCollection"> | Date | string
    collectionBy?: IntWithAggregatesFilter<"CableCollection"> | number
    settlementDate?: DateTimeNullableWithAggregatesFilter<"CableCollection"> | Date | string | null
    settlementTo?: IntWithAggregatesFilter<"CableCollection"> | number
    notes?: StringWithAggregatesFilter<"CableCollection"> | string
  }

  export type UserCreateInput = {
    id: number
    userId: string
    name?: string | null
    enabled?: boolean | null
    CollectionBy?: CableCollectionCreateNestedManyWithoutCollectionByUserInput
    SettlementTo?: CableCollectionCreateNestedManyWithoutSettlementToUserInput
  }

  export type UserUncheckedCreateInput = {
    id: number
    userId: string
    name?: string | null
    enabled?: boolean | null
    CollectionBy?: CableCollectionUncheckedCreateNestedManyWithoutCollectionByUserInput
    SettlementTo?: CableCollectionUncheckedCreateNestedManyWithoutSettlementToUserInput
  }

  export type UserUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CollectionBy?: CableCollectionUpdateManyWithoutCollectionByUserNestedInput
    SettlementTo?: CableCollectionUpdateManyWithoutSettlementToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CollectionBy?: CableCollectionUncheckedUpdateManyWithoutCollectionByUserNestedInput
    SettlementTo?: CableCollectionUncheckedUpdateManyWithoutSettlementToUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CableCustomerCreateInput = {
    customerId: string
    name: string
    area?: string | null
    mobile?: string | null
    stb?: string | null
    stbStatus?: string | null
    stbType?: string | null
    allowCredit?: boolean
    status?: boolean
    latitude?: number | null
    longitude?: number | null
    connectionOn?: Date | string
    notes?: string | null
    upiIds?: string | null
    bill?: number | null
    balance?: number | null
    custom1Str?: string | null
    custom2Str?: string | null
    custom3Str?: string | null
    custom4Str?: string | null
    custom1Num?: number | null
    custom2Num?: number | null
    CableCollection?: CableCollectionCreateNestedManyWithoutCustomerInput
  }

  export type CableCustomerUncheckedCreateInput = {
    customerId: string
    name: string
    area?: string | null
    mobile?: string | null
    stb?: string | null
    stbStatus?: string | null
    stbType?: string | null
    allowCredit?: boolean
    status?: boolean
    latitude?: number | null
    longitude?: number | null
    connectionOn?: Date | string
    notes?: string | null
    upiIds?: string | null
    bill?: number | null
    balance?: number | null
    custom1Str?: string | null
    custom2Str?: string | null
    custom3Str?: string | null
    custom4Str?: string | null
    custom1Num?: number | null
    custom2Num?: number | null
    CableCollection?: CableCollectionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CableCustomerUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    stb?: NullableStringFieldUpdateOperationsInput | string | null
    stbStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stbType?: NullableStringFieldUpdateOperationsInput | string | null
    allowCredit?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    connectionOn?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    upiIds?: NullableStringFieldUpdateOperationsInput | string | null
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    custom1Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom2Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom3Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom4Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom1Num?: NullableIntFieldUpdateOperationsInput | number | null
    custom2Num?: NullableIntFieldUpdateOperationsInput | number | null
    CableCollection?: CableCollectionUpdateManyWithoutCustomerNestedInput
  }

  export type CableCustomerUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    stb?: NullableStringFieldUpdateOperationsInput | string | null
    stbStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stbType?: NullableStringFieldUpdateOperationsInput | string | null
    allowCredit?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    connectionOn?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    upiIds?: NullableStringFieldUpdateOperationsInput | string | null
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    custom1Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom2Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom3Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom4Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom1Num?: NullableIntFieldUpdateOperationsInput | number | null
    custom2Num?: NullableIntFieldUpdateOperationsInput | number | null
    CableCollection?: CableCollectionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CableCustomerUpdateManyMutationInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    stb?: NullableStringFieldUpdateOperationsInput | string | null
    stbStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stbType?: NullableStringFieldUpdateOperationsInput | string | null
    allowCredit?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    connectionOn?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    upiIds?: NullableStringFieldUpdateOperationsInput | string | null
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    custom1Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom2Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom3Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom4Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom1Num?: NullableIntFieldUpdateOperationsInput | number | null
    custom2Num?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CableCustomerUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    stb?: NullableStringFieldUpdateOperationsInput | string | null
    stbStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stbType?: NullableStringFieldUpdateOperationsInput | string | null
    allowCredit?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    connectionOn?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    upiIds?: NullableStringFieldUpdateOperationsInput | string | null
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    custom1Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom2Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom3Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom4Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom1Num?: NullableIntFieldUpdateOperationsInput | number | null
    custom2Num?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CableCollectionCreateInput = {
    month: string
    collectionDate?: Date | string
    settlementDate?: Date | string | null
    notes?: string
    customer: CableCustomerCreateNestedOneWithoutCableCollectionInput
    collectionByUser: UserCreateNestedOneWithoutCollectionByInput
    settlementToUser: UserCreateNestedOneWithoutSettlementToInput
  }

  export type CableCollectionUncheckedCreateInput = {
    customerId: string
    month: string
    collectionDate?: Date | string
    collectionBy: number
    settlementDate?: Date | string | null
    settlementTo: number
    notes?: string
  }

  export type CableCollectionUpdateInput = {
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: StringFieldUpdateOperationsInput | string
    customer?: CableCustomerUpdateOneRequiredWithoutCableCollectionNestedInput
    collectionByUser?: UserUpdateOneRequiredWithoutCollectionByNestedInput
    settlementToUser?: UserUpdateOneRequiredWithoutSettlementToNestedInput
  }

  export type CableCollectionUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionBy?: IntFieldUpdateOperationsInput | number
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settlementTo?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type CableCollectionUpdateManyMutationInput = {
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type CableCollectionUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionBy?: IntFieldUpdateOperationsInput | number
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settlementTo?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CableCollectionListRelationFilter = {
    every?: CableCollectionWhereInput
    some?: CableCollectionWhereInput
    none?: CableCollectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CableCollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CableCustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    name?: SortOrder
    area?: SortOrder
    mobile?: SortOrder
    stb?: SortOrder
    stbStatus?: SortOrder
    stbType?: SortOrder
    allowCredit?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    connectionOn?: SortOrder
    notes?: SortOrder
    upiIds?: SortOrder
    bill?: SortOrder
    balance?: SortOrder
    custom1Str?: SortOrder
    custom2Str?: SortOrder
    custom3Str?: SortOrder
    custom4Str?: SortOrder
    custom1Num?: SortOrder
    custom2Num?: SortOrder
  }

  export type CableCustomerAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    bill?: SortOrder
    balance?: SortOrder
    custom1Num?: SortOrder
    custom2Num?: SortOrder
  }

  export type CableCustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    name?: SortOrder
    area?: SortOrder
    mobile?: SortOrder
    stb?: SortOrder
    stbStatus?: SortOrder
    stbType?: SortOrder
    allowCredit?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    connectionOn?: SortOrder
    notes?: SortOrder
    upiIds?: SortOrder
    bill?: SortOrder
    balance?: SortOrder
    custom1Str?: SortOrder
    custom2Str?: SortOrder
    custom3Str?: SortOrder
    custom4Str?: SortOrder
    custom1Num?: SortOrder
    custom2Num?: SortOrder
  }

  export type CableCustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    name?: SortOrder
    area?: SortOrder
    mobile?: SortOrder
    stb?: SortOrder
    stbStatus?: SortOrder
    stbType?: SortOrder
    allowCredit?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    connectionOn?: SortOrder
    notes?: SortOrder
    upiIds?: SortOrder
    bill?: SortOrder
    balance?: SortOrder
    custom1Str?: SortOrder
    custom2Str?: SortOrder
    custom3Str?: SortOrder
    custom4Str?: SortOrder
    custom1Num?: SortOrder
    custom2Num?: SortOrder
  }

  export type CableCustomerSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    bill?: SortOrder
    balance?: SortOrder
    custom1Num?: SortOrder
    custom2Num?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CableCustomerRelationFilter = {
    is?: CableCustomerWhereInput
    isNot?: CableCustomerWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CableCollectionCustomerIdMonthCompoundUniqueInput = {
    customerId: string
    month: string
  }

  export type CableCollectionCountOrderByAggregateInput = {
    customerId?: SortOrder
    month?: SortOrder
    collectionDate?: SortOrder
    collectionBy?: SortOrder
    settlementDate?: SortOrder
    settlementTo?: SortOrder
    notes?: SortOrder
  }

  export type CableCollectionAvgOrderByAggregateInput = {
    collectionBy?: SortOrder
    settlementTo?: SortOrder
  }

  export type CableCollectionMaxOrderByAggregateInput = {
    customerId?: SortOrder
    month?: SortOrder
    collectionDate?: SortOrder
    collectionBy?: SortOrder
    settlementDate?: SortOrder
    settlementTo?: SortOrder
    notes?: SortOrder
  }

  export type CableCollectionMinOrderByAggregateInput = {
    customerId?: SortOrder
    month?: SortOrder
    collectionDate?: SortOrder
    collectionBy?: SortOrder
    settlementDate?: SortOrder
    settlementTo?: SortOrder
    notes?: SortOrder
  }

  export type CableCollectionSumOrderByAggregateInput = {
    collectionBy?: SortOrder
    settlementTo?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CableCollectionCreateNestedManyWithoutCollectionByUserInput = {
    create?: XOR<CableCollectionCreateWithoutCollectionByUserInput, CableCollectionUncheckedCreateWithoutCollectionByUserInput> | CableCollectionCreateWithoutCollectionByUserInput[] | CableCollectionUncheckedCreateWithoutCollectionByUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCollectionByUserInput | CableCollectionCreateOrConnectWithoutCollectionByUserInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
  }

  export type CableCollectionCreateNestedManyWithoutSettlementToUserInput = {
    create?: XOR<CableCollectionCreateWithoutSettlementToUserInput, CableCollectionUncheckedCreateWithoutSettlementToUserInput> | CableCollectionCreateWithoutSettlementToUserInput[] | CableCollectionUncheckedCreateWithoutSettlementToUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutSettlementToUserInput | CableCollectionCreateOrConnectWithoutSettlementToUserInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
  }

  export type CableCollectionUncheckedCreateNestedManyWithoutCollectionByUserInput = {
    create?: XOR<CableCollectionCreateWithoutCollectionByUserInput, CableCollectionUncheckedCreateWithoutCollectionByUserInput> | CableCollectionCreateWithoutCollectionByUserInput[] | CableCollectionUncheckedCreateWithoutCollectionByUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCollectionByUserInput | CableCollectionCreateOrConnectWithoutCollectionByUserInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
  }

  export type CableCollectionUncheckedCreateNestedManyWithoutSettlementToUserInput = {
    create?: XOR<CableCollectionCreateWithoutSettlementToUserInput, CableCollectionUncheckedCreateWithoutSettlementToUserInput> | CableCollectionCreateWithoutSettlementToUserInput[] | CableCollectionUncheckedCreateWithoutSettlementToUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutSettlementToUserInput | CableCollectionCreateOrConnectWithoutSettlementToUserInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CableCollectionUpdateManyWithoutCollectionByUserNestedInput = {
    create?: XOR<CableCollectionCreateWithoutCollectionByUserInput, CableCollectionUncheckedCreateWithoutCollectionByUserInput> | CableCollectionCreateWithoutCollectionByUserInput[] | CableCollectionUncheckedCreateWithoutCollectionByUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCollectionByUserInput | CableCollectionCreateOrConnectWithoutCollectionByUserInput[]
    upsert?: CableCollectionUpsertWithWhereUniqueWithoutCollectionByUserInput | CableCollectionUpsertWithWhereUniqueWithoutCollectionByUserInput[]
    set?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    disconnect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    delete?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    update?: CableCollectionUpdateWithWhereUniqueWithoutCollectionByUserInput | CableCollectionUpdateWithWhereUniqueWithoutCollectionByUserInput[]
    updateMany?: CableCollectionUpdateManyWithWhereWithoutCollectionByUserInput | CableCollectionUpdateManyWithWhereWithoutCollectionByUserInput[]
    deleteMany?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
  }

  export type CableCollectionUpdateManyWithoutSettlementToUserNestedInput = {
    create?: XOR<CableCollectionCreateWithoutSettlementToUserInput, CableCollectionUncheckedCreateWithoutSettlementToUserInput> | CableCollectionCreateWithoutSettlementToUserInput[] | CableCollectionUncheckedCreateWithoutSettlementToUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutSettlementToUserInput | CableCollectionCreateOrConnectWithoutSettlementToUserInput[]
    upsert?: CableCollectionUpsertWithWhereUniqueWithoutSettlementToUserInput | CableCollectionUpsertWithWhereUniqueWithoutSettlementToUserInput[]
    set?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    disconnect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    delete?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    update?: CableCollectionUpdateWithWhereUniqueWithoutSettlementToUserInput | CableCollectionUpdateWithWhereUniqueWithoutSettlementToUserInput[]
    updateMany?: CableCollectionUpdateManyWithWhereWithoutSettlementToUserInput | CableCollectionUpdateManyWithWhereWithoutSettlementToUserInput[]
    deleteMany?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
  }

  export type CableCollectionUncheckedUpdateManyWithoutCollectionByUserNestedInput = {
    create?: XOR<CableCollectionCreateWithoutCollectionByUserInput, CableCollectionUncheckedCreateWithoutCollectionByUserInput> | CableCollectionCreateWithoutCollectionByUserInput[] | CableCollectionUncheckedCreateWithoutCollectionByUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCollectionByUserInput | CableCollectionCreateOrConnectWithoutCollectionByUserInput[]
    upsert?: CableCollectionUpsertWithWhereUniqueWithoutCollectionByUserInput | CableCollectionUpsertWithWhereUniqueWithoutCollectionByUserInput[]
    set?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    disconnect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    delete?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    update?: CableCollectionUpdateWithWhereUniqueWithoutCollectionByUserInput | CableCollectionUpdateWithWhereUniqueWithoutCollectionByUserInput[]
    updateMany?: CableCollectionUpdateManyWithWhereWithoutCollectionByUserInput | CableCollectionUpdateManyWithWhereWithoutCollectionByUserInput[]
    deleteMany?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
  }

  export type CableCollectionUncheckedUpdateManyWithoutSettlementToUserNestedInput = {
    create?: XOR<CableCollectionCreateWithoutSettlementToUserInput, CableCollectionUncheckedCreateWithoutSettlementToUserInput> | CableCollectionCreateWithoutSettlementToUserInput[] | CableCollectionUncheckedCreateWithoutSettlementToUserInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutSettlementToUserInput | CableCollectionCreateOrConnectWithoutSettlementToUserInput[]
    upsert?: CableCollectionUpsertWithWhereUniqueWithoutSettlementToUserInput | CableCollectionUpsertWithWhereUniqueWithoutSettlementToUserInput[]
    set?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    disconnect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    delete?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    update?: CableCollectionUpdateWithWhereUniqueWithoutSettlementToUserInput | CableCollectionUpdateWithWhereUniqueWithoutSettlementToUserInput[]
    updateMany?: CableCollectionUpdateManyWithWhereWithoutSettlementToUserInput | CableCollectionUpdateManyWithWhereWithoutSettlementToUserInput[]
    deleteMany?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
  }

  export type CableCollectionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CableCollectionCreateWithoutCustomerInput, CableCollectionUncheckedCreateWithoutCustomerInput> | CableCollectionCreateWithoutCustomerInput[] | CableCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCustomerInput | CableCollectionCreateOrConnectWithoutCustomerInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
  }

  export type CableCollectionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CableCollectionCreateWithoutCustomerInput, CableCollectionUncheckedCreateWithoutCustomerInput> | CableCollectionCreateWithoutCustomerInput[] | CableCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCustomerInput | CableCollectionCreateOrConnectWithoutCustomerInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CableCollectionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CableCollectionCreateWithoutCustomerInput, CableCollectionUncheckedCreateWithoutCustomerInput> | CableCollectionCreateWithoutCustomerInput[] | CableCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCustomerInput | CableCollectionCreateOrConnectWithoutCustomerInput[]
    upsert?: CableCollectionUpsertWithWhereUniqueWithoutCustomerInput | CableCollectionUpsertWithWhereUniqueWithoutCustomerInput[]
    set?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    disconnect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    delete?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    update?: CableCollectionUpdateWithWhereUniqueWithoutCustomerInput | CableCollectionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CableCollectionUpdateManyWithWhereWithoutCustomerInput | CableCollectionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
  }

  export type CableCollectionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CableCollectionCreateWithoutCustomerInput, CableCollectionUncheckedCreateWithoutCustomerInput> | CableCollectionCreateWithoutCustomerInput[] | CableCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CableCollectionCreateOrConnectWithoutCustomerInput | CableCollectionCreateOrConnectWithoutCustomerInput[]
    upsert?: CableCollectionUpsertWithWhereUniqueWithoutCustomerInput | CableCollectionUpsertWithWhereUniqueWithoutCustomerInput[]
    set?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    disconnect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    delete?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    connect?: CableCollectionWhereUniqueInput | CableCollectionWhereUniqueInput[]
    update?: CableCollectionUpdateWithWhereUniqueWithoutCustomerInput | CableCollectionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CableCollectionUpdateManyWithWhereWithoutCustomerInput | CableCollectionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
  }

  export type CableCustomerCreateNestedOneWithoutCableCollectionInput = {
    create?: XOR<CableCustomerCreateWithoutCableCollectionInput, CableCustomerUncheckedCreateWithoutCableCollectionInput>
    connectOrCreate?: CableCustomerCreateOrConnectWithoutCableCollectionInput
    connect?: CableCustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCollectionByInput = {
    create?: XOR<UserCreateWithoutCollectionByInput, UserUncheckedCreateWithoutCollectionByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSettlementToInput = {
    create?: XOR<UserCreateWithoutSettlementToInput, UserUncheckedCreateWithoutSettlementToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementToInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CableCustomerUpdateOneRequiredWithoutCableCollectionNestedInput = {
    create?: XOR<CableCustomerCreateWithoutCableCollectionInput, CableCustomerUncheckedCreateWithoutCableCollectionInput>
    connectOrCreate?: CableCustomerCreateOrConnectWithoutCableCollectionInput
    upsert?: CableCustomerUpsertWithoutCableCollectionInput
    connect?: CableCustomerWhereUniqueInput
    update?: XOR<XOR<CableCustomerUpdateToOneWithWhereWithoutCableCollectionInput, CableCustomerUpdateWithoutCableCollectionInput>, CableCustomerUncheckedUpdateWithoutCableCollectionInput>
  }

  export type UserUpdateOneRequiredWithoutCollectionByNestedInput = {
    create?: XOR<UserCreateWithoutCollectionByInput, UserUncheckedCreateWithoutCollectionByInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionByInput
    upsert?: UserUpsertWithoutCollectionByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionByInput, UserUpdateWithoutCollectionByInput>, UserUncheckedUpdateWithoutCollectionByInput>
  }

  export type UserUpdateOneRequiredWithoutSettlementToNestedInput = {
    create?: XOR<UserCreateWithoutSettlementToInput, UserUncheckedCreateWithoutSettlementToInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettlementToInput
    upsert?: UserUpsertWithoutSettlementToInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettlementToInput, UserUpdateWithoutSettlementToInput>, UserUncheckedUpdateWithoutSettlementToInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CableCollectionCreateWithoutCollectionByUserInput = {
    month: string
    collectionDate?: Date | string
    settlementDate?: Date | string | null
    notes?: string
    customer: CableCustomerCreateNestedOneWithoutCableCollectionInput
    settlementToUser: UserCreateNestedOneWithoutSettlementToInput
  }

  export type CableCollectionUncheckedCreateWithoutCollectionByUserInput = {
    customerId: string
    month: string
    collectionDate?: Date | string
    settlementDate?: Date | string | null
    settlementTo: number
    notes?: string
  }

  export type CableCollectionCreateOrConnectWithoutCollectionByUserInput = {
    where: CableCollectionWhereUniqueInput
    create: XOR<CableCollectionCreateWithoutCollectionByUserInput, CableCollectionUncheckedCreateWithoutCollectionByUserInput>
  }

  export type CableCollectionCreateWithoutSettlementToUserInput = {
    month: string
    collectionDate?: Date | string
    settlementDate?: Date | string | null
    notes?: string
    customer: CableCustomerCreateNestedOneWithoutCableCollectionInput
    collectionByUser: UserCreateNestedOneWithoutCollectionByInput
  }

  export type CableCollectionUncheckedCreateWithoutSettlementToUserInput = {
    customerId: string
    month: string
    collectionDate?: Date | string
    collectionBy: number
    settlementDate?: Date | string | null
    notes?: string
  }

  export type CableCollectionCreateOrConnectWithoutSettlementToUserInput = {
    where: CableCollectionWhereUniqueInput
    create: XOR<CableCollectionCreateWithoutSettlementToUserInput, CableCollectionUncheckedCreateWithoutSettlementToUserInput>
  }

  export type CableCollectionUpsertWithWhereUniqueWithoutCollectionByUserInput = {
    where: CableCollectionWhereUniqueInput
    update: XOR<CableCollectionUpdateWithoutCollectionByUserInput, CableCollectionUncheckedUpdateWithoutCollectionByUserInput>
    create: XOR<CableCollectionCreateWithoutCollectionByUserInput, CableCollectionUncheckedCreateWithoutCollectionByUserInput>
  }

  export type CableCollectionUpdateWithWhereUniqueWithoutCollectionByUserInput = {
    where: CableCollectionWhereUniqueInput
    data: XOR<CableCollectionUpdateWithoutCollectionByUserInput, CableCollectionUncheckedUpdateWithoutCollectionByUserInput>
  }

  export type CableCollectionUpdateManyWithWhereWithoutCollectionByUserInput = {
    where: CableCollectionScalarWhereInput
    data: XOR<CableCollectionUpdateManyMutationInput, CableCollectionUncheckedUpdateManyWithoutCollectionByUserInput>
  }

  export type CableCollectionScalarWhereInput = {
    AND?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
    OR?: CableCollectionScalarWhereInput[]
    NOT?: CableCollectionScalarWhereInput | CableCollectionScalarWhereInput[]
    customerId?: StringFilter<"CableCollection"> | string
    month?: StringFilter<"CableCollection"> | string
    collectionDate?: DateTimeFilter<"CableCollection"> | Date | string
    collectionBy?: IntFilter<"CableCollection"> | number
    settlementDate?: DateTimeNullableFilter<"CableCollection"> | Date | string | null
    settlementTo?: IntFilter<"CableCollection"> | number
    notes?: StringFilter<"CableCollection"> | string
  }

  export type CableCollectionUpsertWithWhereUniqueWithoutSettlementToUserInput = {
    where: CableCollectionWhereUniqueInput
    update: XOR<CableCollectionUpdateWithoutSettlementToUserInput, CableCollectionUncheckedUpdateWithoutSettlementToUserInput>
    create: XOR<CableCollectionCreateWithoutSettlementToUserInput, CableCollectionUncheckedCreateWithoutSettlementToUserInput>
  }

  export type CableCollectionUpdateWithWhereUniqueWithoutSettlementToUserInput = {
    where: CableCollectionWhereUniqueInput
    data: XOR<CableCollectionUpdateWithoutSettlementToUserInput, CableCollectionUncheckedUpdateWithoutSettlementToUserInput>
  }

  export type CableCollectionUpdateManyWithWhereWithoutSettlementToUserInput = {
    where: CableCollectionScalarWhereInput
    data: XOR<CableCollectionUpdateManyMutationInput, CableCollectionUncheckedUpdateManyWithoutSettlementToUserInput>
  }

  export type CableCollectionCreateWithoutCustomerInput = {
    month: string
    collectionDate?: Date | string
    settlementDate?: Date | string | null
    notes?: string
    collectionByUser: UserCreateNestedOneWithoutCollectionByInput
    settlementToUser: UserCreateNestedOneWithoutSettlementToInput
  }

  export type CableCollectionUncheckedCreateWithoutCustomerInput = {
    month: string
    collectionDate?: Date | string
    collectionBy: number
    settlementDate?: Date | string | null
    settlementTo: number
    notes?: string
  }

  export type CableCollectionCreateOrConnectWithoutCustomerInput = {
    where: CableCollectionWhereUniqueInput
    create: XOR<CableCollectionCreateWithoutCustomerInput, CableCollectionUncheckedCreateWithoutCustomerInput>
  }

  export type CableCollectionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CableCollectionWhereUniqueInput
    update: XOR<CableCollectionUpdateWithoutCustomerInput, CableCollectionUncheckedUpdateWithoutCustomerInput>
    create: XOR<CableCollectionCreateWithoutCustomerInput, CableCollectionUncheckedCreateWithoutCustomerInput>
  }

  export type CableCollectionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CableCollectionWhereUniqueInput
    data: XOR<CableCollectionUpdateWithoutCustomerInput, CableCollectionUncheckedUpdateWithoutCustomerInput>
  }

  export type CableCollectionUpdateManyWithWhereWithoutCustomerInput = {
    where: CableCollectionScalarWhereInput
    data: XOR<CableCollectionUpdateManyMutationInput, CableCollectionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CableCustomerCreateWithoutCableCollectionInput = {
    customerId: string
    name: string
    area?: string | null
    mobile?: string | null
    stb?: string | null
    stbStatus?: string | null
    stbType?: string | null
    allowCredit?: boolean
    status?: boolean
    latitude?: number | null
    longitude?: number | null
    connectionOn?: Date | string
    notes?: string | null
    upiIds?: string | null
    bill?: number | null
    balance?: number | null
    custom1Str?: string | null
    custom2Str?: string | null
    custom3Str?: string | null
    custom4Str?: string | null
    custom1Num?: number | null
    custom2Num?: number | null
  }

  export type CableCustomerUncheckedCreateWithoutCableCollectionInput = {
    customerId: string
    name: string
    area?: string | null
    mobile?: string | null
    stb?: string | null
    stbStatus?: string | null
    stbType?: string | null
    allowCredit?: boolean
    status?: boolean
    latitude?: number | null
    longitude?: number | null
    connectionOn?: Date | string
    notes?: string | null
    upiIds?: string | null
    bill?: number | null
    balance?: number | null
    custom1Str?: string | null
    custom2Str?: string | null
    custom3Str?: string | null
    custom4Str?: string | null
    custom1Num?: number | null
    custom2Num?: number | null
  }

  export type CableCustomerCreateOrConnectWithoutCableCollectionInput = {
    where: CableCustomerWhereUniqueInput
    create: XOR<CableCustomerCreateWithoutCableCollectionInput, CableCustomerUncheckedCreateWithoutCableCollectionInput>
  }

  export type UserCreateWithoutCollectionByInput = {
    id: number
    userId: string
    name?: string | null
    enabled?: boolean | null
    SettlementTo?: CableCollectionCreateNestedManyWithoutSettlementToUserInput
  }

  export type UserUncheckedCreateWithoutCollectionByInput = {
    id: number
    userId: string
    name?: string | null
    enabled?: boolean | null
    SettlementTo?: CableCollectionUncheckedCreateNestedManyWithoutSettlementToUserInput
  }

  export type UserCreateOrConnectWithoutCollectionByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionByInput, UserUncheckedCreateWithoutCollectionByInput>
  }

  export type UserCreateWithoutSettlementToInput = {
    id: number
    userId: string
    name?: string | null
    enabled?: boolean | null
    CollectionBy?: CableCollectionCreateNestedManyWithoutCollectionByUserInput
  }

  export type UserUncheckedCreateWithoutSettlementToInput = {
    id: number
    userId: string
    name?: string | null
    enabled?: boolean | null
    CollectionBy?: CableCollectionUncheckedCreateNestedManyWithoutCollectionByUserInput
  }

  export type UserCreateOrConnectWithoutSettlementToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettlementToInput, UserUncheckedCreateWithoutSettlementToInput>
  }

  export type CableCustomerUpsertWithoutCableCollectionInput = {
    update: XOR<CableCustomerUpdateWithoutCableCollectionInput, CableCustomerUncheckedUpdateWithoutCableCollectionInput>
    create: XOR<CableCustomerCreateWithoutCableCollectionInput, CableCustomerUncheckedCreateWithoutCableCollectionInput>
    where?: CableCustomerWhereInput
  }

  export type CableCustomerUpdateToOneWithWhereWithoutCableCollectionInput = {
    where?: CableCustomerWhereInput
    data: XOR<CableCustomerUpdateWithoutCableCollectionInput, CableCustomerUncheckedUpdateWithoutCableCollectionInput>
  }

  export type CableCustomerUpdateWithoutCableCollectionInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    stb?: NullableStringFieldUpdateOperationsInput | string | null
    stbStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stbType?: NullableStringFieldUpdateOperationsInput | string | null
    allowCredit?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    connectionOn?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    upiIds?: NullableStringFieldUpdateOperationsInput | string | null
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    custom1Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom2Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom3Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom4Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom1Num?: NullableIntFieldUpdateOperationsInput | number | null
    custom2Num?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CableCustomerUncheckedUpdateWithoutCableCollectionInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    stb?: NullableStringFieldUpdateOperationsInput | string | null
    stbStatus?: NullableStringFieldUpdateOperationsInput | string | null
    stbType?: NullableStringFieldUpdateOperationsInput | string | null
    allowCredit?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    connectionOn?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    upiIds?: NullableStringFieldUpdateOperationsInput | string | null
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    custom1Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom2Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom3Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom4Str?: NullableStringFieldUpdateOperationsInput | string | null
    custom1Num?: NullableIntFieldUpdateOperationsInput | number | null
    custom2Num?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutCollectionByInput = {
    update: XOR<UserUpdateWithoutCollectionByInput, UserUncheckedUpdateWithoutCollectionByInput>
    create: XOR<UserCreateWithoutCollectionByInput, UserUncheckedCreateWithoutCollectionByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionByInput, UserUncheckedUpdateWithoutCollectionByInput>
  }

  export type UserUpdateWithoutCollectionByInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SettlementTo?: CableCollectionUpdateManyWithoutSettlementToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionByInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SettlementTo?: CableCollectionUncheckedUpdateManyWithoutSettlementToUserNestedInput
  }

  export type UserUpsertWithoutSettlementToInput = {
    update: XOR<UserUpdateWithoutSettlementToInput, UserUncheckedUpdateWithoutSettlementToInput>
    create: XOR<UserCreateWithoutSettlementToInput, UserUncheckedCreateWithoutSettlementToInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettlementToInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettlementToInput, UserUncheckedUpdateWithoutSettlementToInput>
  }

  export type UserUpdateWithoutSettlementToInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CollectionBy?: CableCollectionUpdateManyWithoutCollectionByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettlementToInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CollectionBy?: CableCollectionUncheckedUpdateManyWithoutCollectionByUserNestedInput
  }

  export type CableCollectionUpdateWithoutCollectionByUserInput = {
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: StringFieldUpdateOperationsInput | string
    customer?: CableCustomerUpdateOneRequiredWithoutCableCollectionNestedInput
    settlementToUser?: UserUpdateOneRequiredWithoutSettlementToNestedInput
  }

  export type CableCollectionUncheckedUpdateWithoutCollectionByUserInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settlementTo?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type CableCollectionUncheckedUpdateManyWithoutCollectionByUserInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settlementTo?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type CableCollectionUpdateWithoutSettlementToUserInput = {
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: StringFieldUpdateOperationsInput | string
    customer?: CableCustomerUpdateOneRequiredWithoutCableCollectionNestedInput
    collectionByUser?: UserUpdateOneRequiredWithoutCollectionByNestedInput
  }

  export type CableCollectionUncheckedUpdateWithoutSettlementToUserInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionBy?: IntFieldUpdateOperationsInput | number
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type CableCollectionUncheckedUpdateManyWithoutSettlementToUserInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionBy?: IntFieldUpdateOperationsInput | number
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type CableCollectionUpdateWithoutCustomerInput = {
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: StringFieldUpdateOperationsInput | string
    collectionByUser?: UserUpdateOneRequiredWithoutCollectionByNestedInput
    settlementToUser?: UserUpdateOneRequiredWithoutSettlementToNestedInput
  }

  export type CableCollectionUncheckedUpdateWithoutCustomerInput = {
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionBy?: IntFieldUpdateOperationsInput | number
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settlementTo?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type CableCollectionUncheckedUpdateManyWithoutCustomerInput = {
    month?: StringFieldUpdateOperationsInput | string
    collectionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionBy?: IntFieldUpdateOperationsInput | number
    settlementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settlementTo?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CableCustomerCountOutputTypeDefaultArgs instead
     */
    export type CableCustomerCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CableCustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CableCustomerDefaultArgs instead
     */
    export type CableCustomerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CableCustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CableCollectionDefaultArgs instead
     */
    export type CableCollectionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CableCollectionDefaultArgs<ExtArgs>

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