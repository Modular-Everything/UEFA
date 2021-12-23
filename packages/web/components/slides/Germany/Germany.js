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
import * as S from "./Germany.styles";
import { Pattern } from "./GermanyPattern";

export function Germany({ data, index }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image);
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
          {...imageProps}
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
