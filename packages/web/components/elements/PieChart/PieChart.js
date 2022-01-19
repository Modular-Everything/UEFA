import * as S from "./PieChart.styles";

export function PieChart() {
  const segments = [
    {
      label: 0,
      value: 0.4,
      color: "var(--uefa-lt-blue)",
    },
    {
      label: 1,
      value: 0.33,
      color: "var(--uefa-lt-red)",
    },
    {
      label: 2,
      value: 0.12,
      color: "var(--uefa-lt-yellow)",
    },
    {
      label: 3,
      value: 0.08,
      color: "var(--uefa-lt-black)",
    },
    {
      label: 4,
      value: 0.07,
      color: "var(--uefa-lt-green)",
    },
  ];

  return (
    <S.PieChart className="donut" segments={segments}>
      <div className="donut__slice donut__slice__0" />
      <div className="donut__slice donut__slice__1" />
      <div className="donut__slice donut__slice__2" />
      <div className="donut__slice donut__slice__3" />
      <div className="donut__slice donut__slice__4" />
      <div className="donut__label">
        <div className="donut__label__heading">Donut Charts</div>
        <div className="donut__label__sub">with Pure CSS</div>
      </div>
    </S.PieChart>
  );
}
