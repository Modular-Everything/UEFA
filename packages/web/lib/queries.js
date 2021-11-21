// Popping these here for future reference on how to fetch _refs
// "slug": slug.current,
// "author": author->{name, picture},

const clientFields = `
  _id,
  title,
  "slug": slug.current,
  "decks": decks[]->
`;

export const indexQuery = `
*[_type == "client"] | order(date desc, _updatedAt desc) {
  ${clientFields}
}`;

export const clientQuery = `
{
  "client": *[_type == "client" && slug.current == $client][0] {
    ${clientFields}
  },
}`;

export const clientSlugsQuery = `
*[_type == "client" && defined(slug.current)][].slug.current
`;

const deckFields = `
  _id,
  title,
  "slug": slug.current,
  slides,
`;

export const deckQuery = `
{
  "deck": *[_type == "deck" && slug.current == $deck][0] {
    ${deckFields}
  },
  "client": *[_type == "client" && slug.current == $client][0] {
    ${clientFields}
  },
}`;

export const deckSlugsQuery = `
  *[_type == "deck" && defined(slug.current)][].slug.current
`;
