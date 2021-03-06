import styled from "styled-components";

export const Pill = styled.article`
  --data-color: ${({ dataColor }) =>
    dataColor ? `var(--${dataColor})` : "var(--uefa-blue)"};
  --context-color: ${({ contextColor }) =>
    contextColor ? `var(--${contextColor})` : "var(--uefa-lt-blue)"};

  background-color: var(--context-color);
  border-radius: 1000rem;
  padding: 0.8rem 1.6rem 0.8rem 0.8rem;
  display: flex;
  align-items: center;
  opacity: 1;
  transition: 450ms var(--animation-timing) opacity;
  transition-delay: 450ms;

  .data {
    display: flex;
    padding: 0.8rem 1.2rem;
    border-radius: 1000rem;
    background-color: var(--data-color);
    color: var(--white);
    min-height: 1.2rem;
    margin-right: 0.8rem;
    font-family: var(--font-uefa-heavy-extended);
    font-weight: 900;
    font-size: clamp(2.3rem, 4vw, 3.2rem);
    line-height: clamp(2.3rem, 4vw, 3.2rem);
    transition: 450ms var(--animation-timing) opacity;
    transition-delay: 450ms;

    svg {
      height: 2.4rem;
      width: 2.4rem;
    }
  }

  .context {
    font-family: var(--font-uefa-medium-extended);
    font-weight: 500;
    color: var(--white);
    font-size: clamp(1.7rem, 3vw, 2.4rem);
    line-height: clamp(2.3rem, 3vw, 3.2rem);
    opacity: 1;
    transition: 450ms var(--animation-timing) opacity;
    transition-delay: 450ms;
  }

  @media not print {
    &.hidden {
      opacity: 0;

      .context {
        opacity: 0;
      }

      .data {
        opacity: 0;
      }
    }
  }
`;
