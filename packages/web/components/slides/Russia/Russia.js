import PropTypes from "prop-types";
import { useRef } from "react";

import { getImgUrl } from "../../../helpers/getImgUrl";
import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Image } from "../../elements/Image";
import * as S from "./Russia.styles";

export function Russia({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Russia ref={el}>
      <Content>
        <div className="charts">
          {data?.charts?.map((chart) => (
            <div key={chart._key} className="chart">
              <Image src={chart} quality={90} />
            </div>
          ))}
        </div>
      </Content>

      <div className="image">
        <Image
          src={data?.image}
          override={getImgUrl(data?.image).saturation(-100)}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={95}
          className="Russia__image"
        />
      </div>
    </S.Russia>
  );
}

Russia.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
