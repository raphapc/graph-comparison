import browserUsage from "@visx/mock-data/lib/mocks/browserUsage";
import { ArcElement, Chart, ChartOptions, Legend, Tooltip } from "chart.js";
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

const options: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function ChartJSPieChart() {
  return <Pie data={data} options={options} />;
}
