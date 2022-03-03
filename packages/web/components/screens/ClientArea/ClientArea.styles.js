import styled from "styled-components";

export const ClientArea = styled.section`
  background-color: var(--uefa-black);
  min-height: 100vh;

  .content {
    height: 100%;
    display: flex;
    padding: var(--content-gutter);

    & > div {
      margin-top: 5vh;
      width: 100%;
      gap: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 768px) {
        gap: 10rem;
      }
    }
  }

  .logos {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    img,
    svg {
      max-width: 17rem;
    }

    hr {
      margin: 0;
      height: 0.2rem;
      width: 8rem;
      background-color: var(--uefa-lt-black);
      border: 0;
    }
  }

  ul {
    --min: 20ch;
    --gap: 3.2rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--gap);
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;

    @media (min-width: 768px) {
      --gap: 1.6rem;
    }
  }

  li {
    flex: 1 1 var(--min);
    max-width: 33.6rem;

    &:hover {
      .deck__thumbnail {
        box-shadow: 0 0 1.2rem var(--uefa-lt-blue);
        outline: 2px solid var(--uefa-lt-blue);
      }
    }

    .deck__thumbnail {
      aspect-ratio: 336/210;
      background-color: var(--uefa-white);
      border-radius: 0.8rem;
      overflow: hidden;
      transition: 250ms ease box-shadow;
      position: relative;

      img {
        transform: scale(101%);
      }
    }

    .deck__meta {
      text-align: center;

      h3 {
        font-family: var(--font-uefa-medium-extended);
        font-weight: normal;
        font-size: clamp(1.8rem, 3vw, 2.4rem);
        line-height: clamp(2.4rem, 4vw, 3.2rem);
        margin: 0;
      }

      p {
        margin: 0.8rem 0 0 0;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }

    a {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      @media (min-width: 768px) {
        gap: 2.4rem;
      }
    }
  }
`;
