import styled from "styled-components";

export const Italy = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-grey);

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    height: auto;
    right: 0;
    width: 100%;
    z-index: 0;
  }

  .content {
    color: var(--uefa-lt-blue);
  }

  .image {
    position: absolute;
    z-index: 50;
    bottom: 0;
    right: 0;
    max-width: 96rem;
    min-width: 42rem;
    display: flex;
  }
`;
