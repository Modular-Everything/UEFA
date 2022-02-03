import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Icons } from "../../elements/Icons/Icons";
import { Alert } from "../../elements/Icons/assets/Alert";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Spain.styles";

function ImageRef({ id }) {
  return <Image src={id} alt="" className="logo" />;
}

export function Spain({ data, index }) {
  const el = useRef();

  console.log(data);

  return (
    <S.Spain ref={el}>
      <Content>
        <div className="header">
          {data?.headline && <Headline data={{ headline: data.headline }} />}

          {data?.copy && (
            <SimpleCopy>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}
        </div>

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
                      {!item.icons && (
                        <span className="index">
                          {index < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      )}

                      <div
                        className="title"
                        style={{
                          color: item.brandColors
                            ? item.brandColors
                            : "inherit",
                        }}
                      >
                        {item.icons && (
                          <span className="icon">
                            <Icons icon={item.icons} />
                          </span>
                        )}
                        {item.title}
                      </div>
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
