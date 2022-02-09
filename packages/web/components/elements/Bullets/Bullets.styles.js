import styled from "styled-components";

export const Bullets = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  &.two-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.6rem;
  }
`;

export const Bullet = styled.li`
  --delay: ${({ delay }) => `calc(250ms + ${delay} * 50ms)` || 0};

  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  transition: 250ms cubic-bezier(0.16, 1, 0.3, 1) opacity, 250ms cubic-bezier(0.16, 1, 0.3, 1) transform;
  transition-delay: var(--delay);
  opacity: 1;
  transform: none;

  &.hidden {
    opacity: 0;
    transform: translateX(-15%);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  .bullet {
    width: 2.1rem;
    height: 2.1rem;
    max-width: 2.1rem;
    max-height: 2.1rem;
    border-radius: 10rem;
  }

  .label {
    font-size: 2rem;
    margin-left: 1.6rem;
    line-height: 2.8rem;
    margin-bottom: 0.3rem;
  }
`;
