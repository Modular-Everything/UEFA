import styled from "styled-components";

export const Turkey = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .content {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .image {
    position: absolute;
    z-index: 50;
    bottom: 0;
    width: 100%;
    height: 95%;
    display: flex;

    img {
      object-position: bottom;
    }
  }
`;
