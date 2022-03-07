import styled from "styled-components";

export const Latvia = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-grey);

  .content {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 20;
  }

  .smallHeadline {
    margin: 0 0 1.6rem;
    font-family: var(--font-uefa-medium-extended);
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    opacity: 1;
    transition: 450ms var(--animation-timing) opacity;

    @media not print {
      &.hidden {
        opacity: 0;
      }
    }
  }

  .copy {
    max-width: 35rem;
  }

  .pattern {
    position: absolute;
    z-index: 10;
    width: 85%;

    @media (min-width: 768px) {
      width: auto;
    }

    &.patternA {
      top: -10%;
      left: 0;

      @media (min-width: 768px) {
        top: 0;
      }
    }

    &.patternB {
      bottom: 0;
      right: -25%;

      @media (min-width: 768px) {
        right: 0;
      }
    }

    svg {
      width: 100%;
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
