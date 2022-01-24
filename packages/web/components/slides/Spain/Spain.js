import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import * as S from "./Spain.styles";

function ImageRef({ id }) {
  return <Image src={id} alt="" className="logo" />;
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
