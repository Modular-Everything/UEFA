import styled from "styled-components";

export const Headline = styled.h2`
  --delay: ${({ delay }) => `${delay}s` || 0};

  text-transform: uppercase;
  font-size: clamp(1.8rem, 4vw, 4.8rem);
  line-height: 0.9;
  white-space: pre-line;
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

  @media not print {
    &.hidden {
      opacity: 0;
      transform: translateX(-4.8rem);
    }
  }

  @media (min-width: 375px) {
    max-width: 32rem;
  }

  @media (min-width: 1000px) {
    line-height: 0.8;
    padding: 1.4rem 0;
    max-width: 45rem;
  }
`;
