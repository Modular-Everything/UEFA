import styled from "styled-components";

export const France = styled.article`
  height: 100%;

  .content {
    justify-content: flex-end;
    align-items: flex-start;

    @media (min-width: 640px) {
      justify-content: flex-start;
      align-items: flex-end;
    }

    .simpleCopy {
      max-width: 36rem;
      padding-bottom: calc(var(--content-gutter) * 1.5);

      @media (min-width: 768px) {
        padding-bottom: 0;
      }
    }
  }

  svg {
    position: absolute;
    bottom: 0;
    width: 115%;
    right: 0;
    z-index: 10;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  .bg {
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    top: 0;
  }
`;
