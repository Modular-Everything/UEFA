import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { Pills } from "../../elements/Pills";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Italy.styles";
import { Pattern } from "./Pattern";

export function Italy({ data, index }) {
  const el = useRef();

  return (
    <S.Italy ref={el}>
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
        <Image src={data?.image} quality={95} className="Italy__image" />
      </div>

      <Pattern />
    </S.Italy>
  );
}

Italy.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
