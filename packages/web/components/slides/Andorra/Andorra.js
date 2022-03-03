import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Image } from "../../elements/Image";
import * as S from "./Andorra.styles";

export function Andorra({ data, index, activeIndex, fullpageApi }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Andorra ref={el} className="andorra">
      <div className={`image ${inView ? "visible" : "hidden"}`}>
        <Image
          src={data?.image}
          quality={98}
          layout={data?.imageLayout === "cover" ? "fill" : "intrinsic"}
          objectFit={data?.imageLayout === "cover" ? "cover" : "contain"}
          className="Andorra__image"
        />
      </div>
    </S.Andorra>
  );
}

Andorra.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
