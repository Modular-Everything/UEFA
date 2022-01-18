import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

export const ChartPie = styled(ResponsiveContainer)`
  svg {
    text {
      fill: var(--uefa-lt-blue);
      font-size: clamp(1.4rem, 4vw, 2rem);
    }

    path {
      stroke: none;
    }
  }
`;
