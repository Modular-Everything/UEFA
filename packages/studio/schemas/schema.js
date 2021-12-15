/* eslint-disable import/no-unresolved */
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import client from "./client";
import deck from "./deck";
import colorBlock from "./slides/colorBlock";
import italy from "./slides/italy";
import scotland from "./slides/scotland";

export default createSchema({
  name: "default",
  types: [...schemaTypes, client, deck, italy, scotland, colorBlock],
});
