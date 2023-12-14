import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { browserUsage } from "@visx/mock-data";
import { getColors } from "../../shared/colors";
import { BrowserInfo, BrowserNames } from "../../shared/types";

const browserData = browserUsage[0];
const browserNames = Object.keys(browserData).filter(
  (k) => k !== "date",
) as BrowserNames[];

const browsers: BrowserInfo[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserData[name]),
}));

const MuixPieChart = () => {
  const size = {
    width: 400,
    height: 400,
  };

  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label}`,
          arcLabelMinAngle: 20,
          data: browsers.map((b) => ({ label: b.label, value: b.usage })),
        },
      ]}
      colors={getColors()}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 11,
          fontFamily: "Roboto, sans-serif",
        },
      }}
      slotProps={{ legend: { hidden: true } }}
      {...size}
    />
  );
};

export default MuixPieChart;
