import BlockContent from "@sanity/block-content-to-react";
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
    <S.Scotland ref={el}>
      <Content>
        <div className="container">
          {data?.copy && (
            <SimpleCopy textAlign="right">
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}

          {data?.headline && <Headline data={{ headline: data.headline }} />}
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
