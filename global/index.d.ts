
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
 * Model Franchise
 * 
 */
export type Franchise = $Result.DefaultSelection<Prisma.$FranchisePayload>
/**
 * Model FranchiseRelation
 * 
 */
export type FranchiseRelation = $Result.DefaultSelection<Prisma.$FranchiseRelationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model FranchiseProduct
 * 
 */
export type FranchiseProduct = $Result.DefaultSelection<Prisma.$FranchiseProductPayload>
/**
 * Model ProductPermission
 * 
 */
export type ProductPermission = $Result.DefaultSelection<Prisma.$ProductPermissionPayload>
/**
 * Model FranchiseUserProductPermission
 * 
 */
export type FranchiseUserProductPermission = $Result.DefaultSelection<Prisma.$FranchiseUserProductPermissionPayload>
/**
 * Model CableProductSettings
 * 
 */
export type CableProductSettings = $Result.DefaultSelection<Prisma.$CableProductSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Franchises
 * const franchises = await prisma.franchise.findMany()
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
   * // Fetch zero or more Franchises
   * const franchises = await prisma.franchise.findMany()
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
   * `prisma.franchise`: Exposes CRUD operations for the **Franchise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Franchises
    * const franchises = await prisma.franchise.findMany()
    * ```
    */
  get franchise(): Prisma.FranchiseDelegate<ExtArgs>;

  /**
   * `prisma.franchiseRelation`: Exposes CRUD operations for the **FranchiseRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FranchiseRelations
    * const franchiseRelations = await prisma.franchiseRelation.findMany()
    * ```
    */
  get franchiseRelation(): Prisma.FranchiseRelationDelegate<ExtArgs>;

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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.franchiseProduct`: Exposes CRUD operations for the **FranchiseProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FranchiseProducts
    * const franchiseProducts = await prisma.franchiseProduct.findMany()
    * ```
    */
  get franchiseProduct(): Prisma.FranchiseProductDelegate<ExtArgs>;

  /**
   * `prisma.productPermission`: Exposes CRUD operations for the **ProductPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPermissions
    * const productPermissions = await prisma.productPermission.findMany()
    * ```
    */
  get productPermission(): Prisma.ProductPermissionDelegate<ExtArgs>;

  /**
   * `prisma.franchiseUserProductPermission`: Exposes CRUD operations for the **FranchiseUserProductPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FranchiseUserProductPermissions
    * const franchiseUserProductPermissions = await prisma.franchiseUserProductPermission.findMany()
    * ```
    */
  get franchiseUserProductPermission(): Prisma.FranchiseUserProductPermissionDelegate<ExtArgs>;

  /**
   * `prisma.cableProductSettings`: Exposes CRUD operations for the **CableProductSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CableProductSettings
    * const cableProductSettings = await prisma.cableProductSettings.findMany()
    * ```
    */
  get cableProductSettings(): Prisma.CableProductSettingsDelegate<ExtArgs>;
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
    Franchise: 'Franchise',
    FranchiseRelation: 'FranchiseRelation',
    User: 'User',
    Product: 'Product',
    FranchiseProduct: 'FranchiseProduct',
    ProductPermission: 'ProductPermission',
    FranchiseUserProductPermission: 'FranchiseUserProductPermission',
    CableProductSettings: 'CableProductSettings'
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
      modelProps: 'franchise' | 'franchiseRelation' | 'user' | 'product' | 'franchiseProduct' | 'productPermission' | 'franchiseUserProductPermission' | 'cableProductSettings'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Franchise: {
        payload: Prisma.$FranchisePayload<ExtArgs>
        fields: Prisma.FranchiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FranchiseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FranchiseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          findFirst: {
            args: Prisma.FranchiseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FranchiseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          findMany: {
            args: Prisma.FranchiseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>[]
          }
          create: {
            args: Prisma.FranchiseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          delete: {
            args: Prisma.FranchiseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          update: {
            args: Prisma.FranchiseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          deleteMany: {
            args: Prisma.FranchiseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FranchiseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FranchiseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          aggregate: {
            args: Prisma.FranchiseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFranchise>
          }
          groupBy: {
            args: Prisma.FranchiseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FranchiseCountArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseCountAggregateOutputType> | number
          }
        }
      }
      FranchiseRelation: {
        payload: Prisma.$FranchiseRelationPayload<ExtArgs>
        fields: Prisma.FranchiseRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FranchiseRelationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FranchiseRelationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload>
          }
          findFirst: {
            args: Prisma.FranchiseRelationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FranchiseRelationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload>
          }
          findMany: {
            args: Prisma.FranchiseRelationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload>[]
          }
          create: {
            args: Prisma.FranchiseRelationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload>
          }
          delete: {
            args: Prisma.FranchiseRelationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload>
          }
          update: {
            args: Prisma.FranchiseRelationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload>
          }
          deleteMany: {
            args: Prisma.FranchiseRelationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FranchiseRelationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FranchiseRelationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseRelationPayload>
          }
          aggregate: {
            args: Prisma.FranchiseRelationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFranchiseRelation>
          }
          groupBy: {
            args: Prisma.FranchiseRelationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FranchiseRelationCountArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseRelationCountAggregateOutputType> | number
          }
        }
      }
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
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      FranchiseProduct: {
        payload: Prisma.$FranchiseProductPayload<ExtArgs>
        fields: Prisma.FranchiseProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FranchiseProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FranchiseProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload>
          }
          findFirst: {
            args: Prisma.FranchiseProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FranchiseProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload>
          }
          findMany: {
            args: Prisma.FranchiseProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload>[]
          }
          create: {
            args: Prisma.FranchiseProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload>
          }
          delete: {
            args: Prisma.FranchiseProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload>
          }
          update: {
            args: Prisma.FranchiseProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload>
          }
          deleteMany: {
            args: Prisma.FranchiseProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FranchiseProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FranchiseProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseProductPayload>
          }
          aggregate: {
            args: Prisma.FranchiseProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFranchiseProduct>
          }
          groupBy: {
            args: Prisma.FranchiseProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.FranchiseProductCountArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseProductCountAggregateOutputType> | number
          }
        }
      }
      ProductPermission: {
        payload: Prisma.$ProductPermissionPayload<ExtArgs>
        fields: Prisma.ProductPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPermissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPermissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload>
          }
          findFirst: {
            args: Prisma.ProductPermissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPermissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload>
          }
          findMany: {
            args: Prisma.ProductPermissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload>[]
          }
          create: {
            args: Prisma.ProductPermissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload>
          }
          delete: {
            args: Prisma.ProductPermissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload>
          }
          update: {
            args: Prisma.ProductPermissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload>
          }
          deleteMany: {
            args: Prisma.ProductPermissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPermissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductPermissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPermissionPayload>
          }
          aggregate: {
            args: Prisma.ProductPermissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductPermission>
          }
          groupBy: {
            args: Prisma.ProductPermissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPermissionCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductPermissionCountAggregateOutputType> | number
          }
        }
      }
      FranchiseUserProductPermission: {
        payload: Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>
        fields: Prisma.FranchiseUserProductPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FranchiseUserProductPermissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FranchiseUserProductPermissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload>
          }
          findFirst: {
            args: Prisma.FranchiseUserProductPermissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FranchiseUserProductPermissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload>
          }
          findMany: {
            args: Prisma.FranchiseUserProductPermissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload>[]
          }
          create: {
            args: Prisma.FranchiseUserProductPermissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload>
          }
          delete: {
            args: Prisma.FranchiseUserProductPermissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload>
          }
          update: {
            args: Prisma.FranchiseUserProductPermissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload>
          }
          deleteMany: {
            args: Prisma.FranchiseUserProductPermissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FranchiseUserProductPermissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FranchiseUserProductPermissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FranchiseUserProductPermissionPayload>
          }
          aggregate: {
            args: Prisma.FranchiseUserProductPermissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFranchiseUserProductPermission>
          }
          groupBy: {
            args: Prisma.FranchiseUserProductPermissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseUserProductPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FranchiseUserProductPermissionCountArgs<ExtArgs>,
            result: $Utils.Optional<FranchiseUserProductPermissionCountAggregateOutputType> | number
          }
        }
      }
      CableProductSettings: {
        payload: Prisma.$CableProductSettingsPayload<ExtArgs>
        fields: Prisma.CableProductSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CableProductSettingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CableProductSettingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload>
          }
          findFirst: {
            args: Prisma.CableProductSettingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CableProductSettingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload>
          }
          findMany: {
            args: Prisma.CableProductSettingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload>[]
          }
          create: {
            args: Prisma.CableProductSettingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload>
          }
          delete: {
            args: Prisma.CableProductSettingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload>
          }
          update: {
            args: Prisma.CableProductSettingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload>
          }
          deleteMany: {
            args: Prisma.CableProductSettingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CableProductSettingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CableProductSettingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CableProductSettingsPayload>
          }
          aggregate: {
            args: Prisma.CableProductSettingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCableProductSettings>
          }
          groupBy: {
            args: Prisma.CableProductSettingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CableProductSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CableProductSettingsCountArgs<ExtArgs>,
            result: $Utils.Optional<CableProductSettingsCountAggregateOutputType> | number
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
   * Count Type FranchiseCountOutputType
   */

  export type FranchiseCountOutputType = {
    user: number
    franchiseProduct: number
    CableProductSettings: number
    FranchiseUserProductPermission: number
    parentFranchiseRelation: number
    childFranchiseRelation: number
  }

  export type FranchiseCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | FranchiseCountOutputTypeCountUserArgs
    franchiseProduct?: boolean | FranchiseCountOutputTypeCountFranchiseProductArgs
    CableProductSettings?: boolean | FranchiseCountOutputTypeCountCableProductSettingsArgs
    FranchiseUserProductPermission?: boolean | FranchiseCountOutputTypeCountFranchiseUserProductPermissionArgs
    parentFranchiseRelation?: boolean | FranchiseCountOutputTypeCountParentFranchiseRelationArgs
    childFranchiseRelation?: boolean | FranchiseCountOutputTypeCountChildFranchiseRelationArgs
  }

  // Custom InputTypes

  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseCountOutputType
     */
    select?: FranchiseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountFranchiseProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseProductWhereInput
  }


  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountCableProductSettingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CableProductSettingsWhereInput
  }


  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountFranchiseUserProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseUserProductPermissionWhereInput
  }


  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountParentFranchiseRelationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseRelationWhereInput
  }


  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountChildFranchiseRelationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseRelationWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    FranchiseUserProductPermission: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    FranchiseUserProductPermission?: boolean | UserCountOutputTypeCountFranchiseUserProductPermissionArgs
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
  export type UserCountOutputTypeCountFranchiseUserProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseUserProductPermissionWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    franchiseProduct: number
    productPermission: number
    userProductPermission: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    franchiseProduct?: boolean | ProductCountOutputTypeCountFranchiseProductArgs
    productPermission?: boolean | ProductCountOutputTypeCountProductPermissionArgs
    userProductPermission?: boolean | ProductCountOutputTypeCountUserProductPermissionArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFranchiseProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseProductWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductPermissionWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUserProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseUserProductPermissionWhereInput
  }



  /**
   * Count Type ProductPermissionCountOutputType
   */

  export type ProductPermissionCountOutputType = {
    userProductPermission: number
  }

  export type ProductPermissionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    userProductPermission?: boolean | ProductPermissionCountOutputTypeCountUserProductPermissionArgs
  }

  // Custom InputTypes

  /**
   * ProductPermissionCountOutputType without action
   */
  export type ProductPermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermissionCountOutputType
     */
    select?: ProductPermissionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductPermissionCountOutputType without action
   */
  export type ProductPermissionCountOutputTypeCountUserProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseUserProductPermissionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Franchise
   */

  export type AggregateFranchise = {
    _count: FranchiseCountAggregateOutputType | null
    _min: FranchiseMinAggregateOutputType | null
    _max: FranchiseMaxAggregateOutputType | null
  }

  export type FranchiseMinAggregateOutputType = {
    franchiseId: string | null
    franchiseName: string | null
    franchiseCode: string | null
    onboardingDate: Date | null
    enabled: boolean | null
  }

  export type FranchiseMaxAggregateOutputType = {
    franchiseId: string | null
    franchiseName: string | null
    franchiseCode: string | null
    onboardingDate: Date | null
    enabled: boolean | null
  }

  export type FranchiseCountAggregateOutputType = {
    franchiseId: number
    franchiseName: number
    franchiseCode: number
    onboardingDate: number
    enabled: number
    _all: number
  }


  export type FranchiseMinAggregateInputType = {
    franchiseId?: true
    franchiseName?: true
    franchiseCode?: true
    onboardingDate?: true
    enabled?: true
  }

  export type FranchiseMaxAggregateInputType = {
    franchiseId?: true
    franchiseName?: true
    franchiseCode?: true
    onboardingDate?: true
    enabled?: true
  }

  export type FranchiseCountAggregateInputType = {
    franchiseId?: true
    franchiseName?: true
    franchiseCode?: true
    onboardingDate?: true
    enabled?: true
    _all?: true
  }

  export type FranchiseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Franchise to aggregate.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Franchises
    **/
    _count?: true | FranchiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FranchiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FranchiseMaxAggregateInputType
  }

  export type GetFranchiseAggregateType<T extends FranchiseAggregateArgs> = {
        [P in keyof T & keyof AggregateFranchise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFranchise[P]>
      : GetScalarType<T[P], AggregateFranchise[P]>
  }




  export type FranchiseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseWhereInput
    orderBy?: FranchiseOrderByWithAggregationInput | FranchiseOrderByWithAggregationInput[]
    by: FranchiseScalarFieldEnum[] | FranchiseScalarFieldEnum
    having?: FranchiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FranchiseCountAggregateInputType | true
    _min?: FranchiseMinAggregateInputType
    _max?: FranchiseMaxAggregateInputType
  }

  export type FranchiseGroupByOutputType = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate: Date
    enabled: boolean | null
    _count: FranchiseCountAggregateOutputType | null
    _min: FranchiseMinAggregateOutputType | null
    _max: FranchiseMaxAggregateOutputType | null
  }

  type GetFranchiseGroupByPayload<T extends FranchiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FranchiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FranchiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FranchiseGroupByOutputType[P]>
            : GetScalarType<T[P], FranchiseGroupByOutputType[P]>
        }
      >
    >


  export type FranchiseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    franchiseId?: boolean
    franchiseName?: boolean
    franchiseCode?: boolean
    onboardingDate?: boolean
    enabled?: boolean
    user?: boolean | Franchise$userArgs<ExtArgs>
    franchiseProduct?: boolean | Franchise$franchiseProductArgs<ExtArgs>
    CableProductSettings?: boolean | Franchise$CableProductSettingsArgs<ExtArgs>
    FranchiseUserProductPermission?: boolean | Franchise$FranchiseUserProductPermissionArgs<ExtArgs>
    parentFranchiseRelation?: boolean | Franchise$parentFranchiseRelationArgs<ExtArgs>
    childFranchiseRelation?: boolean | Franchise$childFranchiseRelationArgs<ExtArgs>
    _count?: boolean | FranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["franchise"]>

  export type FranchiseSelectScalar = {
    franchiseId?: boolean
    franchiseName?: boolean
    franchiseCode?: boolean
    onboardingDate?: boolean
    enabled?: boolean
  }

  export type FranchiseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Franchise$userArgs<ExtArgs>
    franchiseProduct?: boolean | Franchise$franchiseProductArgs<ExtArgs>
    CableProductSettings?: boolean | Franchise$CableProductSettingsArgs<ExtArgs>
    FranchiseUserProductPermission?: boolean | Franchise$FranchiseUserProductPermissionArgs<ExtArgs>
    parentFranchiseRelation?: boolean | Franchise$parentFranchiseRelationArgs<ExtArgs>
    childFranchiseRelation?: boolean | Franchise$childFranchiseRelationArgs<ExtArgs>
    _count?: boolean | FranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FranchisePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Franchise"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      franchiseProduct: Prisma.$FranchiseProductPayload<ExtArgs>[]
      CableProductSettings: Prisma.$CableProductSettingsPayload<ExtArgs>[]
      FranchiseUserProductPermission: Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>[]
      parentFranchiseRelation: Prisma.$FranchiseRelationPayload<ExtArgs>[]
      childFranchiseRelation: Prisma.$FranchiseRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      franchiseId: string
      franchiseName: string
      franchiseCode: string
      onboardingDate: Date
      enabled: boolean | null
    }, ExtArgs["result"]["franchise"]>
    composites: {}
  }


  type FranchiseGetPayload<S extends boolean | null | undefined | FranchiseDefaultArgs> = $Result.GetResult<Prisma.$FranchisePayload, S>

  type FranchiseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FranchiseFindManyArgs, 'select' | 'include'> & {
      select?: FranchiseCountAggregateInputType | true
    }

  export interface FranchiseDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Franchise'], meta: { name: 'Franchise' } }
    /**
     * Find zero or one Franchise that matches the filter.
     * @param {FranchiseFindUniqueArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FranchiseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseFindUniqueArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Franchise that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FranchiseFindUniqueOrThrowArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FranchiseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Franchise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseFindFirstArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FranchiseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseFindFirstArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Franchise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseFindFirstOrThrowArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FranchiseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Franchises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Franchises
     * const franchises = await prisma.franchise.findMany()
     * 
     * // Get first 10 Franchises
     * const franchises = await prisma.franchise.findMany({ take: 10 })
     * 
     * // Only select the `franchiseId`
     * const franchiseWithFranchiseIdOnly = await prisma.franchise.findMany({ select: { franchiseId: true } })
     * 
    **/
    findMany<T extends FranchiseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Franchise.
     * @param {FranchiseCreateArgs} args - Arguments to create a Franchise.
     * @example
     * // Create one Franchise
     * const Franchise = await prisma.franchise.create({
     *   data: {
     *     // ... data to create a Franchise
     *   }
     * })
     * 
    **/
    create<T extends FranchiseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseCreateArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Franchise.
     * @param {FranchiseDeleteArgs} args - Arguments to delete one Franchise.
     * @example
     * // Delete one Franchise
     * const Franchise = await prisma.franchise.delete({
     *   where: {
     *     // ... filter to delete one Franchise
     *   }
     * })
     * 
    **/
    delete<T extends FranchiseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseDeleteArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Franchise.
     * @param {FranchiseUpdateArgs} args - Arguments to update one Franchise.
     * @example
     * // Update one Franchise
     * const franchise = await prisma.franchise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FranchiseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUpdateArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Franchises.
     * @param {FranchiseDeleteManyArgs} args - Arguments to filter Franchises to delete.
     * @example
     * // Delete a few Franchises
     * const { count } = await prisma.franchise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FranchiseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Franchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Franchises
     * const franchise = await prisma.franchise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FranchiseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Franchise.
     * @param {FranchiseUpsertArgs} args - Arguments to update or create a Franchise.
     * @example
     * // Update or create a Franchise
     * const franchise = await prisma.franchise.upsert({
     *   create: {
     *     // ... data to create a Franchise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Franchise we want to update
     *   }
     * })
    **/
    upsert<T extends FranchiseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUpsertArgs<ExtArgs>>
    ): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Franchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseCountArgs} args - Arguments to filter Franchises to count.
     * @example
     * // Count the number of Franchises
     * const count = await prisma.franchise.count({
     *   where: {
     *     // ... the filter for the Franchises we want to count
     *   }
     * })
    **/
    count<T extends FranchiseCountArgs>(
      args?: Subset<T, FranchiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FranchiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Franchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FranchiseAggregateArgs>(args: Subset<T, FranchiseAggregateArgs>): Prisma.PrismaPromise<GetFranchiseAggregateType<T>>

    /**
     * Group by Franchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseGroupByArgs} args - Group by arguments.
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
      T extends FranchiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FranchiseGroupByArgs['orderBy'] }
        : { orderBy?: FranchiseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FranchiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFranchiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Franchise model
   */
  readonly fields: FranchiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Franchise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FranchiseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Franchise$userArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    franchiseProduct<T extends Franchise$franchiseProductArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$franchiseProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    CableProductSettings<T extends Franchise$CableProductSettingsArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$CableProductSettingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'findMany'> | Null>;

    FranchiseUserProductPermission<T extends Franchise$FranchiseUserProductPermissionArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$FranchiseUserProductPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    parentFranchiseRelation<T extends Franchise$parentFranchiseRelationArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$parentFranchiseRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

    childFranchiseRelation<T extends Franchise$childFranchiseRelationArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$childFranchiseRelationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Franchise model
   */ 
  interface FranchiseFieldRefs {
    readonly franchiseId: FieldRef<"Franchise", 'String'>
    readonly franchiseName: FieldRef<"Franchise", 'String'>
    readonly franchiseCode: FieldRef<"Franchise", 'String'>
    readonly onboardingDate: FieldRef<"Franchise", 'DateTime'>
    readonly enabled: FieldRef<"Franchise", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Franchise findUnique
   */
  export type FranchiseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where: FranchiseWhereUniqueInput
  }


  /**
   * Franchise findUniqueOrThrow
   */
  export type FranchiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where: FranchiseWhereUniqueInput
  }


  /**
   * Franchise findFirst
   */
  export type FranchiseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Franchises.
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Franchises.
     */
    distinct?: FranchiseScalarFieldEnum | FranchiseScalarFieldEnum[]
  }


  /**
   * Franchise findFirstOrThrow
   */
  export type FranchiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Franchises.
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Franchises.
     */
    distinct?: FranchiseScalarFieldEnum | FranchiseScalarFieldEnum[]
  }


  /**
   * Franchise findMany
   */
  export type FranchiseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchises to fetch.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Franchises.
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    distinct?: FranchiseScalarFieldEnum | FranchiseScalarFieldEnum[]
  }


  /**
   * Franchise create
   */
  export type FranchiseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * The data needed to create a Franchise.
     */
    data: XOR<FranchiseCreateInput, FranchiseUncheckedCreateInput>
  }


  /**
   * Franchise update
   */
  export type FranchiseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * The data needed to update a Franchise.
     */
    data: XOR<FranchiseUpdateInput, FranchiseUncheckedUpdateInput>
    /**
     * Choose, which Franchise to update.
     */
    where: FranchiseWhereUniqueInput
  }


  /**
   * Franchise updateMany
   */
  export type FranchiseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Franchises.
     */
    data: XOR<FranchiseUpdateManyMutationInput, FranchiseUncheckedUpdateManyInput>
    /**
     * Filter which Franchises to update
     */
    where?: FranchiseWhereInput
  }


  /**
   * Franchise upsert
   */
  export type FranchiseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * The filter to search for the Franchise to update in case it exists.
     */
    where: FranchiseWhereUniqueInput
    /**
     * In case the Franchise found by the `where` argument doesn't exist, create a new Franchise with this data.
     */
    create: XOR<FranchiseCreateInput, FranchiseUncheckedCreateInput>
    /**
     * In case the Franchise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FranchiseUpdateInput, FranchiseUncheckedUpdateInput>
  }


  /**
   * Franchise delete
   */
  export type FranchiseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter which Franchise to delete.
     */
    where: FranchiseWhereUniqueInput
  }


  /**
   * Franchise deleteMany
   */
  export type FranchiseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Franchises to delete
     */
    where?: FranchiseWhereInput
  }


  /**
   * Franchise.user
   */
  export type Franchise$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Franchise.franchiseProduct
   */
  export type Franchise$franchiseProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    where?: FranchiseProductWhereInput
    orderBy?: FranchiseProductOrderByWithRelationInput | FranchiseProductOrderByWithRelationInput[]
    cursor?: FranchiseProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseProductScalarFieldEnum | FranchiseProductScalarFieldEnum[]
  }


  /**
   * Franchise.CableProductSettings
   */
  export type Franchise$CableProductSettingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    where?: CableProductSettingsWhereInput
    orderBy?: CableProductSettingsOrderByWithRelationInput | CableProductSettingsOrderByWithRelationInput[]
    cursor?: CableProductSettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CableProductSettingsScalarFieldEnum | CableProductSettingsScalarFieldEnum[]
  }


  /**
   * Franchise.FranchiseUserProductPermission
   */
  export type Franchise$FranchiseUserProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    where?: FranchiseUserProductPermissionWhereInput
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseUserProductPermissionScalarFieldEnum | FranchiseUserProductPermissionScalarFieldEnum[]
  }


  /**
   * Franchise.parentFranchiseRelation
   */
  export type Franchise$parentFranchiseRelationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    where?: FranchiseRelationWhereInput
    orderBy?: FranchiseRelationOrderByWithRelationInput | FranchiseRelationOrderByWithRelationInput[]
    cursor?: FranchiseRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseRelationScalarFieldEnum | FranchiseRelationScalarFieldEnum[]
  }


  /**
   * Franchise.childFranchiseRelation
   */
  export type Franchise$childFranchiseRelationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    where?: FranchiseRelationWhereInput
    orderBy?: FranchiseRelationOrderByWithRelationInput | FranchiseRelationOrderByWithRelationInput[]
    cursor?: FranchiseRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseRelationScalarFieldEnum | FranchiseRelationScalarFieldEnum[]
  }


  /**
   * Franchise without action
   */
  export type FranchiseDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseInclude<ExtArgs> | null
  }



  /**
   * Model FranchiseRelation
   */

  export type AggregateFranchiseRelation = {
    _count: FranchiseRelationCountAggregateOutputType | null
    _avg: FranchiseRelationAvgAggregateOutputType | null
    _sum: FranchiseRelationSumAggregateOutputType | null
    _min: FranchiseRelationMinAggregateOutputType | null
    _max: FranchiseRelationMaxAggregateOutputType | null
  }

  export type FranchiseRelationAvgAggregateOutputType = {
    id: number | null
  }

  export type FranchiseRelationSumAggregateOutputType = {
    id: number | null
  }

  export type FranchiseRelationMinAggregateOutputType = {
    id: number | null
    parentFranchiseId: string | null
    childFranchiseId: string | null
    enabled: boolean | null
  }

  export type FranchiseRelationMaxAggregateOutputType = {
    id: number | null
    parentFranchiseId: string | null
    childFranchiseId: string | null
    enabled: boolean | null
  }

  export type FranchiseRelationCountAggregateOutputType = {
    id: number
    parentFranchiseId: number
    childFranchiseId: number
    enabled: number
    _all: number
  }


  export type FranchiseRelationAvgAggregateInputType = {
    id?: true
  }

  export type FranchiseRelationSumAggregateInputType = {
    id?: true
  }

  export type FranchiseRelationMinAggregateInputType = {
    id?: true
    parentFranchiseId?: true
    childFranchiseId?: true
    enabled?: true
  }

  export type FranchiseRelationMaxAggregateInputType = {
    id?: true
    parentFranchiseId?: true
    childFranchiseId?: true
    enabled?: true
  }

  export type FranchiseRelationCountAggregateInputType = {
    id?: true
    parentFranchiseId?: true
    childFranchiseId?: true
    enabled?: true
    _all?: true
  }

  export type FranchiseRelationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FranchiseRelation to aggregate.
     */
    where?: FranchiseRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseRelations to fetch.
     */
    orderBy?: FranchiseRelationOrderByWithRelationInput | FranchiseRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FranchiseRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FranchiseRelations
    **/
    _count?: true | FranchiseRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FranchiseRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FranchiseRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FranchiseRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FranchiseRelationMaxAggregateInputType
  }

  export type GetFranchiseRelationAggregateType<T extends FranchiseRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateFranchiseRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFranchiseRelation[P]>
      : GetScalarType<T[P], AggregateFranchiseRelation[P]>
  }




  export type FranchiseRelationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseRelationWhereInput
    orderBy?: FranchiseRelationOrderByWithAggregationInput | FranchiseRelationOrderByWithAggregationInput[]
    by: FranchiseRelationScalarFieldEnum[] | FranchiseRelationScalarFieldEnum
    having?: FranchiseRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FranchiseRelationCountAggregateInputType | true
    _avg?: FranchiseRelationAvgAggregateInputType
    _sum?: FranchiseRelationSumAggregateInputType
    _min?: FranchiseRelationMinAggregateInputType
    _max?: FranchiseRelationMaxAggregateInputType
  }

  export type FranchiseRelationGroupByOutputType = {
    id: number
    parentFranchiseId: string
    childFranchiseId: string
    enabled: boolean | null
    _count: FranchiseRelationCountAggregateOutputType | null
    _avg: FranchiseRelationAvgAggregateOutputType | null
    _sum: FranchiseRelationSumAggregateOutputType | null
    _min: FranchiseRelationMinAggregateOutputType | null
    _max: FranchiseRelationMaxAggregateOutputType | null
  }

  type GetFranchiseRelationGroupByPayload<T extends FranchiseRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FranchiseRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FranchiseRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FranchiseRelationGroupByOutputType[P]>
            : GetScalarType<T[P], FranchiseRelationGroupByOutputType[P]>
        }
      >
    >


  export type FranchiseRelationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentFranchiseId?: boolean
    childFranchiseId?: boolean
    enabled?: boolean
    parentFranchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    childFranchise?: boolean | FranchiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["franchiseRelation"]>

  export type FranchiseRelationSelectScalar = {
    id?: boolean
    parentFranchiseId?: boolean
    childFranchiseId?: boolean
    enabled?: boolean
  }

  export type FranchiseRelationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    parentFranchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    childFranchise?: boolean | FranchiseDefaultArgs<ExtArgs>
  }


  export type $FranchiseRelationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "FranchiseRelation"
    objects: {
      parentFranchise: Prisma.$FranchisePayload<ExtArgs>
      childFranchise: Prisma.$FranchisePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      parentFranchiseId: string
      childFranchiseId: string
      enabled: boolean | null
    }, ExtArgs["result"]["franchiseRelation"]>
    composites: {}
  }


  type FranchiseRelationGetPayload<S extends boolean | null | undefined | FranchiseRelationDefaultArgs> = $Result.GetResult<Prisma.$FranchiseRelationPayload, S>

  type FranchiseRelationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FranchiseRelationFindManyArgs, 'select' | 'include'> & {
      select?: FranchiseRelationCountAggregateInputType | true
    }

  export interface FranchiseRelationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FranchiseRelation'], meta: { name: 'FranchiseRelation' } }
    /**
     * Find zero or one FranchiseRelation that matches the filter.
     * @param {FranchiseRelationFindUniqueArgs} args - Arguments to find a FranchiseRelation
     * @example
     * // Get one FranchiseRelation
     * const franchiseRelation = await prisma.franchiseRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FranchiseRelationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseRelationFindUniqueArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FranchiseRelation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FranchiseRelationFindUniqueOrThrowArgs} args - Arguments to find a FranchiseRelation
     * @example
     * // Get one FranchiseRelation
     * const franchiseRelation = await prisma.franchiseRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FranchiseRelationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseRelationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FranchiseRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseRelationFindFirstArgs} args - Arguments to find a FranchiseRelation
     * @example
     * // Get one FranchiseRelation
     * const franchiseRelation = await prisma.franchiseRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FranchiseRelationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseRelationFindFirstArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FranchiseRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseRelationFindFirstOrThrowArgs} args - Arguments to find a FranchiseRelation
     * @example
     * // Get one FranchiseRelation
     * const franchiseRelation = await prisma.franchiseRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FranchiseRelationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseRelationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FranchiseRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseRelationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FranchiseRelations
     * const franchiseRelations = await prisma.franchiseRelation.findMany()
     * 
     * // Get first 10 FranchiseRelations
     * const franchiseRelations = await prisma.franchiseRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const franchiseRelationWithIdOnly = await prisma.franchiseRelation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FranchiseRelationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseRelationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FranchiseRelation.
     * @param {FranchiseRelationCreateArgs} args - Arguments to create a FranchiseRelation.
     * @example
     * // Create one FranchiseRelation
     * const FranchiseRelation = await prisma.franchiseRelation.create({
     *   data: {
     *     // ... data to create a FranchiseRelation
     *   }
     * })
     * 
    **/
    create<T extends FranchiseRelationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseRelationCreateArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a FranchiseRelation.
     * @param {FranchiseRelationDeleteArgs} args - Arguments to delete one FranchiseRelation.
     * @example
     * // Delete one FranchiseRelation
     * const FranchiseRelation = await prisma.franchiseRelation.delete({
     *   where: {
     *     // ... filter to delete one FranchiseRelation
     *   }
     * })
     * 
    **/
    delete<T extends FranchiseRelationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseRelationDeleteArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FranchiseRelation.
     * @param {FranchiseRelationUpdateArgs} args - Arguments to update one FranchiseRelation.
     * @example
     * // Update one FranchiseRelation
     * const franchiseRelation = await prisma.franchiseRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FranchiseRelationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseRelationUpdateArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FranchiseRelations.
     * @param {FranchiseRelationDeleteManyArgs} args - Arguments to filter FranchiseRelations to delete.
     * @example
     * // Delete a few FranchiseRelations
     * const { count } = await prisma.franchiseRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FranchiseRelationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseRelationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FranchiseRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FranchiseRelations
     * const franchiseRelation = await prisma.franchiseRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FranchiseRelationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseRelationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FranchiseRelation.
     * @param {FranchiseRelationUpsertArgs} args - Arguments to update or create a FranchiseRelation.
     * @example
     * // Update or create a FranchiseRelation
     * const franchiseRelation = await prisma.franchiseRelation.upsert({
     *   create: {
     *     // ... data to create a FranchiseRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FranchiseRelation we want to update
     *   }
     * })
    **/
    upsert<T extends FranchiseRelationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseRelationUpsertArgs<ExtArgs>>
    ): Prisma__FranchiseRelationClient<$Result.GetResult<Prisma.$FranchiseRelationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FranchiseRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseRelationCountArgs} args - Arguments to filter FranchiseRelations to count.
     * @example
     * // Count the number of FranchiseRelations
     * const count = await prisma.franchiseRelation.count({
     *   where: {
     *     // ... the filter for the FranchiseRelations we want to count
     *   }
     * })
    **/
    count<T extends FranchiseRelationCountArgs>(
      args?: Subset<T, FranchiseRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FranchiseRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FranchiseRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FranchiseRelationAggregateArgs>(args: Subset<T, FranchiseRelationAggregateArgs>): Prisma.PrismaPromise<GetFranchiseRelationAggregateType<T>>

    /**
     * Group by FranchiseRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseRelationGroupByArgs} args - Group by arguments.
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
      T extends FranchiseRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FranchiseRelationGroupByArgs['orderBy'] }
        : { orderBy?: FranchiseRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FranchiseRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFranchiseRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FranchiseRelation model
   */
  readonly fields: FranchiseRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FranchiseRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FranchiseRelationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parentFranchise<T extends FranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FranchiseDefaultArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    childFranchise<T extends FranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FranchiseDefaultArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the FranchiseRelation model
   */ 
  interface FranchiseRelationFieldRefs {
    readonly id: FieldRef<"FranchiseRelation", 'Int'>
    readonly parentFranchiseId: FieldRef<"FranchiseRelation", 'String'>
    readonly childFranchiseId: FieldRef<"FranchiseRelation", 'String'>
    readonly enabled: FieldRef<"FranchiseRelation", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * FranchiseRelation findUnique
   */
  export type FranchiseRelationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseRelation to fetch.
     */
    where: FranchiseRelationWhereUniqueInput
  }


  /**
   * FranchiseRelation findUniqueOrThrow
   */
  export type FranchiseRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseRelation to fetch.
     */
    where: FranchiseRelationWhereUniqueInput
  }


  /**
   * FranchiseRelation findFirst
   */
  export type FranchiseRelationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseRelation to fetch.
     */
    where?: FranchiseRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseRelations to fetch.
     */
    orderBy?: FranchiseRelationOrderByWithRelationInput | FranchiseRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FranchiseRelations.
     */
    cursor?: FranchiseRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FranchiseRelations.
     */
    distinct?: FranchiseRelationScalarFieldEnum | FranchiseRelationScalarFieldEnum[]
  }


  /**
   * FranchiseRelation findFirstOrThrow
   */
  export type FranchiseRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseRelation to fetch.
     */
    where?: FranchiseRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseRelations to fetch.
     */
    orderBy?: FranchiseRelationOrderByWithRelationInput | FranchiseRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FranchiseRelations.
     */
    cursor?: FranchiseRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FranchiseRelations.
     */
    distinct?: FranchiseRelationScalarFieldEnum | FranchiseRelationScalarFieldEnum[]
  }


  /**
   * FranchiseRelation findMany
   */
  export type FranchiseRelationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseRelations to fetch.
     */
    where?: FranchiseRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseRelations to fetch.
     */
    orderBy?: FranchiseRelationOrderByWithRelationInput | FranchiseRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FranchiseRelations.
     */
    cursor?: FranchiseRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseRelations.
     */
    skip?: number
    distinct?: FranchiseRelationScalarFieldEnum | FranchiseRelationScalarFieldEnum[]
  }


  /**
   * FranchiseRelation create
   */
  export type FranchiseRelationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a FranchiseRelation.
     */
    data: XOR<FranchiseRelationCreateInput, FranchiseRelationUncheckedCreateInput>
  }


  /**
   * FranchiseRelation update
   */
  export type FranchiseRelationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a FranchiseRelation.
     */
    data: XOR<FranchiseRelationUpdateInput, FranchiseRelationUncheckedUpdateInput>
    /**
     * Choose, which FranchiseRelation to update.
     */
    where: FranchiseRelationWhereUniqueInput
  }


  /**
   * FranchiseRelation updateMany
   */
  export type FranchiseRelationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FranchiseRelations.
     */
    data: XOR<FranchiseRelationUpdateManyMutationInput, FranchiseRelationUncheckedUpdateManyInput>
    /**
     * Filter which FranchiseRelations to update
     */
    where?: FranchiseRelationWhereInput
  }


  /**
   * FranchiseRelation upsert
   */
  export type FranchiseRelationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the FranchiseRelation to update in case it exists.
     */
    where: FranchiseRelationWhereUniqueInput
    /**
     * In case the FranchiseRelation found by the `where` argument doesn't exist, create a new FranchiseRelation with this data.
     */
    create: XOR<FranchiseRelationCreateInput, FranchiseRelationUncheckedCreateInput>
    /**
     * In case the FranchiseRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FranchiseRelationUpdateInput, FranchiseRelationUncheckedUpdateInput>
  }


  /**
   * FranchiseRelation delete
   */
  export type FranchiseRelationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
    /**
     * Filter which FranchiseRelation to delete.
     */
    where: FranchiseRelationWhereUniqueInput
  }


  /**
   * FranchiseRelation deleteMany
   */
  export type FranchiseRelationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FranchiseRelations to delete
     */
    where?: FranchiseRelationWhereInput
  }


  /**
   * FranchiseRelation without action
   */
  export type FranchiseRelationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseRelation
     */
    select?: FranchiseRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseRelationInclude<ExtArgs> | null
  }



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
    mobile: string | null
    email: string | null
    password: string | null
    webAuthToken: string | null
    webAuthTime: Date | null
    appAuthToken: string | null
    appAuthTime: Date | null
    appAuthVersion: string | null
    isSystemUser: boolean | null
    enabled: boolean | null
    franchiseId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    mobile: string | null
    email: string | null
    password: string | null
    webAuthToken: string | null
    webAuthTime: Date | null
    appAuthToken: string | null
    appAuthTime: Date | null
    appAuthVersion: string | null
    isSystemUser: boolean | null
    enabled: boolean | null
    franchiseId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    mobile: number
    email: number
    password: number
    webAuthToken: number
    webAuthTime: number
    appAuthToken: number
    appAuthTime: number
    appAuthVersion: number
    isSystemUser: number
    enabled: number
    franchiseId: number
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
    mobile?: true
    email?: true
    password?: true
    webAuthToken?: true
    webAuthTime?: true
    appAuthToken?: true
    appAuthTime?: true
    appAuthVersion?: true
    isSystemUser?: true
    enabled?: true
    franchiseId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    mobile?: true
    email?: true
    password?: true
    webAuthToken?: true
    webAuthTime?: true
    appAuthToken?: true
    appAuthTime?: true
    appAuthVersion?: true
    isSystemUser?: true
    enabled?: true
    franchiseId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    mobile?: true
    email?: true
    password?: true
    webAuthToken?: true
    webAuthTime?: true
    appAuthToken?: true
    appAuthTime?: true
    appAuthVersion?: true
    isSystemUser?: true
    enabled?: true
    franchiseId?: true
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
    name: string
    mobile: string
    email: string
    password: string
    webAuthToken: string
    webAuthTime: Date | null
    appAuthToken: string
    appAuthTime: Date | null
    appAuthVersion: string
    isSystemUser: boolean | null
    enabled: boolean | null
    franchiseId: string
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
    mobile?: boolean
    email?: boolean
    password?: boolean
    webAuthToken?: boolean
    webAuthTime?: boolean
    appAuthToken?: boolean
    appAuthTime?: boolean
    appAuthVersion?: boolean
    isSystemUser?: boolean
    enabled?: boolean
    franchiseId?: boolean
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    FranchiseUserProductPermission?: boolean | User$FranchiseUserProductPermissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    password?: boolean
    webAuthToken?: boolean
    webAuthTime?: boolean
    appAuthToken?: boolean
    appAuthTime?: boolean
    appAuthVersion?: boolean
    isSystemUser?: boolean
    enabled?: boolean
    franchiseId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    FranchiseUserProductPermission?: boolean | User$FranchiseUserProductPermissionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      franchise: Prisma.$FranchisePayload<ExtArgs>
      FranchiseUserProductPermission: Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      userId: string
      name: string
      mobile: string
      email: string
      password: string
      webAuthToken: string
      webAuthTime: Date | null
      appAuthToken: string
      appAuthTime: Date | null
      appAuthVersion: string
      isSystemUser: boolean | null
      enabled: boolean | null
      franchiseId: string
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

    franchise<T extends FranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FranchiseDefaultArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    FranchiseUserProductPermission<T extends User$FranchiseUserProductPermissionArgs<ExtArgs> = {}>(args?: Subset<T, User$FranchiseUserProductPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly mobile: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly webAuthToken: FieldRef<"User", 'String'>
    readonly webAuthTime: FieldRef<"User", 'DateTime'>
    readonly appAuthToken: FieldRef<"User", 'String'>
    readonly appAuthTime: FieldRef<"User", 'DateTime'>
    readonly appAuthVersion: FieldRef<"User", 'String'>
    readonly isSystemUser: FieldRef<"User", 'Boolean'>
    readonly enabled: FieldRef<"User", 'Boolean'>
    readonly franchiseId: FieldRef<"User", 'String'>
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
   * User.FranchiseUserProductPermission
   */
  export type User$FranchiseUserProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    where?: FranchiseUserProductPermissionWhereInput
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseUserProductPermissionScalarFieldEnum | FranchiseUserProductPermissionScalarFieldEnum[]
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
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    productId: string | null
    productName: string | null
    productDescription: string | null
    enabled: boolean | null
  }

  export type ProductMaxAggregateOutputType = {
    productId: string | null
    productName: string | null
    productDescription: string | null
    enabled: boolean | null
  }

  export type ProductCountAggregateOutputType = {
    productId: number
    productName: number
    productDescription: number
    enabled: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    productId?: true
    productName?: true
    productDescription?: true
    enabled?: true
  }

  export type ProductMaxAggregateInputType = {
    productId?: true
    productName?: true
    productDescription?: true
    enabled?: true
  }

  export type ProductCountAggregateInputType = {
    productId?: true
    productName?: true
    productDescription?: true
    enabled?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productId: string
    productName: string
    productDescription: string | null
    enabled: boolean | null
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    productName?: boolean
    productDescription?: boolean
    enabled?: boolean
    franchiseProduct?: boolean | Product$franchiseProductArgs<ExtArgs>
    productPermission?: boolean | Product$productPermissionArgs<ExtArgs>
    userProductPermission?: boolean | Product$userProductPermissionArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    productId?: boolean
    productName?: boolean
    productDescription?: boolean
    enabled?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    franchiseProduct?: boolean | Product$franchiseProductArgs<ExtArgs>
    productPermission?: boolean | Product$productPermissionArgs<ExtArgs>
    userProductPermission?: boolean | Product$userProductPermissionArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      franchiseProduct: Prisma.$FranchiseProductPayload<ExtArgs>[]
      productPermission: Prisma.$ProductPermissionPayload<ExtArgs>[]
      userProductPermission: Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      productId: string
      productName: string
      productDescription: string | null
      enabled: boolean | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productWithProductIdOnly = await prisma.product.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    franchiseProduct<T extends Product$franchiseProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$franchiseProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    productPermission<T extends Product$productPermissionArgs<ExtArgs> = {}>(args?: Subset<T, Product$productPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    userProductPermission<T extends Product$userProductPermissionArgs<ExtArgs> = {}>(args?: Subset<T, Product$userProductPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly productId: FieldRef<"Product", 'String'>
    readonly productName: FieldRef<"Product", 'String'>
    readonly productDescription: FieldRef<"Product", 'String'>
    readonly enabled: FieldRef<"Product", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.franchiseProduct
   */
  export type Product$franchiseProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    where?: FranchiseProductWhereInput
    orderBy?: FranchiseProductOrderByWithRelationInput | FranchiseProductOrderByWithRelationInput[]
    cursor?: FranchiseProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseProductScalarFieldEnum | FranchiseProductScalarFieldEnum[]
  }


  /**
   * Product.productPermission
   */
  export type Product$productPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    where?: ProductPermissionWhereInput
    orderBy?: ProductPermissionOrderByWithRelationInput | ProductPermissionOrderByWithRelationInput[]
    cursor?: ProductPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductPermissionScalarFieldEnum | ProductPermissionScalarFieldEnum[]
  }


  /**
   * Product.userProductPermission
   */
  export type Product$userProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    where?: FranchiseUserProductPermissionWhereInput
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseUserProductPermissionScalarFieldEnum | FranchiseUserProductPermissionScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model FranchiseProduct
   */

  export type AggregateFranchiseProduct = {
    _count: FranchiseProductCountAggregateOutputType | null
    _avg: FranchiseProductAvgAggregateOutputType | null
    _sum: FranchiseProductSumAggregateOutputType | null
    _min: FranchiseProductMinAggregateOutputType | null
    _max: FranchiseProductMaxAggregateOutputType | null
  }

  export type FranchiseProductAvgAggregateOutputType = {
    franchiseProductId: number | null
  }

  export type FranchiseProductSumAggregateOutputType = {
    franchiseProductId: number | null
  }

  export type FranchiseProductMinAggregateOutputType = {
    franchiseProductId: number | null
    franchiseId: string | null
    productId: string | null
    enabled: boolean | null
  }

  export type FranchiseProductMaxAggregateOutputType = {
    franchiseProductId: number | null
    franchiseId: string | null
    productId: string | null
    enabled: boolean | null
  }

  export type FranchiseProductCountAggregateOutputType = {
    franchiseProductId: number
    franchiseId: number
    productId: number
    enabled: number
    _all: number
  }


  export type FranchiseProductAvgAggregateInputType = {
    franchiseProductId?: true
  }

  export type FranchiseProductSumAggregateInputType = {
    franchiseProductId?: true
  }

  export type FranchiseProductMinAggregateInputType = {
    franchiseProductId?: true
    franchiseId?: true
    productId?: true
    enabled?: true
  }

  export type FranchiseProductMaxAggregateInputType = {
    franchiseProductId?: true
    franchiseId?: true
    productId?: true
    enabled?: true
  }

  export type FranchiseProductCountAggregateInputType = {
    franchiseProductId?: true
    franchiseId?: true
    productId?: true
    enabled?: true
    _all?: true
  }

  export type FranchiseProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FranchiseProduct to aggregate.
     */
    where?: FranchiseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseProducts to fetch.
     */
    orderBy?: FranchiseProductOrderByWithRelationInput | FranchiseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FranchiseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FranchiseProducts
    **/
    _count?: true | FranchiseProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FranchiseProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FranchiseProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FranchiseProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FranchiseProductMaxAggregateInputType
  }

  export type GetFranchiseProductAggregateType<T extends FranchiseProductAggregateArgs> = {
        [P in keyof T & keyof AggregateFranchiseProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFranchiseProduct[P]>
      : GetScalarType<T[P], AggregateFranchiseProduct[P]>
  }




  export type FranchiseProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseProductWhereInput
    orderBy?: FranchiseProductOrderByWithAggregationInput | FranchiseProductOrderByWithAggregationInput[]
    by: FranchiseProductScalarFieldEnum[] | FranchiseProductScalarFieldEnum
    having?: FranchiseProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FranchiseProductCountAggregateInputType | true
    _avg?: FranchiseProductAvgAggregateInputType
    _sum?: FranchiseProductSumAggregateInputType
    _min?: FranchiseProductMinAggregateInputType
    _max?: FranchiseProductMaxAggregateInputType
  }

  export type FranchiseProductGroupByOutputType = {
    franchiseProductId: number
    franchiseId: string
    productId: string
    enabled: boolean | null
    _count: FranchiseProductCountAggregateOutputType | null
    _avg: FranchiseProductAvgAggregateOutputType | null
    _sum: FranchiseProductSumAggregateOutputType | null
    _min: FranchiseProductMinAggregateOutputType | null
    _max: FranchiseProductMaxAggregateOutputType | null
  }

  type GetFranchiseProductGroupByPayload<T extends FranchiseProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FranchiseProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FranchiseProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FranchiseProductGroupByOutputType[P]>
            : GetScalarType<T[P], FranchiseProductGroupByOutputType[P]>
        }
      >
    >


  export type FranchiseProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    franchiseProductId?: boolean
    franchiseId?: boolean
    productId?: boolean
    enabled?: boolean
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["franchiseProduct"]>

  export type FranchiseProductSelectScalar = {
    franchiseProductId?: boolean
    franchiseId?: boolean
    productId?: boolean
    enabled?: boolean
  }

  export type FranchiseProductInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $FranchiseProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "FranchiseProduct"
    objects: {
      franchise: Prisma.$FranchisePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      franchiseProductId: number
      franchiseId: string
      productId: string
      enabled: boolean | null
    }, ExtArgs["result"]["franchiseProduct"]>
    composites: {}
  }


  type FranchiseProductGetPayload<S extends boolean | null | undefined | FranchiseProductDefaultArgs> = $Result.GetResult<Prisma.$FranchiseProductPayload, S>

  type FranchiseProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FranchiseProductFindManyArgs, 'select' | 'include'> & {
      select?: FranchiseProductCountAggregateInputType | true
    }

  export interface FranchiseProductDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FranchiseProduct'], meta: { name: 'FranchiseProduct' } }
    /**
     * Find zero or one FranchiseProduct that matches the filter.
     * @param {FranchiseProductFindUniqueArgs} args - Arguments to find a FranchiseProduct
     * @example
     * // Get one FranchiseProduct
     * const franchiseProduct = await prisma.franchiseProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FranchiseProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseProductFindUniqueArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FranchiseProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FranchiseProductFindUniqueOrThrowArgs} args - Arguments to find a FranchiseProduct
     * @example
     * // Get one FranchiseProduct
     * const franchiseProduct = await prisma.franchiseProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FranchiseProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FranchiseProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseProductFindFirstArgs} args - Arguments to find a FranchiseProduct
     * @example
     * // Get one FranchiseProduct
     * const franchiseProduct = await prisma.franchiseProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FranchiseProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseProductFindFirstArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FranchiseProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseProductFindFirstOrThrowArgs} args - Arguments to find a FranchiseProduct
     * @example
     * // Get one FranchiseProduct
     * const franchiseProduct = await prisma.franchiseProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FranchiseProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FranchiseProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FranchiseProducts
     * const franchiseProducts = await prisma.franchiseProduct.findMany()
     * 
     * // Get first 10 FranchiseProducts
     * const franchiseProducts = await prisma.franchiseProduct.findMany({ take: 10 })
     * 
     * // Only select the `franchiseProductId`
     * const franchiseProductWithFranchiseProductIdOnly = await prisma.franchiseProduct.findMany({ select: { franchiseProductId: true } })
     * 
    **/
    findMany<T extends FranchiseProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FranchiseProduct.
     * @param {FranchiseProductCreateArgs} args - Arguments to create a FranchiseProduct.
     * @example
     * // Create one FranchiseProduct
     * const FranchiseProduct = await prisma.franchiseProduct.create({
     *   data: {
     *     // ... data to create a FranchiseProduct
     *   }
     * })
     * 
    **/
    create<T extends FranchiseProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseProductCreateArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a FranchiseProduct.
     * @param {FranchiseProductDeleteArgs} args - Arguments to delete one FranchiseProduct.
     * @example
     * // Delete one FranchiseProduct
     * const FranchiseProduct = await prisma.franchiseProduct.delete({
     *   where: {
     *     // ... filter to delete one FranchiseProduct
     *   }
     * })
     * 
    **/
    delete<T extends FranchiseProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseProductDeleteArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FranchiseProduct.
     * @param {FranchiseProductUpdateArgs} args - Arguments to update one FranchiseProduct.
     * @example
     * // Update one FranchiseProduct
     * const franchiseProduct = await prisma.franchiseProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FranchiseProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseProductUpdateArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FranchiseProducts.
     * @param {FranchiseProductDeleteManyArgs} args - Arguments to filter FranchiseProducts to delete.
     * @example
     * // Delete a few FranchiseProducts
     * const { count } = await prisma.franchiseProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FranchiseProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FranchiseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FranchiseProducts
     * const franchiseProduct = await prisma.franchiseProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FranchiseProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FranchiseProduct.
     * @param {FranchiseProductUpsertArgs} args - Arguments to update or create a FranchiseProduct.
     * @example
     * // Update or create a FranchiseProduct
     * const franchiseProduct = await prisma.franchiseProduct.upsert({
     *   create: {
     *     // ... data to create a FranchiseProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FranchiseProduct we want to update
     *   }
     * })
    **/
    upsert<T extends FranchiseProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseProductUpsertArgs<ExtArgs>>
    ): Prisma__FranchiseProductClient<$Result.GetResult<Prisma.$FranchiseProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FranchiseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseProductCountArgs} args - Arguments to filter FranchiseProducts to count.
     * @example
     * // Count the number of FranchiseProducts
     * const count = await prisma.franchiseProduct.count({
     *   where: {
     *     // ... the filter for the FranchiseProducts we want to count
     *   }
     * })
    **/
    count<T extends FranchiseProductCountArgs>(
      args?: Subset<T, FranchiseProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FranchiseProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FranchiseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FranchiseProductAggregateArgs>(args: Subset<T, FranchiseProductAggregateArgs>): Prisma.PrismaPromise<GetFranchiseProductAggregateType<T>>

    /**
     * Group by FranchiseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseProductGroupByArgs} args - Group by arguments.
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
      T extends FranchiseProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FranchiseProductGroupByArgs['orderBy'] }
        : { orderBy?: FranchiseProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FranchiseProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFranchiseProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FranchiseProduct model
   */
  readonly fields: FranchiseProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FranchiseProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FranchiseProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    franchise<T extends FranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FranchiseDefaultArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the FranchiseProduct model
   */ 
  interface FranchiseProductFieldRefs {
    readonly franchiseProductId: FieldRef<"FranchiseProduct", 'Int'>
    readonly franchiseId: FieldRef<"FranchiseProduct", 'String'>
    readonly productId: FieldRef<"FranchiseProduct", 'String'>
    readonly enabled: FieldRef<"FranchiseProduct", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * FranchiseProduct findUnique
   */
  export type FranchiseProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseProduct to fetch.
     */
    where: FranchiseProductWhereUniqueInput
  }


  /**
   * FranchiseProduct findUniqueOrThrow
   */
  export type FranchiseProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseProduct to fetch.
     */
    where: FranchiseProductWhereUniqueInput
  }


  /**
   * FranchiseProduct findFirst
   */
  export type FranchiseProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseProduct to fetch.
     */
    where?: FranchiseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseProducts to fetch.
     */
    orderBy?: FranchiseProductOrderByWithRelationInput | FranchiseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FranchiseProducts.
     */
    cursor?: FranchiseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FranchiseProducts.
     */
    distinct?: FranchiseProductScalarFieldEnum | FranchiseProductScalarFieldEnum[]
  }


  /**
   * FranchiseProduct findFirstOrThrow
   */
  export type FranchiseProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseProduct to fetch.
     */
    where?: FranchiseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseProducts to fetch.
     */
    orderBy?: FranchiseProductOrderByWithRelationInput | FranchiseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FranchiseProducts.
     */
    cursor?: FranchiseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FranchiseProducts.
     */
    distinct?: FranchiseProductScalarFieldEnum | FranchiseProductScalarFieldEnum[]
  }


  /**
   * FranchiseProduct findMany
   */
  export type FranchiseProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseProducts to fetch.
     */
    where?: FranchiseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseProducts to fetch.
     */
    orderBy?: FranchiseProductOrderByWithRelationInput | FranchiseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FranchiseProducts.
     */
    cursor?: FranchiseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseProducts.
     */
    skip?: number
    distinct?: FranchiseProductScalarFieldEnum | FranchiseProductScalarFieldEnum[]
  }


  /**
   * FranchiseProduct create
   */
  export type FranchiseProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * The data needed to create a FranchiseProduct.
     */
    data: XOR<FranchiseProductCreateInput, FranchiseProductUncheckedCreateInput>
  }


  /**
   * FranchiseProduct update
   */
  export type FranchiseProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * The data needed to update a FranchiseProduct.
     */
    data: XOR<FranchiseProductUpdateInput, FranchiseProductUncheckedUpdateInput>
    /**
     * Choose, which FranchiseProduct to update.
     */
    where: FranchiseProductWhereUniqueInput
  }


  /**
   * FranchiseProduct updateMany
   */
  export type FranchiseProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FranchiseProducts.
     */
    data: XOR<FranchiseProductUpdateManyMutationInput, FranchiseProductUncheckedUpdateManyInput>
    /**
     * Filter which FranchiseProducts to update
     */
    where?: FranchiseProductWhereInput
  }


  /**
   * FranchiseProduct upsert
   */
  export type FranchiseProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * The filter to search for the FranchiseProduct to update in case it exists.
     */
    where: FranchiseProductWhereUniqueInput
    /**
     * In case the FranchiseProduct found by the `where` argument doesn't exist, create a new FranchiseProduct with this data.
     */
    create: XOR<FranchiseProductCreateInput, FranchiseProductUncheckedCreateInput>
    /**
     * In case the FranchiseProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FranchiseProductUpdateInput, FranchiseProductUncheckedUpdateInput>
  }


  /**
   * FranchiseProduct delete
   */
  export type FranchiseProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
    /**
     * Filter which FranchiseProduct to delete.
     */
    where: FranchiseProductWhereUniqueInput
  }


  /**
   * FranchiseProduct deleteMany
   */
  export type FranchiseProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FranchiseProducts to delete
     */
    where?: FranchiseProductWhereInput
  }


  /**
   * FranchiseProduct without action
   */
  export type FranchiseProductDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseProduct
     */
    select?: FranchiseProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseProductInclude<ExtArgs> | null
  }



  /**
   * Model ProductPermission
   */

  export type AggregateProductPermission = {
    _count: ProductPermissionCountAggregateOutputType | null
    _avg: ProductPermissionAvgAggregateOutputType | null
    _sum: ProductPermissionSumAggregateOutputType | null
    _min: ProductPermissionMinAggregateOutputType | null
    _max: ProductPermissionMaxAggregateOutputType | null
  }

  export type ProductPermissionAvgAggregateOutputType = {
    productPermissionId: number | null
  }

  export type ProductPermissionSumAggregateOutputType = {
    productPermissionId: number | null
  }

  export type ProductPermissionMinAggregateOutputType = {
    productPermissionId: number | null
    productId: string | null
    permissionId: string | null
    permissionName: string | null
    permissionDescription: string | null
  }

  export type ProductPermissionMaxAggregateOutputType = {
    productPermissionId: number | null
    productId: string | null
    permissionId: string | null
    permissionName: string | null
    permissionDescription: string | null
  }

  export type ProductPermissionCountAggregateOutputType = {
    productPermissionId: number
    productId: number
    permissionId: number
    permissionName: number
    permissionDescription: number
    _all: number
  }


  export type ProductPermissionAvgAggregateInputType = {
    productPermissionId?: true
  }

  export type ProductPermissionSumAggregateInputType = {
    productPermissionId?: true
  }

  export type ProductPermissionMinAggregateInputType = {
    productPermissionId?: true
    productId?: true
    permissionId?: true
    permissionName?: true
    permissionDescription?: true
  }

  export type ProductPermissionMaxAggregateInputType = {
    productPermissionId?: true
    productId?: true
    permissionId?: true
    permissionName?: true
    permissionDescription?: true
  }

  export type ProductPermissionCountAggregateInputType = {
    productPermissionId?: true
    productId?: true
    permissionId?: true
    permissionName?: true
    permissionDescription?: true
    _all?: true
  }

  export type ProductPermissionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPermission to aggregate.
     */
    where?: ProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPermissions to fetch.
     */
    orderBy?: ProductPermissionOrderByWithRelationInput | ProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPermissions
    **/
    _count?: true | ProductPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPermissionMaxAggregateInputType
  }

  export type GetProductPermissionAggregateType<T extends ProductPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPermission[P]>
      : GetScalarType<T[P], AggregateProductPermission[P]>
  }




  export type ProductPermissionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductPermissionWhereInput
    orderBy?: ProductPermissionOrderByWithAggregationInput | ProductPermissionOrderByWithAggregationInput[]
    by: ProductPermissionScalarFieldEnum[] | ProductPermissionScalarFieldEnum
    having?: ProductPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPermissionCountAggregateInputType | true
    _avg?: ProductPermissionAvgAggregateInputType
    _sum?: ProductPermissionSumAggregateInputType
    _min?: ProductPermissionMinAggregateInputType
    _max?: ProductPermissionMaxAggregateInputType
  }

  export type ProductPermissionGroupByOutputType = {
    productPermissionId: number
    productId: string
    permissionId: string
    permissionName: string
    permissionDescription: string
    _count: ProductPermissionCountAggregateOutputType | null
    _avg: ProductPermissionAvgAggregateOutputType | null
    _sum: ProductPermissionSumAggregateOutputType | null
    _min: ProductPermissionMinAggregateOutputType | null
    _max: ProductPermissionMaxAggregateOutputType | null
  }

  type GetProductPermissionGroupByPayload<T extends ProductPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPermissionGroupByOutputType[P]>
        }
      >
    >


  export type ProductPermissionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productPermissionId?: boolean
    productId?: boolean
    permissionId?: boolean
    permissionName?: boolean
    permissionDescription?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    userProductPermission?: boolean | ProductPermission$userProductPermissionArgs<ExtArgs>
    _count?: boolean | ProductPermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productPermission"]>

  export type ProductPermissionSelectScalar = {
    productPermissionId?: boolean
    productId?: boolean
    permissionId?: boolean
    permissionName?: boolean
    permissionDescription?: boolean
  }

  export type ProductPermissionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    userProductPermission?: boolean | ProductPermission$userProductPermissionArgs<ExtArgs>
    _count?: boolean | ProductPermissionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPermissionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ProductPermission"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      userProductPermission: Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      productPermissionId: number
      productId: string
      permissionId: string
      permissionName: string
      permissionDescription: string
    }, ExtArgs["result"]["productPermission"]>
    composites: {}
  }


  type ProductPermissionGetPayload<S extends boolean | null | undefined | ProductPermissionDefaultArgs> = $Result.GetResult<Prisma.$ProductPermissionPayload, S>

  type ProductPermissionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductPermissionFindManyArgs, 'select' | 'include'> & {
      select?: ProductPermissionCountAggregateInputType | true
    }

  export interface ProductPermissionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPermission'], meta: { name: 'ProductPermission' } }
    /**
     * Find zero or one ProductPermission that matches the filter.
     * @param {ProductPermissionFindUniqueArgs} args - Arguments to find a ProductPermission
     * @example
     * // Get one ProductPermission
     * const productPermission = await prisma.productPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductPermissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductPermissionFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductPermission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductPermissionFindUniqueOrThrowArgs} args - Arguments to find a ProductPermission
     * @example
     * // Get one ProductPermission
     * const productPermission = await prisma.productPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductPermissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductPermissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPermissionFindFirstArgs} args - Arguments to find a ProductPermission
     * @example
     * // Get one ProductPermission
     * const productPermission = await prisma.productPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductPermissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductPermissionFindFirstArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPermissionFindFirstOrThrowArgs} args - Arguments to find a ProductPermission
     * @example
     * // Get one ProductPermission
     * const productPermission = await prisma.productPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductPermissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductPermissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPermissions
     * const productPermissions = await prisma.productPermission.findMany()
     * 
     * // Get first 10 ProductPermissions
     * const productPermissions = await prisma.productPermission.findMany({ take: 10 })
     * 
     * // Only select the `productPermissionId`
     * const productPermissionWithProductPermissionIdOnly = await prisma.productPermission.findMany({ select: { productPermissionId: true } })
     * 
    **/
    findMany<T extends ProductPermissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductPermissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductPermission.
     * @param {ProductPermissionCreateArgs} args - Arguments to create a ProductPermission.
     * @example
     * // Create one ProductPermission
     * const ProductPermission = await prisma.productPermission.create({
     *   data: {
     *     // ... data to create a ProductPermission
     *   }
     * })
     * 
    **/
    create<T extends ProductPermissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductPermissionCreateArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ProductPermission.
     * @param {ProductPermissionDeleteArgs} args - Arguments to delete one ProductPermission.
     * @example
     * // Delete one ProductPermission
     * const ProductPermission = await prisma.productPermission.delete({
     *   where: {
     *     // ... filter to delete one ProductPermission
     *   }
     * })
     * 
    **/
    delete<T extends ProductPermissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductPermissionDeleteArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductPermission.
     * @param {ProductPermissionUpdateArgs} args - Arguments to update one ProductPermission.
     * @example
     * // Update one ProductPermission
     * const productPermission = await prisma.productPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductPermissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductPermissionUpdateArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductPermissions.
     * @param {ProductPermissionDeleteManyArgs} args - Arguments to filter ProductPermissions to delete.
     * @example
     * // Delete a few ProductPermissions
     * const { count } = await prisma.productPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductPermissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductPermissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPermissions
     * const productPermission = await prisma.productPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductPermissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductPermissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductPermission.
     * @param {ProductPermissionUpsertArgs} args - Arguments to update or create a ProductPermission.
     * @example
     * // Update or create a ProductPermission
     * const productPermission = await prisma.productPermission.upsert({
     *   create: {
     *     // ... data to create a ProductPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPermission we want to update
     *   }
     * })
    **/
    upsert<T extends ProductPermissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductPermissionUpsertArgs<ExtArgs>>
    ): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPermissionCountArgs} args - Arguments to filter ProductPermissions to count.
     * @example
     * // Count the number of ProductPermissions
     * const count = await prisma.productPermission.count({
     *   where: {
     *     // ... the filter for the ProductPermissions we want to count
     *   }
     * })
    **/
    count<T extends ProductPermissionCountArgs>(
      args?: Subset<T, ProductPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductPermissionAggregateArgs>(args: Subset<T, ProductPermissionAggregateArgs>): Prisma.PrismaPromise<GetProductPermissionAggregateType<T>>

    /**
     * Group by ProductPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPermissionGroupByArgs} args - Group by arguments.
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
      T extends ProductPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPermissionGroupByArgs['orderBy'] }
        : { orderBy?: ProductPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPermission model
   */
  readonly fields: ProductPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPermissionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userProductPermission<T extends ProductPermission$userProductPermissionArgs<ExtArgs> = {}>(args?: Subset<T, ProductPermission$userProductPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the ProductPermission model
   */ 
  interface ProductPermissionFieldRefs {
    readonly productPermissionId: FieldRef<"ProductPermission", 'Int'>
    readonly productId: FieldRef<"ProductPermission", 'String'>
    readonly permissionId: FieldRef<"ProductPermission", 'String'>
    readonly permissionName: FieldRef<"ProductPermission", 'String'>
    readonly permissionDescription: FieldRef<"ProductPermission", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProductPermission findUnique
   */
  export type ProductPermissionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPermission to fetch.
     */
    where: ProductPermissionWhereUniqueInput
  }


  /**
   * ProductPermission findUniqueOrThrow
   */
  export type ProductPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPermission to fetch.
     */
    where: ProductPermissionWhereUniqueInput
  }


  /**
   * ProductPermission findFirst
   */
  export type ProductPermissionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPermission to fetch.
     */
    where?: ProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPermissions to fetch.
     */
    orderBy?: ProductPermissionOrderByWithRelationInput | ProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPermissions.
     */
    cursor?: ProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPermissions.
     */
    distinct?: ProductPermissionScalarFieldEnum | ProductPermissionScalarFieldEnum[]
  }


  /**
   * ProductPermission findFirstOrThrow
   */
  export type ProductPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPermission to fetch.
     */
    where?: ProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPermissions to fetch.
     */
    orderBy?: ProductPermissionOrderByWithRelationInput | ProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPermissions.
     */
    cursor?: ProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPermissions.
     */
    distinct?: ProductPermissionScalarFieldEnum | ProductPermissionScalarFieldEnum[]
  }


  /**
   * ProductPermission findMany
   */
  export type ProductPermissionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ProductPermissions to fetch.
     */
    where?: ProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPermissions to fetch.
     */
    orderBy?: ProductPermissionOrderByWithRelationInput | ProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPermissions.
     */
    cursor?: ProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPermissions.
     */
    skip?: number
    distinct?: ProductPermissionScalarFieldEnum | ProductPermissionScalarFieldEnum[]
  }


  /**
   * ProductPermission create
   */
  export type ProductPermissionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductPermission.
     */
    data: XOR<ProductPermissionCreateInput, ProductPermissionUncheckedCreateInput>
  }


  /**
   * ProductPermission update
   */
  export type ProductPermissionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductPermission.
     */
    data: XOR<ProductPermissionUpdateInput, ProductPermissionUncheckedUpdateInput>
    /**
     * Choose, which ProductPermission to update.
     */
    where: ProductPermissionWhereUniqueInput
  }


  /**
   * ProductPermission updateMany
   */
  export type ProductPermissionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPermissions.
     */
    data: XOR<ProductPermissionUpdateManyMutationInput, ProductPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ProductPermissions to update
     */
    where?: ProductPermissionWhereInput
  }


  /**
   * ProductPermission upsert
   */
  export type ProductPermissionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductPermission to update in case it exists.
     */
    where: ProductPermissionWhereUniqueInput
    /**
     * In case the ProductPermission found by the `where` argument doesn't exist, create a new ProductPermission with this data.
     */
    create: XOR<ProductPermissionCreateInput, ProductPermissionUncheckedCreateInput>
    /**
     * In case the ProductPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPermissionUpdateInput, ProductPermissionUncheckedUpdateInput>
  }


  /**
   * ProductPermission delete
   */
  export type ProductPermissionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
    /**
     * Filter which ProductPermission to delete.
     */
    where: ProductPermissionWhereUniqueInput
  }


  /**
   * ProductPermission deleteMany
   */
  export type ProductPermissionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPermissions to delete
     */
    where?: ProductPermissionWhereInput
  }


  /**
   * ProductPermission.userProductPermission
   */
  export type ProductPermission$userProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    where?: FranchiseUserProductPermissionWhereInput
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseUserProductPermissionScalarFieldEnum | FranchiseUserProductPermissionScalarFieldEnum[]
  }


  /**
   * ProductPermission without action
   */
  export type ProductPermissionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPermission
     */
    select?: ProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductPermissionInclude<ExtArgs> | null
  }



  /**
   * Model FranchiseUserProductPermission
   */

  export type AggregateFranchiseUserProductPermission = {
    _count: FranchiseUserProductPermissionCountAggregateOutputType | null
    _avg: FranchiseUserProductPermissionAvgAggregateOutputType | null
    _sum: FranchiseUserProductPermissionSumAggregateOutputType | null
    _min: FranchiseUserProductPermissionMinAggregateOutputType | null
    _max: FranchiseUserProductPermissionMaxAggregateOutputType | null
  }

  export type FranchiseUserProductPermissionAvgAggregateOutputType = {
    franchiseUserProductPermissionId: number | null
    userId: number | null
    permissionLevel: number | null
  }

  export type FranchiseUserProductPermissionSumAggregateOutputType = {
    franchiseUserProductPermissionId: number | null
    userId: number | null
    permissionLevel: number | null
  }

  export type FranchiseUserProductPermissionMinAggregateOutputType = {
    franchiseUserProductPermissionId: number | null
    franchiseId: string | null
    userId: number | null
    productId: string | null
    permissionId: string | null
    permissionLevel: number | null
  }

  export type FranchiseUserProductPermissionMaxAggregateOutputType = {
    franchiseUserProductPermissionId: number | null
    franchiseId: string | null
    userId: number | null
    productId: string | null
    permissionId: string | null
    permissionLevel: number | null
  }

  export type FranchiseUserProductPermissionCountAggregateOutputType = {
    franchiseUserProductPermissionId: number
    franchiseId: number
    userId: number
    productId: number
    permissionId: number
    permissionLevel: number
    _all: number
  }


  export type FranchiseUserProductPermissionAvgAggregateInputType = {
    franchiseUserProductPermissionId?: true
    userId?: true
    permissionLevel?: true
  }

  export type FranchiseUserProductPermissionSumAggregateInputType = {
    franchiseUserProductPermissionId?: true
    userId?: true
    permissionLevel?: true
  }

  export type FranchiseUserProductPermissionMinAggregateInputType = {
    franchiseUserProductPermissionId?: true
    franchiseId?: true
    userId?: true
    productId?: true
    permissionId?: true
    permissionLevel?: true
  }

  export type FranchiseUserProductPermissionMaxAggregateInputType = {
    franchiseUserProductPermissionId?: true
    franchiseId?: true
    userId?: true
    productId?: true
    permissionId?: true
    permissionLevel?: true
  }

  export type FranchiseUserProductPermissionCountAggregateInputType = {
    franchiseUserProductPermissionId?: true
    franchiseId?: true
    userId?: true
    productId?: true
    permissionId?: true
    permissionLevel?: true
    _all?: true
  }

  export type FranchiseUserProductPermissionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FranchiseUserProductPermission to aggregate.
     */
    where?: FranchiseUserProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseUserProductPermissions to fetch.
     */
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseUserProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseUserProductPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FranchiseUserProductPermissions
    **/
    _count?: true | FranchiseUserProductPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FranchiseUserProductPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FranchiseUserProductPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FranchiseUserProductPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FranchiseUserProductPermissionMaxAggregateInputType
  }

  export type GetFranchiseUserProductPermissionAggregateType<T extends FranchiseUserProductPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFranchiseUserProductPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFranchiseUserProductPermission[P]>
      : GetScalarType<T[P], AggregateFranchiseUserProductPermission[P]>
  }




  export type FranchiseUserProductPermissionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FranchiseUserProductPermissionWhereInput
    orderBy?: FranchiseUserProductPermissionOrderByWithAggregationInput | FranchiseUserProductPermissionOrderByWithAggregationInput[]
    by: FranchiseUserProductPermissionScalarFieldEnum[] | FranchiseUserProductPermissionScalarFieldEnum
    having?: FranchiseUserProductPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FranchiseUserProductPermissionCountAggregateInputType | true
    _avg?: FranchiseUserProductPermissionAvgAggregateInputType
    _sum?: FranchiseUserProductPermissionSumAggregateInputType
    _min?: FranchiseUserProductPermissionMinAggregateInputType
    _max?: FranchiseUserProductPermissionMaxAggregateInputType
  }

  export type FranchiseUserProductPermissionGroupByOutputType = {
    franchiseUserProductPermissionId: number
    franchiseId: string
    userId: number
    productId: string
    permissionId: string
    permissionLevel: number
    _count: FranchiseUserProductPermissionCountAggregateOutputType | null
    _avg: FranchiseUserProductPermissionAvgAggregateOutputType | null
    _sum: FranchiseUserProductPermissionSumAggregateOutputType | null
    _min: FranchiseUserProductPermissionMinAggregateOutputType | null
    _max: FranchiseUserProductPermissionMaxAggregateOutputType | null
  }

  type GetFranchiseUserProductPermissionGroupByPayload<T extends FranchiseUserProductPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FranchiseUserProductPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FranchiseUserProductPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FranchiseUserProductPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], FranchiseUserProductPermissionGroupByOutputType[P]>
        }
      >
    >


  export type FranchiseUserProductPermissionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    franchiseUserProductPermissionId?: boolean
    franchiseId?: boolean
    userId?: boolean
    productId?: boolean
    permissionId?: boolean
    permissionLevel?: boolean
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    productPermission?: boolean | ProductPermissionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["franchiseUserProductPermission"]>

  export type FranchiseUserProductPermissionSelectScalar = {
    franchiseUserProductPermissionId?: boolean
    franchiseId?: boolean
    userId?: boolean
    productId?: boolean
    permissionId?: boolean
    permissionLevel?: boolean
  }

  export type FranchiseUserProductPermissionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    productPermission?: boolean | ProductPermissionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $FranchiseUserProductPermissionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "FranchiseUserProductPermission"
    objects: {
      franchise: Prisma.$FranchisePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      productPermission: Prisma.$ProductPermissionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      franchiseUserProductPermissionId: number
      franchiseId: string
      userId: number
      productId: string
      permissionId: string
      permissionLevel: number
    }, ExtArgs["result"]["franchiseUserProductPermission"]>
    composites: {}
  }


  type FranchiseUserProductPermissionGetPayload<S extends boolean | null | undefined | FranchiseUserProductPermissionDefaultArgs> = $Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload, S>

  type FranchiseUserProductPermissionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FranchiseUserProductPermissionFindManyArgs, 'select' | 'include'> & {
      select?: FranchiseUserProductPermissionCountAggregateInputType | true
    }

  export interface FranchiseUserProductPermissionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FranchiseUserProductPermission'], meta: { name: 'FranchiseUserProductPermission' } }
    /**
     * Find zero or one FranchiseUserProductPermission that matches the filter.
     * @param {FranchiseUserProductPermissionFindUniqueArgs} args - Arguments to find a FranchiseUserProductPermission
     * @example
     * // Get one FranchiseUserProductPermission
     * const franchiseUserProductPermission = await prisma.franchiseUserProductPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FranchiseUserProductPermissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUserProductPermissionFindUniqueArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FranchiseUserProductPermission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FranchiseUserProductPermissionFindUniqueOrThrowArgs} args - Arguments to find a FranchiseUserProductPermission
     * @example
     * // Get one FranchiseUserProductPermission
     * const franchiseUserProductPermission = await prisma.franchiseUserProductPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FranchiseUserProductPermissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseUserProductPermissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FranchiseUserProductPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUserProductPermissionFindFirstArgs} args - Arguments to find a FranchiseUserProductPermission
     * @example
     * // Get one FranchiseUserProductPermission
     * const franchiseUserProductPermission = await prisma.franchiseUserProductPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FranchiseUserProductPermissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseUserProductPermissionFindFirstArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FranchiseUserProductPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUserProductPermissionFindFirstOrThrowArgs} args - Arguments to find a FranchiseUserProductPermission
     * @example
     * // Get one FranchiseUserProductPermission
     * const franchiseUserProductPermission = await prisma.franchiseUserProductPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FranchiseUserProductPermissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseUserProductPermissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FranchiseUserProductPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUserProductPermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FranchiseUserProductPermissions
     * const franchiseUserProductPermissions = await prisma.franchiseUserProductPermission.findMany()
     * 
     * // Get first 10 FranchiseUserProductPermissions
     * const franchiseUserProductPermissions = await prisma.franchiseUserProductPermission.findMany({ take: 10 })
     * 
     * // Only select the `franchiseUserProductPermissionId`
     * const franchiseUserProductPermissionWithFranchiseUserProductPermissionIdOnly = await prisma.franchiseUserProductPermission.findMany({ select: { franchiseUserProductPermissionId: true } })
     * 
    **/
    findMany<T extends FranchiseUserProductPermissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseUserProductPermissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FranchiseUserProductPermission.
     * @param {FranchiseUserProductPermissionCreateArgs} args - Arguments to create a FranchiseUserProductPermission.
     * @example
     * // Create one FranchiseUserProductPermission
     * const FranchiseUserProductPermission = await prisma.franchiseUserProductPermission.create({
     *   data: {
     *     // ... data to create a FranchiseUserProductPermission
     *   }
     * })
     * 
    **/
    create<T extends FranchiseUserProductPermissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUserProductPermissionCreateArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a FranchiseUserProductPermission.
     * @param {FranchiseUserProductPermissionDeleteArgs} args - Arguments to delete one FranchiseUserProductPermission.
     * @example
     * // Delete one FranchiseUserProductPermission
     * const FranchiseUserProductPermission = await prisma.franchiseUserProductPermission.delete({
     *   where: {
     *     // ... filter to delete one FranchiseUserProductPermission
     *   }
     * })
     * 
    **/
    delete<T extends FranchiseUserProductPermissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUserProductPermissionDeleteArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FranchiseUserProductPermission.
     * @param {FranchiseUserProductPermissionUpdateArgs} args - Arguments to update one FranchiseUserProductPermission.
     * @example
     * // Update one FranchiseUserProductPermission
     * const franchiseUserProductPermission = await prisma.franchiseUserProductPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FranchiseUserProductPermissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUserProductPermissionUpdateArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FranchiseUserProductPermissions.
     * @param {FranchiseUserProductPermissionDeleteManyArgs} args - Arguments to filter FranchiseUserProductPermissions to delete.
     * @example
     * // Delete a few FranchiseUserProductPermissions
     * const { count } = await prisma.franchiseUserProductPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FranchiseUserProductPermissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FranchiseUserProductPermissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FranchiseUserProductPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUserProductPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FranchiseUserProductPermissions
     * const franchiseUserProductPermission = await prisma.franchiseUserProductPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FranchiseUserProductPermissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUserProductPermissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FranchiseUserProductPermission.
     * @param {FranchiseUserProductPermissionUpsertArgs} args - Arguments to update or create a FranchiseUserProductPermission.
     * @example
     * // Update or create a FranchiseUserProductPermission
     * const franchiseUserProductPermission = await prisma.franchiseUserProductPermission.upsert({
     *   create: {
     *     // ... data to create a FranchiseUserProductPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FranchiseUserProductPermission we want to update
     *   }
     * })
    **/
    upsert<T extends FranchiseUserProductPermissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FranchiseUserProductPermissionUpsertArgs<ExtArgs>>
    ): Prisma__FranchiseUserProductPermissionClient<$Result.GetResult<Prisma.$FranchiseUserProductPermissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FranchiseUserProductPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUserProductPermissionCountArgs} args - Arguments to filter FranchiseUserProductPermissions to count.
     * @example
     * // Count the number of FranchiseUserProductPermissions
     * const count = await prisma.franchiseUserProductPermission.count({
     *   where: {
     *     // ... the filter for the FranchiseUserProductPermissions we want to count
     *   }
     * })
    **/
    count<T extends FranchiseUserProductPermissionCountArgs>(
      args?: Subset<T, FranchiseUserProductPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FranchiseUserProductPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FranchiseUserProductPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUserProductPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FranchiseUserProductPermissionAggregateArgs>(args: Subset<T, FranchiseUserProductPermissionAggregateArgs>): Prisma.PrismaPromise<GetFranchiseUserProductPermissionAggregateType<T>>

    /**
     * Group by FranchiseUserProductPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUserProductPermissionGroupByArgs} args - Group by arguments.
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
      T extends FranchiseUserProductPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FranchiseUserProductPermissionGroupByArgs['orderBy'] }
        : { orderBy?: FranchiseUserProductPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FranchiseUserProductPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFranchiseUserProductPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FranchiseUserProductPermission model
   */
  readonly fields: FranchiseUserProductPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FranchiseUserProductPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FranchiseUserProductPermissionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    franchise<T extends FranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FranchiseDefaultArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    productPermission<T extends ProductPermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductPermissionDefaultArgs<ExtArgs>>): Prisma__ProductPermissionClient<$Result.GetResult<Prisma.$ProductPermissionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the FranchiseUserProductPermission model
   */ 
  interface FranchiseUserProductPermissionFieldRefs {
    readonly franchiseUserProductPermissionId: FieldRef<"FranchiseUserProductPermission", 'Int'>
    readonly franchiseId: FieldRef<"FranchiseUserProductPermission", 'String'>
    readonly userId: FieldRef<"FranchiseUserProductPermission", 'Int'>
    readonly productId: FieldRef<"FranchiseUserProductPermission", 'String'>
    readonly permissionId: FieldRef<"FranchiseUserProductPermission", 'String'>
    readonly permissionLevel: FieldRef<"FranchiseUserProductPermission", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FranchiseUserProductPermission findUnique
   */
  export type FranchiseUserProductPermissionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseUserProductPermission to fetch.
     */
    where: FranchiseUserProductPermissionWhereUniqueInput
  }


  /**
   * FranchiseUserProductPermission findUniqueOrThrow
   */
  export type FranchiseUserProductPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseUserProductPermission to fetch.
     */
    where: FranchiseUserProductPermissionWhereUniqueInput
  }


  /**
   * FranchiseUserProductPermission findFirst
   */
  export type FranchiseUserProductPermissionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseUserProductPermission to fetch.
     */
    where?: FranchiseUserProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseUserProductPermissions to fetch.
     */
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FranchiseUserProductPermissions.
     */
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseUserProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseUserProductPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FranchiseUserProductPermissions.
     */
    distinct?: FranchiseUserProductPermissionScalarFieldEnum | FranchiseUserProductPermissionScalarFieldEnum[]
  }


  /**
   * FranchiseUserProductPermission findFirstOrThrow
   */
  export type FranchiseUserProductPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseUserProductPermission to fetch.
     */
    where?: FranchiseUserProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseUserProductPermissions to fetch.
     */
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FranchiseUserProductPermissions.
     */
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseUserProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseUserProductPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FranchiseUserProductPermissions.
     */
    distinct?: FranchiseUserProductPermissionScalarFieldEnum | FranchiseUserProductPermissionScalarFieldEnum[]
  }


  /**
   * FranchiseUserProductPermission findMany
   */
  export type FranchiseUserProductPermissionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * Filter, which FranchiseUserProductPermissions to fetch.
     */
    where?: FranchiseUserProductPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FranchiseUserProductPermissions to fetch.
     */
    orderBy?: FranchiseUserProductPermissionOrderByWithRelationInput | FranchiseUserProductPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FranchiseUserProductPermissions.
     */
    cursor?: FranchiseUserProductPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FranchiseUserProductPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FranchiseUserProductPermissions.
     */
    skip?: number
    distinct?: FranchiseUserProductPermissionScalarFieldEnum | FranchiseUserProductPermissionScalarFieldEnum[]
  }


  /**
   * FranchiseUserProductPermission create
   */
  export type FranchiseUserProductPermissionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a FranchiseUserProductPermission.
     */
    data: XOR<FranchiseUserProductPermissionCreateInput, FranchiseUserProductPermissionUncheckedCreateInput>
  }


  /**
   * FranchiseUserProductPermission update
   */
  export type FranchiseUserProductPermissionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a FranchiseUserProductPermission.
     */
    data: XOR<FranchiseUserProductPermissionUpdateInput, FranchiseUserProductPermissionUncheckedUpdateInput>
    /**
     * Choose, which FranchiseUserProductPermission to update.
     */
    where: FranchiseUserProductPermissionWhereUniqueInput
  }


  /**
   * FranchiseUserProductPermission updateMany
   */
  export type FranchiseUserProductPermissionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FranchiseUserProductPermissions.
     */
    data: XOR<FranchiseUserProductPermissionUpdateManyMutationInput, FranchiseUserProductPermissionUncheckedUpdateManyInput>
    /**
     * Filter which FranchiseUserProductPermissions to update
     */
    where?: FranchiseUserProductPermissionWhereInput
  }


  /**
   * FranchiseUserProductPermission upsert
   */
  export type FranchiseUserProductPermissionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the FranchiseUserProductPermission to update in case it exists.
     */
    where: FranchiseUserProductPermissionWhereUniqueInput
    /**
     * In case the FranchiseUserProductPermission found by the `where` argument doesn't exist, create a new FranchiseUserProductPermission with this data.
     */
    create: XOR<FranchiseUserProductPermissionCreateInput, FranchiseUserProductPermissionUncheckedCreateInput>
    /**
     * In case the FranchiseUserProductPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FranchiseUserProductPermissionUpdateInput, FranchiseUserProductPermissionUncheckedUpdateInput>
  }


  /**
   * FranchiseUserProductPermission delete
   */
  export type FranchiseUserProductPermissionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
    /**
     * Filter which FranchiseUserProductPermission to delete.
     */
    where: FranchiseUserProductPermissionWhereUniqueInput
  }


  /**
   * FranchiseUserProductPermission deleteMany
   */
  export type FranchiseUserProductPermissionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FranchiseUserProductPermissions to delete
     */
    where?: FranchiseUserProductPermissionWhereInput
  }


  /**
   * FranchiseUserProductPermission without action
   */
  export type FranchiseUserProductPermissionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseUserProductPermission
     */
    select?: FranchiseUserProductPermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FranchiseUserProductPermissionInclude<ExtArgs> | null
  }



  /**
   * Model CableProductSettings
   */

  export type AggregateCableProductSettings = {
    _count: CableProductSettingsCountAggregateOutputType | null
    _min: CableProductSettingsMinAggregateOutputType | null
    _max: CableProductSettingsMaxAggregateOutputType | null
  }

  export type CableProductSettingsMinAggregateOutputType = {
    franchiseId: string | null
    upiId: string | null
    bankingName: string | null
    whatsAppReminderTemplate: string | null
    locationSettings: string | null
    filterSettings: string | null
    bsnlSettings: string | null
    oltSettings: string | null
    tactvSettings: string | null
    gtplSettings: string | null
    vkdigitalSettings: string | null
  }

  export type CableProductSettingsMaxAggregateOutputType = {
    franchiseId: string | null
    upiId: string | null
    bankingName: string | null
    whatsAppReminderTemplate: string | null
    locationSettings: string | null
    filterSettings: string | null
    bsnlSettings: string | null
    oltSettings: string | null
    tactvSettings: string | null
    gtplSettings: string | null
    vkdigitalSettings: string | null
  }

  export type CableProductSettingsCountAggregateOutputType = {
    franchiseId: number
    upiId: number
    bankingName: number
    whatsAppReminderTemplate: number
    locationSettings: number
    filterSettings: number
    bsnlSettings: number
    oltSettings: number
    tactvSettings: number
    gtplSettings: number
    vkdigitalSettings: number
    _all: number
  }


  export type CableProductSettingsMinAggregateInputType = {
    franchiseId?: true
    upiId?: true
    bankingName?: true
    whatsAppReminderTemplate?: true
    locationSettings?: true
    filterSettings?: true
    bsnlSettings?: true
    oltSettings?: true
    tactvSettings?: true
    gtplSettings?: true
    vkdigitalSettings?: true
  }

  export type CableProductSettingsMaxAggregateInputType = {
    franchiseId?: true
    upiId?: true
    bankingName?: true
    whatsAppReminderTemplate?: true
    locationSettings?: true
    filterSettings?: true
    bsnlSettings?: true
    oltSettings?: true
    tactvSettings?: true
    gtplSettings?: true
    vkdigitalSettings?: true
  }

  export type CableProductSettingsCountAggregateInputType = {
    franchiseId?: true
    upiId?: true
    bankingName?: true
    whatsAppReminderTemplate?: true
    locationSettings?: true
    filterSettings?: true
    bsnlSettings?: true
    oltSettings?: true
    tactvSettings?: true
    gtplSettings?: true
    vkdigitalSettings?: true
    _all?: true
  }

  export type CableProductSettingsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableProductSettings to aggregate.
     */
    where?: CableProductSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableProductSettings to fetch.
     */
    orderBy?: CableProductSettingsOrderByWithRelationInput | CableProductSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CableProductSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableProductSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableProductSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CableProductSettings
    **/
    _count?: true | CableProductSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CableProductSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CableProductSettingsMaxAggregateInputType
  }

  export type GetCableProductSettingsAggregateType<T extends CableProductSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateCableProductSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCableProductSettings[P]>
      : GetScalarType<T[P], AggregateCableProductSettings[P]>
  }




  export type CableProductSettingsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CableProductSettingsWhereInput
    orderBy?: CableProductSettingsOrderByWithAggregationInput | CableProductSettingsOrderByWithAggregationInput[]
    by: CableProductSettingsScalarFieldEnum[] | CableProductSettingsScalarFieldEnum
    having?: CableProductSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CableProductSettingsCountAggregateInputType | true
    _min?: CableProductSettingsMinAggregateInputType
    _max?: CableProductSettingsMaxAggregateInputType
  }

  export type CableProductSettingsGroupByOutputType = {
    franchiseId: string
    upiId: string | null
    bankingName: string | null
    whatsAppReminderTemplate: string
    locationSettings: string
    filterSettings: string
    bsnlSettings: string
    oltSettings: string
    tactvSettings: string
    gtplSettings: string
    vkdigitalSettings: string
    _count: CableProductSettingsCountAggregateOutputType | null
    _min: CableProductSettingsMinAggregateOutputType | null
    _max: CableProductSettingsMaxAggregateOutputType | null
  }

  type GetCableProductSettingsGroupByPayload<T extends CableProductSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CableProductSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CableProductSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CableProductSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], CableProductSettingsGroupByOutputType[P]>
        }
      >
    >


  export type CableProductSettingsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    franchiseId?: boolean
    upiId?: boolean
    bankingName?: boolean
    whatsAppReminderTemplate?: boolean
    locationSettings?: boolean
    filterSettings?: boolean
    bsnlSettings?: boolean
    oltSettings?: boolean
    tactvSettings?: boolean
    gtplSettings?: boolean
    vkdigitalSettings?: boolean
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cableProductSettings"]>

  export type CableProductSettingsSelectScalar = {
    franchiseId?: boolean
    upiId?: boolean
    bankingName?: boolean
    whatsAppReminderTemplate?: boolean
    locationSettings?: boolean
    filterSettings?: boolean
    bsnlSettings?: boolean
    oltSettings?: boolean
    tactvSettings?: boolean
    gtplSettings?: boolean
    vkdigitalSettings?: boolean
  }

  export type CableProductSettingsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    franchise?: boolean | FranchiseDefaultArgs<ExtArgs>
  }


  export type $CableProductSettingsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "CableProductSettings"
    objects: {
      franchise: Prisma.$FranchisePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      franchiseId: string
      upiId: string | null
      bankingName: string | null
      whatsAppReminderTemplate: string
      locationSettings: string
      filterSettings: string
      bsnlSettings: string
      oltSettings: string
      tactvSettings: string
      gtplSettings: string
      vkdigitalSettings: string
    }, ExtArgs["result"]["cableProductSettings"]>
    composites: {}
  }


  type CableProductSettingsGetPayload<S extends boolean | null | undefined | CableProductSettingsDefaultArgs> = $Result.GetResult<Prisma.$CableProductSettingsPayload, S>

  type CableProductSettingsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CableProductSettingsFindManyArgs, 'select' | 'include'> & {
      select?: CableProductSettingsCountAggregateInputType | true
    }

  export interface CableProductSettingsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CableProductSettings'], meta: { name: 'CableProductSettings' } }
    /**
     * Find zero or one CableProductSettings that matches the filter.
     * @param {CableProductSettingsFindUniqueArgs} args - Arguments to find a CableProductSettings
     * @example
     * // Get one CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CableProductSettingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CableProductSettingsFindUniqueArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CableProductSettings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CableProductSettingsFindUniqueOrThrowArgs} args - Arguments to find a CableProductSettings
     * @example
     * // Get one CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CableProductSettingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CableProductSettingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CableProductSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableProductSettingsFindFirstArgs} args - Arguments to find a CableProductSettings
     * @example
     * // Get one CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CableProductSettingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CableProductSettingsFindFirstArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CableProductSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableProductSettingsFindFirstOrThrowArgs} args - Arguments to find a CableProductSettings
     * @example
     * // Get one CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CableProductSettingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CableProductSettingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CableProductSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableProductSettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.findMany()
     * 
     * // Get first 10 CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.findMany({ take: 10 })
     * 
     * // Only select the `franchiseId`
     * const cableProductSettingsWithFranchiseIdOnly = await prisma.cableProductSettings.findMany({ select: { franchiseId: true } })
     * 
    **/
    findMany<T extends CableProductSettingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CableProductSettingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CableProductSettings.
     * @param {CableProductSettingsCreateArgs} args - Arguments to create a CableProductSettings.
     * @example
     * // Create one CableProductSettings
     * const CableProductSettings = await prisma.cableProductSettings.create({
     *   data: {
     *     // ... data to create a CableProductSettings
     *   }
     * })
     * 
    **/
    create<T extends CableProductSettingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CableProductSettingsCreateArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a CableProductSettings.
     * @param {CableProductSettingsDeleteArgs} args - Arguments to delete one CableProductSettings.
     * @example
     * // Delete one CableProductSettings
     * const CableProductSettings = await prisma.cableProductSettings.delete({
     *   where: {
     *     // ... filter to delete one CableProductSettings
     *   }
     * })
     * 
    **/
    delete<T extends CableProductSettingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CableProductSettingsDeleteArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CableProductSettings.
     * @param {CableProductSettingsUpdateArgs} args - Arguments to update one CableProductSettings.
     * @example
     * // Update one CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CableProductSettingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CableProductSettingsUpdateArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CableProductSettings.
     * @param {CableProductSettingsDeleteManyArgs} args - Arguments to filter CableProductSettings to delete.
     * @example
     * // Delete a few CableProductSettings
     * const { count } = await prisma.cableProductSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CableProductSettingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CableProductSettingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CableProductSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableProductSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CableProductSettingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CableProductSettingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CableProductSettings.
     * @param {CableProductSettingsUpsertArgs} args - Arguments to update or create a CableProductSettings.
     * @example
     * // Update or create a CableProductSettings
     * const cableProductSettings = await prisma.cableProductSettings.upsert({
     *   create: {
     *     // ... data to create a CableProductSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CableProductSettings we want to update
     *   }
     * })
    **/
    upsert<T extends CableProductSettingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CableProductSettingsUpsertArgs<ExtArgs>>
    ): Prisma__CableProductSettingsClient<$Result.GetResult<Prisma.$CableProductSettingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CableProductSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableProductSettingsCountArgs} args - Arguments to filter CableProductSettings to count.
     * @example
     * // Count the number of CableProductSettings
     * const count = await prisma.cableProductSettings.count({
     *   where: {
     *     // ... the filter for the CableProductSettings we want to count
     *   }
     * })
    **/
    count<T extends CableProductSettingsCountArgs>(
      args?: Subset<T, CableProductSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CableProductSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CableProductSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableProductSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CableProductSettingsAggregateArgs>(args: Subset<T, CableProductSettingsAggregateArgs>): Prisma.PrismaPromise<GetCableProductSettingsAggregateType<T>>

    /**
     * Group by CableProductSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CableProductSettingsGroupByArgs} args - Group by arguments.
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
      T extends CableProductSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CableProductSettingsGroupByArgs['orderBy'] }
        : { orderBy?: CableProductSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CableProductSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCableProductSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CableProductSettings model
   */
  readonly fields: CableProductSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CableProductSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CableProductSettingsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    franchise<T extends FranchiseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FranchiseDefaultArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the CableProductSettings model
   */ 
  interface CableProductSettingsFieldRefs {
    readonly franchiseId: FieldRef<"CableProductSettings", 'String'>
    readonly upiId: FieldRef<"CableProductSettings", 'String'>
    readonly bankingName: FieldRef<"CableProductSettings", 'String'>
    readonly whatsAppReminderTemplate: FieldRef<"CableProductSettings", 'String'>
    readonly locationSettings: FieldRef<"CableProductSettings", 'String'>
    readonly filterSettings: FieldRef<"CableProductSettings", 'String'>
    readonly bsnlSettings: FieldRef<"CableProductSettings", 'String'>
    readonly oltSettings: FieldRef<"CableProductSettings", 'String'>
    readonly tactvSettings: FieldRef<"CableProductSettings", 'String'>
    readonly gtplSettings: FieldRef<"CableProductSettings", 'String'>
    readonly vkdigitalSettings: FieldRef<"CableProductSettings", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CableProductSettings findUnique
   */
  export type CableProductSettingsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * Filter, which CableProductSettings to fetch.
     */
    where: CableProductSettingsWhereUniqueInput
  }


  /**
   * CableProductSettings findUniqueOrThrow
   */
  export type CableProductSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * Filter, which CableProductSettings to fetch.
     */
    where: CableProductSettingsWhereUniqueInput
  }


  /**
   * CableProductSettings findFirst
   */
  export type CableProductSettingsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * Filter, which CableProductSettings to fetch.
     */
    where?: CableProductSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableProductSettings to fetch.
     */
    orderBy?: CableProductSettingsOrderByWithRelationInput | CableProductSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableProductSettings.
     */
    cursor?: CableProductSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableProductSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableProductSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableProductSettings.
     */
    distinct?: CableProductSettingsScalarFieldEnum | CableProductSettingsScalarFieldEnum[]
  }


  /**
   * CableProductSettings findFirstOrThrow
   */
  export type CableProductSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * Filter, which CableProductSettings to fetch.
     */
    where?: CableProductSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableProductSettings to fetch.
     */
    orderBy?: CableProductSettingsOrderByWithRelationInput | CableProductSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CableProductSettings.
     */
    cursor?: CableProductSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableProductSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableProductSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CableProductSettings.
     */
    distinct?: CableProductSettingsScalarFieldEnum | CableProductSettingsScalarFieldEnum[]
  }


  /**
   * CableProductSettings findMany
   */
  export type CableProductSettingsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * Filter, which CableProductSettings to fetch.
     */
    where?: CableProductSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CableProductSettings to fetch.
     */
    orderBy?: CableProductSettingsOrderByWithRelationInput | CableProductSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CableProductSettings.
     */
    cursor?: CableProductSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CableProductSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CableProductSettings.
     */
    skip?: number
    distinct?: CableProductSettingsScalarFieldEnum | CableProductSettingsScalarFieldEnum[]
  }


  /**
   * CableProductSettings create
   */
  export type CableProductSettingsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a CableProductSettings.
     */
    data: XOR<CableProductSettingsCreateInput, CableProductSettingsUncheckedCreateInput>
  }


  /**
   * CableProductSettings update
   */
  export type CableProductSettingsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a CableProductSettings.
     */
    data: XOR<CableProductSettingsUpdateInput, CableProductSettingsUncheckedUpdateInput>
    /**
     * Choose, which CableProductSettings to update.
     */
    where: CableProductSettingsWhereUniqueInput
  }


  /**
   * CableProductSettings updateMany
   */
  export type CableProductSettingsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CableProductSettings.
     */
    data: XOR<CableProductSettingsUpdateManyMutationInput, CableProductSettingsUncheckedUpdateManyInput>
    /**
     * Filter which CableProductSettings to update
     */
    where?: CableProductSettingsWhereInput
  }


  /**
   * CableProductSettings upsert
   */
  export type CableProductSettingsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the CableProductSettings to update in case it exists.
     */
    where: CableProductSettingsWhereUniqueInput
    /**
     * In case the CableProductSettings found by the `where` argument doesn't exist, create a new CableProductSettings with this data.
     */
    create: XOR<CableProductSettingsCreateInput, CableProductSettingsUncheckedCreateInput>
    /**
     * In case the CableProductSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CableProductSettingsUpdateInput, CableProductSettingsUncheckedUpdateInput>
  }


  /**
   * CableProductSettings delete
   */
  export type CableProductSettingsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
    /**
     * Filter which CableProductSettings to delete.
     */
    where: CableProductSettingsWhereUniqueInput
  }


  /**
   * CableProductSettings deleteMany
   */
  export type CableProductSettingsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CableProductSettings to delete
     */
    where?: CableProductSettingsWhereInput
  }


  /**
   * CableProductSettings without action
   */
  export type CableProductSettingsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CableProductSettings
     */
    select?: CableProductSettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CableProductSettingsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FranchiseScalarFieldEnum: {
    franchiseId: 'franchiseId',
    franchiseName: 'franchiseName',
    franchiseCode: 'franchiseCode',
    onboardingDate: 'onboardingDate',
    enabled: 'enabled'
  };

  export type FranchiseScalarFieldEnum = (typeof FranchiseScalarFieldEnum)[keyof typeof FranchiseScalarFieldEnum]


  export const FranchiseRelationScalarFieldEnum: {
    id: 'id',
    parentFranchiseId: 'parentFranchiseId',
    childFranchiseId: 'childFranchiseId',
    enabled: 'enabled'
  };

  export type FranchiseRelationScalarFieldEnum = (typeof FranchiseRelationScalarFieldEnum)[keyof typeof FranchiseRelationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    mobile: 'mobile',
    email: 'email',
    password: 'password',
    webAuthToken: 'webAuthToken',
    webAuthTime: 'webAuthTime',
    appAuthToken: 'appAuthToken',
    appAuthTime: 'appAuthTime',
    appAuthVersion: 'appAuthVersion',
    isSystemUser: 'isSystemUser',
    enabled: 'enabled',
    franchiseId: 'franchiseId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productId: 'productId',
    productName: 'productName',
    productDescription: 'productDescription',
    enabled: 'enabled'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FranchiseProductScalarFieldEnum: {
    franchiseProductId: 'franchiseProductId',
    franchiseId: 'franchiseId',
    productId: 'productId',
    enabled: 'enabled'
  };

  export type FranchiseProductScalarFieldEnum = (typeof FranchiseProductScalarFieldEnum)[keyof typeof FranchiseProductScalarFieldEnum]


  export const ProductPermissionScalarFieldEnum: {
    productPermissionId: 'productPermissionId',
    productId: 'productId',
    permissionId: 'permissionId',
    permissionName: 'permissionName',
    permissionDescription: 'permissionDescription'
  };

  export type ProductPermissionScalarFieldEnum = (typeof ProductPermissionScalarFieldEnum)[keyof typeof ProductPermissionScalarFieldEnum]


  export const FranchiseUserProductPermissionScalarFieldEnum: {
    franchiseUserProductPermissionId: 'franchiseUserProductPermissionId',
    franchiseId: 'franchiseId',
    userId: 'userId',
    productId: 'productId',
    permissionId: 'permissionId',
    permissionLevel: 'permissionLevel'
  };

  export type FranchiseUserProductPermissionScalarFieldEnum = (typeof FranchiseUserProductPermissionScalarFieldEnum)[keyof typeof FranchiseUserProductPermissionScalarFieldEnum]


  export const CableProductSettingsScalarFieldEnum: {
    franchiseId: 'franchiseId',
    upiId: 'upiId',
    bankingName: 'bankingName',
    whatsAppReminderTemplate: 'whatsAppReminderTemplate',
    locationSettings: 'locationSettings',
    filterSettings: 'filterSettings',
    bsnlSettings: 'bsnlSettings',
    oltSettings: 'oltSettings',
    tactvSettings: 'tactvSettings',
    gtplSettings: 'gtplSettings',
    vkdigitalSettings: 'vkdigitalSettings'
  };

  export type CableProductSettingsScalarFieldEnum = (typeof CableProductSettingsScalarFieldEnum)[keyof typeof CableProductSettingsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FranchiseWhereInput = {
    AND?: FranchiseWhereInput | FranchiseWhereInput[]
    OR?: FranchiseWhereInput[]
    NOT?: FranchiseWhereInput | FranchiseWhereInput[]
    franchiseId?: StringFilter<"Franchise"> | string
    franchiseName?: StringFilter<"Franchise"> | string
    franchiseCode?: StringFilter<"Franchise"> | string
    onboardingDate?: DateTimeFilter<"Franchise"> | Date | string
    enabled?: BoolNullableFilter<"Franchise"> | boolean | null
    user?: UserListRelationFilter
    franchiseProduct?: FranchiseProductListRelationFilter
    CableProductSettings?: CableProductSettingsListRelationFilter
    FranchiseUserProductPermission?: FranchiseUserProductPermissionListRelationFilter
    parentFranchiseRelation?: FranchiseRelationListRelationFilter
    childFranchiseRelation?: FranchiseRelationListRelationFilter
  }

  export type FranchiseOrderByWithRelationInput = {
    franchiseId?: SortOrder
    franchiseName?: SortOrder
    franchiseCode?: SortOrder
    onboardingDate?: SortOrder
    enabled?: SortOrderInput | SortOrder
    user?: UserOrderByRelationAggregateInput
    franchiseProduct?: FranchiseProductOrderByRelationAggregateInput
    CableProductSettings?: CableProductSettingsOrderByRelationAggregateInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionOrderByRelationAggregateInput
    parentFranchiseRelation?: FranchiseRelationOrderByRelationAggregateInput
    childFranchiseRelation?: FranchiseRelationOrderByRelationAggregateInput
  }

  export type FranchiseWhereUniqueInput = Prisma.AtLeast<{
    franchiseId?: string
    franchiseCode?: string
    AND?: FranchiseWhereInput | FranchiseWhereInput[]
    OR?: FranchiseWhereInput[]
    NOT?: FranchiseWhereInput | FranchiseWhereInput[]
    franchiseName?: StringFilter<"Franchise"> | string
    onboardingDate?: DateTimeFilter<"Franchise"> | Date | string
    enabled?: BoolNullableFilter<"Franchise"> | boolean | null
    user?: UserListRelationFilter
    franchiseProduct?: FranchiseProductListRelationFilter
    CableProductSettings?: CableProductSettingsListRelationFilter
    FranchiseUserProductPermission?: FranchiseUserProductPermissionListRelationFilter
    parentFranchiseRelation?: FranchiseRelationListRelationFilter
    childFranchiseRelation?: FranchiseRelationListRelationFilter
  }, "franchiseId" | "franchiseCode">

  export type FranchiseOrderByWithAggregationInput = {
    franchiseId?: SortOrder
    franchiseName?: SortOrder
    franchiseCode?: SortOrder
    onboardingDate?: SortOrder
    enabled?: SortOrderInput | SortOrder
    _count?: FranchiseCountOrderByAggregateInput
    _max?: FranchiseMaxOrderByAggregateInput
    _min?: FranchiseMinOrderByAggregateInput
  }

  export type FranchiseScalarWhereWithAggregatesInput = {
    AND?: FranchiseScalarWhereWithAggregatesInput | FranchiseScalarWhereWithAggregatesInput[]
    OR?: FranchiseScalarWhereWithAggregatesInput[]
    NOT?: FranchiseScalarWhereWithAggregatesInput | FranchiseScalarWhereWithAggregatesInput[]
    franchiseId?: StringWithAggregatesFilter<"Franchise"> | string
    franchiseName?: StringWithAggregatesFilter<"Franchise"> | string
    franchiseCode?: StringWithAggregatesFilter<"Franchise"> | string
    onboardingDate?: DateTimeWithAggregatesFilter<"Franchise"> | Date | string
    enabled?: BoolNullableWithAggregatesFilter<"Franchise"> | boolean | null
  }

  export type FranchiseRelationWhereInput = {
    AND?: FranchiseRelationWhereInput | FranchiseRelationWhereInput[]
    OR?: FranchiseRelationWhereInput[]
    NOT?: FranchiseRelationWhereInput | FranchiseRelationWhereInput[]
    id?: IntFilter<"FranchiseRelation"> | number
    parentFranchiseId?: StringFilter<"FranchiseRelation"> | string
    childFranchiseId?: StringFilter<"FranchiseRelation"> | string
    enabled?: BoolNullableFilter<"FranchiseRelation"> | boolean | null
    parentFranchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    childFranchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
  }

  export type FranchiseRelationOrderByWithRelationInput = {
    id?: SortOrder
    parentFranchiseId?: SortOrder
    childFranchiseId?: SortOrder
    enabled?: SortOrderInput | SortOrder
    parentFranchise?: FranchiseOrderByWithRelationInput
    childFranchise?: FranchiseOrderByWithRelationInput
  }

  export type FranchiseRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    parentFranchiseId_childFranchiseId?: FranchiseRelationParentFranchiseIdChildFranchiseIdCompoundUniqueInput
    AND?: FranchiseRelationWhereInput | FranchiseRelationWhereInput[]
    OR?: FranchiseRelationWhereInput[]
    NOT?: FranchiseRelationWhereInput | FranchiseRelationWhereInput[]
    parentFranchiseId?: StringFilter<"FranchiseRelation"> | string
    childFranchiseId?: StringFilter<"FranchiseRelation"> | string
    enabled?: BoolNullableFilter<"FranchiseRelation"> | boolean | null
    parentFranchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    childFranchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
  }, "id" | "parentFranchiseId_childFranchiseId">

  export type FranchiseRelationOrderByWithAggregationInput = {
    id?: SortOrder
    parentFranchiseId?: SortOrder
    childFranchiseId?: SortOrder
    enabled?: SortOrderInput | SortOrder
    _count?: FranchiseRelationCountOrderByAggregateInput
    _avg?: FranchiseRelationAvgOrderByAggregateInput
    _max?: FranchiseRelationMaxOrderByAggregateInput
    _min?: FranchiseRelationMinOrderByAggregateInput
    _sum?: FranchiseRelationSumOrderByAggregateInput
  }

  export type FranchiseRelationScalarWhereWithAggregatesInput = {
    AND?: FranchiseRelationScalarWhereWithAggregatesInput | FranchiseRelationScalarWhereWithAggregatesInput[]
    OR?: FranchiseRelationScalarWhereWithAggregatesInput[]
    NOT?: FranchiseRelationScalarWhereWithAggregatesInput | FranchiseRelationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FranchiseRelation"> | number
    parentFranchiseId?: StringWithAggregatesFilter<"FranchiseRelation"> | string
    childFranchiseId?: StringWithAggregatesFilter<"FranchiseRelation"> | string
    enabled?: BoolNullableWithAggregatesFilter<"FranchiseRelation"> | boolean | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    webAuthToken?: StringFilter<"User"> | string
    webAuthTime?: DateTimeNullableFilter<"User"> | Date | string | null
    appAuthToken?: StringFilter<"User"> | string
    appAuthTime?: DateTimeNullableFilter<"User"> | Date | string | null
    appAuthVersion?: StringFilter<"User"> | string
    isSystemUser?: BoolNullableFilter<"User"> | boolean | null
    enabled?: BoolNullableFilter<"User"> | boolean | null
    franchiseId?: StringFilter<"User"> | string
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    FranchiseUserProductPermission?: FranchiseUserProductPermissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    webAuthToken?: SortOrder
    webAuthTime?: SortOrderInput | SortOrder
    appAuthToken?: SortOrder
    appAuthTime?: SortOrderInput | SortOrder
    appAuthVersion?: SortOrder
    isSystemUser?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    franchiseId?: SortOrder
    franchise?: FranchiseOrderByWithRelationInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    webAuthToken?: StringFilter<"User"> | string
    webAuthTime?: DateTimeNullableFilter<"User"> | Date | string | null
    appAuthToken?: StringFilter<"User"> | string
    appAuthTime?: DateTimeNullableFilter<"User"> | Date | string | null
    appAuthVersion?: StringFilter<"User"> | string
    isSystemUser?: BoolNullableFilter<"User"> | boolean | null
    enabled?: BoolNullableFilter<"User"> | boolean | null
    franchiseId?: StringFilter<"User"> | string
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    FranchiseUserProductPermission?: FranchiseUserProductPermissionListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    webAuthToken?: SortOrder
    webAuthTime?: SortOrderInput | SortOrder
    appAuthToken?: SortOrder
    appAuthTime?: SortOrderInput | SortOrder
    appAuthVersion?: SortOrder
    isSystemUser?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    franchiseId?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    webAuthToken?: StringWithAggregatesFilter<"User"> | string
    webAuthTime?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    appAuthToken?: StringWithAggregatesFilter<"User"> | string
    appAuthTime?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    appAuthVersion?: StringWithAggregatesFilter<"User"> | string
    isSystemUser?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    enabled?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    franchiseId?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productId?: StringFilter<"Product"> | string
    productName?: StringFilter<"Product"> | string
    productDescription?: StringNullableFilter<"Product"> | string | null
    enabled?: BoolNullableFilter<"Product"> | boolean | null
    franchiseProduct?: FranchiseProductListRelationFilter
    productPermission?: ProductPermissionListRelationFilter
    userProductPermission?: FranchiseUserProductPermissionListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    productId?: SortOrder
    productName?: SortOrder
    productDescription?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    franchiseProduct?: FranchiseProductOrderByRelationAggregateInput
    productPermission?: ProductPermissionOrderByRelationAggregateInput
    userProductPermission?: FranchiseUserProductPermissionOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    productId?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productName?: StringFilter<"Product"> | string
    productDescription?: StringNullableFilter<"Product"> | string | null
    enabled?: BoolNullableFilter<"Product"> | boolean | null
    franchiseProduct?: FranchiseProductListRelationFilter
    productPermission?: ProductPermissionListRelationFilter
    userProductPermission?: FranchiseUserProductPermissionListRelationFilter
  }, "productId">

  export type ProductOrderByWithAggregationInput = {
    productId?: SortOrder
    productName?: SortOrder
    productDescription?: SortOrderInput | SortOrder
    enabled?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    productId?: StringWithAggregatesFilter<"Product"> | string
    productName?: StringWithAggregatesFilter<"Product"> | string
    productDescription?: StringNullableWithAggregatesFilter<"Product"> | string | null
    enabled?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
  }

  export type FranchiseProductWhereInput = {
    AND?: FranchiseProductWhereInput | FranchiseProductWhereInput[]
    OR?: FranchiseProductWhereInput[]
    NOT?: FranchiseProductWhereInput | FranchiseProductWhereInput[]
    franchiseProductId?: IntFilter<"FranchiseProduct"> | number
    franchiseId?: StringFilter<"FranchiseProduct"> | string
    productId?: StringFilter<"FranchiseProduct"> | string
    enabled?: BoolNullableFilter<"FranchiseProduct"> | boolean | null
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type FranchiseProductOrderByWithRelationInput = {
    franchiseProductId?: SortOrder
    franchiseId?: SortOrder
    productId?: SortOrder
    enabled?: SortOrderInput | SortOrder
    franchise?: FranchiseOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type FranchiseProductWhereUniqueInput = Prisma.AtLeast<{
    franchiseProductId?: number
    franchiseId_productId?: FranchiseProductFranchiseIdProductIdCompoundUniqueInput
    AND?: FranchiseProductWhereInput | FranchiseProductWhereInput[]
    OR?: FranchiseProductWhereInput[]
    NOT?: FranchiseProductWhereInput | FranchiseProductWhereInput[]
    franchiseId?: StringFilter<"FranchiseProduct"> | string
    productId?: StringFilter<"FranchiseProduct"> | string
    enabled?: BoolNullableFilter<"FranchiseProduct"> | boolean | null
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "franchiseProductId" | "franchiseId_productId">

  export type FranchiseProductOrderByWithAggregationInput = {
    franchiseProductId?: SortOrder
    franchiseId?: SortOrder
    productId?: SortOrder
    enabled?: SortOrderInput | SortOrder
    _count?: FranchiseProductCountOrderByAggregateInput
    _avg?: FranchiseProductAvgOrderByAggregateInput
    _max?: FranchiseProductMaxOrderByAggregateInput
    _min?: FranchiseProductMinOrderByAggregateInput
    _sum?: FranchiseProductSumOrderByAggregateInput
  }

  export type FranchiseProductScalarWhereWithAggregatesInput = {
    AND?: FranchiseProductScalarWhereWithAggregatesInput | FranchiseProductScalarWhereWithAggregatesInput[]
    OR?: FranchiseProductScalarWhereWithAggregatesInput[]
    NOT?: FranchiseProductScalarWhereWithAggregatesInput | FranchiseProductScalarWhereWithAggregatesInput[]
    franchiseProductId?: IntWithAggregatesFilter<"FranchiseProduct"> | number
    franchiseId?: StringWithAggregatesFilter<"FranchiseProduct"> | string
    productId?: StringWithAggregatesFilter<"FranchiseProduct"> | string
    enabled?: BoolNullableWithAggregatesFilter<"FranchiseProduct"> | boolean | null
  }

  export type ProductPermissionWhereInput = {
    AND?: ProductPermissionWhereInput | ProductPermissionWhereInput[]
    OR?: ProductPermissionWhereInput[]
    NOT?: ProductPermissionWhereInput | ProductPermissionWhereInput[]
    productPermissionId?: IntFilter<"ProductPermission"> | number
    productId?: StringFilter<"ProductPermission"> | string
    permissionId?: StringFilter<"ProductPermission"> | string
    permissionName?: StringFilter<"ProductPermission"> | string
    permissionDescription?: StringFilter<"ProductPermission"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    userProductPermission?: FranchiseUserProductPermissionListRelationFilter
  }

  export type ProductPermissionOrderByWithRelationInput = {
    productPermissionId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionName?: SortOrder
    permissionDescription?: SortOrder
    product?: ProductOrderByWithRelationInput
    userProductPermission?: FranchiseUserProductPermissionOrderByRelationAggregateInput
  }

  export type ProductPermissionWhereUniqueInput = Prisma.AtLeast<{
    productPermissionId?: number
    productId_permissionId?: ProductPermissionProductIdPermissionIdCompoundUniqueInput
    AND?: ProductPermissionWhereInput | ProductPermissionWhereInput[]
    OR?: ProductPermissionWhereInput[]
    NOT?: ProductPermissionWhereInput | ProductPermissionWhereInput[]
    productId?: StringFilter<"ProductPermission"> | string
    permissionId?: StringFilter<"ProductPermission"> | string
    permissionName?: StringFilter<"ProductPermission"> | string
    permissionDescription?: StringFilter<"ProductPermission"> | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    userProductPermission?: FranchiseUserProductPermissionListRelationFilter
  }, "productPermissionId" | "productId_permissionId">

  export type ProductPermissionOrderByWithAggregationInput = {
    productPermissionId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionName?: SortOrder
    permissionDescription?: SortOrder
    _count?: ProductPermissionCountOrderByAggregateInput
    _avg?: ProductPermissionAvgOrderByAggregateInput
    _max?: ProductPermissionMaxOrderByAggregateInput
    _min?: ProductPermissionMinOrderByAggregateInput
    _sum?: ProductPermissionSumOrderByAggregateInput
  }

  export type ProductPermissionScalarWhereWithAggregatesInput = {
    AND?: ProductPermissionScalarWhereWithAggregatesInput | ProductPermissionScalarWhereWithAggregatesInput[]
    OR?: ProductPermissionScalarWhereWithAggregatesInput[]
    NOT?: ProductPermissionScalarWhereWithAggregatesInput | ProductPermissionScalarWhereWithAggregatesInput[]
    productPermissionId?: IntWithAggregatesFilter<"ProductPermission"> | number
    productId?: StringWithAggregatesFilter<"ProductPermission"> | string
    permissionId?: StringWithAggregatesFilter<"ProductPermission"> | string
    permissionName?: StringWithAggregatesFilter<"ProductPermission"> | string
    permissionDescription?: StringWithAggregatesFilter<"ProductPermission"> | string
  }

  export type FranchiseUserProductPermissionWhereInput = {
    AND?: FranchiseUserProductPermissionWhereInput | FranchiseUserProductPermissionWhereInput[]
    OR?: FranchiseUserProductPermissionWhereInput[]
    NOT?: FranchiseUserProductPermissionWhereInput | FranchiseUserProductPermissionWhereInput[]
    franchiseUserProductPermissionId?: IntFilter<"FranchiseUserProductPermission"> | number
    franchiseId?: StringFilter<"FranchiseUserProductPermission"> | string
    userId?: IntFilter<"FranchiseUserProductPermission"> | number
    productId?: StringFilter<"FranchiseUserProductPermission"> | string
    permissionId?: StringFilter<"FranchiseUserProductPermission"> | string
    permissionLevel?: IntFilter<"FranchiseUserProductPermission"> | number
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    productPermission?: XOR<ProductPermissionRelationFilter, ProductPermissionWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type FranchiseUserProductPermissionOrderByWithRelationInput = {
    franchiseUserProductPermissionId?: SortOrder
    franchiseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionLevel?: SortOrder
    franchise?: FranchiseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    productPermission?: ProductPermissionOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type FranchiseUserProductPermissionWhereUniqueInput = Prisma.AtLeast<{
    franchiseUserProductPermissionId?: number
    franchiseId_productId_userId_permissionId?: FranchiseUserProductPermissionFranchiseIdProductIdUserIdPermissionIdCompoundUniqueInput
    AND?: FranchiseUserProductPermissionWhereInput | FranchiseUserProductPermissionWhereInput[]
    OR?: FranchiseUserProductPermissionWhereInput[]
    NOT?: FranchiseUserProductPermissionWhereInput | FranchiseUserProductPermissionWhereInput[]
    franchiseId?: StringFilter<"FranchiseUserProductPermission"> | string
    userId?: IntFilter<"FranchiseUserProductPermission"> | number
    productId?: StringFilter<"FranchiseUserProductPermission"> | string
    permissionId?: StringFilter<"FranchiseUserProductPermission"> | string
    permissionLevel?: IntFilter<"FranchiseUserProductPermission"> | number
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    productPermission?: XOR<ProductPermissionRelationFilter, ProductPermissionWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "franchiseUserProductPermissionId" | "franchiseId_productId_userId_permissionId">

  export type FranchiseUserProductPermissionOrderByWithAggregationInput = {
    franchiseUserProductPermissionId?: SortOrder
    franchiseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionLevel?: SortOrder
    _count?: FranchiseUserProductPermissionCountOrderByAggregateInput
    _avg?: FranchiseUserProductPermissionAvgOrderByAggregateInput
    _max?: FranchiseUserProductPermissionMaxOrderByAggregateInput
    _min?: FranchiseUserProductPermissionMinOrderByAggregateInput
    _sum?: FranchiseUserProductPermissionSumOrderByAggregateInput
  }

  export type FranchiseUserProductPermissionScalarWhereWithAggregatesInput = {
    AND?: FranchiseUserProductPermissionScalarWhereWithAggregatesInput | FranchiseUserProductPermissionScalarWhereWithAggregatesInput[]
    OR?: FranchiseUserProductPermissionScalarWhereWithAggregatesInput[]
    NOT?: FranchiseUserProductPermissionScalarWhereWithAggregatesInput | FranchiseUserProductPermissionScalarWhereWithAggregatesInput[]
    franchiseUserProductPermissionId?: IntWithAggregatesFilter<"FranchiseUserProductPermission"> | number
    franchiseId?: StringWithAggregatesFilter<"FranchiseUserProductPermission"> | string
    userId?: IntWithAggregatesFilter<"FranchiseUserProductPermission"> | number
    productId?: StringWithAggregatesFilter<"FranchiseUserProductPermission"> | string
    permissionId?: StringWithAggregatesFilter<"FranchiseUserProductPermission"> | string
    permissionLevel?: IntWithAggregatesFilter<"FranchiseUserProductPermission"> | number
  }

  export type CableProductSettingsWhereInput = {
    AND?: CableProductSettingsWhereInput | CableProductSettingsWhereInput[]
    OR?: CableProductSettingsWhereInput[]
    NOT?: CableProductSettingsWhereInput | CableProductSettingsWhereInput[]
    franchiseId?: StringFilter<"CableProductSettings"> | string
    upiId?: StringNullableFilter<"CableProductSettings"> | string | null
    bankingName?: StringNullableFilter<"CableProductSettings"> | string | null
    whatsAppReminderTemplate?: StringFilter<"CableProductSettings"> | string
    locationSettings?: StringFilter<"CableProductSettings"> | string
    filterSettings?: StringFilter<"CableProductSettings"> | string
    bsnlSettings?: StringFilter<"CableProductSettings"> | string
    oltSettings?: StringFilter<"CableProductSettings"> | string
    tactvSettings?: StringFilter<"CableProductSettings"> | string
    gtplSettings?: StringFilter<"CableProductSettings"> | string
    vkdigitalSettings?: StringFilter<"CableProductSettings"> | string
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
  }

  export type CableProductSettingsOrderByWithRelationInput = {
    franchiseId?: SortOrder
    upiId?: SortOrderInput | SortOrder
    bankingName?: SortOrderInput | SortOrder
    whatsAppReminderTemplate?: SortOrder
    locationSettings?: SortOrder
    filterSettings?: SortOrder
    bsnlSettings?: SortOrder
    oltSettings?: SortOrder
    tactvSettings?: SortOrder
    gtplSettings?: SortOrder
    vkdigitalSettings?: SortOrder
    franchise?: FranchiseOrderByWithRelationInput
  }

  export type CableProductSettingsWhereUniqueInput = Prisma.AtLeast<{
    franchiseId?: string
    AND?: CableProductSettingsWhereInput | CableProductSettingsWhereInput[]
    OR?: CableProductSettingsWhereInput[]
    NOT?: CableProductSettingsWhereInput | CableProductSettingsWhereInput[]
    upiId?: StringNullableFilter<"CableProductSettings"> | string | null
    bankingName?: StringNullableFilter<"CableProductSettings"> | string | null
    whatsAppReminderTemplate?: StringFilter<"CableProductSettings"> | string
    locationSettings?: StringFilter<"CableProductSettings"> | string
    filterSettings?: StringFilter<"CableProductSettings"> | string
    bsnlSettings?: StringFilter<"CableProductSettings"> | string
    oltSettings?: StringFilter<"CableProductSettings"> | string
    tactvSettings?: StringFilter<"CableProductSettings"> | string
    gtplSettings?: StringFilter<"CableProductSettings"> | string
    vkdigitalSettings?: StringFilter<"CableProductSettings"> | string
    franchise?: XOR<FranchiseRelationFilter, FranchiseWhereInput>
  }, "franchiseId">

  export type CableProductSettingsOrderByWithAggregationInput = {
    franchiseId?: SortOrder
    upiId?: SortOrderInput | SortOrder
    bankingName?: SortOrderInput | SortOrder
    whatsAppReminderTemplate?: SortOrder
    locationSettings?: SortOrder
    filterSettings?: SortOrder
    bsnlSettings?: SortOrder
    oltSettings?: SortOrder
    tactvSettings?: SortOrder
    gtplSettings?: SortOrder
    vkdigitalSettings?: SortOrder
    _count?: CableProductSettingsCountOrderByAggregateInput
    _max?: CableProductSettingsMaxOrderByAggregateInput
    _min?: CableProductSettingsMinOrderByAggregateInput
  }

  export type CableProductSettingsScalarWhereWithAggregatesInput = {
    AND?: CableProductSettingsScalarWhereWithAggregatesInput | CableProductSettingsScalarWhereWithAggregatesInput[]
    OR?: CableProductSettingsScalarWhereWithAggregatesInput[]
    NOT?: CableProductSettingsScalarWhereWithAggregatesInput | CableProductSettingsScalarWhereWithAggregatesInput[]
    franchiseId?: StringWithAggregatesFilter<"CableProductSettings"> | string
    upiId?: StringNullableWithAggregatesFilter<"CableProductSettings"> | string | null
    bankingName?: StringNullableWithAggregatesFilter<"CableProductSettings"> | string | null
    whatsAppReminderTemplate?: StringWithAggregatesFilter<"CableProductSettings"> | string
    locationSettings?: StringWithAggregatesFilter<"CableProductSettings"> | string
    filterSettings?: StringWithAggregatesFilter<"CableProductSettings"> | string
    bsnlSettings?: StringWithAggregatesFilter<"CableProductSettings"> | string
    oltSettings?: StringWithAggregatesFilter<"CableProductSettings"> | string
    tactvSettings?: StringWithAggregatesFilter<"CableProductSettings"> | string
    gtplSettings?: StringWithAggregatesFilter<"CableProductSettings"> | string
    vkdigitalSettings?: StringWithAggregatesFilter<"CableProductSettings"> | string
  }

  export type FranchiseCreateInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseUncheckedCreateInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserUncheckedCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsUncheckedCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseUpdateInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUncheckedUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUncheckedUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUpdateManyMutationInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseUncheckedUpdateManyInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseRelationCreateInput = {
    enabled?: boolean | null
    parentFranchise: FranchiseCreateNestedOneWithoutParentFranchiseRelationInput
    childFranchise: FranchiseCreateNestedOneWithoutChildFranchiseRelationInput
  }

  export type FranchiseRelationUncheckedCreateInput = {
    id?: number
    parentFranchiseId: string
    childFranchiseId: string
    enabled?: boolean | null
  }

  export type FranchiseRelationUpdateInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentFranchise?: FranchiseUpdateOneRequiredWithoutParentFranchiseRelationNestedInput
    childFranchise?: FranchiseUpdateOneRequiredWithoutChildFranchiseRelationNestedInput
  }

  export type FranchiseRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentFranchiseId?: StringFieldUpdateOperationsInput | string
    childFranchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseRelationUpdateManyMutationInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentFranchiseId?: StringFieldUpdateOperationsInput | string
    childFranchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserCreateInput = {
    userId: string
    name: string
    mobile?: string
    email?: string
    password: string
    webAuthToken?: string
    webAuthTime?: Date | string | null
    appAuthToken?: string
    appAuthTime?: Date | string | null
    appAuthVersion?: string
    isSystemUser?: boolean | null
    enabled?: boolean | null
    franchise: FranchiseCreateNestedOneWithoutUserInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    mobile?: string
    email?: string
    password: string
    webAuthToken?: string
    webAuthTime?: Date | string | null
    appAuthToken?: string
    appAuthTime?: Date | string | null
    appAuthVersion?: string
    isSystemUser?: boolean | null
    enabled?: boolean | null
    franchiseId: string
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchise?: FranchiseUpdateOneRequiredWithoutUserNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseId?: StringFieldUpdateOperationsInput | string
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutProductInput
    productPermission?: ProductPermissionCreateNestedManyWithoutProductInput
    userProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutProductInput
    productPermission?: ProductPermissionUncheckedCreateNestedManyWithoutProductInput
    userProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUpdateManyWithoutProductNestedInput
    productPermission?: ProductPermissionUpdateManyWithoutProductNestedInput
    userProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutProductNestedInput
    productPermission?: ProductPermissionUncheckedUpdateManyWithoutProductNestedInput
    userProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUpdateManyMutationInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductUncheckedUpdateManyInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseProductCreateInput = {
    enabled?: boolean | null
    franchise: FranchiseCreateNestedOneWithoutFranchiseProductInput
    product: ProductCreateNestedOneWithoutFranchiseProductInput
  }

  export type FranchiseProductUncheckedCreateInput = {
    franchiseProductId?: number
    franchiseId: string
    productId: string
    enabled?: boolean | null
  }

  export type FranchiseProductUpdateInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchise?: FranchiseUpdateOneRequiredWithoutFranchiseProductNestedInput
    product?: ProductUpdateOneRequiredWithoutFranchiseProductNestedInput
  }

  export type FranchiseProductUncheckedUpdateInput = {
    franchiseProductId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseProductUpdateManyMutationInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseProductUncheckedUpdateManyInput = {
    franchiseProductId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductPermissionCreateInput = {
    permissionId: string
    permissionName?: string
    permissionDescription?: string
    product: ProductCreateNestedOneWithoutProductPermissionInput
    userProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutProductPermissionInput
  }

  export type ProductPermissionUncheckedCreateInput = {
    productPermissionId?: number
    productId: string
    permissionId: string
    permissionName?: string
    permissionDescription?: string
    userProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutProductPermissionInput
  }

  export type ProductPermissionUpdateInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutProductPermissionNestedInput
    userProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutProductPermissionNestedInput
  }

  export type ProductPermissionUncheckedUpdateInput = {
    productPermissionId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
    userProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductPermissionNestedInput
  }

  export type ProductPermissionUpdateManyMutationInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPermissionUncheckedUpdateManyInput = {
    productPermissionId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type FranchiseUserProductPermissionCreateInput = {
    permissionLevel?: number
    franchise: FranchiseCreateNestedOneWithoutFranchiseUserProductPermissionInput
    user: UserCreateNestedOneWithoutFranchiseUserProductPermissionInput
    productPermission: ProductPermissionCreateNestedOneWithoutUserProductPermissionInput
    product: ProductCreateNestedOneWithoutUserProductPermissionInput
  }

  export type FranchiseUserProductPermissionUncheckedCreateInput = {
    franchiseUserProductPermissionId?: number
    franchiseId: string
    userId: number
    productId: string
    permissionId: string
    permissionLevel?: number
  }

  export type FranchiseUserProductPermissionUpdateInput = {
    permissionLevel?: IntFieldUpdateOperationsInput | number
    franchise?: FranchiseUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    user?: UserUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    productPermission?: ProductPermissionUpdateOneRequiredWithoutUserProductPermissionNestedInput
    product?: ProductUpdateOneRequiredWithoutUserProductPermissionNestedInput
  }

  export type FranchiseUserProductPermissionUncheckedUpdateInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseUserProductPermissionUpdateManyMutationInput = {
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type CableProductSettingsCreateInput = {
    upiId?: string | null
    bankingName?: string | null
    whatsAppReminderTemplate?: string
    locationSettings?: string
    filterSettings?: string
    bsnlSettings?: string
    oltSettings?: string
    tactvSettings?: string
    gtplSettings?: string
    vkdigitalSettings?: string
    franchise: FranchiseCreateNestedOneWithoutCableProductSettingsInput
  }

  export type CableProductSettingsUncheckedCreateInput = {
    franchiseId: string
    upiId?: string | null
    bankingName?: string | null
    whatsAppReminderTemplate?: string
    locationSettings?: string
    filterSettings?: string
    bsnlSettings?: string
    oltSettings?: string
    tactvSettings?: string
    gtplSettings?: string
    vkdigitalSettings?: string
  }

  export type CableProductSettingsUpdateInput = {
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    bankingName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppReminderTemplate?: StringFieldUpdateOperationsInput | string
    locationSettings?: StringFieldUpdateOperationsInput | string
    filterSettings?: StringFieldUpdateOperationsInput | string
    bsnlSettings?: StringFieldUpdateOperationsInput | string
    oltSettings?: StringFieldUpdateOperationsInput | string
    tactvSettings?: StringFieldUpdateOperationsInput | string
    gtplSettings?: StringFieldUpdateOperationsInput | string
    vkdigitalSettings?: StringFieldUpdateOperationsInput | string
    franchise?: FranchiseUpdateOneRequiredWithoutCableProductSettingsNestedInput
  }

  export type CableProductSettingsUncheckedUpdateInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    bankingName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppReminderTemplate?: StringFieldUpdateOperationsInput | string
    locationSettings?: StringFieldUpdateOperationsInput | string
    filterSettings?: StringFieldUpdateOperationsInput | string
    bsnlSettings?: StringFieldUpdateOperationsInput | string
    oltSettings?: StringFieldUpdateOperationsInput | string
    tactvSettings?: StringFieldUpdateOperationsInput | string
    gtplSettings?: StringFieldUpdateOperationsInput | string
    vkdigitalSettings?: StringFieldUpdateOperationsInput | string
  }

  export type CableProductSettingsUpdateManyMutationInput = {
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    bankingName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppReminderTemplate?: StringFieldUpdateOperationsInput | string
    locationSettings?: StringFieldUpdateOperationsInput | string
    filterSettings?: StringFieldUpdateOperationsInput | string
    bsnlSettings?: StringFieldUpdateOperationsInput | string
    oltSettings?: StringFieldUpdateOperationsInput | string
    tactvSettings?: StringFieldUpdateOperationsInput | string
    gtplSettings?: StringFieldUpdateOperationsInput | string
    vkdigitalSettings?: StringFieldUpdateOperationsInput | string
  }

  export type CableProductSettingsUncheckedUpdateManyInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    bankingName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppReminderTemplate?: StringFieldUpdateOperationsInput | string
    locationSettings?: StringFieldUpdateOperationsInput | string
    filterSettings?: StringFieldUpdateOperationsInput | string
    bsnlSettings?: StringFieldUpdateOperationsInput | string
    oltSettings?: StringFieldUpdateOperationsInput | string
    tactvSettings?: StringFieldUpdateOperationsInput | string
    gtplSettings?: StringFieldUpdateOperationsInput | string
    vkdigitalSettings?: StringFieldUpdateOperationsInput | string
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type FranchiseProductListRelationFilter = {
    every?: FranchiseProductWhereInput
    some?: FranchiseProductWhereInput
    none?: FranchiseProductWhereInput
  }

  export type CableProductSettingsListRelationFilter = {
    every?: CableProductSettingsWhereInput
    some?: CableProductSettingsWhereInput
    none?: CableProductSettingsWhereInput
  }

  export type FranchiseUserProductPermissionListRelationFilter = {
    every?: FranchiseUserProductPermissionWhereInput
    some?: FranchiseUserProductPermissionWhereInput
    none?: FranchiseUserProductPermissionWhereInput
  }

  export type FranchiseRelationListRelationFilter = {
    every?: FranchiseRelationWhereInput
    some?: FranchiseRelationWhereInput
    none?: FranchiseRelationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FranchiseProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CableProductSettingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FranchiseUserProductPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FranchiseRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FranchiseCountOrderByAggregateInput = {
    franchiseId?: SortOrder
    franchiseName?: SortOrder
    franchiseCode?: SortOrder
    onboardingDate?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseMaxOrderByAggregateInput = {
    franchiseId?: SortOrder
    franchiseName?: SortOrder
    franchiseCode?: SortOrder
    onboardingDate?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseMinOrderByAggregateInput = {
    franchiseId?: SortOrder
    franchiseName?: SortOrder
    franchiseCode?: SortOrder
    onboardingDate?: SortOrder
    enabled?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type FranchiseRelationFilter = {
    is?: FranchiseWhereInput
    isNot?: FranchiseWhereInput
  }

  export type FranchiseRelationParentFranchiseIdChildFranchiseIdCompoundUniqueInput = {
    parentFranchiseId: string
    childFranchiseId: string
  }

  export type FranchiseRelationCountOrderByAggregateInput = {
    id?: SortOrder
    parentFranchiseId?: SortOrder
    childFranchiseId?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseRelationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FranchiseRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    parentFranchiseId?: SortOrder
    childFranchiseId?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseRelationMinOrderByAggregateInput = {
    id?: SortOrder
    parentFranchiseId?: SortOrder
    childFranchiseId?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseRelationSumOrderByAggregateInput = {
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    webAuthToken?: SortOrder
    webAuthTime?: SortOrder
    appAuthToken?: SortOrder
    appAuthTime?: SortOrder
    appAuthVersion?: SortOrder
    isSystemUser?: SortOrder
    enabled?: SortOrder
    franchiseId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    webAuthToken?: SortOrder
    webAuthTime?: SortOrder
    appAuthToken?: SortOrder
    appAuthTime?: SortOrder
    appAuthVersion?: SortOrder
    isSystemUser?: SortOrder
    enabled?: SortOrder
    franchiseId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    webAuthToken?: SortOrder
    webAuthTime?: SortOrder
    appAuthToken?: SortOrder
    appAuthTime?: SortOrder
    appAuthVersion?: SortOrder
    isSystemUser?: SortOrder
    enabled?: SortOrder
    franchiseId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ProductPermissionListRelationFilter = {
    every?: ProductPermissionWhereInput
    some?: ProductPermissionWhereInput
    none?: ProductPermissionWhereInput
  }

  export type ProductPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    productId?: SortOrder
    productName?: SortOrder
    productDescription?: SortOrder
    enabled?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    productId?: SortOrder
    productName?: SortOrder
    productDescription?: SortOrder
    enabled?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    productId?: SortOrder
    productName?: SortOrder
    productDescription?: SortOrder
    enabled?: SortOrder
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

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type FranchiseProductFranchiseIdProductIdCompoundUniqueInput = {
    franchiseId: string
    productId: string
  }

  export type FranchiseProductCountOrderByAggregateInput = {
    franchiseProductId?: SortOrder
    franchiseId?: SortOrder
    productId?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseProductAvgOrderByAggregateInput = {
    franchiseProductId?: SortOrder
  }

  export type FranchiseProductMaxOrderByAggregateInput = {
    franchiseProductId?: SortOrder
    franchiseId?: SortOrder
    productId?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseProductMinOrderByAggregateInput = {
    franchiseProductId?: SortOrder
    franchiseId?: SortOrder
    productId?: SortOrder
    enabled?: SortOrder
  }

  export type FranchiseProductSumOrderByAggregateInput = {
    franchiseProductId?: SortOrder
  }

  export type ProductPermissionProductIdPermissionIdCompoundUniqueInput = {
    productId: string
    permissionId: string
  }

  export type ProductPermissionCountOrderByAggregateInput = {
    productPermissionId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionName?: SortOrder
    permissionDescription?: SortOrder
  }

  export type ProductPermissionAvgOrderByAggregateInput = {
    productPermissionId?: SortOrder
  }

  export type ProductPermissionMaxOrderByAggregateInput = {
    productPermissionId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionName?: SortOrder
    permissionDescription?: SortOrder
  }

  export type ProductPermissionMinOrderByAggregateInput = {
    productPermissionId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionName?: SortOrder
    permissionDescription?: SortOrder
  }

  export type ProductPermissionSumOrderByAggregateInput = {
    productPermissionId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductPermissionRelationFilter = {
    is?: ProductPermissionWhereInput
    isNot?: ProductPermissionWhereInput
  }

  export type FranchiseUserProductPermissionFranchiseIdProductIdUserIdPermissionIdCompoundUniqueInput = {
    franchiseId: string
    productId: string
    userId: number
    permissionId: string
  }

  export type FranchiseUserProductPermissionCountOrderByAggregateInput = {
    franchiseUserProductPermissionId?: SortOrder
    franchiseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionLevel?: SortOrder
  }

  export type FranchiseUserProductPermissionAvgOrderByAggregateInput = {
    franchiseUserProductPermissionId?: SortOrder
    userId?: SortOrder
    permissionLevel?: SortOrder
  }

  export type FranchiseUserProductPermissionMaxOrderByAggregateInput = {
    franchiseUserProductPermissionId?: SortOrder
    franchiseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionLevel?: SortOrder
  }

  export type FranchiseUserProductPermissionMinOrderByAggregateInput = {
    franchiseUserProductPermissionId?: SortOrder
    franchiseId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    permissionId?: SortOrder
    permissionLevel?: SortOrder
  }

  export type FranchiseUserProductPermissionSumOrderByAggregateInput = {
    franchiseUserProductPermissionId?: SortOrder
    userId?: SortOrder
    permissionLevel?: SortOrder
  }

  export type CableProductSettingsCountOrderByAggregateInput = {
    franchiseId?: SortOrder
    upiId?: SortOrder
    bankingName?: SortOrder
    whatsAppReminderTemplate?: SortOrder
    locationSettings?: SortOrder
    filterSettings?: SortOrder
    bsnlSettings?: SortOrder
    oltSettings?: SortOrder
    tactvSettings?: SortOrder
    gtplSettings?: SortOrder
    vkdigitalSettings?: SortOrder
  }

  export type CableProductSettingsMaxOrderByAggregateInput = {
    franchiseId?: SortOrder
    upiId?: SortOrder
    bankingName?: SortOrder
    whatsAppReminderTemplate?: SortOrder
    locationSettings?: SortOrder
    filterSettings?: SortOrder
    bsnlSettings?: SortOrder
    oltSettings?: SortOrder
    tactvSettings?: SortOrder
    gtplSettings?: SortOrder
    vkdigitalSettings?: SortOrder
  }

  export type CableProductSettingsMinOrderByAggregateInput = {
    franchiseId?: SortOrder
    upiId?: SortOrder
    bankingName?: SortOrder
    whatsAppReminderTemplate?: SortOrder
    locationSettings?: SortOrder
    filterSettings?: SortOrder
    bsnlSettings?: SortOrder
    oltSettings?: SortOrder
    tactvSettings?: SortOrder
    gtplSettings?: SortOrder
    vkdigitalSettings?: SortOrder
  }

  export type UserCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<UserCreateWithoutFranchiseInput, UserUncheckedCreateWithoutFranchiseInput> | UserCreateWithoutFranchiseInput[] | UserUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFranchiseInput | UserCreateOrConnectWithoutFranchiseInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FranchiseProductCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<FranchiseProductCreateWithoutFranchiseInput, FranchiseProductUncheckedCreateWithoutFranchiseInput> | FranchiseProductCreateWithoutFranchiseInput[] | FranchiseProductUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutFranchiseInput | FranchiseProductCreateOrConnectWithoutFranchiseInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
  }

  export type CableProductSettingsCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<CableProductSettingsCreateWithoutFranchiseInput, CableProductSettingsUncheckedCreateWithoutFranchiseInput> | CableProductSettingsCreateWithoutFranchiseInput[] | CableProductSettingsUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CableProductSettingsCreateOrConnectWithoutFranchiseInput | CableProductSettingsCreateOrConnectWithoutFranchiseInput[]
    connect?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
  }

  export type FranchiseUserProductPermissionCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput> | FranchiseUserProductPermissionCreateWithoutFranchiseInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput | FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type FranchiseRelationCreateNestedManyWithoutParentFranchiseInput = {
    create?: XOR<FranchiseRelationCreateWithoutParentFranchiseInput, FranchiseRelationUncheckedCreateWithoutParentFranchiseInput> | FranchiseRelationCreateWithoutParentFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutParentFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutParentFranchiseInput | FranchiseRelationCreateOrConnectWithoutParentFranchiseInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
  }

  export type FranchiseRelationCreateNestedManyWithoutChildFranchiseInput = {
    create?: XOR<FranchiseRelationCreateWithoutChildFranchiseInput, FranchiseRelationUncheckedCreateWithoutChildFranchiseInput> | FranchiseRelationCreateWithoutChildFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutChildFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutChildFranchiseInput | FranchiseRelationCreateOrConnectWithoutChildFranchiseInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<UserCreateWithoutFranchiseInput, UserUncheckedCreateWithoutFranchiseInput> | UserCreateWithoutFranchiseInput[] | UserUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFranchiseInput | UserCreateOrConnectWithoutFranchiseInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FranchiseProductUncheckedCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<FranchiseProductCreateWithoutFranchiseInput, FranchiseProductUncheckedCreateWithoutFranchiseInput> | FranchiseProductCreateWithoutFranchiseInput[] | FranchiseProductUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutFranchiseInput | FranchiseProductCreateOrConnectWithoutFranchiseInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
  }

  export type CableProductSettingsUncheckedCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<CableProductSettingsCreateWithoutFranchiseInput, CableProductSettingsUncheckedCreateWithoutFranchiseInput> | CableProductSettingsCreateWithoutFranchiseInput[] | CableProductSettingsUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CableProductSettingsCreateOrConnectWithoutFranchiseInput | CableProductSettingsCreateOrConnectWithoutFranchiseInput[]
    connect?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
  }

  export type FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput> | FranchiseUserProductPermissionCreateWithoutFranchiseInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput | FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type FranchiseRelationUncheckedCreateNestedManyWithoutParentFranchiseInput = {
    create?: XOR<FranchiseRelationCreateWithoutParentFranchiseInput, FranchiseRelationUncheckedCreateWithoutParentFranchiseInput> | FranchiseRelationCreateWithoutParentFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutParentFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutParentFranchiseInput | FranchiseRelationCreateOrConnectWithoutParentFranchiseInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
  }

  export type FranchiseRelationUncheckedCreateNestedManyWithoutChildFranchiseInput = {
    create?: XOR<FranchiseRelationCreateWithoutChildFranchiseInput, FranchiseRelationUncheckedCreateWithoutChildFranchiseInput> | FranchiseRelationCreateWithoutChildFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutChildFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutChildFranchiseInput | FranchiseRelationCreateOrConnectWithoutChildFranchiseInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<UserCreateWithoutFranchiseInput, UserUncheckedCreateWithoutFranchiseInput> | UserCreateWithoutFranchiseInput[] | UserUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFranchiseInput | UserCreateOrConnectWithoutFranchiseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFranchiseInput | UserUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFranchiseInput | UserUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFranchiseInput | UserUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FranchiseProductUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<FranchiseProductCreateWithoutFranchiseInput, FranchiseProductUncheckedCreateWithoutFranchiseInput> | FranchiseProductCreateWithoutFranchiseInput[] | FranchiseProductUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutFranchiseInput | FranchiseProductCreateOrConnectWithoutFranchiseInput[]
    upsert?: FranchiseProductUpsertWithWhereUniqueWithoutFranchiseInput | FranchiseProductUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    disconnect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    delete?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    update?: FranchiseProductUpdateWithWhereUniqueWithoutFranchiseInput | FranchiseProductUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: FranchiseProductUpdateManyWithWhereWithoutFranchiseInput | FranchiseProductUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: FranchiseProductScalarWhereInput | FranchiseProductScalarWhereInput[]
  }

  export type CableProductSettingsUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<CableProductSettingsCreateWithoutFranchiseInput, CableProductSettingsUncheckedCreateWithoutFranchiseInput> | CableProductSettingsCreateWithoutFranchiseInput[] | CableProductSettingsUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CableProductSettingsCreateOrConnectWithoutFranchiseInput | CableProductSettingsCreateOrConnectWithoutFranchiseInput[]
    upsert?: CableProductSettingsUpsertWithWhereUniqueWithoutFranchiseInput | CableProductSettingsUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    disconnect?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    delete?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    connect?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    update?: CableProductSettingsUpdateWithWhereUniqueWithoutFranchiseInput | CableProductSettingsUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: CableProductSettingsUpdateManyWithWhereWithoutFranchiseInput | CableProductSettingsUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: CableProductSettingsScalarWhereInput | CableProductSettingsScalarWhereInput[]
  }

  export type FranchiseUserProductPermissionUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput> | FranchiseUserProductPermissionCreateWithoutFranchiseInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput | FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutFranchiseInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutFranchiseInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutFranchiseInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseRelationUpdateManyWithoutParentFranchiseNestedInput = {
    create?: XOR<FranchiseRelationCreateWithoutParentFranchiseInput, FranchiseRelationUncheckedCreateWithoutParentFranchiseInput> | FranchiseRelationCreateWithoutParentFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutParentFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutParentFranchiseInput | FranchiseRelationCreateOrConnectWithoutParentFranchiseInput[]
    upsert?: FranchiseRelationUpsertWithWhereUniqueWithoutParentFranchiseInput | FranchiseRelationUpsertWithWhereUniqueWithoutParentFranchiseInput[]
    set?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    disconnect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    delete?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    update?: FranchiseRelationUpdateWithWhereUniqueWithoutParentFranchiseInput | FranchiseRelationUpdateWithWhereUniqueWithoutParentFranchiseInput[]
    updateMany?: FranchiseRelationUpdateManyWithWhereWithoutParentFranchiseInput | FranchiseRelationUpdateManyWithWhereWithoutParentFranchiseInput[]
    deleteMany?: FranchiseRelationScalarWhereInput | FranchiseRelationScalarWhereInput[]
  }

  export type FranchiseRelationUpdateManyWithoutChildFranchiseNestedInput = {
    create?: XOR<FranchiseRelationCreateWithoutChildFranchiseInput, FranchiseRelationUncheckedCreateWithoutChildFranchiseInput> | FranchiseRelationCreateWithoutChildFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutChildFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutChildFranchiseInput | FranchiseRelationCreateOrConnectWithoutChildFranchiseInput[]
    upsert?: FranchiseRelationUpsertWithWhereUniqueWithoutChildFranchiseInput | FranchiseRelationUpsertWithWhereUniqueWithoutChildFranchiseInput[]
    set?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    disconnect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    delete?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    update?: FranchiseRelationUpdateWithWhereUniqueWithoutChildFranchiseInput | FranchiseRelationUpdateWithWhereUniqueWithoutChildFranchiseInput[]
    updateMany?: FranchiseRelationUpdateManyWithWhereWithoutChildFranchiseInput | FranchiseRelationUpdateManyWithWhereWithoutChildFranchiseInput[]
    deleteMany?: FranchiseRelationScalarWhereInput | FranchiseRelationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<UserCreateWithoutFranchiseInput, UserUncheckedCreateWithoutFranchiseInput> | UserCreateWithoutFranchiseInput[] | UserUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFranchiseInput | UserCreateOrConnectWithoutFranchiseInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFranchiseInput | UserUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFranchiseInput | UserUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFranchiseInput | UserUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type FranchiseProductUncheckedUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<FranchiseProductCreateWithoutFranchiseInput, FranchiseProductUncheckedCreateWithoutFranchiseInput> | FranchiseProductCreateWithoutFranchiseInput[] | FranchiseProductUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutFranchiseInput | FranchiseProductCreateOrConnectWithoutFranchiseInput[]
    upsert?: FranchiseProductUpsertWithWhereUniqueWithoutFranchiseInput | FranchiseProductUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    disconnect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    delete?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    update?: FranchiseProductUpdateWithWhereUniqueWithoutFranchiseInput | FranchiseProductUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: FranchiseProductUpdateManyWithWhereWithoutFranchiseInput | FranchiseProductUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: FranchiseProductScalarWhereInput | FranchiseProductScalarWhereInput[]
  }

  export type CableProductSettingsUncheckedUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<CableProductSettingsCreateWithoutFranchiseInput, CableProductSettingsUncheckedCreateWithoutFranchiseInput> | CableProductSettingsCreateWithoutFranchiseInput[] | CableProductSettingsUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CableProductSettingsCreateOrConnectWithoutFranchiseInput | CableProductSettingsCreateOrConnectWithoutFranchiseInput[]
    upsert?: CableProductSettingsUpsertWithWhereUniqueWithoutFranchiseInput | CableProductSettingsUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    disconnect?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    delete?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    connect?: CableProductSettingsWhereUniqueInput | CableProductSettingsWhereUniqueInput[]
    update?: CableProductSettingsUpdateWithWhereUniqueWithoutFranchiseInput | CableProductSettingsUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: CableProductSettingsUpdateManyWithWhereWithoutFranchiseInput | CableProductSettingsUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: CableProductSettingsScalarWhereInput | CableProductSettingsScalarWhereInput[]
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput> | FranchiseUserProductPermissionCreateWithoutFranchiseInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput | FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutFranchiseInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutFranchiseInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutFranchiseInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutFranchiseInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseNestedInput = {
    create?: XOR<FranchiseRelationCreateWithoutParentFranchiseInput, FranchiseRelationUncheckedCreateWithoutParentFranchiseInput> | FranchiseRelationCreateWithoutParentFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutParentFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutParentFranchiseInput | FranchiseRelationCreateOrConnectWithoutParentFranchiseInput[]
    upsert?: FranchiseRelationUpsertWithWhereUniqueWithoutParentFranchiseInput | FranchiseRelationUpsertWithWhereUniqueWithoutParentFranchiseInput[]
    set?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    disconnect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    delete?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    update?: FranchiseRelationUpdateWithWhereUniqueWithoutParentFranchiseInput | FranchiseRelationUpdateWithWhereUniqueWithoutParentFranchiseInput[]
    updateMany?: FranchiseRelationUpdateManyWithWhereWithoutParentFranchiseInput | FranchiseRelationUpdateManyWithWhereWithoutParentFranchiseInput[]
    deleteMany?: FranchiseRelationScalarWhereInput | FranchiseRelationScalarWhereInput[]
  }

  export type FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseNestedInput = {
    create?: XOR<FranchiseRelationCreateWithoutChildFranchiseInput, FranchiseRelationUncheckedCreateWithoutChildFranchiseInput> | FranchiseRelationCreateWithoutChildFranchiseInput[] | FranchiseRelationUncheckedCreateWithoutChildFranchiseInput[]
    connectOrCreate?: FranchiseRelationCreateOrConnectWithoutChildFranchiseInput | FranchiseRelationCreateOrConnectWithoutChildFranchiseInput[]
    upsert?: FranchiseRelationUpsertWithWhereUniqueWithoutChildFranchiseInput | FranchiseRelationUpsertWithWhereUniqueWithoutChildFranchiseInput[]
    set?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    disconnect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    delete?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    connect?: FranchiseRelationWhereUniqueInput | FranchiseRelationWhereUniqueInput[]
    update?: FranchiseRelationUpdateWithWhereUniqueWithoutChildFranchiseInput | FranchiseRelationUpdateWithWhereUniqueWithoutChildFranchiseInput[]
    updateMany?: FranchiseRelationUpdateManyWithWhereWithoutChildFranchiseInput | FranchiseRelationUpdateManyWithWhereWithoutChildFranchiseInput[]
    deleteMany?: FranchiseRelationScalarWhereInput | FranchiseRelationScalarWhereInput[]
  }

  export type FranchiseCreateNestedOneWithoutParentFranchiseRelationInput = {
    create?: XOR<FranchiseCreateWithoutParentFranchiseRelationInput, FranchiseUncheckedCreateWithoutParentFranchiseRelationInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutParentFranchiseRelationInput
    connect?: FranchiseWhereUniqueInput
  }

  export type FranchiseCreateNestedOneWithoutChildFranchiseRelationInput = {
    create?: XOR<FranchiseCreateWithoutChildFranchiseRelationInput, FranchiseUncheckedCreateWithoutChildFranchiseRelationInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutChildFranchiseRelationInput
    connect?: FranchiseWhereUniqueInput
  }

  export type FranchiseUpdateOneRequiredWithoutParentFranchiseRelationNestedInput = {
    create?: XOR<FranchiseCreateWithoutParentFranchiseRelationInput, FranchiseUncheckedCreateWithoutParentFranchiseRelationInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutParentFranchiseRelationInput
    upsert?: FranchiseUpsertWithoutParentFranchiseRelationInput
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutParentFranchiseRelationInput, FranchiseUpdateWithoutParentFranchiseRelationInput>, FranchiseUncheckedUpdateWithoutParentFranchiseRelationInput>
  }

  export type FranchiseUpdateOneRequiredWithoutChildFranchiseRelationNestedInput = {
    create?: XOR<FranchiseCreateWithoutChildFranchiseRelationInput, FranchiseUncheckedCreateWithoutChildFranchiseRelationInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutChildFranchiseRelationInput
    upsert?: FranchiseUpsertWithoutChildFranchiseRelationInput
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutChildFranchiseRelationInput, FranchiseUpdateWithoutChildFranchiseRelationInput>, FranchiseUncheckedUpdateWithoutChildFranchiseRelationInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FranchiseCreateNestedOneWithoutUserInput = {
    create?: XOR<FranchiseCreateWithoutUserInput, FranchiseUncheckedCreateWithoutUserInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutUserInput
    connect?: FranchiseWhereUniqueInput
  }

  export type FranchiseUserProductPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutUserInput, FranchiseUserProductPermissionUncheckedCreateWithoutUserInput> | FranchiseUserProductPermissionCreateWithoutUserInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutUserInput | FranchiseUserProductPermissionCreateOrConnectWithoutUserInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutUserInput, FranchiseUserProductPermissionUncheckedCreateWithoutUserInput> | FranchiseUserProductPermissionCreateWithoutUserInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutUserInput | FranchiseUserProductPermissionCreateOrConnectWithoutUserInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FranchiseUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<FranchiseCreateWithoutUserInput, FranchiseUncheckedCreateWithoutUserInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutUserInput
    upsert?: FranchiseUpsertWithoutUserInput
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutUserInput, FranchiseUpdateWithoutUserInput>, FranchiseUncheckedUpdateWithoutUserInput>
  }

  export type FranchiseUserProductPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutUserInput, FranchiseUserProductPermissionUncheckedCreateWithoutUserInput> | FranchiseUserProductPermissionCreateWithoutUserInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutUserInput | FranchiseUserProductPermissionCreateOrConnectWithoutUserInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutUserInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutUserInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutUserInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutUserInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutUserInput, FranchiseUserProductPermissionUncheckedCreateWithoutUserInput> | FranchiseUserProductPermissionCreateWithoutUserInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutUserInput | FranchiseUserProductPermissionCreateOrConnectWithoutUserInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutUserInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutUserInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutUserInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutUserInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseProductCreateNestedManyWithoutProductInput = {
    create?: XOR<FranchiseProductCreateWithoutProductInput, FranchiseProductUncheckedCreateWithoutProductInput> | FranchiseProductCreateWithoutProductInput[] | FranchiseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutProductInput | FranchiseProductCreateOrConnectWithoutProductInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
  }

  export type ProductPermissionCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPermissionCreateWithoutProductInput, ProductPermissionUncheckedCreateWithoutProductInput> | ProductPermissionCreateWithoutProductInput[] | ProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPermissionCreateOrConnectWithoutProductInput | ProductPermissionCreateOrConnectWithoutProductInput[]
    connect?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
  }

  export type FranchiseUserProductPermissionCreateNestedManyWithoutProductInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductInput> | FranchiseUserProductPermissionCreateWithoutProductInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type FranchiseProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FranchiseProductCreateWithoutProductInput, FranchiseProductUncheckedCreateWithoutProductInput> | FranchiseProductCreateWithoutProductInput[] | FranchiseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutProductInput | FranchiseProductCreateOrConnectWithoutProductInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
  }

  export type ProductPermissionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductPermissionCreateWithoutProductInput, ProductPermissionUncheckedCreateWithoutProductInput> | ProductPermissionCreateWithoutProductInput[] | ProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPermissionCreateOrConnectWithoutProductInput | ProductPermissionCreateOrConnectWithoutProductInput[]
    connect?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
  }

  export type FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductInput> | FranchiseUserProductPermissionCreateWithoutProductInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FranchiseProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<FranchiseProductCreateWithoutProductInput, FranchiseProductUncheckedCreateWithoutProductInput> | FranchiseProductCreateWithoutProductInput[] | FranchiseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutProductInput | FranchiseProductCreateOrConnectWithoutProductInput[]
    upsert?: FranchiseProductUpsertWithWhereUniqueWithoutProductInput | FranchiseProductUpsertWithWhereUniqueWithoutProductInput[]
    set?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    disconnect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    delete?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    update?: FranchiseProductUpdateWithWhereUniqueWithoutProductInput | FranchiseProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FranchiseProductUpdateManyWithWhereWithoutProductInput | FranchiseProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FranchiseProductScalarWhereInput | FranchiseProductScalarWhereInput[]
  }

  export type ProductPermissionUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPermissionCreateWithoutProductInput, ProductPermissionUncheckedCreateWithoutProductInput> | ProductPermissionCreateWithoutProductInput[] | ProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPermissionCreateOrConnectWithoutProductInput | ProductPermissionCreateOrConnectWithoutProductInput[]
    upsert?: ProductPermissionUpsertWithWhereUniqueWithoutProductInput | ProductPermissionUpsertWithWhereUniqueWithoutProductInput[]
    set?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    disconnect?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    delete?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    connect?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    update?: ProductPermissionUpdateWithWhereUniqueWithoutProductInput | ProductPermissionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPermissionUpdateManyWithWhereWithoutProductInput | ProductPermissionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPermissionScalarWhereInput | ProductPermissionScalarWhereInput[]
  }

  export type FranchiseUserProductPermissionUpdateManyWithoutProductNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductInput> | FranchiseUserProductPermissionCreateWithoutProductInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FranchiseProductCreateWithoutProductInput, FranchiseProductUncheckedCreateWithoutProductInput> | FranchiseProductCreateWithoutProductInput[] | FranchiseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseProductCreateOrConnectWithoutProductInput | FranchiseProductCreateOrConnectWithoutProductInput[]
    upsert?: FranchiseProductUpsertWithWhereUniqueWithoutProductInput | FranchiseProductUpsertWithWhereUniqueWithoutProductInput[]
    set?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    disconnect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    delete?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    connect?: FranchiseProductWhereUniqueInput | FranchiseProductWhereUniqueInput[]
    update?: FranchiseProductUpdateWithWhereUniqueWithoutProductInput | FranchiseProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FranchiseProductUpdateManyWithWhereWithoutProductInput | FranchiseProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FranchiseProductScalarWhereInput | FranchiseProductScalarWhereInput[]
  }

  export type ProductPermissionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductPermissionCreateWithoutProductInput, ProductPermissionUncheckedCreateWithoutProductInput> | ProductPermissionCreateWithoutProductInput[] | ProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductPermissionCreateOrConnectWithoutProductInput | ProductPermissionCreateOrConnectWithoutProductInput[]
    upsert?: ProductPermissionUpsertWithWhereUniqueWithoutProductInput | ProductPermissionUpsertWithWhereUniqueWithoutProductInput[]
    set?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    disconnect?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    delete?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    connect?: ProductPermissionWhereUniqueInput | ProductPermissionWhereUniqueInput[]
    update?: ProductPermissionUpdateWithWhereUniqueWithoutProductInput | ProductPermissionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductPermissionUpdateManyWithWhereWithoutProductInput | ProductPermissionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductPermissionScalarWhereInput | ProductPermissionScalarWhereInput[]
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductInput> | FranchiseUserProductPermissionCreateWithoutProductInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseCreateNestedOneWithoutFranchiseProductInput = {
    create?: XOR<FranchiseCreateWithoutFranchiseProductInput, FranchiseUncheckedCreateWithoutFranchiseProductInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutFranchiseProductInput
    connect?: FranchiseWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutFranchiseProductInput = {
    create?: XOR<ProductCreateWithoutFranchiseProductInput, ProductUncheckedCreateWithoutFranchiseProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFranchiseProductInput
    connect?: ProductWhereUniqueInput
  }

  export type FranchiseUpdateOneRequiredWithoutFranchiseProductNestedInput = {
    create?: XOR<FranchiseCreateWithoutFranchiseProductInput, FranchiseUncheckedCreateWithoutFranchiseProductInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutFranchiseProductInput
    upsert?: FranchiseUpsertWithoutFranchiseProductInput
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutFranchiseProductInput, FranchiseUpdateWithoutFranchiseProductInput>, FranchiseUncheckedUpdateWithoutFranchiseProductInput>
  }

  export type ProductUpdateOneRequiredWithoutFranchiseProductNestedInput = {
    create?: XOR<ProductCreateWithoutFranchiseProductInput, ProductUncheckedCreateWithoutFranchiseProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFranchiseProductInput
    upsert?: ProductUpsertWithoutFranchiseProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFranchiseProductInput, ProductUpdateWithoutFranchiseProductInput>, ProductUncheckedUpdateWithoutFranchiseProductInput>
  }

  export type ProductCreateNestedOneWithoutProductPermissionInput = {
    create?: XOR<ProductCreateWithoutProductPermissionInput, ProductUncheckedCreateWithoutProductPermissionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPermissionInput
    connect?: ProductWhereUniqueInput
  }

  export type FranchiseUserProductPermissionCreateNestedManyWithoutProductPermissionInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput> | FranchiseUserProductPermissionCreateWithoutProductPermissionInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutProductPermissionInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput> | FranchiseUserProductPermissionCreateWithoutProductPermissionInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutProductPermissionNestedInput = {
    create?: XOR<ProductCreateWithoutProductPermissionInput, ProductUncheckedCreateWithoutProductPermissionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductPermissionInput
    upsert?: ProductUpsertWithoutProductPermissionInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductPermissionInput, ProductUpdateWithoutProductPermissionInput>, ProductUncheckedUpdateWithoutProductPermissionInput>
  }

  export type FranchiseUserProductPermissionUpdateManyWithoutProductPermissionNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput> | FranchiseUserProductPermissionCreateWithoutProductPermissionInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductPermissionInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductPermissionInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductPermissionInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductPermissionInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductPermissionInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductPermissionInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductPermissionNestedInput = {
    create?: XOR<FranchiseUserProductPermissionCreateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput> | FranchiseUserProductPermissionCreateWithoutProductPermissionInput[] | FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput[]
    connectOrCreate?: FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput | FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput[]
    upsert?: FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductPermissionInput | FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductPermissionInput[]
    set?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    disconnect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    delete?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    connect?: FranchiseUserProductPermissionWhereUniqueInput | FranchiseUserProductPermissionWhereUniqueInput[]
    update?: FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductPermissionInput | FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductPermissionInput[]
    updateMany?: FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductPermissionInput | FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductPermissionInput[]
    deleteMany?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
  }

  export type FranchiseCreateNestedOneWithoutFranchiseUserProductPermissionInput = {
    create?: XOR<FranchiseCreateWithoutFranchiseUserProductPermissionInput, FranchiseUncheckedCreateWithoutFranchiseUserProductPermissionInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutFranchiseUserProductPermissionInput
    connect?: FranchiseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFranchiseUserProductPermissionInput = {
    create?: XOR<UserCreateWithoutFranchiseUserProductPermissionInput, UserUncheckedCreateWithoutFranchiseUserProductPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutFranchiseUserProductPermissionInput
    connect?: UserWhereUniqueInput
  }

  export type ProductPermissionCreateNestedOneWithoutUserProductPermissionInput = {
    create?: XOR<ProductPermissionCreateWithoutUserProductPermissionInput, ProductPermissionUncheckedCreateWithoutUserProductPermissionInput>
    connectOrCreate?: ProductPermissionCreateOrConnectWithoutUserProductPermissionInput
    connect?: ProductPermissionWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutUserProductPermissionInput = {
    create?: XOR<ProductCreateWithoutUserProductPermissionInput, ProductUncheckedCreateWithoutUserProductPermissionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserProductPermissionInput
    connect?: ProductWhereUniqueInput
  }

  export type FranchiseUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput = {
    create?: XOR<FranchiseCreateWithoutFranchiseUserProductPermissionInput, FranchiseUncheckedCreateWithoutFranchiseUserProductPermissionInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutFranchiseUserProductPermissionInput
    upsert?: FranchiseUpsertWithoutFranchiseUserProductPermissionInput
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutFranchiseUserProductPermissionInput, FranchiseUpdateWithoutFranchiseUserProductPermissionInput>, FranchiseUncheckedUpdateWithoutFranchiseUserProductPermissionInput>
  }

  export type UserUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput = {
    create?: XOR<UserCreateWithoutFranchiseUserProductPermissionInput, UserUncheckedCreateWithoutFranchiseUserProductPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutFranchiseUserProductPermissionInput
    upsert?: UserUpsertWithoutFranchiseUserProductPermissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFranchiseUserProductPermissionInput, UserUpdateWithoutFranchiseUserProductPermissionInput>, UserUncheckedUpdateWithoutFranchiseUserProductPermissionInput>
  }

  export type ProductPermissionUpdateOneRequiredWithoutUserProductPermissionNestedInput = {
    create?: XOR<ProductPermissionCreateWithoutUserProductPermissionInput, ProductPermissionUncheckedCreateWithoutUserProductPermissionInput>
    connectOrCreate?: ProductPermissionCreateOrConnectWithoutUserProductPermissionInput
    upsert?: ProductPermissionUpsertWithoutUserProductPermissionInput
    connect?: ProductPermissionWhereUniqueInput
    update?: XOR<XOR<ProductPermissionUpdateToOneWithWhereWithoutUserProductPermissionInput, ProductPermissionUpdateWithoutUserProductPermissionInput>, ProductPermissionUncheckedUpdateWithoutUserProductPermissionInput>
  }

  export type ProductUpdateOneRequiredWithoutUserProductPermissionNestedInput = {
    create?: XOR<ProductCreateWithoutUserProductPermissionInput, ProductUncheckedCreateWithoutUserProductPermissionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserProductPermissionInput
    upsert?: ProductUpsertWithoutUserProductPermissionInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUserProductPermissionInput, ProductUpdateWithoutUserProductPermissionInput>, ProductUncheckedUpdateWithoutUserProductPermissionInput>
  }

  export type FranchiseCreateNestedOneWithoutCableProductSettingsInput = {
    create?: XOR<FranchiseCreateWithoutCableProductSettingsInput, FranchiseUncheckedCreateWithoutCableProductSettingsInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutCableProductSettingsInput
    connect?: FranchiseWhereUniqueInput
  }

  export type FranchiseUpdateOneRequiredWithoutCableProductSettingsNestedInput = {
    create?: XOR<FranchiseCreateWithoutCableProductSettingsInput, FranchiseUncheckedCreateWithoutCableProductSettingsInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutCableProductSettingsInput
    upsert?: FranchiseUpsertWithoutCableProductSettingsInput
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutCableProductSettingsInput, FranchiseUpdateWithoutCableProductSettingsInput>, FranchiseUncheckedUpdateWithoutCableProductSettingsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type UserCreateWithoutFranchiseInput = {
    userId: string
    name: string
    mobile?: string
    email?: string
    password: string
    webAuthToken?: string
    webAuthTime?: Date | string | null
    appAuthToken?: string
    appAuthTime?: Date | string | null
    appAuthVersion?: string
    isSystemUser?: boolean | null
    enabled?: boolean | null
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFranchiseInput = {
    id?: number
    userId: string
    name: string
    mobile?: string
    email?: string
    password: string
    webAuthToken?: string
    webAuthTime?: Date | string | null
    appAuthToken?: string
    appAuthTime?: Date | string | null
    appAuthVersion?: string
    isSystemUser?: boolean | null
    enabled?: boolean | null
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFranchiseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFranchiseInput, UserUncheckedCreateWithoutFranchiseInput>
  }

  export type FranchiseProductCreateWithoutFranchiseInput = {
    enabled?: boolean | null
    product: ProductCreateNestedOneWithoutFranchiseProductInput
  }

  export type FranchiseProductUncheckedCreateWithoutFranchiseInput = {
    franchiseProductId?: number
    productId: string
    enabled?: boolean | null
  }

  export type FranchiseProductCreateOrConnectWithoutFranchiseInput = {
    where: FranchiseProductWhereUniqueInput
    create: XOR<FranchiseProductCreateWithoutFranchiseInput, FranchiseProductUncheckedCreateWithoutFranchiseInput>
  }

  export type CableProductSettingsCreateWithoutFranchiseInput = {
    upiId?: string | null
    bankingName?: string | null
    whatsAppReminderTemplate?: string
    locationSettings?: string
    filterSettings?: string
    bsnlSettings?: string
    oltSettings?: string
    tactvSettings?: string
    gtplSettings?: string
    vkdigitalSettings?: string
  }

  export type CableProductSettingsUncheckedCreateWithoutFranchiseInput = {
    upiId?: string | null
    bankingName?: string | null
    whatsAppReminderTemplate?: string
    locationSettings?: string
    filterSettings?: string
    bsnlSettings?: string
    oltSettings?: string
    tactvSettings?: string
    gtplSettings?: string
    vkdigitalSettings?: string
  }

  export type CableProductSettingsCreateOrConnectWithoutFranchiseInput = {
    where: CableProductSettingsWhereUniqueInput
    create: XOR<CableProductSettingsCreateWithoutFranchiseInput, CableProductSettingsUncheckedCreateWithoutFranchiseInput>
  }

  export type FranchiseUserProductPermissionCreateWithoutFranchiseInput = {
    permissionLevel?: number
    user: UserCreateNestedOneWithoutFranchiseUserProductPermissionInput
    productPermission: ProductPermissionCreateNestedOneWithoutUserProductPermissionInput
    product: ProductCreateNestedOneWithoutUserProductPermissionInput
  }

  export type FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput = {
    franchiseUserProductPermissionId?: number
    userId: number
    productId: string
    permissionId: string
    permissionLevel?: number
  }

  export type FranchiseUserProductPermissionCreateOrConnectWithoutFranchiseInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    create: XOR<FranchiseUserProductPermissionCreateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput>
  }

  export type FranchiseRelationCreateWithoutParentFranchiseInput = {
    enabled?: boolean | null
    childFranchise: FranchiseCreateNestedOneWithoutChildFranchiseRelationInput
  }

  export type FranchiseRelationUncheckedCreateWithoutParentFranchiseInput = {
    id?: number
    childFranchiseId: string
    enabled?: boolean | null
  }

  export type FranchiseRelationCreateOrConnectWithoutParentFranchiseInput = {
    where: FranchiseRelationWhereUniqueInput
    create: XOR<FranchiseRelationCreateWithoutParentFranchiseInput, FranchiseRelationUncheckedCreateWithoutParentFranchiseInput>
  }

  export type FranchiseRelationCreateWithoutChildFranchiseInput = {
    enabled?: boolean | null
    parentFranchise: FranchiseCreateNestedOneWithoutParentFranchiseRelationInput
  }

  export type FranchiseRelationUncheckedCreateWithoutChildFranchiseInput = {
    id?: number
    parentFranchiseId: string
    enabled?: boolean | null
  }

  export type FranchiseRelationCreateOrConnectWithoutChildFranchiseInput = {
    where: FranchiseRelationWhereUniqueInput
    create: XOR<FranchiseRelationCreateWithoutChildFranchiseInput, FranchiseRelationUncheckedCreateWithoutChildFranchiseInput>
  }

  export type UserUpsertWithWhereUniqueWithoutFranchiseInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFranchiseInput, UserUncheckedUpdateWithoutFranchiseInput>
    create: XOR<UserCreateWithoutFranchiseInput, UserUncheckedCreateWithoutFranchiseInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFranchiseInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFranchiseInput, UserUncheckedUpdateWithoutFranchiseInput>
  }

  export type UserUpdateManyWithWhereWithoutFranchiseInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFranchiseInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    webAuthToken?: StringFilter<"User"> | string
    webAuthTime?: DateTimeNullableFilter<"User"> | Date | string | null
    appAuthToken?: StringFilter<"User"> | string
    appAuthTime?: DateTimeNullableFilter<"User"> | Date | string | null
    appAuthVersion?: StringFilter<"User"> | string
    isSystemUser?: BoolNullableFilter<"User"> | boolean | null
    enabled?: BoolNullableFilter<"User"> | boolean | null
    franchiseId?: StringFilter<"User"> | string
  }

  export type FranchiseProductUpsertWithWhereUniqueWithoutFranchiseInput = {
    where: FranchiseProductWhereUniqueInput
    update: XOR<FranchiseProductUpdateWithoutFranchiseInput, FranchiseProductUncheckedUpdateWithoutFranchiseInput>
    create: XOR<FranchiseProductCreateWithoutFranchiseInput, FranchiseProductUncheckedCreateWithoutFranchiseInput>
  }

  export type FranchiseProductUpdateWithWhereUniqueWithoutFranchiseInput = {
    where: FranchiseProductWhereUniqueInput
    data: XOR<FranchiseProductUpdateWithoutFranchiseInput, FranchiseProductUncheckedUpdateWithoutFranchiseInput>
  }

  export type FranchiseProductUpdateManyWithWhereWithoutFranchiseInput = {
    where: FranchiseProductScalarWhereInput
    data: XOR<FranchiseProductUpdateManyMutationInput, FranchiseProductUncheckedUpdateManyWithoutFranchiseInput>
  }

  export type FranchiseProductScalarWhereInput = {
    AND?: FranchiseProductScalarWhereInput | FranchiseProductScalarWhereInput[]
    OR?: FranchiseProductScalarWhereInput[]
    NOT?: FranchiseProductScalarWhereInput | FranchiseProductScalarWhereInput[]
    franchiseProductId?: IntFilter<"FranchiseProduct"> | number
    franchiseId?: StringFilter<"FranchiseProduct"> | string
    productId?: StringFilter<"FranchiseProduct"> | string
    enabled?: BoolNullableFilter<"FranchiseProduct"> | boolean | null
  }

  export type CableProductSettingsUpsertWithWhereUniqueWithoutFranchiseInput = {
    where: CableProductSettingsWhereUniqueInput
    update: XOR<CableProductSettingsUpdateWithoutFranchiseInput, CableProductSettingsUncheckedUpdateWithoutFranchiseInput>
    create: XOR<CableProductSettingsCreateWithoutFranchiseInput, CableProductSettingsUncheckedCreateWithoutFranchiseInput>
  }

  export type CableProductSettingsUpdateWithWhereUniqueWithoutFranchiseInput = {
    where: CableProductSettingsWhereUniqueInput
    data: XOR<CableProductSettingsUpdateWithoutFranchiseInput, CableProductSettingsUncheckedUpdateWithoutFranchiseInput>
  }

  export type CableProductSettingsUpdateManyWithWhereWithoutFranchiseInput = {
    where: CableProductSettingsScalarWhereInput
    data: XOR<CableProductSettingsUpdateManyMutationInput, CableProductSettingsUncheckedUpdateManyWithoutFranchiseInput>
  }

  export type CableProductSettingsScalarWhereInput = {
    AND?: CableProductSettingsScalarWhereInput | CableProductSettingsScalarWhereInput[]
    OR?: CableProductSettingsScalarWhereInput[]
    NOT?: CableProductSettingsScalarWhereInput | CableProductSettingsScalarWhereInput[]
    franchiseId?: StringFilter<"CableProductSettings"> | string
    upiId?: StringNullableFilter<"CableProductSettings"> | string | null
    bankingName?: StringNullableFilter<"CableProductSettings"> | string | null
    whatsAppReminderTemplate?: StringFilter<"CableProductSettings"> | string
    locationSettings?: StringFilter<"CableProductSettings"> | string
    filterSettings?: StringFilter<"CableProductSettings"> | string
    bsnlSettings?: StringFilter<"CableProductSettings"> | string
    oltSettings?: StringFilter<"CableProductSettings"> | string
    tactvSettings?: StringFilter<"CableProductSettings"> | string
    gtplSettings?: StringFilter<"CableProductSettings"> | string
    vkdigitalSettings?: StringFilter<"CableProductSettings"> | string
  }

  export type FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutFranchiseInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    update: XOR<FranchiseUserProductPermissionUpdateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedUpdateWithoutFranchiseInput>
    create: XOR<FranchiseUserProductPermissionCreateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedCreateWithoutFranchiseInput>
  }

  export type FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutFranchiseInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    data: XOR<FranchiseUserProductPermissionUpdateWithoutFranchiseInput, FranchiseUserProductPermissionUncheckedUpdateWithoutFranchiseInput>
  }

  export type FranchiseUserProductPermissionUpdateManyWithWhereWithoutFranchiseInput = {
    where: FranchiseUserProductPermissionScalarWhereInput
    data: XOR<FranchiseUserProductPermissionUpdateManyMutationInput, FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseInput>
  }

  export type FranchiseUserProductPermissionScalarWhereInput = {
    AND?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
    OR?: FranchiseUserProductPermissionScalarWhereInput[]
    NOT?: FranchiseUserProductPermissionScalarWhereInput | FranchiseUserProductPermissionScalarWhereInput[]
    franchiseUserProductPermissionId?: IntFilter<"FranchiseUserProductPermission"> | number
    franchiseId?: StringFilter<"FranchiseUserProductPermission"> | string
    userId?: IntFilter<"FranchiseUserProductPermission"> | number
    productId?: StringFilter<"FranchiseUserProductPermission"> | string
    permissionId?: StringFilter<"FranchiseUserProductPermission"> | string
    permissionLevel?: IntFilter<"FranchiseUserProductPermission"> | number
  }

  export type FranchiseRelationUpsertWithWhereUniqueWithoutParentFranchiseInput = {
    where: FranchiseRelationWhereUniqueInput
    update: XOR<FranchiseRelationUpdateWithoutParentFranchiseInput, FranchiseRelationUncheckedUpdateWithoutParentFranchiseInput>
    create: XOR<FranchiseRelationCreateWithoutParentFranchiseInput, FranchiseRelationUncheckedCreateWithoutParentFranchiseInput>
  }

  export type FranchiseRelationUpdateWithWhereUniqueWithoutParentFranchiseInput = {
    where: FranchiseRelationWhereUniqueInput
    data: XOR<FranchiseRelationUpdateWithoutParentFranchiseInput, FranchiseRelationUncheckedUpdateWithoutParentFranchiseInput>
  }

  export type FranchiseRelationUpdateManyWithWhereWithoutParentFranchiseInput = {
    where: FranchiseRelationScalarWhereInput
    data: XOR<FranchiseRelationUpdateManyMutationInput, FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseInput>
  }

  export type FranchiseRelationScalarWhereInput = {
    AND?: FranchiseRelationScalarWhereInput | FranchiseRelationScalarWhereInput[]
    OR?: FranchiseRelationScalarWhereInput[]
    NOT?: FranchiseRelationScalarWhereInput | FranchiseRelationScalarWhereInput[]
    id?: IntFilter<"FranchiseRelation"> | number
    parentFranchiseId?: StringFilter<"FranchiseRelation"> | string
    childFranchiseId?: StringFilter<"FranchiseRelation"> | string
    enabled?: BoolNullableFilter<"FranchiseRelation"> | boolean | null
  }

  export type FranchiseRelationUpsertWithWhereUniqueWithoutChildFranchiseInput = {
    where: FranchiseRelationWhereUniqueInput
    update: XOR<FranchiseRelationUpdateWithoutChildFranchiseInput, FranchiseRelationUncheckedUpdateWithoutChildFranchiseInput>
    create: XOR<FranchiseRelationCreateWithoutChildFranchiseInput, FranchiseRelationUncheckedCreateWithoutChildFranchiseInput>
  }

  export type FranchiseRelationUpdateWithWhereUniqueWithoutChildFranchiseInput = {
    where: FranchiseRelationWhereUniqueInput
    data: XOR<FranchiseRelationUpdateWithoutChildFranchiseInput, FranchiseRelationUncheckedUpdateWithoutChildFranchiseInput>
  }

  export type FranchiseRelationUpdateManyWithWhereWithoutChildFranchiseInput = {
    where: FranchiseRelationScalarWhereInput
    data: XOR<FranchiseRelationUpdateManyMutationInput, FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseInput>
  }

  export type FranchiseCreateWithoutParentFranchiseRelationInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutFranchiseInput
    childFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutParentFranchiseRelationInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserUncheckedCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsUncheckedCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutFranchiseInput
    childFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutParentFranchiseRelationInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutParentFranchiseRelationInput, FranchiseUncheckedCreateWithoutParentFranchiseRelationInput>
  }

  export type FranchiseCreateWithoutChildFranchiseRelationInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutParentFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutChildFranchiseRelationInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserUncheckedCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsUncheckedCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutParentFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutChildFranchiseRelationInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutChildFranchiseRelationInput, FranchiseUncheckedCreateWithoutChildFranchiseRelationInput>
  }

  export type FranchiseUpsertWithoutParentFranchiseRelationInput = {
    update: XOR<FranchiseUpdateWithoutParentFranchiseRelationInput, FranchiseUncheckedUpdateWithoutParentFranchiseRelationInput>
    create: XOR<FranchiseCreateWithoutParentFranchiseRelationInput, FranchiseUncheckedCreateWithoutParentFranchiseRelationInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutParentFranchiseRelationInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutParentFranchiseRelationInput, FranchiseUncheckedUpdateWithoutParentFranchiseRelationInput>
  }

  export type FranchiseUpdateWithoutParentFranchiseRelationInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutParentFranchiseRelationInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUncheckedUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUncheckedUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUpsertWithoutChildFranchiseRelationInput = {
    update: XOR<FranchiseUpdateWithoutChildFranchiseRelationInput, FranchiseUncheckedUpdateWithoutChildFranchiseRelationInput>
    create: XOR<FranchiseCreateWithoutChildFranchiseRelationInput, FranchiseUncheckedCreateWithoutChildFranchiseRelationInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutChildFranchiseRelationInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutChildFranchiseRelationInput, FranchiseUncheckedUpdateWithoutChildFranchiseRelationInput>
  }

  export type FranchiseUpdateWithoutChildFranchiseRelationInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUpdateManyWithoutParentFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutChildFranchiseRelationInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUncheckedUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUncheckedUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseNestedInput
  }

  export type FranchiseCreateWithoutUserInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutUserInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsUncheckedCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutUserInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutUserInput, FranchiseUncheckedCreateWithoutUserInput>
  }

  export type FranchiseUserProductPermissionCreateWithoutUserInput = {
    permissionLevel?: number
    franchise: FranchiseCreateNestedOneWithoutFranchiseUserProductPermissionInput
    productPermission: ProductPermissionCreateNestedOneWithoutUserProductPermissionInput
    product: ProductCreateNestedOneWithoutUserProductPermissionInput
  }

  export type FranchiseUserProductPermissionUncheckedCreateWithoutUserInput = {
    franchiseUserProductPermissionId?: number
    franchiseId: string
    productId: string
    permissionId: string
    permissionLevel?: number
  }

  export type FranchiseUserProductPermissionCreateOrConnectWithoutUserInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    create: XOR<FranchiseUserProductPermissionCreateWithoutUserInput, FranchiseUserProductPermissionUncheckedCreateWithoutUserInput>
  }

  export type FranchiseUpsertWithoutUserInput = {
    update: XOR<FranchiseUpdateWithoutUserInput, FranchiseUncheckedUpdateWithoutUserInput>
    create: XOR<FranchiseCreateWithoutUserInput, FranchiseUncheckedCreateWithoutUserInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutUserInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutUserInput, FranchiseUncheckedUpdateWithoutUserInput>
  }

  export type FranchiseUpdateWithoutUserInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutUserInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUncheckedUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    update: XOR<FranchiseUserProductPermissionUpdateWithoutUserInput, FranchiseUserProductPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<FranchiseUserProductPermissionCreateWithoutUserInput, FranchiseUserProductPermissionUncheckedCreateWithoutUserInput>
  }

  export type FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    data: XOR<FranchiseUserProductPermissionUpdateWithoutUserInput, FranchiseUserProductPermissionUncheckedUpdateWithoutUserInput>
  }

  export type FranchiseUserProductPermissionUpdateManyWithWhereWithoutUserInput = {
    where: FranchiseUserProductPermissionScalarWhereInput
    data: XOR<FranchiseUserProductPermissionUpdateManyMutationInput, FranchiseUserProductPermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type FranchiseProductCreateWithoutProductInput = {
    enabled?: boolean | null
    franchise: FranchiseCreateNestedOneWithoutFranchiseProductInput
  }

  export type FranchiseProductUncheckedCreateWithoutProductInput = {
    franchiseProductId?: number
    franchiseId: string
    enabled?: boolean | null
  }

  export type FranchiseProductCreateOrConnectWithoutProductInput = {
    where: FranchiseProductWhereUniqueInput
    create: XOR<FranchiseProductCreateWithoutProductInput, FranchiseProductUncheckedCreateWithoutProductInput>
  }

  export type ProductPermissionCreateWithoutProductInput = {
    permissionId: string
    permissionName?: string
    permissionDescription?: string
    userProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutProductPermissionInput
  }

  export type ProductPermissionUncheckedCreateWithoutProductInput = {
    productPermissionId?: number
    permissionId: string
    permissionName?: string
    permissionDescription?: string
    userProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutProductPermissionInput
  }

  export type ProductPermissionCreateOrConnectWithoutProductInput = {
    where: ProductPermissionWhereUniqueInput
    create: XOR<ProductPermissionCreateWithoutProductInput, ProductPermissionUncheckedCreateWithoutProductInput>
  }

  export type FranchiseUserProductPermissionCreateWithoutProductInput = {
    permissionLevel?: number
    franchise: FranchiseCreateNestedOneWithoutFranchiseUserProductPermissionInput
    user: UserCreateNestedOneWithoutFranchiseUserProductPermissionInput
    productPermission: ProductPermissionCreateNestedOneWithoutUserProductPermissionInput
  }

  export type FranchiseUserProductPermissionUncheckedCreateWithoutProductInput = {
    franchiseUserProductPermissionId?: number
    franchiseId: string
    userId: number
    permissionId: string
    permissionLevel?: number
  }

  export type FranchiseUserProductPermissionCreateOrConnectWithoutProductInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    create: XOR<FranchiseUserProductPermissionCreateWithoutProductInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductInput>
  }

  export type FranchiseProductUpsertWithWhereUniqueWithoutProductInput = {
    where: FranchiseProductWhereUniqueInput
    update: XOR<FranchiseProductUpdateWithoutProductInput, FranchiseProductUncheckedUpdateWithoutProductInput>
    create: XOR<FranchiseProductCreateWithoutProductInput, FranchiseProductUncheckedCreateWithoutProductInput>
  }

  export type FranchiseProductUpdateWithWhereUniqueWithoutProductInput = {
    where: FranchiseProductWhereUniqueInput
    data: XOR<FranchiseProductUpdateWithoutProductInput, FranchiseProductUncheckedUpdateWithoutProductInput>
  }

  export type FranchiseProductUpdateManyWithWhereWithoutProductInput = {
    where: FranchiseProductScalarWhereInput
    data: XOR<FranchiseProductUpdateManyMutationInput, FranchiseProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPermissionUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductPermissionWhereUniqueInput
    update: XOR<ProductPermissionUpdateWithoutProductInput, ProductPermissionUncheckedUpdateWithoutProductInput>
    create: XOR<ProductPermissionCreateWithoutProductInput, ProductPermissionUncheckedCreateWithoutProductInput>
  }

  export type ProductPermissionUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductPermissionWhereUniqueInput
    data: XOR<ProductPermissionUpdateWithoutProductInput, ProductPermissionUncheckedUpdateWithoutProductInput>
  }

  export type ProductPermissionUpdateManyWithWhereWithoutProductInput = {
    where: ProductPermissionScalarWhereInput
    data: XOR<ProductPermissionUpdateManyMutationInput, ProductPermissionUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductPermissionScalarWhereInput = {
    AND?: ProductPermissionScalarWhereInput | ProductPermissionScalarWhereInput[]
    OR?: ProductPermissionScalarWhereInput[]
    NOT?: ProductPermissionScalarWhereInput | ProductPermissionScalarWhereInput[]
    productPermissionId?: IntFilter<"ProductPermission"> | number
    productId?: StringFilter<"ProductPermission"> | string
    permissionId?: StringFilter<"ProductPermission"> | string
    permissionName?: StringFilter<"ProductPermission"> | string
    permissionDescription?: StringFilter<"ProductPermission"> | string
  }

  export type FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    update: XOR<FranchiseUserProductPermissionUpdateWithoutProductInput, FranchiseUserProductPermissionUncheckedUpdateWithoutProductInput>
    create: XOR<FranchiseUserProductPermissionCreateWithoutProductInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductInput>
  }

  export type FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    data: XOR<FranchiseUserProductPermissionUpdateWithoutProductInput, FranchiseUserProductPermissionUncheckedUpdateWithoutProductInput>
  }

  export type FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductInput = {
    where: FranchiseUserProductPermissionScalarWhereInput
    data: XOR<FranchiseUserProductPermissionUpdateManyMutationInput, FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductInput>
  }

  export type FranchiseCreateWithoutFranchiseProductInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutFranchiseProductInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserUncheckedCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsUncheckedCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutFranchiseProductInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutFranchiseProductInput, FranchiseUncheckedCreateWithoutFranchiseProductInput>
  }

  export type ProductCreateWithoutFranchiseProductInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    productPermission?: ProductPermissionCreateNestedManyWithoutProductInput
    userProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFranchiseProductInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    productPermission?: ProductPermissionUncheckedCreateNestedManyWithoutProductInput
    userProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFranchiseProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFranchiseProductInput, ProductUncheckedCreateWithoutFranchiseProductInput>
  }

  export type FranchiseUpsertWithoutFranchiseProductInput = {
    update: XOR<FranchiseUpdateWithoutFranchiseProductInput, FranchiseUncheckedUpdateWithoutFranchiseProductInput>
    create: XOR<FranchiseCreateWithoutFranchiseProductInput, FranchiseUncheckedCreateWithoutFranchiseProductInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutFranchiseProductInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutFranchiseProductInput, FranchiseUncheckedUpdateWithoutFranchiseProductInput>
  }

  export type FranchiseUpdateWithoutFranchiseProductInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutFranchiseProductInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUncheckedUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUncheckedUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseNestedInput
  }

  export type ProductUpsertWithoutFranchiseProductInput = {
    update: XOR<ProductUpdateWithoutFranchiseProductInput, ProductUncheckedUpdateWithoutFranchiseProductInput>
    create: XOR<ProductCreateWithoutFranchiseProductInput, ProductUncheckedCreateWithoutFranchiseProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFranchiseProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFranchiseProductInput, ProductUncheckedUpdateWithoutFranchiseProductInput>
  }

  export type ProductUpdateWithoutFranchiseProductInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productPermission?: ProductPermissionUpdateManyWithoutProductNestedInput
    userProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFranchiseProductInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productPermission?: ProductPermissionUncheckedUpdateManyWithoutProductNestedInput
    userProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutProductPermissionInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutProductInput
    userProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductPermissionInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutProductInput
    userProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductPermissionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductPermissionInput, ProductUncheckedCreateWithoutProductPermissionInput>
  }

  export type FranchiseUserProductPermissionCreateWithoutProductPermissionInput = {
    permissionLevel?: number
    franchise: FranchiseCreateNestedOneWithoutFranchiseUserProductPermissionInput
    user: UserCreateNestedOneWithoutFranchiseUserProductPermissionInput
    product: ProductCreateNestedOneWithoutUserProductPermissionInput
  }

  export type FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput = {
    franchiseUserProductPermissionId?: number
    franchiseId: string
    userId: number
    permissionLevel?: number
  }

  export type FranchiseUserProductPermissionCreateOrConnectWithoutProductPermissionInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    create: XOR<FranchiseUserProductPermissionCreateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput>
  }

  export type ProductUpsertWithoutProductPermissionInput = {
    update: XOR<ProductUpdateWithoutProductPermissionInput, ProductUncheckedUpdateWithoutProductPermissionInput>
    create: XOR<ProductCreateWithoutProductPermissionInput, ProductUncheckedCreateWithoutProductPermissionInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductPermissionInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductPermissionInput, ProductUncheckedUpdateWithoutProductPermissionInput>
  }

  export type ProductUpdateWithoutProductPermissionInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUpdateManyWithoutProductNestedInput
    userProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductPermissionInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutProductNestedInput
    userProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type FranchiseUserProductPermissionUpsertWithWhereUniqueWithoutProductPermissionInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    update: XOR<FranchiseUserProductPermissionUpdateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedUpdateWithoutProductPermissionInput>
    create: XOR<FranchiseUserProductPermissionCreateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedCreateWithoutProductPermissionInput>
  }

  export type FranchiseUserProductPermissionUpdateWithWhereUniqueWithoutProductPermissionInput = {
    where: FranchiseUserProductPermissionWhereUniqueInput
    data: XOR<FranchiseUserProductPermissionUpdateWithoutProductPermissionInput, FranchiseUserProductPermissionUncheckedUpdateWithoutProductPermissionInput>
  }

  export type FranchiseUserProductPermissionUpdateManyWithWhereWithoutProductPermissionInput = {
    where: FranchiseUserProductPermissionScalarWhereInput
    data: XOR<FranchiseUserProductPermissionUpdateManyMutationInput, FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductPermissionInput>
  }

  export type FranchiseCreateWithoutFranchiseUserProductPermissionInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutFranchiseUserProductPermissionInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserUncheckedCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutFranchiseInput
    CableProductSettings?: CableProductSettingsUncheckedCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutFranchiseUserProductPermissionInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutFranchiseUserProductPermissionInput, FranchiseUncheckedCreateWithoutFranchiseUserProductPermissionInput>
  }

  export type UserCreateWithoutFranchiseUserProductPermissionInput = {
    userId: string
    name: string
    mobile?: string
    email?: string
    password: string
    webAuthToken?: string
    webAuthTime?: Date | string | null
    appAuthToken?: string
    appAuthTime?: Date | string | null
    appAuthVersion?: string
    isSystemUser?: boolean | null
    enabled?: boolean | null
    franchise: FranchiseCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFranchiseUserProductPermissionInput = {
    id?: number
    userId: string
    name: string
    mobile?: string
    email?: string
    password: string
    webAuthToken?: string
    webAuthTime?: Date | string | null
    appAuthToken?: string
    appAuthTime?: Date | string | null
    appAuthVersion?: string
    isSystemUser?: boolean | null
    enabled?: boolean | null
    franchiseId: string
  }

  export type UserCreateOrConnectWithoutFranchiseUserProductPermissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFranchiseUserProductPermissionInput, UserUncheckedCreateWithoutFranchiseUserProductPermissionInput>
  }

  export type ProductPermissionCreateWithoutUserProductPermissionInput = {
    permissionId: string
    permissionName?: string
    permissionDescription?: string
    product: ProductCreateNestedOneWithoutProductPermissionInput
  }

  export type ProductPermissionUncheckedCreateWithoutUserProductPermissionInput = {
    productPermissionId?: number
    productId: string
    permissionId: string
    permissionName?: string
    permissionDescription?: string
  }

  export type ProductPermissionCreateOrConnectWithoutUserProductPermissionInput = {
    where: ProductPermissionWhereUniqueInput
    create: XOR<ProductPermissionCreateWithoutUserProductPermissionInput, ProductPermissionUncheckedCreateWithoutUserProductPermissionInput>
  }

  export type ProductCreateWithoutUserProductPermissionInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutProductInput
    productPermission?: ProductPermissionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserProductPermissionInput = {
    productId: string
    productName: string
    productDescription?: string | null
    enabled?: boolean | null
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutProductInput
    productPermission?: ProductPermissionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserProductPermissionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserProductPermissionInput, ProductUncheckedCreateWithoutUserProductPermissionInput>
  }

  export type FranchiseUpsertWithoutFranchiseUserProductPermissionInput = {
    update: XOR<FranchiseUpdateWithoutFranchiseUserProductPermissionInput, FranchiseUncheckedUpdateWithoutFranchiseUserProductPermissionInput>
    create: XOR<FranchiseCreateWithoutFranchiseUserProductPermissionInput, FranchiseUncheckedCreateWithoutFranchiseUserProductPermissionInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutFranchiseUserProductPermissionInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutFranchiseUserProductPermissionInput, FranchiseUncheckedUpdateWithoutFranchiseUserProductPermissionInput>
  }

  export type FranchiseUpdateWithoutFranchiseUserProductPermissionInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutFranchiseUserProductPermissionInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUncheckedUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutFranchiseNestedInput
    CableProductSettings?: CableProductSettingsUncheckedUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseNestedInput
  }

  export type UserUpsertWithoutFranchiseUserProductPermissionInput = {
    update: XOR<UserUpdateWithoutFranchiseUserProductPermissionInput, UserUncheckedUpdateWithoutFranchiseUserProductPermissionInput>
    create: XOR<UserCreateWithoutFranchiseUserProductPermissionInput, UserUncheckedCreateWithoutFranchiseUserProductPermissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFranchiseUserProductPermissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFranchiseUserProductPermissionInput, UserUncheckedUpdateWithoutFranchiseUserProductPermissionInput>
  }

  export type UserUpdateWithoutFranchiseUserProductPermissionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchise?: FranchiseUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFranchiseUserProductPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductPermissionUpsertWithoutUserProductPermissionInput = {
    update: XOR<ProductPermissionUpdateWithoutUserProductPermissionInput, ProductPermissionUncheckedUpdateWithoutUserProductPermissionInput>
    create: XOR<ProductPermissionCreateWithoutUserProductPermissionInput, ProductPermissionUncheckedCreateWithoutUserProductPermissionInput>
    where?: ProductPermissionWhereInput
  }

  export type ProductPermissionUpdateToOneWithWhereWithoutUserProductPermissionInput = {
    where?: ProductPermissionWhereInput
    data: XOR<ProductPermissionUpdateWithoutUserProductPermissionInput, ProductPermissionUncheckedUpdateWithoutUserProductPermissionInput>
  }

  export type ProductPermissionUpdateWithoutUserProductPermissionInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutProductPermissionNestedInput
  }

  export type ProductPermissionUncheckedUpdateWithoutUserProductPermissionInput = {
    productPermissionId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutUserProductPermissionInput = {
    update: XOR<ProductUpdateWithoutUserProductPermissionInput, ProductUncheckedUpdateWithoutUserProductPermissionInput>
    create: XOR<ProductCreateWithoutUserProductPermissionInput, ProductUncheckedCreateWithoutUserProductPermissionInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUserProductPermissionInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUserProductPermissionInput, ProductUncheckedUpdateWithoutUserProductPermissionInput>
  }

  export type ProductUpdateWithoutUserProductPermissionInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUpdateManyWithoutProductNestedInput
    productPermission?: ProductPermissionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserProductPermissionInput = {
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    productDescription?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutProductNestedInput
    productPermission?: ProductPermissionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type FranchiseCreateWithoutCableProductSettingsInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutCableProductSettingsInput = {
    franchiseId: string
    franchiseName: string
    franchiseCode: string
    onboardingDate?: Date | string
    enabled?: boolean | null
    user?: UserUncheckedCreateNestedManyWithoutFranchiseInput
    franchiseProduct?: FranchiseProductUncheckedCreateNestedManyWithoutFranchiseInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedCreateNestedManyWithoutFranchiseInput
    parentFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutParentFranchiseInput
    childFranchiseRelation?: FranchiseRelationUncheckedCreateNestedManyWithoutChildFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutCableProductSettingsInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutCableProductSettingsInput, FranchiseUncheckedCreateWithoutCableProductSettingsInput>
  }

  export type FranchiseUpsertWithoutCableProductSettingsInput = {
    update: XOR<FranchiseUpdateWithoutCableProductSettingsInput, FranchiseUncheckedUpdateWithoutCableProductSettingsInput>
    create: XOR<FranchiseCreateWithoutCableProductSettingsInput, FranchiseUncheckedCreateWithoutCableProductSettingsInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutCableProductSettingsInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutCableProductSettingsInput, FranchiseUncheckedUpdateWithoutCableProductSettingsInput>
  }

  export type FranchiseUpdateWithoutCableProductSettingsInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUpdateManyWithoutChildFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutCableProductSettingsInput = {
    franchiseId?: StringFieldUpdateOperationsInput | string
    franchiseName?: StringFieldUpdateOperationsInput | string
    franchiseCode?: StringFieldUpdateOperationsInput | string
    onboardingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUncheckedUpdateManyWithoutFranchiseNestedInput
    franchiseProduct?: FranchiseProductUncheckedUpdateManyWithoutFranchiseNestedInput
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseNestedInput
    parentFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseNestedInput
    childFranchiseRelation?: FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseNestedInput
  }

  export type UserUpdateWithoutFranchiseInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFranchiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    FranchiseUserProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFranchiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    webAuthToken?: StringFieldUpdateOperationsInput | string
    webAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthToken?: StringFieldUpdateOperationsInput | string
    appAuthTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appAuthVersion?: StringFieldUpdateOperationsInput | string
    isSystemUser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseProductUpdateWithoutFranchiseInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutFranchiseProductNestedInput
  }

  export type FranchiseProductUncheckedUpdateWithoutFranchiseInput = {
    franchiseProductId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseProductUncheckedUpdateManyWithoutFranchiseInput = {
    franchiseProductId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CableProductSettingsUpdateWithoutFranchiseInput = {
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    bankingName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppReminderTemplate?: StringFieldUpdateOperationsInput | string
    locationSettings?: StringFieldUpdateOperationsInput | string
    filterSettings?: StringFieldUpdateOperationsInput | string
    bsnlSettings?: StringFieldUpdateOperationsInput | string
    oltSettings?: StringFieldUpdateOperationsInput | string
    tactvSettings?: StringFieldUpdateOperationsInput | string
    gtplSettings?: StringFieldUpdateOperationsInput | string
    vkdigitalSettings?: StringFieldUpdateOperationsInput | string
  }

  export type CableProductSettingsUncheckedUpdateWithoutFranchiseInput = {
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    bankingName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppReminderTemplate?: StringFieldUpdateOperationsInput | string
    locationSettings?: StringFieldUpdateOperationsInput | string
    filterSettings?: StringFieldUpdateOperationsInput | string
    bsnlSettings?: StringFieldUpdateOperationsInput | string
    oltSettings?: StringFieldUpdateOperationsInput | string
    tactvSettings?: StringFieldUpdateOperationsInput | string
    gtplSettings?: StringFieldUpdateOperationsInput | string
    vkdigitalSettings?: StringFieldUpdateOperationsInput | string
  }

  export type CableProductSettingsUncheckedUpdateManyWithoutFranchiseInput = {
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    bankingName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsAppReminderTemplate?: StringFieldUpdateOperationsInput | string
    locationSettings?: StringFieldUpdateOperationsInput | string
    filterSettings?: StringFieldUpdateOperationsInput | string
    bsnlSettings?: StringFieldUpdateOperationsInput | string
    oltSettings?: StringFieldUpdateOperationsInput | string
    tactvSettings?: StringFieldUpdateOperationsInput | string
    gtplSettings?: StringFieldUpdateOperationsInput | string
    vkdigitalSettings?: StringFieldUpdateOperationsInput | string
  }

  export type FranchiseUserProductPermissionUpdateWithoutFranchiseInput = {
    permissionLevel?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    productPermission?: ProductPermissionUpdateOneRequiredWithoutUserProductPermissionNestedInput
    product?: ProductUpdateOneRequiredWithoutUserProductPermissionNestedInput
  }

  export type FranchiseUserProductPermissionUncheckedUpdateWithoutFranchiseInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutFranchiseInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseRelationUpdateWithoutParentFranchiseInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    childFranchise?: FranchiseUpdateOneRequiredWithoutChildFranchiseRelationNestedInput
  }

  export type FranchiseRelationUncheckedUpdateWithoutParentFranchiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    childFranchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseRelationUncheckedUpdateManyWithoutParentFranchiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    childFranchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseRelationUpdateWithoutChildFranchiseInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentFranchise?: FranchiseUpdateOneRequiredWithoutParentFranchiseRelationNestedInput
  }

  export type FranchiseRelationUncheckedUpdateWithoutChildFranchiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentFranchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseRelationUncheckedUpdateManyWithoutChildFranchiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentFranchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseUserProductPermissionUpdateWithoutUserInput = {
    permissionLevel?: IntFieldUpdateOperationsInput | number
    franchise?: FranchiseUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    productPermission?: ProductPermissionUpdateOneRequiredWithoutUserProductPermissionNestedInput
    product?: ProductUpdateOneRequiredWithoutUserProductPermissionNestedInput
  }

  export type FranchiseUserProductPermissionUncheckedUpdateWithoutUserInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutUserInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseProductUpdateWithoutProductInput = {
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    franchise?: FranchiseUpdateOneRequiredWithoutFranchiseProductNestedInput
  }

  export type FranchiseProductUncheckedUpdateWithoutProductInput = {
    franchiseProductId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type FranchiseProductUncheckedUpdateManyWithoutProductInput = {
    franchiseProductId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductPermissionUpdateWithoutProductInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
    userProductPermission?: FranchiseUserProductPermissionUpdateManyWithoutProductPermissionNestedInput
  }

  export type ProductPermissionUncheckedUpdateWithoutProductInput = {
    productPermissionId?: IntFieldUpdateOperationsInput | number
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
    userProductPermission?: FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductPermissionNestedInput
  }

  export type ProductPermissionUncheckedUpdateManyWithoutProductInput = {
    productPermissionId?: IntFieldUpdateOperationsInput | number
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionName?: StringFieldUpdateOperationsInput | string
    permissionDescription?: StringFieldUpdateOperationsInput | string
  }

  export type FranchiseUserProductPermissionUpdateWithoutProductInput = {
    permissionLevel?: IntFieldUpdateOperationsInput | number
    franchise?: FranchiseUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    user?: UserUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    productPermission?: ProductPermissionUpdateOneRequiredWithoutUserProductPermissionNestedInput
  }

  export type FranchiseUserProductPermissionUncheckedUpdateWithoutProductInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    permissionId?: StringFieldUpdateOperationsInput | string
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseUserProductPermissionUpdateWithoutProductPermissionInput = {
    permissionLevel?: IntFieldUpdateOperationsInput | number
    franchise?: FranchiseUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    user?: UserUpdateOneRequiredWithoutFranchiseUserProductPermissionNestedInput
    product?: ProductUpdateOneRequiredWithoutUserProductPermissionNestedInput
  }

  export type FranchiseUserProductPermissionUncheckedUpdateWithoutProductPermissionInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }

  export type FranchiseUserProductPermissionUncheckedUpdateManyWithoutProductPermissionInput = {
    franchiseUserProductPermissionId?: IntFieldUpdateOperationsInput | number
    franchiseId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    permissionLevel?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FranchiseCountOutputTypeDefaultArgs instead
     */
    export type FranchiseCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FranchiseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductPermissionCountOutputTypeDefaultArgs instead
     */
    export type ProductPermissionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductPermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FranchiseDefaultArgs instead
     */
    export type FranchiseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FranchiseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FranchiseRelationDefaultArgs instead
     */
    export type FranchiseRelationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FranchiseRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FranchiseProductDefaultArgs instead
     */
    export type FranchiseProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FranchiseProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductPermissionDefaultArgs instead
     */
    export type ProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductPermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FranchiseUserProductPermissionDefaultArgs instead
     */
    export type FranchiseUserProductPermissionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FranchiseUserProductPermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CableProductSettingsDefaultArgs instead
     */
    export type CableProductSettingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CableProductSettingsDefaultArgs<ExtArgs>

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