// Popping these here for future reference on how to fetch _refs
// "slug": slug.current,
// "author": author->{name, picture},

const clientFields = `
  _id,
  clientId,
  slides,
`;

export const indexQuery = `
*[_type == "clients"] | order(date desc, _updatedAt desc) {
  ${clientFields}
}`;
