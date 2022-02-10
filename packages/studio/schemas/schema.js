/* eslint-disable import/no-unresolved */
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import client from "./client";
import deck from "./deck";
import austria from "./slides/austria";
import belgium from "./slides/belgium";
import colorBlock from "./slides/colorBlock";
import denmark from "./slides/denmark";
import england from "./slides/england";
import france from "./slides/france";
import germany from "./slides/germany";
import greece from "./slides/greece";
import italy from "./slides/italy";
import kazakhstan from "./slides/kazakhstan";
import latvia from "./slides/latvia";
import norway from "./slides/norway";
import poland from "./slides/poland";
import romania from "./slides/romania";
import russia from "./slides/russia";
import scotland from "./slides/scotland";
import spain from "./slides/spain";
import sweden from "./slides/sweden";
import switzerland from "./slides/switzerland";
import title from "./slides/title";
import turkey from "./slides/turkey";
import wales from "./slides/wales";
import users from "./users";

export default createSchema({
  name: "default",
  types: [
    ...schemaTypes,
    austria,
    belgium,
    client,
    colorBlock,
    deck,
    denmark,
    england,
    france,
    germany,
    greece,
    italy,
    kazakhstan,
    latvia,
    norway,
    poland,
    romania,
    russia,
    scotland,
    spain,
    sweden,
    switzerland,
    title,
    turkey,
    users,
    wales,
  ],
});
