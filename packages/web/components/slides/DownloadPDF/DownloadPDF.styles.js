import styled from "styled-components";

export const DownloadPDF = styled.article`
  height: 100%;
  background-color: var(--uefa-black);

  .content {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    max-width: 32rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    text-align: center;
  }

  h4 {
    margin: 0 0 0.5rem;
    padding: 0;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-family: var(--font-uefa-medium-extended);
    font-weight: normal;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .button {
    width: 90%;
  }
`;
