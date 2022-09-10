# data-mongo
Contains Mongoose schemas and models. 

Re-exports the `@fgo-planner/data-core` package. Also exports type definitions `@fgo-panner/data-types`, with the `_id` type specified as `ObjectId` instead of `number` where applicable. Services that directly access the database should add this package as a dependency instead of `@fgo-planner/data-core` or `@fgo-planner/data-types`.
