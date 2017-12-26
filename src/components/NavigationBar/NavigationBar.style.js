import styled from "styled-components";
import { Button } from "../../style/styleguide"

export const NavBar = styled.ul`
  background-color: #3097D1;
  overflow: hidden;
  margin-bottom: 0px;
`;

export const NavButton = Button.extend`
  float: right
`

export const NavLink = styled.a`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  cursor: pointer;
`

export const AuthenticateButton = NavLink.extend`
  float: right;
`


export const NavBarItem = styled.li`

`