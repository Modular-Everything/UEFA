import styled from "styled-components";

export const Pill = styled.article`
  --data-color: ${({ dataColor }) => dataColor || "var(--uefa-blue)"};
  --context-color: ${({ contextColor }) =>
    contextColor || "var(--uefa-lt-blue)"};

  background-color: var(--context-color);
  border-radius: 1000rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;

  .data {
    padding: 0.8rem 1.2rem;
    border-radius: 1000rem;
    background-color: var(--data-color);
    color: var(--white);
    min-height: 1.2rem;
    min-width: 1.2rem;
    margin-right: 0.8rem;
    font-family: var(--font-uefa-heavy-extended);
    font-weight: 900;
    font-size: clamp(2.3rem, 4vw, 3.2rem);
    line-height: clamp(2.3rem, 4vw, 3.2rem);
  }

  .context {
    font-family: var(--font-uefa-medium-extended);
    font-weight: 500;
    color: var(--white);
    font-size: clamp(1.7rem, 3vw, 2.4rem);
    line-height: clamp(2.3rem, 3vw, 3.2rem);
  }
`;
