import React, { Component } from 'react';
import styled from 'styled-components'

const NavContainer = styled.div `
    background: yellow;
    height: 15vh;
    width: 100vw;
`
class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <div>My Work</div>
                <div>About Me</div>
                <div>Contact</div>
            </NavContainer>
        );
    }
}

export default NavBar;