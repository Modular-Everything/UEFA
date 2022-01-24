import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./France.styles";
import { Pattern } from "./FrancePattern";

export function France({ data, index }) {
  const el = useRef();

  return (
    <S.France
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        {data?.copy && (
          <SimpleCopy>
            <BlockContent blocks={data.copy} />
          </SimpleCopy>
        )}
      </Content>

      <Pattern />

      {data?.image && (
        <div className="bg">
          <Image
            src={data?.image}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>
      )}
    </S.France>
  );
}

France.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
