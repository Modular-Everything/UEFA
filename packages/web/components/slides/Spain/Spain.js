import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Icons } from "../../elements/Icons/Icons";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Spain.styles";

function ImageRef({ id }) {
  return <Image src={id} alt="" className="logo" />;
}

export function Spain({ data, index, activeIndex, fullpageApi }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  function Item({ key, content, anchor }) {
    return (
      <S.Item
        key={key}
        delay={index}
        className={`${inView ? "visible" : "hidden"} ${anchor ? "linked" : ""}`}
      >
        {anchor ? (
          <button type="button" onClick={() => fullpageApi.moveTo(anchor)}>
            {content}
          </button>
        ) : (
          content
        )}
      </S.Item>
    );
  }

  return (
    <S.Spain ref={el}>
      <Content>
        <div className="header">
          {data?.headline && (
            <Headline data={{ headline: data.headline }} inView={inView} />
          )}

          {data?.copy && (
            <SimpleCopy inView={inView}>
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

              return (
                <Item key={item._key} content={content} anchor={item.anchor} />
              );
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
