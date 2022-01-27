import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { LargeOutlinedText } from "../../elements/LargeOutlinedText";
import * as S from "./Norway.styles";

export function Norway({ data, index }) {
  const el = useRef();

  return (
    <S.Norway ref={el}>
      <Content>
        {data?.headline && <Headline data={{ headline: data.headline }} />}
      </Content>

      {data?.outlinedTextA && data?.outlinedTextB && (
        <LargeOutlinedText one={data.outlinedTextA} two={data.outlinedTextB} />
      )}

      {data?.image && (
        <div className="bg">
          <Image
            src={data?.image}
            alt={data?.headline}
            layout="fill"
            objectFit="cover"
            quality={95}
          />
        </div>
      )}
    </S.Norway>
  );
}

Norway.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
