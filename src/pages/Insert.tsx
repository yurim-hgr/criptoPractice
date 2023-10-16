import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/Button";

interface RouteParams{
    type: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    /* min-width: 1000px; */
    /* margin: 0 auto; */
`;

const Header = styled.header`
    
`;

const Textarea = styled.textarea``;

const Input = styled.input`
    
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
   display : flex;
   justify-content: center;
`; 

function Second() {
    // const {type}= useParams<RouteParams>();
    // console.log(type)
    
    return (
        <Container>
            <Header>
                <Title>지문입력</Title>
            </Header>
            
            <Input placeholder="제목(출처를 입력하세요)"></Input>
            <Textarea placeholder="원하시는 지문을 작성하세요"></Textarea>
            <ButtonContainer>
                <Button text="지문입력"></Button>
            </ButtonContainer>
        </Container>
    )
}


export default Second;