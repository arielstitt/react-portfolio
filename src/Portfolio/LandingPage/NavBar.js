import React, { Component } from 'react';
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const NavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #cc6e55;
    height: 20vh;
    width: 100vw;
    border: 5px solid #3c3939;

`
const NavButtons = styled.div `
    background-color: white;
    height: 20%;
    width: 20%;
`
const navStyle = {
    padding: '0%',
    margin: 'auto'
}

class NavBar extends Component {
    render() {
        return (

            <Scrollspy style={navStyle} items={['myWork', 'aboutMe', 'contact']} currentClassName="is-current">
                <NavContainer>
                    <NavButtons><a href="#myWork">My Work</a></NavButtons>
                    <NavButtons><a href="#aboutMe">About Me</a></NavButtons>
                    <NavButtons><a href="#contact">Contact</a></NavButtons>
                </NavContainer>
            </Scrollspy>


        );
    }
}

export default NavBar;