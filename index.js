const cds = require("@sap/cds-dk");

let csn = cds.compile({
  "db/schema.cds": `
  using {cuid} from '@sap/cds/common';
  entity Foo : cuid { foo:String }
  entity Bar as projection on Foo;
  extend Foo with { bar:String }
`,
});

console.log(csn);
