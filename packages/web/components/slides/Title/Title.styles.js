import styled from "styled-components";

export const Title = styled.article`
  height: 100%;
  position: relative;

  .Title__logo {
    margin-left: 0.4rem;
  }

  .headline {
    padding-top: 0.4rem;
  }

  .client-logo {
    max-width: 14rem;

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
