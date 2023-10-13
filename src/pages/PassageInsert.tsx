import { useParams } from "react-router-dom";

interface RouteParams{
    type: string;
}

function PassageInsert() {
    const {type}= useParams<RouteParams>();
    console.log(type)
    
    return <h1>{type == "type1"? "지문 불러오기 내용 ": "지문입력 내용"}</h1>
}


export default PassageInsert;