import BlockContent from "@sanity/block-content-to-react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

import { sanityConfig } from "../../../lib/config";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Pills } from "../../elements/Pills";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Italy.styles";
import { Pattern } from "./Pattern";

export function Italy({ data, index }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image);
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
        <Image {...imageProps} quality={95} className="Italy__image" />
      </div>

      <Pattern />
    </S.Italy>
  );
}

Italy.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
