import { browserUsage } from "@visx/mock-data";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { getColors } from "../../shared/colors";
import { BrowserInfo, BrowserNames } from "../../shared/types";

interface PieLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  name: string;
  startAngle: number;
  endAngle: number;
}

const browserData = browserUsage[0];
const browserNames = Object.keys(browserData).filter(
  (k) => k !== "date"
) as BrowserNames[];

const browsers: BrowserInfo[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserData[name]),
}));

const colors = getColors();

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  startAngle,
  endAngle,
}: PieLabelProps) => {
  const radian = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * radian);
  const y = cy + radius * Math.sin(-midAngle * radian);
  const angle = Math.abs(endAngle - startAngle);

  const text = (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={10}
      textAnchor={"middle"}
      dominantBaseline="central"
    >
      {`${name}`}
    </text>
  );

  return angle > 10 ? text : null;
};

function RechartPieChart() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={browsers}
        dataKey="usage"
        nameKey="label"
        cx="50%"
        cy="50%"
        label={renderCustomizedLabel}
        labelLine={false}
        startAngle={90}
        endAngle={-270}
      >
        {browsers.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default RechartPieChart;
