import styled from "styled-components";

export const Italy = styled.article`
  height: 100%;

  h2 {
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    height: auto;
    right: 0;
    width: 100%;
    z-index: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: var(--content-gutter);
    position: relative;
    z-index: 500;
    height: 100%;
    width: 100%;
    z-index: 100;
  }

  .image {
    position: absolute;
    z-index: 50;
    bottom: 0;
    right: 0;
    display: flex;
    width: clamp(50rem, 70vw, 100rem);
  }
`;
