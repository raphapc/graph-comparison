import { browserUsage } from "@visx/mock-data";
import { VictoryPie } from "victory";
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

function VictoryPieChart() {
  const data = browsers.map((b) => ({ x: b.label, y: b.usage }));
  return (
    <div>
      <VictoryPie
        data={data}
        colorScale={getColors()}
        labelRadius={60}
        labels={({ datum }) =>
          datum.endAngle - datum.startAngle > 5 ? `${datum.x}` : ""
        }
        style={{
          labels: {
            fill: "white",
            fontSize: 10,
            fontFamily: "Roboto, sans-serif",
            padding: 0,
          },
        }}
      />
    </div>
  );
}

export default VictoryPieChart;
