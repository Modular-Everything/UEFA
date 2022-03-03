import styled from "styled-components";

export const Germany = styled.article`
  height: 100%;
  background-color: var(--uefa-green);
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .content {
    position: relative;
  }

  .simpleCopy {
    max-width: 50rem;
  }

  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    right: var(--content-gutter);
    left: var(--content-gutter);
    top: calc(var(--content-gutter) * 2);
    bottom: var(--content-gutter);
    height: auto;
    gap: 3.2rem;

    @media (min-width: 768px) {
      position: relative;
      right: unset;
      left: unset;
      top: unset;
      bottom: unset;
      height: 100%;
      gap: unset;
    }
  }

  .image {
    position: relative;
    z-index: 0;
  }

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    display: none;

    @media (min-width: 768px) {
      display: block;
      right: unset;
      width: 65%;
      transform: none;
    }
  }
`;
