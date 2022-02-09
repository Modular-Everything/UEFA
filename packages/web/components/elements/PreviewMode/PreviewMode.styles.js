import styled from "styled-components";

export const PreviewMode = styled.div`
  a {
    position: fixed;
    bottom: 1.6rem;
    right: 1.6rem;
    background: var(--white);
    border: 1px solid var(--uefa-lt-blue);
    color: var(--uefa-lt-blue);
    padding: 0.8rem;
    font-size: 1.2rem;
    z-index: 1000;
    transition: 250ms cubic-bezier(0.16, 1, 0.3, 1) all;

    &:hover {
      border: 1px solid var(--uefa-mdm-red);
      background: var(--uefa-red);
      color: var(--white);
    }
  }
`;
