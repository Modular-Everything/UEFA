import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Russia.styles";

export function Russia({ data, index, activeIndex }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Russia ref={el}>
      <Content>
        {(data?.headline || data?.copy) && (
          <div className="header">
            {data?.headline && (
              <Headline data={{ headline: data.headline }} inView={inView} />
            )}

            {data?.copy && (
              <SimpleCopy inView={inView}>
                <BlockContent blocks={data.copy} />
              </SimpleCopy>
            )}
          </div>
        )}

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
          saturate
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
