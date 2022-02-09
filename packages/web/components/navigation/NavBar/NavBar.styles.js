import styled from "styled-components";

export const NavBar = styled.header`
  --NavBarBG: ${({ isOpen }) => (isOpen ? "var(--uefa-black)" : "transparent")};

  position: fixed;
  z-index: 5000;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 4rem auto 1fr;
  align-items: center;
  gap: 2rem;
  background-color: var(--NavBarBG);
  transition: 250ms var(--animation-timing) background-color;
`;

export const Skrim = styled.button`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  padding: 0;
  margin: 0;
  border: 0;
  z-index: 4500;
  background: transparent;
  pointer-events: ${({ navOpen }) => (navOpen ? "all" : "none")};
`;
