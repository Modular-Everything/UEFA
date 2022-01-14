import styled from "styled-components";

export const Spain = styled.article`
  height: 100%;
  background-color: var(--uefa-black);
`;

export const Grid = styled.section`
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ul {
    --min: 8ch;
    --gap: 0.8rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (min-width: 400px) {
      --min: 14ch;
    }

    @media (min-width: 768px) {
      --gap: 1.6rem;
      --min: 16ch;
    }
  }

  li {
    height: max(18vh, 12rem);
    object-fit: cover;
    width: 100%;
    background-color: var(--black);
    border-radius: 1rem;
    padding: 1.2rem;
    place-content: center;
    display: grid;
    position: relative;
    color: var(--uefa-lt-grey);
    overflow: hidden;

    @supports (aspect-ratio: 1) {
      aspect-ratio: 1.5/1;
      height: auto;
    }

    .index {
      position: absolute;
      top: 1.2rem;
      left: 1.2rem;
      font-size: clamp(1.2rem, 2vw, 1.6rem);
      line-height: clamp(1.2rem, 2vw, 2.4rem);
    }

    .title {
      width: 100%;
      height: 100%;
      font-family: var(--font-uefa-heavy-extended);
      font-weight: 900;
      font-style: normal;
      text-transform: uppercase;
      text-align: center;
      font-size: clamp(1.4rem, 4vw, 2.2rem);
      line-height: clamp(1.8rem, 4vw, 2.7rem);
    }
  }
`;
