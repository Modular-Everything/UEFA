import styled from "styled-components";

export const Greece = styled.article`
  height: 100%;

  .content {
    display: flex;
    justify-content: flex-end;
  }

  svg {
    opacity: 0.25;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -65vw;
    height: 100%;
    width: auto;
    z-index: 10;

    @media (min-width: 450px) {
      right: -35%;
    }

    @media (min-width: 768px) {
      right: 0;
    }
  }
`;
