import styled from "styled-components";

export const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;

  svg {
    margin-bottom: 3.2rem;
    width: 100%;
  }
`;

export const LoginModal = styled.div`
  background-color: var(--uefa-lt-grey);
  box-shadow: 0 1.6rem 1.6rem rgba(0, 0, 0, 0.05);
  border-radius: 0.8rem;
  width: 100%;
  padding: 2.4rem;

  @media (min-width: 32rem) {
    width: 33.6rem;
  }

  p,
  form,
  span,
  input,
  small {
    color: var(--uefa-lt-black);
  }

  p {
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: center;
    margin: 0 0 1.6rem;

    &:last-of-type {
      margin: 0 0 4.8rem;
    }
  }

  form {
    span {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    input {
      border: 0;
      background-color: var(--white);
      border-radius: 0.8rem;
      padding: 1.2rem 1.6rem 1.5rem;
      display: flex;
      align-items: center;
      width: 100%;
      height: 4.8rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin: 0.8rem 0 2.4rem;
    }
  }

  small {
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin: 1.6rem 0 0;
    text-align: center;
    letter-spacing: 0.03ch;
    display: flex;
    justify-content: center;

    span {
      margin: 0 0.8rem;
    }

    a:hover {
      text-decoration: underline;
      text-decoration-color: var(--uefa-lt-blue);
    }
  }
`;
