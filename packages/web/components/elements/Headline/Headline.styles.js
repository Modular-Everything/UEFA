import styled from "styled-components";

export const Headline = styled.h2`
  --delay: ${({ delay }) => `${delay}s` || 0};

  text-transform: uppercase;
  font-size: clamp(3.2rem, 4vw, 6.4rem);
  line-height: clamp(2.8rem, 3.2vw, 4.8rem);
  letter-spacing: -0.1rem;
  color: inherit;
  border-left: 1px solid
    ${({ dividerColor }) => dividerColor || "var(--uefa-yellow)"};
  padding: 0.6rem 0;
  width: 100%;
  margin: 0;
  transition: 250ms var(--animation-timing) opacity,
    250ms var(--animation-timing) transform;
  transition-delay: var(--delay);
  opacity: 1;
  transform: none;

  &.hidden {
    opacity: 0;
    transform: translateX(-4.8rem);
  }

  @media (min-width: 375px) {
    max-width: 32rem;
  }

  @media (min-width: 1000px) {
    padding: 1.4rem 0;
    max-width: 45rem;
  }
`;
