import BlockContent from "@sanity/block-content-to-react";
import { readableColorIsBlack } from "color2k";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Scotland.styles";
import { Pattern } from "./ScotlandPattern";

export function Scotland({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Scotland
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content
        textColor={
          readableColorIsBlack(data?.brandColors)
            ? "var(--uefa-black)"
            : "var(--white)"
        }
      >
        <div className="container">
          {data?.copy && (
            <SimpleCopy inView={inView}>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}

          {data?.headline && (
            <Headline
              data={{ headline: data.headline }}
              inView={inView}
              dividerColor={
                readableColorIsBlack(data?.brandColors)
                  ? "var(--uefa-red)"
                  : null
              }
            />
          )}
        </div>
      </Content>

      <Pattern />
    </S.Scotland>
  );
}

Scotland.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
