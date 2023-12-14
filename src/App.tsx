import "./App.css";
import HighchartsPieChart from "./features/highcharts/highchart-pie-chart";
import MuixPieChart from "./features/muix-charts/muix-pie-chart";
import NivoPieChart from "./features/nivo/nivo-pie-chart";
import ChartJSPieChart from "./features/react-chartjs-2/chartjs-pie-chart";
import RechartPieChart from "./features/recharts/rechart-pie-chart";
import TremorPieChart from "./features/tremor/tremor-pie-chart";
import VictoryPieChart from "./features/victory/victory-pie-chart";
import VisxPieChart from "./features/visx/visx-pie-chart";

function App() {
  return (
    <div className="display-charts">
      <div className="chartsize">
        <h3 className="text-center">
          <span>Visx</span>
        </h3>
        <VisxPieChart width={400} height={400} />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>React ChartJS</span>
        </h3>
        <ChartJSPieChart />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>Recharts</span>
        </h3>
        <RechartPieChart />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>Nivo</span>
        </h3>
        <NivoPieChart />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>Highcharts</span>
        </h3>
        <HighchartsPieChart />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>Victory</span>
        </h3>
        <VictoryPieChart />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>Tremor</span>
        </h3>
        <TremorPieChart />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>MUI-X Charts</span>
        </h3>
        <MuixPieChart />
      </div>
    </div>
  );
}

export default App;
