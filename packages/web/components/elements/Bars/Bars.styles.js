import styled from "styled-components";

export const Bars = styled.ul`
  display: grid;
  gap: 0.8rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1024px) {
    gap: 1.6rem;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    background-color: var(--uefa-lt-black);
    border-radius: 6rem;
    height: 100%;
    padding: 1.6rem 2rem;
    position: relative;
    overflow: hidden;
    transition: 250ms var(--animation-timing) background-color;

    @media (min-width: 1024px) {
      padding: ${({ squash }) => (squash ? "1.6rem" : "3.2rem")};
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    opacity: 1;
    transition: 450ms var(--animation-timing) opacity;
    transition-delay: 800ms;

    .label {
      position: relative;
      z-index: 10;
      margin-top: 0.3rem;
      font-size: clamp(1.6rem, 4vw, 1.8rem);
    }

    .value {
      position: relative;
      z-index: 10;
      font-family: var(--font-uefa-heavy-extended);
      font-weight: 900;
      font-style: normal;
      font-size: 3.2rem;
      line-height: 3.2rem;
      text-align: right;
      opacity: 1;
    }
  }

  .progress {
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 0;
    border-top-right-radius: 6rem;
    border-bottom-right-radius: 6rem;
    transition: 450ms var(--animation-timing) width;
    transition-delay: 450ms;
  }

  @media (not print), (min-width: 771px) { {
    &.hidden {
      .progress {
        width: 0 !important;
      }

      .meta {
        opacity: 0;
      }

      li {
        background-color: transparent;
      }
    }
  }
`;
