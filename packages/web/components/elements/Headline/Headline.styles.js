import styled from "styled-components";

export const Headline = styled.h2`
  text-transform: uppercase;
  font-size: clamp(4rem, 6vw, 6.4rem);
  line-height: clamp(3rem, 5vw, 5.6rem);
  color: inherit;
  border-left: 1px solid var(--uefa-yellow);
  padding: 1.6rem 0;
  width: 100%;

  @media (min-width: 375px) {
    width: 50vw;
    max-width: 32rem;
  }

  @media (min-width: 1000px) {
    width: 50vw;
    max-width: 45rem;
  }
`;
