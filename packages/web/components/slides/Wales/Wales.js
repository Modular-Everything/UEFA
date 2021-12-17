import BlockContent from "@sanity/block-content-to-react";
// import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

// import { sanityConfig } from "../../../lib/config";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
// import { Pills } from "../../elements/Pills";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Wales.styles";
import Pattern from "./WalesPattern.png";

export function Wales({ data, index }) {
  const el = useRef();

  return (
    <S.Wales ref={el}>
      <Content>
        <div className="container">
          {data?.copy && (
            <SimpleCopy>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}

          {data?.headline && <Headline data={{ headline: data.headline }} />}
        </div>
      </Content>

      <div className="pattern">
        <Image
          src={Pattern}
          alt=""
          layout="fill"
          quality={100}
          objectFit="contain"
        />
      </div>
    </S.Wales>
  );
}

Wales.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
