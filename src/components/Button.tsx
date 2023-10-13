import styled from "styled-components"


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Containter = styled.button`
    border-radius: 26px;
    background-color: white;
    border : 1px solid orange;
    font-size: 20px;
    width: 272px;
    height: 52px;
    color : #EF7D00;
    &:hover{
        background-color: #EF7D00; 
        color : white;  
        transition:  0.2s ease-in;
    }
`
interface ButtonProps {
    text : string;
}

function Button({text} : ButtonProps) {
    return (
    
        <Containter>{text}</Containter>
    
    )
}


export default Button;