import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchChartData } from "../api";

interface chartInterface {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart({ coinId }: chartInterface) {
  const { isLoading, data } = useQuery("ohicv", () => fetchChartData(coinId));
  console.log(data);
  return <h1>Chart</h1>;
}

export default Chart;
