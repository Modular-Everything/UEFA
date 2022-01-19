import PropTypes from "prop-types";

import { PieChart } from "../../elements/PieChart";

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
      <PieChart />
    </div>
  );
}

ColorBlock.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
