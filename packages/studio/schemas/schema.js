/* eslint-disable import/no-unresolved */
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import client from "./client";
import deck from "./deck";
import colorBlock from "./slides/colorBlock";
import england from "./slides/england";
import france from "./slides/france";
import germany from "./slides/germany";
import greece from "./slides/greece";
import italy from "./slides/italy";
import romania from "./slides/romania";
import scotland from "./slides/scotland";
import turkey from "./slides/turkey";
import wales from "./slides/wales";

export default createSchema({
  name: "default",
  types: [
    ...schemaTypes,
    client,
    deck,
    italy,
    scotland,
    wales,
    romania,
    greece,
    france,
    germany,
    england,
    turkey,
    colorBlock,
  ],
});
