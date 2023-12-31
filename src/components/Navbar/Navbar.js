import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/annual'>
                        Annual
                    </NavLink>
                    <NavLink to='sign-up'>
                        Sign-up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;