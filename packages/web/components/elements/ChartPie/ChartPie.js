import { useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

import * as S from "./ChartPie.styles";

const COLORS = [
  "var(--uefa-lt-blue)",
  "var(--uefa-green)",
  "var(--uefa-yellow)",
  "var(--uefa-red)",
  "var(--uefa-lt-black)",
  "var(--uefa-lt-grey)",
  "var(--uefa-mdm-yellow)",
  "var(--uefa-mdm-green)",
  "var(--uefa-mdm-red)",
  "var(--uefa-mdm-blue)",
  "var(--uefa-lt-green)",
  "var(--uefa-lt-yellow)",
  "var(--uefa-blue)",
  "var(--uefa-lt-red)",
];

export function ChartPie({ data, label }) {
  const [isAnimating, setIsAnimating] = useState(true);
  return (
    <S.ChartPie>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          outerRadius="60%"
          innerRadius="40%"
          onAnimationEnd={() => setIsAnimating(false)}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value={label}
            position="center"
            style={{ opacity: isAnimating ? 0 : 1 }}
          />
        </Pie>
      </PieChart>
    </S.ChartPie>
  );
}
