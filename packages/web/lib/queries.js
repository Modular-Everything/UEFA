// Popping these here for future reference on how to fetch _refs
// "slug": slug.current,
// "author": author->{name, picture},

const clientFields = `
  _id,
  clientName,
  "slug": slug.current,
  slides,
`;

export const indexQuery = `
*[_type == "clients"] | order(date desc, _updatedAt desc) {
  ${clientFields}
}`;

export const clientQuery = `
{
  "client": *[_type == "clients" && slug.current == $slug][0] {
    ${clientFields}
  },
}`;

export const clientSlugsQuery = `
  *[_type == "clients" && defined(slug.current)][].slug.current
`;
