import fitty from "fitty/dist/fitty.min.js";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import styled, { css } from "styled-components";

function createTransformCSS() {
  let styles = "";

  for (let i = 0; i < 8; i += 1) {
    if (i > 1) {
      styles += `
       span:nth-of-type(${i}) {
         top: calc(${7 * i}vh);
         z-index: ${7 + Number(-Math.abs(i))};
       }
     `;
    }
  }

  return css`
    ${styles}
  `;
}

export function RepeatedText({ text, color }) {
  const fitRef = useRef(null);

  useEffect(() => {
    const fittedEls = [...fitRef.current.children];
    fittedEls.forEach((fit) => {
      fitty(fit);
    });
  }, []);

  return (
    <Repeater textColor={color} ref={fitRef}>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </Repeater>
  );
}

RepeatedText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

RepeatedText.defaultProps = {
  color: null,
};

const Repeater = styled.div`
  text-transform: uppercase;
  color: ${({ textColor }) => textColor || "var(--uefa-mdm-black)"};
  font-family: var(--font-uefa-heavy-extended);
  font-weight: 900;
  font-style: normal;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  ${createTransformCSS()}

  span {
    top: 0;
    position: absolute;
    line-height: 1;
    z-index: 10;
    background-color: var(--uefa-black);

    &:nth-of-type(1) {
      @media (max-width: 767px) {
        top: 7rem;
      }
    }
  }
`;
