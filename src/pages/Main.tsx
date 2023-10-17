import { Link } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
    /* display: flex; */
    /* justify-content: center; */
`;


const Title = styled.div`
    color: #9C9C9C;
    font-size: 28px;
    font-family: Noto Sans KR;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.5px;
    text-align: center;

    margin-top: 259px;

`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 21px;
`;
function First() {
    return (
    <Container>
        <Title>지문 입력방식을 선택하세요</Title>
        <ButtonContainer>
        <Link to={`/type1`}><Button text= "지문불러오기"></Button></Link>
        <Link to={`/type2`}><Button text= "지문입력"></Button></Link>
        </ButtonContainer>
    </Container>
    )
}

export default First;