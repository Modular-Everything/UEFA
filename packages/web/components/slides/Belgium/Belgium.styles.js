import styled from "styled-components";

export const Belgium = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .content {
    display: grid;
    gap: 4.8rem;

    @media (min-width: 1024px) {
      padding-top: 13rem;
      padding-bottom: 13rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .copy {
    .headline {
      margin-bottom: 3.2rem;
    }

    .simpleCopy {
      margin-bottom: 4rem;

      @media (min-width: 1024px) {
        max-width: 45rem;
      }
    }

    cite {
      font-style: normal;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-top: 2.4rem;
      display: block;
    }
  }

  .chart {
  }
`;
