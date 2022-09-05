# data-mongo
Mongoose schemas and models. Also exports type definitions of database entities from `@fgo-panner/data-types`, with the `_id` type specified as `ObjectId` instead of `number` where applicable. Services that directly access the database should import types from this package instead of `data-types`.