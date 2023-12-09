import { ResponsivePie } from "@nivo/pie";
import { browserUsage } from "@visx/mock-data";
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

function NivoPieChart() {
  return (
    <div style={{ height: "410px" }}>
      <ResponsivePie
        data={browsers}
        id={"label"}
        value={"usage"}
        colors={getColors()}
        sortByValue={true}
        arcLabel={"label"}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="white"
        enableArcLinkLabels={false}
        activeOuterRadiusOffset={2}
        tooltip={({ datum }) => {
          return (
            <div
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                padding: "9px 12px",
                border: "1px solid #ccc",
              }}
            >
              <div style={{ color: "white" }}>
                <strong>{datum.label}</strong>
              </div>
              <div style={{ color: "white" }}>
                <strong>{datum.value}</strong>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default NivoPieChart;
