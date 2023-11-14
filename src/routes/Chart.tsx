import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchChartData } from "../api";

interface chartInterface {
  coinId: string;
}

function Chart({ coinId }: chartInterface) {
  const { isLoading, data } = useQuery("ohicv", () => fetchChartData(coinId));

  return <h1>Chart</h1>;
}

export default Chart;
