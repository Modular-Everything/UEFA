import styled from "styled-components";

export const Spain = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  @media (min-width: 768px) {
    .content {
      padding: var(--content-gutter) 2rem;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) {
      padding: 0 calc(var(--content-gutter) - 2rem);
      align-items: center;
      flex-direction: row;
    }

    .simpleCopy {
      margin-top: 2.4rem;
      max-width: 38rem;

      @media (min-width: 768px) {
        margin-left: 2.4rem;
      }
    }
  }
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
      --min: 12ch;
    }

    @media (min-width: 768px) {
      --gap: 1.6rem;
      --min: 18ch;
    }
  }

  li {
    height: max(18vh, 12rem);
    object-fit: cover;
    width: 100%;
    background-color: var(--black);
    border-radius: 1rem;
    padding: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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

    .icon {
      display: none;

      @media (min-width: 640px) {
        display: grid;
        place-content: center;
        position: absolute;
        width: calc(100% - (1.2rem * 2));
        margin-top: calc(-2.2rem + -1.2rem);
        color: var(--white);

        svg {
          height: 2.2rem;
          width: 2.2rem;
        }
      }
    }

    .title {
      width: 100%;
      font-family: var(--font-uefa-heavy-extended);
      font-weight: 900;
      font-style: normal;
      text-transform: uppercase;
      text-align: center;
      font-size: clamp(1.4rem, 3vw, 2.2rem);
      line-height: clamp(1.6rem, 3vw, 2.7rem);

      @media (min-width: 768px) {
        font-size: clamp(1.4rem, 2vw, 2.2rem);
        line-height: clamp(1.8rem, 2vw, 2.7rem);
      }
    }
  }
`;
