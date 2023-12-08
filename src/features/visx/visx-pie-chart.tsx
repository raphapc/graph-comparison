import { Group } from "@visx/group";
import browserUsage from "@visx/mock-data/lib/mocks/browserUsage";
import { scaleOrdinal } from "@visx/scale";
import { Pie } from "@visx/shape";
import { getColors } from "../../shared/colors";
import { BrowserInfo, BrowserNames } from "../../shared/types";

interface PieChartProps {
  width: number;
  height: number;
}

const browserData = browserUsage[0];
const browserNames = Object.keys(browserData).filter(
  (k) => k !== "date"
) as BrowserNames[];

const browsers: BrowserInfo[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserData[name]),
}));

const getBrowserColor = scaleOrdinal({
  domain: browserNames,
  range: getColors(),
});

export default function PieChart({ width, height }: PieChartProps) {
  const radius = Math.min(width, height) / 2;
  return (
    <svg width={width} height={height}>
      <Group top={height / 2} left={width / 2}>
        <Pie
          data={browsers}
          pieValue={(d) => d.usage}
          outerRadius={radius}
          padAngle={0.005}
        >
          {(pie) => {
            return pie.arcs.map((arc) => {
              const { label } = arc.data;
              const [centroidX, centroidY] = pie.path.centroid(arc);

              const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
              return (
                <g key={`arc-${label}`}>
                  <path d={pie.path(arc)!} fill={getBrowserColor(label)} />
                  {hasSpaceForLabel && (
                    <text
                      x={centroidX}
                      y={centroidY}
                      dy=".33em"
                      fill="white"
                      fontSize={11}
                      textAnchor="middle"
                      pointerEvents="none"
                    >
                      {label}
                    </text>
                  )}
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
}
