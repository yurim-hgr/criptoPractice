import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;`;

const CoinList = styled.ul``;

const Coin  = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    margin-bottom : 10px;
    border-radius: 15px;
    a{
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    color: ${props => props.theme.accentColor};
    font-size: 48px;
`

const Loader = styled.span`
  text-align  :center ;
  display: block;
`;

// const coins= [
//     {
//         id: "btc-bitcoin",
//         name: "Bitcoin",
//         symbol: "BTC",
//         rank: 1,
//         is_new: false,
//         is_active: true,
//         type: "coin",
//     },
//     {
//         id: "eth-ethereum",
//         name: "Ethereum",
//         symbol: "ETH",
//         rank: 2,
//         is_new: false,
//         is_active: true,
//         type: "coin",
//     },
//     {
//         id: "hex-hex",
//         name: "HEX",
//         symbol: "HEX",
//         rank: 3,
//         is_new: false,
//         is_active: true,
//         type: "token",
//     },  
// ]

interface CoinsInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}
function Coins (){

    const [coins ,setCoins ]= useState<CoinsInterface[]>([]);
    const [loading , setLoading ] = useState(true);
    useEffect(()=> {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0,100));
            setLoading(false);
        })();

    },[]);
    console.log(coins);
    return (
    <Container>
        <Header>
            <Title>COIN</Title>
        </Header>
        {loading ?(
            <Loader>Loading...</Loader>
            ): (  
        <CoinList>
            {coins.map((coin) => (
                <Coin key={coin.id}>
                    <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                </Coin>
            ))} 
            
        </CoinList>
        )}
    </Container>
    );
}

export default Coins;