import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

import { sanityConfig } from "../../../lib/config";
import { Headline } from "../../elements/Headline";
import * as S from "./Italy.styles";
import { Pattern } from "./Pattern";

export function Italy({ data }) {
  const imageProps = useNextSanityImage(sanityConfig, data?.image);

  return (
    <S.Italy>
      <div className="content">
        <Headline data={{ headline: data?.headline }} />
      </div>

      <div className="image">
        <Image {...imageProps} quality={95} />
      </div>

      <Pattern />
    </S.Italy>
  );
}
