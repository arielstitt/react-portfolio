import React, { Component } from 'react';
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    height: 20vh;
    width: 100vw;
    border: 5px solid #3c3939;
    padding: 1%;

`
const NavButtons = styled.div`
    background-color: white;
    height: 20%;
    width: 20%;
`
const navStyle = {
    padding: '0%',
    margin: 'auto'
}

const NameWrapper = styled.div `

`
const LinkWrapper = styled.div `
    display: flex;
    flex-direction: row;
    width: 40vw;
`
const EmailWrapper = styled.div `
    color: #c9c9c9;
    font-weight: 200;   
`

class NavBar extends Component {
    render() {
        return (

            <Scrollspy style={navStyle} items={['myWork', 'aboutMe', 'contact']} currentClassName="is-current">
                <NavContainer>

                    <NameWrapper>Ariel Stitt</NameWrapper>
                    <LinkWrapper>
                        <NavButtons><a href="#myWork">My Work</a></NavButtons>
                        <NavButtons><a href="#aboutMe">About Me</a></NavButtons>
                        <NavButtons><a href="#contact">Contact</a></NavButtons>
                        <EmailWrapper><a href="arielstitt@gmail.com">arielstitt@gmail.com</a></EmailWrapper>
                    </LinkWrapper>

                </NavContainer>
            </Scrollspy>


        );
    }
}

export default NavBar;