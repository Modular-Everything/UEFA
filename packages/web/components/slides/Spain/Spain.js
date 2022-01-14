import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRef } from "react";

import { sanityConfig } from "../../../lib/config";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import * as S from "./Spain.styles";

function ImageRef({ id }) {
  const imageProps = useNextSanityImage(sanityConfig, id);
  return <Image {...imageProps} alt="" className="logo" />;
}

export function Spain({ data, index }) {
  const el = useRef();

  return (
    <S.Spain ref={el}>
      <Content>
        <Headline data={{ headline: data?.headline }} />
        <S.Grid>
          <ul>
            {data?.matrix.map((item, index) => {
              if (index > 14) {
                return null;
              }

              let content = null;
              console.log(item);

              switch (item._type) {
                case "logo":
                  content = <ImageRef id={item} />;
                  break;
                case "title":
                  content = (
                    <>
                      <span className="index">
                        {index < 10 ? `0${index + 1}` : index + 1}
                      </span>

                      <div className="title">{item.title}</div>
                    </>
                  );
                  break;
                default:
                  content = null;
              }

              return <li key={item._key}>{content}</li>;
            })}
          </ul>
        </S.Grid>
      </Content>
    </S.Spain>
  );
}

Spain.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
