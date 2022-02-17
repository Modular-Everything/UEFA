import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  background-color: var(--uefa-grey);
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  span {
    width: 6.4rem;
    height: 6.4rem;
    border: 0.3rem solid var(--uefa-lt-blue);
    border-radius: 100rem;
    position: relative;
    animation: ${rotate} 2s linear infinite;

    &:before {
      content: "";
      width: 3.2rem;
      height: 3.2rem;
      background-color: var(--uefa-grey);
      position: absolute;
      top: -0.3rem;
      left: -0.3rem;
    }
  }
`;
