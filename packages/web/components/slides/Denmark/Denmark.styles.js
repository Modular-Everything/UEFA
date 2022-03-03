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
    top: 0;
    right: 0;
    padding: var(--content-gutter);
    height: 100%;
    width: unset;
    max-width: 70rem;
    display: flex;
    align-items: flex-end;
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
      align-items: center;
    }
  }
`;
