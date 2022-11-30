import styled from "@emotion/styled";

export const LiItem = styled.li`
margin-bottom:10px;
max-width:320px;
min-height:150px;

background-color: ${props => props.theme.colors.todo};
border: 2px solid gray;
border-radius:10px`

export const DivOther = styled.div`
display: flex;
justify-content: space-between;`

export const P = styled.p`
word-break: break-all;
min-height:100px;`

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
