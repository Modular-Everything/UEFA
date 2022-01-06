import BlockContent from "@sanity/block-content-to-react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

import { sanityConfig } from "../../../lib/config";
import { Content } from "../../elements/Content";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./France.styles";
import { Pattern } from "./FrancePattern";

export function France({ data, index }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image);
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
            {...imageProps}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
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
