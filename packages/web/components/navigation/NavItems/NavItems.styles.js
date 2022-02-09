import styled from "styled-components";

export const NavItems = styled.div`
  color: var(--white);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: 250ms cubic-bezier(0.12, 0, 0.39, 0) opacity;
  transition-delay: ${({ isOpen }) => (isOpen ? "300ms" : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};

  @media (min-width: 768px) {
    margin-left: 1rem;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      width: 7.2rem !important;
      height: 4rem;

      button {
        cursor: pointer;
        border-radius: 0.4rem;
        background-color: var(--white);
        color: var(--black);
        border: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        display: grid;
        place-content: center;
        opacity: 1;
        transition: 250ms cubic-bezier(0.12, 0, 0.39, 0) opacity;
        font-size: 1.1rem;

        &:hover {
          opacity: 0.75;
        }
      }
    }
  }
`;
