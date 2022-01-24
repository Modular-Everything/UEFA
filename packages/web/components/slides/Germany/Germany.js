import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { Pills } from "../../elements/Pills";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Germany.styles";
import { Pattern } from "./GermanyPattern";

export function Germany({ data, index }) {
  const el = useRef();

  return (
    <S.Germany ref={el}>
      <Content>
        <div className="container">
          {data?.headline && (
            <Headline
              data={{ headline: data.headline }}
              dividerColor="var(--uefa-lt-blue)"
            />
          )}

          {data?.copy && (
            <SimpleCopy>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}

          {data?.pills && (
            <Pills
              pills={data.pills}
              colors={{ data: "uefa-mdm-green", context: "uefa-drk-green" }}
            />
          )}
        </div>
      </Content>

      <Pattern />

      <div className="image">
        <Image
          src={data?.image}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={95}
          className="Germany__image"
        />
      </div>
    </S.Germany>
  );
}

Germany.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
