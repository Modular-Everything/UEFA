import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Wales.styles";
import Pattern from "./WalesPattern.png";

export function Wales({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Wales ref={el}>
      <Content>
        <div className="container">
          {data?.copy && (
            <SimpleCopy inView={inView}>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}

          {data?.headline && (
            <Headline data={{ headline: data.headline }} inView={inView} />
          )}
        </div>
      </Content>

      <div className="pattern">
        <Image
          src={Pattern}
          alt=""
          layout="fill"
          quality={95}
          objectFit="cover"
        />
      </div>
    </S.Wales>
  );
}

Wales.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
