import PropTypes from "prop-types";

import { ChartPie2 } from "../../elements/ChartPie2";

export function ColorBlock({ data, index }) {
  return (
    <div
      style={{
        backgroundColor: data?.color,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h5>index: {index}</h5>
      <h2>{data?.headline}</h2>
      <ChartPie2 />
    </div>
  );
}

ColorBlock.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
