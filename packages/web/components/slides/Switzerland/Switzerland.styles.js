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
    display: flex;
    flex-direction: column;

    .headline {
      margin-bottom: 2.4rem;
    }

    .meta {
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      @media (min-width: 1024px) {
        flex-direction: column;
      }
    }

    ul {
      margin-top: 5.6rem;
    }
  }

  .media {
    transition: 250ms ease opacity, 250ms ease transform;
    opacity: 1;
    transform: none;

    &.hidden {
      opacity: 0;
      transform: translateX(15%);
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
      width: 85%;
    }

    @media (min-width: 769px) {
      width: 55%;
    }

    @media (min-width: 1024px) {
      bottom: unset;
      top: 45%;
      transform: translateY(-50%);
    }
  }

  .media.video {
  }
`;
