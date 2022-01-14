import styled from "styled-components";

export const NavLabel = styled.div`
  display: none;
  flex-direction: column;
  color: var(--white);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: 250ms ease opacity;
  transition-delay: ${({ isOpen }) => (isOpen ? "250ms" : 0)};

  @media (min-width: 768px) {
    display: flex;
  }

  span {
    font-size: 1.6rem;
    line-height: 1;
    font-family: var(--font-uefa-book);
  }

  p {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-family: var(--font-uefa-medium-extended);
    margin: 0;
    white-space: nowrap;
  }
`;
