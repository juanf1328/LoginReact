import React from "react";
//import { Nav } from "react-bootstrap";
import Nav from 'react-bootstrap/nav';
import NavMenu from 'react-bootstrap/navmenu';
import NavLink from 'react-bootstrap/navlink';
import NavBtn from 'react-bootstrap/navbtn';
import NavBtnLink from 'react-bootstrap/navbtnlink';




const Navigation = () => {
    return (
        <>
           <Nav>
            
           
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navigation;




