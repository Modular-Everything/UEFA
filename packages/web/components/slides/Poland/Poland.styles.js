import styled from "styled-components";

export const Poland = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-grey);

  .content {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 20;
  }

  .image {
    position: absolute;
    width: 150%;
    height: 100%;
    z-index: 15;
    bottom: 0;
    display: flex;
    justify-content: center;

    @media (min-width: 640px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      left: 30%;
      width: 70%;
      height: 85%;
    }

    img {
      object-position: bottom right;

      @media (min-width: 640px) {
        object-position: bottom;
      }
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
