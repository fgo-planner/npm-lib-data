# fgo-planner/npm-lib-data

Contains Mongo (Mongoose) schemas and models, and the corresponding type definitions.
## Requirements

### Target JS Versions
* data-constants: ES6
* data-mongo: ES2022
* data-types: ES6
* data-utils: ES6

### Installing/Publishing Packages
Each module in this repository should come with a `.npmrc.example` file at the root level. If you need to install and/or publish `@fgo-planner` packages for the module, make a copy of the file in the same directory and rename it to `.npmrc`. Then, go into file and replace `TOKEN` with your personal access token in the following line:

```//npm.pkg.github.com/:_authToken=TOKEN```

This is required for both installing and publishing the `@fgo-planner` packages.

Also do not forget to increment version number before publishing.

## Tests
If VSCode cannot find the types for jest, run `npm install` at the root directory.
