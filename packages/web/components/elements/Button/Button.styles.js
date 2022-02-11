import Link from "next/link";
import styled from "styled-components";

export const ButtonWrap = styled.div`
  background-color: var(--uefa-lt-blue);
  border-radius: 0.8rem;

  a,
  button {
    color: var(--white);
    text-align: center;
    padding: 1.2rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.8rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export const ButtonLink = styled(Link)``;

export const ButtonEl = styled.button`
  border: 0;
  background: transparent;
`;
