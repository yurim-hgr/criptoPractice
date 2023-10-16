import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

interface RouteLocation {
    name : string;
}

interface InfoData{
    id : string;
    name : string;
    symbol : string;
    rank : number;
    is_new : boolean;
    is_active : boolean;
    type : string;
    logo : string;
    description : string;
    message : string;
    open_source : boolean;
    started_at : string;
    development_status : string;
    hardware_wallet : boolean;
    proof_type : string;
    org_structure : string;
    hash_algorithm : string;
    first_data_at : string;
    last_data_at : string;
}

interface PriceData {
    id : string;
    name : string;
    symbol : string;
    rank : number;
    circulating_supply : number;
    total_supply : number;
    max_supply : number;
    beta_value : number;
    first_data_at : string;
    last_updated : string;
    quotes : {
        USD : {
            ath_date : number;
            ath_price : number;
            market_cap : number;
            market_cap_change_24h : number;
            percent_change_1h : number;
            percent_change_1y : number;
            percent_change_6h : number;
            percent_change_7d : number;
            percent_change_12h : number;
            percent_change_15m : number;
            percent_change_24h : number;
            percent_change_30d : number;
            percent_change_30m : number;
            percent_from_price_ath : number;
            price : number;
            volume_24h : number;
            volume_24h_change_24h : number;
        }
    };
}


const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Title = styled.h1`
    color: ${props => props.theme.accentColor};
    font-size: 48px;
`
const Loader = styled.span`
  text-align  :center ;
  display: block;
`;

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading , setLoading ] = useState(true);
  const {state} = useLocation<RouteLocation>();
  console.log(state.name);

  const [info, setInfo ] = useState<InfoData>();
  const [price , setPriceInfo ] = useState<PriceData>();
  useEffect(
    ()=> {
        (async () => {
            const info = await (await fetch("https://api.coinpaprika.com/v1/coins/btc-bitcoin")).json();
            const priceDate =  await (await fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin")).json();
            setInfo(info);
            setPriceInfo(priceDate)
            setLoading(false);
        })();
    },[]
  );
console.log(info);
console.log(price);
  return (
    <Container>
        <Header>
            <Title>{state?.name || "Loading.." }</Title>
        </Header>
        {loading? (
            <Loader>
                Loading..
            </Loader>
        ): null}
    </Container>
  )
}

export default Coin;
