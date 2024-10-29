# cds-parse-bug

## Description

When importing from `@sap/cds/common` the parse (also `reflect()`) functions 
throw an error:

-  `CompilationError: CDS compilation failed (@sap/cds-compiler v5.3.0)
   db/schema.cds:2:10-14: Error: Artifact “cuid” has not been found (in using:“cuid”)`

The code in this reproduction a copy/paste from the official docs...
https://cap.cloud.sap/docs/node.js/cds-compile#single-in-memory-sources

## Question:

What is needed for `@sap/cds/common` to be recognized when using the programmatic API?

## Reproduce

- `npm install`
- `node index.js`
