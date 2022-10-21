import styled from "@emotion/styled";

export const DivItem = styled.div`
margin-bottom:10px;
width:300px;

background-color: ${props => props.theme.colors.todo};
border: 2px solid gray;
border-radius:10px`

export const DivOther = styled.div`
display: flex;
justify-content: space-between;`



export const Button = styled.button`
height:50px;
width: 50px;
border-radius:50%;
background:gray;
background-color: #fff;
margin-left:20px;
cursor:pointer;

`

// flex-direction: row;
// justify-content: center;
// align-items: center;
// gap: 10px;
