import { browserUsage } from "@visx/mock-data";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { getColors } from "../../shared/colors";
import { BrowserInfo, BrowserNames } from "../../shared/types";

const browserData = browserUsage[0];
const browserNames = Object.keys(browserData).filter(
  (k) => k !== "date"
) as BrowserNames[];

const browsers: BrowserInfo[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserData[name]),
}));

const colors = getColors();

function RechartPieChart() {
  return (
    <PieChart width={400} height={400}>
      <Legend verticalAlign="top" />
      <Pie data={browsers} dataKey="usage" nameKey="label" cx="50%" cy="50%">
        {browsers.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default RechartPieChart;
