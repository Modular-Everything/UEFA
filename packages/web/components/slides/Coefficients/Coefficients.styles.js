import styled from "styled-components";

export const Coefficients = styled.article`
  height: 100%;
  position: relative;

  .content {
    display: grid;
    grid-template-columns: 35% auto;
    align-items: flex-end;
    gap: 1.6rem;
  }

  .simpleCopy {
    max-width: 40rem;
  }

  .headline {
    color: ${({ headlineColor }) => headlineColor};
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;
