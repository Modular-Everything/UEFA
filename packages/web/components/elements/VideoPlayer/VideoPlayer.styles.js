import styled from "styled-components";

export const VideoPlayer = styled.div`
  position: relative;

  .skrim {
    position: absolute;
    z-index: 5;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    cursor: pointer;
    pointer-events: all;

    &.inactive {
      pointer-events: none;
    }
  }
`;
