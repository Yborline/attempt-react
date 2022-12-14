import styled from "@emotion/styled";

export const Container = styled.div`
display:flex;
justify-content: space-between;
`;


export const ButtonAdd = styled.button`
height:60px;
margin-right:30px;
border: 1px solid;
border-radius: 5px;
:hover{
  background-color:${({theme}) => theme.colors.gray};
}`
  // background-color: ${({ theme }) =>  theme.colors.black } }

export const DivButton = styled.div`
 display: flex; 
 min-height: 100px;`


export const Div = styled.div`
 padding: 0px 40px`

export const Span = styled.span`
 fill: ${({theme})=>theme.colors.greenButton};
 :hover{
  fill:${({theme})=>theme.colors.greenHover};
 }`