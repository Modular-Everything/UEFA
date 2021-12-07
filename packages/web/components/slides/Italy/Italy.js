import BlockContent from "@sanity/block-content-to-react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

import { sanityConfig } from "../../../lib/config";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Italy.styles";
import { Pattern } from "./Pattern";

export function Italy({ data }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image);

  return (
    <S.Italy>
      <Content>
        <Headline data={{ headline: data?.headline }} />
        <SimpleCopy>
          <BlockContent blocks={data?.copy} />
        </SimpleCopy>
      </Content>

      <div className="image">
        <Image {...imageProps} quality={95} className="Italy__image" />
      </div>

      <Pattern />
    </S.Italy>
  );
}
