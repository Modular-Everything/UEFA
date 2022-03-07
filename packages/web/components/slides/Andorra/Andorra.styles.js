import styled from "styled-components";

export const Andorra = styled.article`
  background-color: var(--uefa-black);
  height: 100%;

  .content {
    justify-content: flex-end;

    @media (min-width: 1230px) {
      justify-content: flex-start;
      flex-direction: row;
      align-items: flex-end;
    }
  }

  .simpleCopy {
    max-width: 38rem;
    width: 90%;
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

    @media not print {
      &.hidden {
        opacity: 0;
      }
    }
  }
`;
