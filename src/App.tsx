import "./App.css";
import { ChartJSPieChart } from "./features/react-chartjs-2/chartjs-pie-chart";
import RechartPieChart from "./features/recharts/rechart-pie-chart";
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
          <span>Visx Pie Chart</span>
        </h3>
        <VisxPieChart width={400} height={400} />
      </div>
      <div className="chartsize">
        <h3 className="text-center">
          <span>Visx Pie Chart</span>
        </h3>
        <VisxPieChart width={400} height={400} />
      </div>
    </div>
  );
}

export default App;
