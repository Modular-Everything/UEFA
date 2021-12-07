import styled from "styled-components";

// ---

export const Content = styled.div`
  cursor: default;
  width: calc(100% - (var(--gutter) * 2));
  height: 100%;
  margin: 0 auto;
  padding: var(--content-gutter);
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 100;
`;
