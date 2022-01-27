import styled from "styled-components";

export const Bullets = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  &.two-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.6rem;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .bullet {
    width: 2.1rem;
    height: 2.1rem;
    max-width: 2.1rem;
    max-height: 2.1rem;
    border-radius: 10rem;
  }

  .label {
    font-size: 2rem;
    margin-left: 1.6rem;
    line-height: 2.8rem;
    margin-bottom: 0.3rem;
  }
`;
