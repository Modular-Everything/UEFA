import PropTypes from "prop-types";

import { ChartPie } from "../../elements/ChartPie";

export function ColorBlock({ data, index }) {
  const chartData = [
    { name: "Group A", value: 80 },
    { name: "Group B", value: 20 },
  ];

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
      <ChartPie
        data={chartData}
        label="8 out of 10 Europeans tuned into Euro 2020 8 out of 10 Europeans tuned into Euro 2020"
      />
    </div>
  );
}

ColorBlock.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
