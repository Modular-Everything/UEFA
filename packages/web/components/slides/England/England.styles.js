import styled from "styled-components";

export const England = styled.article`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 768px) {
    grid-template-columns: minmax(33%, auto) 1fr;
  }

  .content {
    background-color: var(--uefa-lt-blue);
    color: var(--white);
    padding: calc(var(--content-gutter) * 2.5) var(--content-gutter)
      var(--content-gutter);
    padding-right: 0;
    position: relative;
    z-index: 20;
    border-right: 1px solid var(--uefa-lt-blue);

    @media (min-width: 768px) {
      padding-right: 2.4rem;
    }

    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      @media (min-width: 768px) {
        justify-content: space-between;
      }
    }

    .simpleCopy {
      max-width: 40rem;
      margin-bottom: 2.4rem;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    svg {
      position: absolute;
      top: 0;
      bottom: 0;
      height: 100%;
      left: 100%;
      width: 25%;

      @media (min-width: 768px) {
        width: auto;
      }
    }
  }

  .image {
    position: relative;
    z-index: 10;
  }
`;
