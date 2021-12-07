import styled from "styled-components";

export const SimpleCopy = styled.div`
  color: inherit;

  p {
    text-rendering: optimizeLegibility;
    font-family: var(--font-uefa-book);
    font-weight: normal;
    font-style: normal;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    line-height: clamp(2.4rem, 4vw, 3.2rem);
    margin: 0;
  }
`;
