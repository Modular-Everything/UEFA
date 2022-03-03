import styled from "styled-components";

// ---

export const Content = styled.div`
  color: var(--white);
  cursor: default;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: calc(var(--content-gutter) * 2.5) var(--content-gutter)
    var(--content-gutter);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
`;
