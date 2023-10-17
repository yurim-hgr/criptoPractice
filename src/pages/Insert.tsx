import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/Button";
import { useState } from "react";
import { text } from "stream/consumers";

interface RouteParams{
    type: string;
}

interface InputValue {
    
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
  
`;

const Input = styled.input`
  padding  :5px;
  margin: 10px 0;
`;
const Textarea = styled.textarea`
    height: 130px;
    padding : 5px;
`;


const Title = styled.div``;

const ButtonContainer = styled.div`
   display : flex;
   justify-content: center;
   margin-top: 10px;
`; 

function Second() {
    // const {type}= useParams<RouteParams>();
    // console.log(type)
    const [input , setInput ] = useState({
        title: ''
        
    });

    const [textarea, setTextarea ]= useState({
        passage: ''
    });

    const {title } = input;
    const {passage } = textarea;
    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setInput({
            ...input,
            title: e.currentTarget.value
        })
        
    }

    const onChangeTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value);
        setTextarea({
            ...textarea,
            passage: e.currentTarget.value
        })
    }
    
    const onClick = () => {
        // console.log(input );
        // console.log(textarea );
        const obj = Object.assign(input, textarea)
        console.log(obj);

    }
    return (
        <Container>
            <Header>
                <Title>지문입력</Title>
            </Header>
          
                <Input name="title" value={title} placeholder="제목(출처를 입력하세요)"  onChange={onChangeInput}></Input>
                <Textarea name="passage" value={passage} placeholder="원하시는 지문을 작성하세요" onChange={onChangeTextarea}></Textarea>
                <ButtonContainer>
                <button onClick={onClick}>지문입력</button>
                </ButtonContainer>
        </Container>
    )
}
<Button text="지문입력"></Button>
         

export default Second;