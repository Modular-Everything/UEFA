import styled from "styled-components";

export const Sweden = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-red);

  .content {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 20;
  }

  .titles {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 640px) {
      height: unset;
    }

    &.hidden {
      .title:nth-of-type(1) {
        transform: translateX(-100vw);
      }
      .title:nth-of-type(2) {
        transform: translateX(100vw);
      }
    }

    .title {
      line-height: 1;
      font-family: var(--font-uefa-heavy-extended);
      font-weight: 900;
      text-transform: uppercase;
      width: 100%;
      color: var(--white);
      position: relative;
      transform: translateX(0);
      transition: 450ms ease transform;

      @media (max-width: 639px) {
        height: auto !important;
      }
    }

    .image {
      width: 100%;
      height: 15rem;
      position: relative;

      @media (min-width: 640px) {
        position: absolute;
        margin-top: 4.5%;
        width: 20%;
        height: 65%;
      }
    }

    .copy {
      width: 100%;

      @media (min-width: 640px) {
        position: absolute;
        width: 78%;
      }
    }

    .title--a {
      .image {
        left: 0;
      }
      .copy {
        right: 0;
      }
    }

    .title--b {
      .image {
        right: 0;
      }
      .copy {
        left: 0;
      }

      @supports (-webkit-text-stroke: 0.3rem black) {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.1rem ${({ colorA }) => colorA || "var(--white)"};

        @media (min-width: 640px) {
          -webkit-text-stroke: 0.3rem
            ${({ colorA }) => colorA || "var(--white)"};
        }
      }
    }

    p {
      margin: 0;

      &::after {
        content: "";
        margin-bottom: 3%;
        display: block;
      }
    }

    img {
      border-radius: 0.6rem;
      overflow: hidden;
    }
  }

  .pattern {
    width: 85%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .simpleCopy {
    max-width: 35rem;
  }
`;
