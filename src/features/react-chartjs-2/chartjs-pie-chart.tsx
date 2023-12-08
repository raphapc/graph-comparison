import browserUsage from "@visx/mock-data/lib/mocks/browserUsage";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getColors } from "../../shared/colors";
import { BrowserInfo, BrowserNames } from "../../shared/types";

Chart.register(ArcElement, Tooltip, Legend);

const browserData = browserUsage[0];
const browserNames = Object.keys(browserData).filter(
  (k) => k !== "date"
) as BrowserNames[];

const browsers: BrowserInfo[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserData[name]),
}));

const data = {
  labels: browserNames,
  datasets: [
    {
      label: "Market Share",
      data: browsers.map((b) => b.usage),
      backgroundColor: getColors(),
      borderColor: getColors(),
      borderWidth: 2,
    },
  ],
};

export function ChartJSPieChart() {
  return <Pie data={data} />;
}
