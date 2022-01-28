import PropTypes from "prop-types";
import { useRef } from "react";

import { getImgUrl } from "../../../helpers/getImgUrl";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { LargeOutlinedText } from "../../elements/LargeOutlinedText";
import * as S from "./Poland.styles";

export function Poland({ data, index }) {
  const el = useRef();

  console.log(data);

  return (
    <S.Poland ref={el}>
      <Content>
        {data?.headline && <Headline data={{ headline: data.headline }} />}
      </Content>

      {data?.image && (
        <div className="image">
          <Image
            src={data.image}
            alt={data?.headline}
            layout="fill"
            objectFit="contain"
            quality={95}
          />
        </div>
      )}

      {data?.outlinedTextA && data?.outlinedTextB && (
        <LargeOutlinedText
          one={data.outlinedTextA}
          two={data.outlinedTextB}
          colorA="var(--uefa-lt-blue)"
          colorB="var(--uefa-red)"
        />
      )}

      {data?.backgroundImage && (
        <div className="bg">
          <Image
            src={data.backgroundImage}
            override={getImgUrl(data.backgroundImage).blur(85)}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={85}
          />
        </div>
      )}
    </S.Poland>
  );
}

Poland.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
