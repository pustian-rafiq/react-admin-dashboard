import ChartBox from "../../components/home/ChartBox/ChartBox.tsx";
import TopDeals from "../../components/home/TopDeals/TopDeals.tsx";
import {
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
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">Box</div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">Box</div>
      <div className="box box8">Box</div>
      <div className="box box9">Box</div>
    </div>
  );
};

export default Home;
