import styled from "styled-components";

export const Romania = styled.article`
  height: 100%;

  .content {
    justify-content: flex-end;
  }

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -50vw;
    height: 100%;
    width: auto;
    z-index: 10;

    @media (min-width: 450px) {
      right: -25%;
    }

    @media (min-width: 768px) {
      right: 0;
    }
  }

  .bg {
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    top: 0;
  }
`;
