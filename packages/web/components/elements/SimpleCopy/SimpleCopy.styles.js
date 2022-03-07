import styled from "styled-components";

export const SimpleCopy = styled.div`
  color: inherit;
  opacity: 1;
  transition: 450ms var(--animation-timing) opacity;

  @media not print {
    &.hidden {
      opacity: 0;
    }
  }

  p {
    text-rendering: optimizeLegibility;
    font-family: var(--font-uefa-book);
    font-weight: normal;
    font-style: normal;
    font-size: clamp(1.6rem, 2vw, 2.4rem);
    line-height: clamp(2rem, 2.4vw, 3.2rem);
    margin: 0;
  }
`;
