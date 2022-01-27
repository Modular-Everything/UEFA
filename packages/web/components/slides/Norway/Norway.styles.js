import styled from "styled-components";

export const Norway = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-grey);

  .content {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 20;
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
