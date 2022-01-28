import BlockContent from "@sanity/block-content-to-react";
import fitty from "fitty/dist/fitty.min.js";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

import { Content } from "../../elements/Content";
import { Image } from "../../elements/Image";
import { SimpleCopy } from "../../elements/SimpleCopy";
import * as S from "./Sweden.styles";
import { Pattern } from "./SwedenPattern";

export function Sweden({ data, index }) {
  const [containerAHeight, setContainerAHeight] = useState(null);
  const [containerBHeight, setContainerBHeight] = useState(null);

  const el = useRef();
  const fitRefA = useRef(null);
  const fitRefB = useRef(null);

  useEffect(() => {
    fitty(fitRefA.current, {
      maxSize: 300,
    });
    fitty(fitRefB.current, {
      maxSize: 300,
    });

    fitRefA.current.addEventListener("fit", (e) => {
      setContainerAHeight(fitRefA?.current?.clientHeight);
      setContainerBHeight(fitRefA?.current?.clientHeight);
    });
  }, []);

  return (
    <S.Sweden ref={el}>
      <Content>
        <div className="titles">
          <div
            className="title title--a"
            style={{ height: `${containerAHeight}px` }}
          >
            <div className="image">
              <Image
                src={data?.titleAImage}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="copy">
              <p className="capsizedText" ref={fitRefA}>
                {data?.titleA}
              </p>
            </div>
          </div>

          <div
            className="title title--b"
            style={{ height: `${containerBHeight}px` }}
          >
            <div className="copy">
              <p className="capsizedText" ref={fitRefB}>
                {data?.titleB}
              </p>
            </div>

            <div className="image">
              <Image
                src={data?.titleBImage}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="footer">
          {data?.copy && (
            <SimpleCopy>
              <BlockContent blocks={data.copy} />
            </SimpleCopy>
          )}
        </div>
      </Content>

      <div className="pattern">
        <Pattern />
      </div>
    </S.Sweden>
  );
}

Sweden.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
