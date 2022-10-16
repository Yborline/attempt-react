import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #888;
  font-weight: 700;
  text-decoration: none;
  padding: 8px 3px;
  width: 100%;
 &:hover,
  &.active {
    background-color: rgba(84, 78, 114, 1);
    border-radius: 10px 0px 0px 10px;
  }


  &.active {
    color: #f8dc2f;
  }
`;
    // background-color: rgba(84, 78, 114, 1);
    // border-radius: 10px 0px 0px 10px;

export const StyledLi = styled.li`
  list-style: none;
  display: flex;
  background-color: ${(props) =>
    props.path ? "rgba(84, 78, 114, 1)" : "white"};
  border-radius: ${(props) => (props.path ? "0px 0px 0px 10px" : "0px")};

`;

