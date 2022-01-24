import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import { Number } from "../../elements/Number";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./England.styles";
import { Pattern } from "./EnglandPattern";

export function England({ data, index }) {
  const el = useRef();

  return (
    <S.England ref={el}>
      <div className="content">
        <div className="container">
          <div className="top">
            <Number
              value={
                data?.customNumber >= 10
                  ? data.customNumber
                  : `0${data.customNumber}`
              }
            />

            {data?.copy && (
              <SimpleCopy>
                <BlockContent blocks={data.copy} />
              </SimpleCopy>
            )}
          </div>

          <div className="bottom">
            {data?.headline && <Headline data={{ headline: data.headline }} />}
          </div>
        </div>

        <Pattern />
      </div>

      <div className="image">
        <Image
          src={data?.image}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={95}
          className="England__image"
        />
      </div>
    </S.England>
  );
}

England.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
