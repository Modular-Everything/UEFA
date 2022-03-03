import styled from "styled-components";

export const Andorra = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

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
