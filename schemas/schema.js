/* eslint-disable import/no-unresolved */
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import clients from "./clients";

export default createSchema({
  name: "default",
  types: [...schemaTypes, clients],
});
