import styled from "styled-components";

export const Kazakhstan = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  &.hidden .video {
    opacity: 0;
  }

  .video {
    opacity: 1;
    transition: 350ms cubic-bezier(0.12, 0, 0.39, 0) opacity;
    border-radius: 0.8rem;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    iframe {
      width: 90%;
      height: 90%;
      position: relative;
      z-index: 0;
    }
  }
`;
