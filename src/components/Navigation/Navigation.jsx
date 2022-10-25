// import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { StyledNavLink } from "./Navigation.styled";
import { Link , StyledLi} from './Navigation.styled'




function Navigation() {
  return (
    <div>
      <ul>
          <StyledLi>
            <Link to="/" end>
              Home
            </Link>
          </StyledLi>
        <StyledLi>
        <Link to="/todos">Todos</Link>
 
        </StyledLi>
        <StyledLi>
          <Link to="/pokemon">Pokemon</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/clock">Other</Link>
          </StyledLi>
      </ul>
      <Outlet/>
    </div>
  );
}

export default Navigation;
