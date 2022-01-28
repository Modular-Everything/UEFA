import styled from "styled-components";

export const LargeOutlinedText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  span {
    position: absolute;
    text-transform: uppercase;
    display: none;
    font-family: var(--font-uefa-heavy-extended);
    line-height: 0.75;
    text-align: center;
    width: 100%;
    justify-content: center;
    font-size: 100vw;

    @media (min-width: 540px) {
      font-size: 75vw;
    }

    @media (min-width: 720px) {
      font-size: 55vw;
    }

    @media (min-width: 990px) {
      font-size: 45vw;
    }

    @media (min-width: 1180px) {
      font-size: clamp(12rem, 40vw, 64rem);
    }

    @media (min-width: 1500px) {
      font-size: clamp(12rem, 50vw, 76rem);
      line-height: 2;
    }

    @supports (-webkit-text-stroke: 1px black) {
      display: flex;
      -webkit-text-fill-color: transparent;

      &:nth-of-type(1) {
        top: 0;
        -webkit-text-stroke: 1px
          ${({ colorA }) => colorA || "var(--uefa-lt-blue)"};
      }

      &:nth-of-type(2) {
        bottom: 0;
        -webkit-text-stroke: 1px
          ${({ colorB }) => colorB || "var(--uefa-lt-green)"};
      }
    }
  }
`;
