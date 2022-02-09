import styled from "styled-components";

export const Denmark = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-black);

  svg {
    position: absolute;
    bottom: 0;
    height: auto;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }

  .content {
    color: var(--white);

    .simpleCopy {
      max-width: 38rem;
    }

    .pills {
      justify-items: start;
    }
  }

  .image {
    position: absolute;
    z-index: 50;
    bottom: 0;
    right: 0;
    width: unset;
    max-height: 64rem;
    max-width: 90%;
    display: flex;
    opacity: 1;
    transform: none;
    transition: 250ms var(--animation-timing) opacity,
      250ms var(--animation-timing) transform;

    &.hidden {
      opacity: 0;
      transform: translateY(15%);
      transition-delay: 250ms;
    }

    @media (min-width: 1024px) {
      max-height: 90%;
      max-width: 66rem;
    }
  }
`;
