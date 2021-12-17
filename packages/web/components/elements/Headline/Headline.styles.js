import styled from "styled-components";

export const Headline = styled.h2`
  text-rendering: optimizeLegibility;
  text-transform: uppercase;
  font-size: clamp(3.2rem, 5vw, 6.4rem);
  line-height: clamp(2.8rem, 4vw, 4.8rem);
  color: inherit;
  border-left: 1px solid
    ${({ dividerColor }) => dividerColor || "var(--uefa-yellow)"};
  padding: 0.6rem 0;
  width: 100%;
  margin: 0;

  @media (min-width: 375px) {
    width: 50vw;
    max-width: 32rem;
  }

  @media (min-width: 1000px) {
    padding: 1.4rem 0;
    width: 50vw;
    max-width: 45rem;
  }
`;
