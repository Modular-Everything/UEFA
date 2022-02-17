import styled from "styled-components";

export const Andorra = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .back {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    background-color: var(--uefa-mdm-black);
    border: 2px solid var(--uefa-lt-blue);
    box-shadow: 0 0 1.2rem var(--uefa-lt-blue);
    padding: 0;
    margin: 0;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: grid;
    place-items: center;
    transition: 250ms var(--animation-timing) all;
    outline: none;
    z-index: 50;

    @media (min-width: 768px) {
      width: 4rem;
      height: 4rem;
      border-radius: 4rem;
    }
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: 500ms ease opacity;
    z-index: 0;

    &.hidden {
      opacity: 0;
    }
  }
`;
