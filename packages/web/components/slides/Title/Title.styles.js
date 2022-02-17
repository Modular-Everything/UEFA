import styled from "styled-components";

export const Title = styled.article`
  height: 100%;
  position: relative;

  .visible {
    opacity: 1;
    transform: none;
    transition: 250ms var(--animation-timing) opacity,
      250ms var(--animation-timing) transform;
  }

  .hidden {
    opacity: 0;
    transform: translateX(-4.8rem);
  }

  .Title__logo {
    margin-left: 0.4rem;
  }

  .headline {
    padding-top: 0.4rem;
    transition-delay: 150ms;
  }

  .client-logo {
    max-width: 14rem;
    transition-delay: 300ms;

    @media (min-width: 768px) {
      max-width: 27rem;
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const LogoPlaceholder = styled.div`
  border: 1px dashed var(--white);
  padding: 2.4rem;
  display: grid;
  place-content: center;
  text-align: center;
  line-height: 2.4rem;
`;
