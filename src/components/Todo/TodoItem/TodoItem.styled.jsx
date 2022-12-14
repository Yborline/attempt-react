import styled from "@emotion/styled";

export const LiItem = styled.li`
margin-bottom:10px;
max-width:320px;
min-height:150px;
padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

background-color: ${props => props.theme.colors.todo};
border: 2px solid gray;
border-radius:10px`

export const DivOther = styled.div`
display: flex;
justify-content: space-between;`

export const PText = styled.p`
max-width: 270px;
margin-top:0px;
word-break: break-all;
min-height:80px;`


export const Checkbox = styled.input`
width: 20px;
height: 20px;`

export const Button = styled.button`
height:50px;
width: 50px;
border-radius:50%;
background:gray;
background-color: #fff;
margin-left:20px;
cursor:pointer;

`

export const ButtonDate = styled.button`
margin-top:5px;
height:40px;
border-radius:20px;
border: 1px;
color: ${props => props.date === false ? props.theme.colors.red : props.theme.colors.greenButton };
margin-right:5px;
align-items: center;
cursor:pointer;
:hover{
background-color: ${props => props.theme.colors.purple}
}

`

export const DivDate = styled.div`
display:flex;
align-items: center;
`

export const DivDellDate = styled.div`
display:flex;
flex-direction: row-reverse;

justify-content: space-between;
`

export const PDate = styled.p`
margin:0px;`


// flex-direction: row;
// justify-content: center;
// align-items: center;
// gap: 10px;
