import { DonutChart } from "@tremor/react";
import { browserUsage } from "@visx/mock-data";
import { colorsTailwind } from "../../shared/colors";
import { BrowserInfo, BrowserNames } from "../../shared/types";

const browserData = browserUsage[0];
const browserNames = Object.keys(browserData).filter(
  (k) => k !== "date",
) as BrowserNames[];

const browsers: BrowserInfo[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserData[name]),
}));

function TremorPieChart() {
  return (
    <DonutChart
      className="mt-6 w-full h-full"
      data={browsers}
      category="usage"
      index="label"
      variant="pie"
      label="label"
      showLabel={true}
      colors={colorsTailwind}
    />
  );
}

export default TremorPieChart;
