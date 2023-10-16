import { useParams } from "react-router-dom";
import { styled } from "styled-components";

interface RouteParams{
    type: string;
}


const textarea = styled.textarea``;

// const Input = styled.`
    
// `;

const Title = styled.div``;

function Second() {
    // const {type}= useParams<RouteParams>();
    // console.log(type)
    
    return <h1>지문 불러오기</h1>
}


export default Second;