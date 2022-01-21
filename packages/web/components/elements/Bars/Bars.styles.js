import styled from "styled-components";

export const Bars = styled.ul`
  display: grid;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

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
    width: 100%;

    .label {
      position: relative;
      z-index: 10;
      margin-top: 0.3rem;
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
    }
  }

  .progress {
    height: 100%;
    width: 50%;
    position: absolute;
    left: 0;
    z-index: 0;
    border-top-right-radius: 6rem;
    border-bottom-right-radius: 6rem;
  }
`;
