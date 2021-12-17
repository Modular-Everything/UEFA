import styled from "styled-components";

export const Wales = styled.article`
  height: 100%;
  background-color: var(--uefa-lt-blue);
  display: block;

  .content {
    color: var(--white);
    align-items: center;
    justify-content: center;

    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 88rem;
      gap: 4.8rem;
    }
  }

  .pattern {
    /* object-position: right; */
    right: -300px !important;
    /* min-height: 100% !important; */

    @media (min-width: 375px) {
      right: 0;
    }
  }
`;
