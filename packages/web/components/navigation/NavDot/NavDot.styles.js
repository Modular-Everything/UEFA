import styled from "styled-components";

export const NavDot = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: grid;
  place-items: center;
  transition: 250ms cubic-bezier(0.12, 0, 0.39, 0) all;
  outline: none;

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
  }

  &.inactive {
    background-color: var(--white);
  }

  &.active {
    background-color: var(--uefa-mdm-black);
    border: 2px solid var(--uefa-lt-blue);
    box-shadow: 0 0 1.2rem var(--uefa-lt-blue);
  }
`;
