import { browserUsage } from "@visx/mock-data";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
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

export default function HighchartsPieChart() {
  const series: Highcharts.SeriesPieOptions[] = [
    {
      type: "pie",
      name: "Browser Share",
      data: browsers.map((b) => ({ name: b.label, y: b.usage })),
      colors: getColors(),
    },
  ];

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    title: {
      style: {
        display: "none",
      },
    },
    plotOptions: {
      pie: {
        size: 380,
        dataLabels: {
          enabled: true,
          distance: -100,
          style: {
            color: "white",
            fontFamily: "Roboto, sans-serif",
            stroke: "none",
          },
        },
      },
    },
    tooltip: {
      pointFormat: "<b>{point.percentage:.1f}%</b>",
      backgroundColor: "#1B1B1B",
      valueDecimals: 2,
      style: {
        color: "white",
        fontSize: "14px",
      },
    },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
