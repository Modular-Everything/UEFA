import PropTypes from "prop-types";
import { useRef } from "react";

import { useActiveSlide } from "../../../hooks/useActiveSlide";
import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import * as S from "./Title.styles";
import { Pattern } from "./TitlePattern";

export function Title({ data, index, activeIndex, client, preview }) {
  const el = useRef();
  const inView = useActiveSlide(activeIndex, index);

  return (
    <S.Title
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        <div className="title">
          <div className={`Title__logo ${inView ? "visible" : "hidden"}`}>
            <Image src={data?.logo} alt={data?.headline} />
          </div>

          {data?.headline && (
            <Headline
              data={{ headline: data.headline }}
              inView={inView}
              dividerColor="transparent"
            />
          )}
        </div>

        <div className={`client-logo ${inView ? "visible" : "hidden"}`}>
          {preview ? (
            <S.LogoPlaceholder>
              Client logo
              <small>(disabled in preview mode)</small>
            </S.LogoPlaceholder>
          ) : (
            <Image src={client?.logo} alt={client?.title} />
          )}
        </div>
      </Content>

      <Pattern />
    </S.Title>
  );
}

Title.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
