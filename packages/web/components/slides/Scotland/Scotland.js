import BlockContent from "@sanity/block-content-to-react";
import { readableColorIsBlack } from "color2k";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Scotland.styles";
import { Pattern } from "./ScotlandPattern";

export function Scotland({ data, index }) {
  const el = useRef();

  console.log(data);

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
            <SimpleCopy>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}

          {data?.headline && (
            <Headline
              data={{ headline: data.headline }}
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
