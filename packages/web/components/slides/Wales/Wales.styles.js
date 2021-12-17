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

  .pattern {
    right: -10rem;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      right: 0;
    }

    img {
      object-position: right;
    }
  }
`;
