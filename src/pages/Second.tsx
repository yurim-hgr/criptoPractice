import { useParams } from "react-router-dom";
import { styled } from "styled-components";

interface RouteParams{
    type: string;
}


const textarea = styled.textarea``;

const input = styled.input`
    
`;

const Title = styled.div``;

function Second() {
    const {type}= useParams<RouteParams>();
    console.log(type)
    
    return <h1>{type == "type1"? "지문 불러오기 내용 ": "지문입력 내용"}</h1>
}


export default Second;