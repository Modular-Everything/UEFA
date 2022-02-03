import PropTypes from "prop-types";
import { useRef } from "react";

import { Content } from "../../elements/Content";
import { Headline } from "../../elements/Headline";
import { Image } from "../../elements/Image";
import * as S from "./Title.styles";
import { Pattern } from "./TitlePattern";

export function Title({ data, index, client, preview }) {
  const el = useRef();

  return (
    <S.Title
      ref={el}
      style={{
        backgroundColor: data?.brandColors,
      }}
    >
      <Content>
        <div className="title">
          <div className="Title__logo">
            <Image src={data?.logo} alt={data?.headline} />
          </div>

          {data?.headline && (
            <Headline
              data={{ headline: data.headline }}
              dividerColor="transparent"
            />
          )}
        </div>

        <div className="client-logo">
          {preview ? (
            <S.LogoPlaceholder>Client Logo</S.LogoPlaceholder>
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
