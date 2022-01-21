import styled from "styled-components";

export const Austria = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .content {
    display: grid;
    gap: 2.4rem;
    padding-top: 13rem;
    padding-bottom: 13rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .copy {
    .headline {
      margin-bottom: 3.2rem;
      max-width: 70rem;
    }

    .simpleCopy {
      margin-bottom: 4rem;
    }
  }

  .chart {
  }
`;
