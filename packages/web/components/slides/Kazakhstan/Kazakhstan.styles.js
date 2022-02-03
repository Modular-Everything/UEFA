import styled from "styled-components";

export const Kazakhstan = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .video {
    border-radius: 0.8rem;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    iframe {
      width: 90%;
      height: 90%;
    }
  }
`;
