import styled from "styled-components";

export const Switzerland = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-grey);

  .content {
    color: var(--uefa-lt-blue);
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .copy {
    .headline {
      margin-bottom: 5.6rem;
    }
  }

  .media.video iframe {
    width: 100%;
    height: 100%;
  }

  .media.image {
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    right: 0;
    bottom: 0;

    @media (min-width: 640px) {
      width: 65%;
    }

    @media (min-width: 1024px) {
      bottom: unset;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .media.video {
  }
`;
