import styled from "styled-components";

export const SimpleCopy = styled.div`
  color: inherit;
  opacity: 1;
  transition: 750ms cubic-bezier(0.12, 0, 0.39, 0) opacity;

  &.hidden {
    opacity: 0;
  }

  p {
    text-rendering: optimizeLegibility;
    font-family: var(--font-uefa-book);
    font-weight: normal;
    font-style: normal;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    line-height: clamp(2.2rem, 3.4vw, 3.2rem);
    margin: 0;
  }
`;
