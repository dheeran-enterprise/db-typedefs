
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.2.0
 * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
 */
Prisma.prismaVersion = {
  client: "5.2.0",
  engine: "2804dc98259d2ea960602aca6b8e7fdc03c1758f"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  enabled: 'enabled'
};

exports.Prisma.CableCustomerScalarFieldEnum = {
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

exports.Prisma.CableCollectionScalarFieldEnum = {
  customerId: 'customerId',
  month: 'month',
  collectionDate: 'collectionDate',
  collectionBy: 'collectionBy',
  settlementDate: 'settlementDate',
  settlementTo: 'settlementTo',
  notes: 'notes'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  CableCustomer: 'CableCustomer',
  CableCollection: 'CableCollection'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/anandkumar/pocs/api-server/node_modules/.prisma/dheeranclients/franchise",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../prisma/sqliteDBs/franchise/.env"
  },
  "relativePath": "../../../../prisma/sqliteDBs/franchise",
  "clientVersion": "5.2.0",
  "engineVersion": "2804dc98259d2ea960602aca6b8e7fdc03c1758f",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gREIgc2NoZW1hIGRlc2lnbjogaHR0cHM6Ly9kYm1sLmRiZGlhZ3JhbS5pby9ob21lLwoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9IGVudigiREJfTU9ERUxfVFlQRVNfRElSIikKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAic3FsaXRlIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgovLyBodHRwczovL2dpdGh1Yi5jb20vbm90aXotZGV2L3ByaXNtYS1kYm1sLWdlbmVyYXRvcgovLyBTZWUgdGhlIG91dHB1dCBpbiBodHRwczovL2RiZGlhZ3JhbS5pby9kCmdlbmVyYXRvciBkYm1sIHsKICBwcm92aWRlciAgICAgICAgICAgID0gInByaXNtYS1kYm1sLWdlbmVyYXRvciIKICBvdXRwdXQgICAgICAgICAgICAgID0gZW52KCJET0NTX0RJUiIpCiAgcHJvamVjdERhdGFiYXNlVHlwZSA9ICJzcWxpdGUiCn0KCmdlbmVyYXRvciBkb2NzIHsKICBwcm92aWRlciA9ICJub2RlIG5vZGVfbW9kdWxlcy9wcmlzbWEtZG9jcy1nZW5lcmF0b3IiCiAgb3V0cHV0ICAgPSBlbnYoIkRPQ1NfRElSIikKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICBJbnQgICAgICBAaWQKICB1c2VySWQgIFN0cmluZyAgIEB1bmlxdWUKICBuYW1lICAgIFN0cmluZz8KICBlbmFibGVkIEJvb2xlYW4/IEBkZWZhdWx0KHRydWUpCgogIENvbGxlY3Rpb25CeSBDYWJsZUNvbGxlY3Rpb25bXSBAcmVsYXRpb24obmFtZTogImNvbGxlY3Rpb25CeSIpCiAgU2V0dGxlbWVudFRvIENhYmxlQ29sbGVjdGlvbltdIEByZWxhdGlvbihuYW1lOiAic2V0dGxlbWVudFRvIikKfQoKbW9kZWwgQ2FibGVDdXN0b21lciB7CiAgY3VzdG9tZXJJZCAgIFN0cmluZyAgIEBpZAogIG5hbWUgICAgICAgICBTdHJpbmcKICBhcmVhICAgICAgICAgU3RyaW5nPyAgQGRlZmF1bHQoIiIpCiAgbW9iaWxlICAgICAgIFN0cmluZz8gIEBkZWZhdWx0KCIiKQogIHN0YiAgICAgICAgICBTdHJpbmc/ICBAZGVmYXVsdCgiIikKICBzdGJTdGF0dXMgICAgU3RyaW5nPyAgQGRlZmF1bHQoIiIpCiAgc3RiVHlwZSAgICAgIFN0cmluZz8gIEBkZWZhdWx0KCIiKQogIGFsbG93Q3JlZGl0ICBCb29sZWFuICBAZGVmYXVsdChmYWxzZSkKICBzdGF0dXMgICAgICAgQm9vbGVhbiAgQGRlZmF1bHQodHJ1ZSkKICBsYXRpdHVkZSAgICAgRmxvYXQ/ICAgQGRlZmF1bHQoMCkKICBsb25naXR1ZGUgICAgRmxvYXQ/ICAgQGRlZmF1bHQoMCkKICBjb25uZWN0aW9uT24gRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgbm90ZXMgICAgICAgIFN0cmluZz8gIEBkZWZhdWx0KCIiKQogIHVwaUlkcyAgICAgICBTdHJpbmc/ICBAZGVmYXVsdCgiIikKICBiaWxsICAgICAgICAgSW50PyAgICAgQGRlZmF1bHQoMCkKICBiYWxhbmNlICAgICAgSW50PyAgICAgQGRlZmF1bHQoMCkKICBjdXN0b20xU3RyICAgU3RyaW5nPyAgQGRlZmF1bHQoIiIpCiAgY3VzdG9tMlN0ciAgIFN0cmluZz8gIEBkZWZhdWx0KCIiKQogIGN1c3RvbTNTdHIgICBTdHJpbmc/ICBAZGVmYXVsdCgiIikKICBjdXN0b200U3RyICAgU3RyaW5nPyAgQGRlZmF1bHQoIiIpCiAgY3VzdG9tMU51bSAgIEludD8gICAgIEBkZWZhdWx0KDApCiAgY3VzdG9tMk51bSAgIEludD8gICAgIEBkZWZhdWx0KDApCgogIENhYmxlQ29sbGVjdGlvbiBDYWJsZUNvbGxlY3Rpb25bXQp9Cgptb2RlbCBDYWJsZUNvbGxlY3Rpb24gewogIGN1c3RvbWVySWQgICAgICAgU3RyaW5nCiAgY3VzdG9tZXIgICAgICAgICBDYWJsZUN1c3RvbWVyIEByZWxhdGlvbihmaWVsZHM6IFtjdXN0b21lcklkXSwgcmVmZXJlbmNlczogW2N1c3RvbWVySWRdKQogIG1vbnRoICAgICAgICAgICAgU3RyaW5nCiAgY29sbGVjdGlvbkRhdGUgICBEYXRlVGltZSAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNvbGxlY3Rpb25CeSAgICAgSW50CiAgY29sbGVjdGlvbkJ5VXNlciBVc2VyICAgICAgICAgIEByZWxhdGlvbihuYW1lOiAiY29sbGVjdGlvbkJ5IiwgZmllbGRzOiBbY29sbGVjdGlvbkJ5XSwgcmVmZXJlbmNlczogW2lkXSkKICBzZXR0bGVtZW50RGF0ZSAgIERhdGVUaW1lPwogIHNldHRsZW1lbnRUbyAgICAgSW50CiAgc2V0dGxlbWVudFRvVXNlciBVc2VyICAgICAgICAgIEByZWxhdGlvbihuYW1lOiAic2V0dGxlbWVudFRvIiwgZmllbGRzOiBbc2V0dGxlbWVudFRvXSwgcmVmZXJlbmNlczogW2lkXSkKICBub3RlcyAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGRlZmF1bHQoIiIpCgogIEBAaWQoW2N1c3RvbWVySWQsIG1vbnRoXSkKfQo=",
  "inlineSchemaHash": "265da14873e507a68285f5f493403e16220bbc457fa1810b3d567293a185c8c9"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CollectionBy\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CableCollection\",\"relationName\":\"collectionBy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SettlementTo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CableCollection\",\"relationName\":\"settlementTo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CableCustomer\":{\"dbName\":null,\"fields\":[{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"area\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stbStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stbType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowCredit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connectionOn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upiIds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bill\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom1Str\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom2Str\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom3Str\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom4Str\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom1Num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"custom2Num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CableCollection\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CableCollection\",\"relationName\":\"CableCollectionToCableCustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CableCollection\":{\"dbName\":null,\"fields\":[{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CableCustomer\",\"relationName\":\"CableCollectionToCableCustomer\",\"relationFromFields\":[\"customerId\"],\"relationToFields\":[\"customerId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collectionDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collectionBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"collectionByUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"collectionBy\",\"relationFromFields\":[\"collectionBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settlementDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settlementTo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"settlementToUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"settlementTo\",\"relationFromFields\":[\"settlementTo\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"customerId\",\"month\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

