import TopDeals from "../../components/home/TopDeals/TopDeals.tsx";
import BarChartBox from "../../components/home/chart/barChart/BarChart.tsx";
import LineChartBox from "../../components/home/chart/lineChart/LIneChart.tsx";
import PieChartBox from "../../components/home/chart/pieChart/PieChart.tsx";
import {
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/chartBoxData.ts";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeals />
      </div>
      <div className="box box2">
        <LineChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <LineChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <LineChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <LineChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">Box</div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};

export default Home;
