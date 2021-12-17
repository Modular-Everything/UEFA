import styled from "styled-components";

export const Scotland = styled.article`
  height: 100%;
  background-color: var(--uefa-drk-blue);

  .content {
    color: var(--white);
    align-items: center;
    justify-content: center;

    .container {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      max-width: 88rem;
      gap: 2.4rem;

      @media (min-width: 768px) {
        gap: 4.8rem;
        flex-direction: row;
      }

      .simpleCopy {
        width: 100%;
        text-align: left;

        @media (min-width: 375px) {
          width: 50vw;
          max-width: 32rem;
        }

        @media (min-width: 768px) {
          text-align: right;
        }
      }
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    right: 0;
    width: 150%;
    z-index: 0;
    transform: translateX(-15%);

    @media (min-width: 768px) {
      width: 100%;
      transform: unset;
    }
  }
`;
