import { useParams } from "react-router-dom";

interface RouteParams{
    coinId: string;
}
function Coin() {
    const {coinId} = useParams<RouteParams>();
    return <div>coin : {coinId}</div>
    
}

export default Coin;