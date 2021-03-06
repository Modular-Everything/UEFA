import styled from "styled-components";

export const NavItems = styled.div`
  color: var(--white);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: 250ms var(--animation-timing) opacity;
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

      &.empty button {
        background: transparent;
        color: var(--white);
        border: 1px solid var(--uefa-lt-black);
        border-radius: 0.4rem;
        cursor: pointer;
      }

      button {
        cursor: pointer;
        border-radius: 0.4rem;
        background-color: var(--white);
        color: var(--black);
        border: 0;
        width: 100%;
        height: 100%;
        padding: 0.4rem;
        display: grid;
        place-content: center;
        opacity: 1;
        transition: 250ms var(--animation-timing) opacity;
        font-size: 1.1rem;

        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &:hover {
          opacity: 0.75;
        }
      }
    }
  }
`;
