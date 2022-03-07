import styled from "styled-components";

export const Russia = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .content {
    position: relative;
    z-index: 10;

    .header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (min-width: 768px) {
        padding: 0 calc(var(--content-gutter) - 2rem);
        align-items: center;
        flex-direction: row;
      }

      .simpleCopy {
        margin-top: 2.4rem;
        max-width: 38rem;

        @media (min-width: 768px) {
          margin-left: 2.4rem;
        }
      }
    }

    .charts {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;
      height: 100%;
      opacity: 1;
      transition: 450ms var(--animation-timing) opacity;

      @media not print {
        &.hidden {
          opacity: 0;
        }
      }

      @media (min-width: 768px) {
        flex-direction: row;
      }

      @media (min-width: 1024px) {
        gap: 5%;
      }
    }

    .chart {
      display: flex;
      align-self: center;
      justify-self: center;
      max-width: 45rem;

      @media (min-width: 768px) {
        width: unset;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
