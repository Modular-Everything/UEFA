import styled from "styled-components";

export const Russia = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .content {
    position: relative;
    z-index: 10;

    .charts {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;
      height: 100%;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: 1024px) {
        gap: 5%;
      }
    }

    .chart {
      display: flex;
      align-self: center;
      justify-self: center;
      width: 70%;

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
    opacity: 0.1;
  }
`;
