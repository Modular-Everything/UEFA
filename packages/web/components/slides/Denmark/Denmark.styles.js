import styled from "styled-components";

export const Denmark = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-black);

  svg {
    position: absolute;
    bottom: 0;
    height: auto;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  .content {
    color: var(--white);

    .simpleCopy {
      max-width: 38rem;
    }

    .pills {
      justify-items: start;
    }
  }

  .image {
    position: absolute;
    z-index: 50;
    bottom: 0;
    right: 0;
    max-width: 64rem;
    min-width: 42rem;
    display: flex;
  }
`;
