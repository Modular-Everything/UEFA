import styled from "styled-components";

export const Coefficients = styled.article`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: 800px) {
    grid-template-rows: minmax(70%, 1fr) 1fr;
  }

  .simpleCopy {
    max-width: 40rem;
  }

  .headline {
    color: ${({ headlineColor }) => headlineColor};
  }

  .flag__image {
    clip-path: inset(0 0 0 0 round 0 0 75% 0);
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 20;
  }
`;

export const Flag = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  position: absolute;
  bottom: 0;

  @media (min-width: 800px) {
    height: 100%;
    grid-template-rows: unset;
    grid-template-columns: auto auto minmax(10rem, 25%);
  }

  .flag {
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: calc(var(--content-gutter) / 2) var(--content-gutter);

    @media (min-width: 800px) {
      padding: var(--content-gutter);
    }
  }
`;
