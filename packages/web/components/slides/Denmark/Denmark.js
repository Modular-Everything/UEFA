import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { Pills } from "../../elements/Pills";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Denmark.styles";
import { Pattern } from "./DenmarkPattern";

export function Denmark({ data, index }) {
  const el = useRef();

  return (
    <S.Denmark ref={el}>
      <Content>
        {data?.headline && <Headline data={{ headline: data.headline }} />}

        {data?.copy && (
          <SimpleCopy>
            <BlockContent blocks={data.copy} />
          </SimpleCopy>
        )}

        {data?.pills && (
          <Pills
            pills={data.pills}
            colors={{ data: "uefa-blue", context: "uefa-lt-blue" }}
          />
        )}
      </Content>

      <div className="image">
        <Image src={data?.image} quality={95} className="Denmark__image" />
      </div>

      <Pattern />
    </S.Denmark>
  );
}

Denmark.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
