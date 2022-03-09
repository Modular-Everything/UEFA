import styled from "styled-components";

export const Wales = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-blue);

  .content {
    color: var(--white);
    align-items: center;
    justify-content: center;

    .container {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
      max-width: 88rem;
      gap: 2.4rem;

      @media (min-width: 768px) {
        gap: 4.8rem;
        align-items: center;
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

  .pattern {
    position: absolute;
    top: 0;
    transform: scale(125%);
    right: -15%;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      right: 0;
      transform: none;
    }

    img {
      object-position: right;
    }
  }
`;
