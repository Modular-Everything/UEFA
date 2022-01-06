import styled from "styled-components";

export const NavItems = styled.div`
  color: var(--white);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: 250ms ease opacity;
  transition-delay: ${({ isOpen }) => (isOpen ? "300ms" : 0)};
  margin-left: 1rem;

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;

    li {
      width: 6.4rem;
      height: 4rem;
      border-radius: 0.4rem;
      background-color: var(--white);
    }
  }
`;
