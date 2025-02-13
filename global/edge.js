
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

exports.Prisma.FranchiseScalarFieldEnum = {
  franchiseId: 'franchiseId',
  franchiseName: 'franchiseName',
  franchiseCode: 'franchiseCode',
  onboardingDate: 'onboardingDate',
  enabled: 'enabled'
};

exports.Prisma.FranchiseRelationScalarFieldEnum = {
  id: 'id',
  parentFranchiseId: 'parentFranchiseId',
  childFranchiseId: 'childFranchiseId',
  enabled: 'enabled'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.ProductScalarFieldEnum = {
  productId: 'productId',
  productName: 'productName',
  productDescription: 'productDescription',
  enabled: 'enabled'
};

exports.Prisma.FranchiseProductScalarFieldEnum = {
  franchiseProductId: 'franchiseProductId',
  franchiseId: 'franchiseId',
  productId: 'productId',
  enabled: 'enabled'
};

exports.Prisma.ProductPermissionScalarFieldEnum = {
  productPermissionId: 'productPermissionId',
  productId: 'productId',
  permissionId: 'permissionId',
  permissionName: 'permissionName',
  permissionDescription: 'permissionDescription'
};

exports.Prisma.FranchiseUserProductPermissionScalarFieldEnum = {
  franchiseUserProductPermissionId: 'franchiseUserProductPermissionId',
  franchiseId: 'franchiseId',
  userId: 'userId',
  productId: 'productId',
  permissionId: 'permissionId',
  permissionLevel: 'permissionLevel'
};

exports.Prisma.CableProductSettingsScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Franchise: 'Franchise',
  FranchiseRelation: 'FranchiseRelation',
  User: 'User',
  Product: 'Product',
  FranchiseProduct: 'FranchiseProduct',
  ProductPermission: 'ProductPermission',
  FranchiseUserProductPermission: 'FranchiseUserProductPermission',
  CableProductSettings: 'CableProductSettings'
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
      "value": "/Users/anandkumar/pocs/api-server/node_modules/.prisma/dheeranclients/global",
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
    "schemaEnvPath": "../../../../prisma/sqliteDBs/global/.env"
  },
  "relativePath": "../../../../prisma/sqliteDBs/global",
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
  "inlineSchema": "Ly8gREIgc2NoZW1hIGRlc2lnbjogaHR0cHM6Ly9kYm1sLmRiZGlhZ3JhbS5pby9ob21lLwoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9IGVudigiREJfTU9ERUxfVFlQRVNfRElSIikKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAic3FsaXRlIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgovLyBodHRwczovL2dpdGh1Yi5jb20vbm90aXotZGV2L3ByaXNtYS1kYm1sLWdlbmVyYXRvcgovLyBTZWUgdGhlIG91dHB1dCBpbiBodHRwczovL2RiZGlhZ3JhbS5pby9kCmdlbmVyYXRvciBkYm1sIHsKICBwcm92aWRlciAgICAgICAgICAgID0gInByaXNtYS1kYm1sLWdlbmVyYXRvciIKICBvdXRwdXQgICAgICAgICAgICAgID0gZW52KCJET0NTX0RJUiIpCiAgcHJvamVjdERhdGFiYXNlVHlwZSA9ICJzcWxpdGUiCn0KCmdlbmVyYXRvciBkb2NzIHsKICBwcm92aWRlciA9ICJub2RlIG5vZGVfbW9kdWxlcy9wcmlzbWEtZG9jcy1nZW5lcmF0b3IiCiAgb3V0cHV0ICAgPSBlbnYoIkRPQ1NfRElSIikKfQoKbW9kZWwgRnJhbmNoaXNlIHsKICBmcmFuY2hpc2VJZCAgICBTdHJpbmcgICBAaWQKICBmcmFuY2hpc2VOYW1lICBTdHJpbmcKICBmcmFuY2hpc2VDb2RlICBTdHJpbmcgICBAdW5pcXVlCiAgb25ib2FyZGluZ0RhdGUgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgZW5hYmxlZCAgICAgICAgQm9vbGVhbj8gQGRlZmF1bHQodHJ1ZSkKCiAgdXNlciAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJbXQogIGZyYW5jaGlzZVByb2R1Y3QgICAgICAgICAgICAgICBGcmFuY2hpc2VQcm9kdWN0W10KICBDYWJsZVByb2R1Y3RTZXR0aW5ncyAgICAgICAgICAgQ2FibGVQcm9kdWN0U2V0dGluZ3NbXQogIEZyYW5jaGlzZVVzZXJQcm9kdWN0UGVybWlzc2lvbiBGcmFuY2hpc2VVc2VyUHJvZHVjdFBlcm1pc3Npb25bXQogIHBhcmVudEZyYW5jaGlzZVJlbGF0aW9uICAgICAgICBGcmFuY2hpc2VSZWxhdGlvbltdICAgICAgICAgICAgICBAcmVsYXRpb24oInBhcmVudCIpCiAgY2hpbGRGcmFuY2hpc2VSZWxhdGlvbiAgICAgICAgIEZyYW5jaGlzZVJlbGF0aW9uW10gICAgICAgICAgICAgIEByZWxhdGlvbigiY2hpbGQiKQp9Cgptb2RlbCBGcmFuY2hpc2VSZWxhdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcGFyZW50RnJhbmNoaXNlSWQgU3RyaW5nCiAgcGFyZW50RnJhbmNoaXNlICAgRnJhbmNoaXNlIEByZWxhdGlvbigicGFyZW50IiwgZmllbGRzOiBbcGFyZW50RnJhbmNoaXNlSWRdLCByZWZlcmVuY2VzOiBbZnJhbmNoaXNlSWRdKQogIGNoaWxkRnJhbmNoaXNlSWQgIFN0cmluZwogIGNoaWxkRnJhbmNoaXNlICAgIEZyYW5jaGlzZSBAcmVsYXRpb24oImNoaWxkIiwgZmllbGRzOiBbY2hpbGRGcmFuY2hpc2VJZF0sIHJlZmVyZW5jZXM6IFtmcmFuY2hpc2VJZF0pCiAgZW5hYmxlZCAgICAgICAgICAgQm9vbGVhbj8gIEBkZWZhdWx0KHRydWUpCgogIEBAdW5pcXVlKFtwYXJlbnRGcmFuY2hpc2VJZChzb3J0OiBBc2MpLCBjaGlsZEZyYW5jaGlzZUlkKHNvcnQ6IEFzYyldKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBtb2JpbGUgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoIiIpCiAgZW1haWwgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KCIiKQogIHBhc3N3b3JkICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICB3ZWJBdXRoVG9rZW4gICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoIiIpCiAgd2ViQXV0aFRpbWUgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIGFwcEF1dGhUb2tlbiAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgiIikKICBhcHBBdXRoVGltZSAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgYXBwQXV0aFZlcnNpb24gICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KCIiKQogIGlzU3lzdGVtVXNlciAgICAgICAgICAgICAgICAgICBCb29sZWFuPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBlbmFibGVkICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbj8gICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkKICBmcmFuY2hpc2UgICAgICAgICAgICAgICAgICAgICAgRnJhbmNoaXNlICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2ZyYW5jaGlzZUlkXSwgcmVmZXJlbmNlczogW2ZyYW5jaGlzZUlkXSkKICBmcmFuY2hpc2VJZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgRnJhbmNoaXNlVXNlclByb2R1Y3RQZXJtaXNzaW9uIEZyYW5jaGlzZVVzZXJQcm9kdWN0UGVybWlzc2lvbltdCn0KCm1vZGVsIFByb2R1Y3QgewogIHByb2R1Y3RJZCAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQKICBwcm9kdWN0TmFtZSAgICAgICAgICAgU3RyaW5nCiAgcHJvZHVjdERlc2NyaXB0aW9uICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KCIiKQogIGVuYWJsZWQgICAgICAgICAgICAgICBCb29sZWFuPyAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGZyYW5jaGlzZVByb2R1Y3QgICAgICBGcmFuY2hpc2VQcm9kdWN0W10KICBwcm9kdWN0UGVybWlzc2lvbiAgICAgUHJvZHVjdFBlcm1pc3Npb25bXQogIHVzZXJQcm9kdWN0UGVybWlzc2lvbiBGcmFuY2hpc2VVc2VyUHJvZHVjdFBlcm1pc3Npb25bXQp9Cgptb2RlbCBGcmFuY2hpc2VQcm9kdWN0IHsKICBmcmFuY2hpc2VQcm9kdWN0SWQgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZnJhbmNoaXNlICAgICAgICAgIEZyYW5jaGlzZSBAcmVsYXRpb24oZmllbGRzOiBbZnJhbmNoaXNlSWRdLCByZWZlcmVuY2VzOiBbZnJhbmNoaXNlSWRdKQogIGZyYW5jaGlzZUlkICAgICAgICBTdHJpbmcKICBwcm9kdWN0ICAgICAgICAgICAgUHJvZHVjdCAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkXSkKICBwcm9kdWN0SWQgICAgICAgICAgU3RyaW5nCiAgZW5hYmxlZCAgICAgICAgICAgIEJvb2xlYW4/ICBAZGVmYXVsdCh0cnVlKQoKICBAQHVuaXF1ZShbZnJhbmNoaXNlSWQoc29ydDogQXNjKSwgcHJvZHVjdElkKHNvcnQ6IEFzYyldKQp9Cgptb2RlbCBQcm9kdWN0UGVybWlzc2lvbiB7CiAgcHJvZHVjdFBlcm1pc3Npb25JZCAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcHJvZHVjdCAgICAgICAgICAgICAgIFByb2R1Y3QgICAgICAgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkXSkKICBwcm9kdWN0SWQgICAgICAgICAgICAgU3RyaW5nCiAgcGVybWlzc2lvbklkICAgICAgICAgIFN0cmluZwogIHBlcm1pc3Npb25OYW1lICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgiIikKICBwZXJtaXNzaW9uRGVzY3JpcHRpb24gU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoIiIpCiAgdXNlclByb2R1Y3RQZXJtaXNzaW9uIEZyYW5jaGlzZVVzZXJQcm9kdWN0UGVybWlzc2lvbltdCgogIEBAdW5pcXVlKFtwcm9kdWN0SWQoc29ydDogQXNjKSwgcGVybWlzc2lvbklkKHNvcnQ6IEFzYyldKQp9Cgptb2RlbCBGcmFuY2hpc2VVc2VyUHJvZHVjdFBlcm1pc3Npb24gewogIGZyYW5jaGlzZVVzZXJQcm9kdWN0UGVybWlzc2lvbklkIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZnJhbmNoaXNlICAgICAgICAgICAgICAgICAgICAgICAgRnJhbmNoaXNlICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2ZyYW5jaGlzZUlkXSwgcmVmZXJlbmNlczogW2ZyYW5jaGlzZUlkXSkKICBmcmFuY2hpc2VJZCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICB1c2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQKICBwcm9kdWN0UGVybWlzc2lvbiAgICAgICAgICAgICAgICBQcm9kdWN0UGVybWlzc2lvbiBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkLCBwZXJtaXNzaW9uSWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkLCBwZXJtaXNzaW9uSWRdKQogIHByb2R1Y3QgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkXSkKICBwcm9kdWN0SWQgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBwZXJtaXNzaW9uSWQgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBwZXJtaXNzaW9uTGV2ZWwgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICBAZGVmYXVsdCgxKQoKICBAQHVuaXF1ZShbZnJhbmNoaXNlSWQoc29ydDogQXNjKSwgcHJvZHVjdElkKHNvcnQ6IEFzYyksIHVzZXJJZChzb3J0OiBBc2MpLCBwZXJtaXNzaW9uSWQoc29ydDogQXNjKV0pCn0KCm1vZGVsIENhYmxlUHJvZHVjdFNldHRpbmdzIHsKICBmcmFuY2hpc2VJZCAgICAgICAgICAgICAgU3RyaW5nICAgIEBpZAogIGZyYW5jaGlzZSAgICAgICAgICAgICAgICBGcmFuY2hpc2UgQHJlbGF0aW9uKGZpZWxkczogW2ZyYW5jaGlzZUlkXSwgcmVmZXJlbmNlczogW2ZyYW5jaGlzZUlkXSkKICB1cGlJZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGJhbmtpbmdOYW1lICAgICAgICAgICAgICBTdHJpbmc/CiAgd2hhdHNBcHBSZW1pbmRlclRlbXBsYXRlIFN0cmluZyAgICBAZGVmYXVsdCgiIikKICBsb2NhdGlvblNldHRpbmdzICAgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCJ7fSIpCiAgZmlsdGVyU2V0dGluZ3MgICAgICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgie30iKQogIGJzbmxTZXR0aW5ncyAgICAgICAgICAgICBTdHJpbmcgICAgQGRlZmF1bHQoInt9IikKICBvbHRTZXR0aW5ncyAgICAgICAgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCJ7fSIpCiAgdGFjdHZTZXR0aW5ncyAgICAgICAgICAgIFN0cmluZyAgICBAZGVmYXVsdCgie30iKQogIGd0cGxTZXR0aW5ncyAgICAgICAgICAgICBTdHJpbmcgICAgQGRlZmF1bHQoInt9IikKICB2a2RpZ2l0YWxTZXR0aW5ncyAgICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCJ7fSIpCn0K",
  "inlineSchemaHash": "7cfbf4a4dc03c92465014626a8349769d7535d834551b0463b4b5497448f6fe2"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Franchise\":{\"dbName\":null,\"fields\":[{\"name\":\"franchiseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchiseName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchiseCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"onboardingDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FranchiseToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchiseProduct\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseProduct\",\"relationName\":\"FranchiseToFranchiseProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CableProductSettings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CableProductSettings\",\"relationName\":\"CableProductSettingsToFranchise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FranchiseUserProductPermission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseUserProductPermission\",\"relationName\":\"FranchiseToFranchiseUserProductPermission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentFranchiseRelation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseRelation\",\"relationName\":\"parent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"childFranchiseRelation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseRelation\",\"relationName\":\"child\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FranchiseRelation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentFranchiseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentFranchise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Franchise\",\"relationName\":\"parent\",\"relationFromFields\":[\"parentFranchiseId\"],\"relationToFields\":[\"franchiseId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"childFranchiseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"childFranchise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Franchise\",\"relationName\":\"child\",\"relationFromFields\":[\"childFranchiseId\"],\"relationToFields\":[\"franchiseId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"parentFranchiseId\",\"childFranchiseId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"parentFranchiseId\",\"childFranchiseId\"]}],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webAuthToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webAuthTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appAuthToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appAuthTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"appAuthVersion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isSystemUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Franchise\",\"relationName\":\"FranchiseToUser\",\"relationFromFields\":[\"franchiseId\"],\"relationToFields\":[\"franchiseId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchiseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FranchiseUserProductPermission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseUserProductPermission\",\"relationName\":\"FranchiseUserProductPermissionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchiseProduct\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseProduct\",\"relationName\":\"FranchiseProductToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productPermission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductPermission\",\"relationName\":\"ProductToProductPermission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProductPermission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseUserProductPermission\",\"relationName\":\"FranchiseUserProductPermissionToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FranchiseProduct\":{\"dbName\":null,\"fields\":[{\"name\":\"franchiseProductId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Franchise\",\"relationName\":\"FranchiseToFranchiseProduct\",\"relationFromFields\":[\"franchiseId\"],\"relationToFields\":[\"franchiseId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchiseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"FranchiseProductToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"franchiseId\",\"productId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"franchiseId\",\"productId\"]}],\"isGenerated\":false},\"ProductPermission\":{\"dbName\":null,\"fields\":[{\"name\":\"productPermissionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToProductPermission\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissionName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissionDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProductPermission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FranchiseUserProductPermission\",\"relationName\":\"FranchiseUserProductPermissionToProductPermission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"productId\",\"permissionId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"productId\",\"permissionId\"]}],\"isGenerated\":false},\"FranchiseUserProductPermission\":{\"dbName\":null,\"fields\":[{\"name\":\"franchiseUserProductPermissionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Franchise\",\"relationName\":\"FranchiseToFranchiseUserProductPermission\",\"relationFromFields\":[\"franchiseId\"],\"relationToFields\":[\"franchiseId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchiseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FranchiseUserProductPermissionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productPermission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductPermission\",\"relationName\":\"FranchiseUserProductPermissionToProductPermission\",\"relationFromFields\":[\"productId\",\"permissionId\"],\"relationToFields\":[\"productId\",\"permissionId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"FranchiseUserProductPermissionToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissionLevel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"franchiseId\",\"productId\",\"userId\",\"permissionId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"franchiseId\",\"productId\",\"userId\",\"permissionId\"]}],\"isGenerated\":false},\"CableProductSettings\":{\"dbName\":null,\"fields\":[{\"name\":\"franchiseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"franchise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Franchise\",\"relationName\":\"CableProductSettingsToFranchise\",\"relationFromFields\":[\"franchiseId\"],\"relationToFields\":[\"franchiseId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upiId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankingName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"whatsAppReminderTemplate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locationSettings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filterSettings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bsnlSettings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oltSettings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tactvSettings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gtplSettings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vkdigitalSettings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"{}\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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

