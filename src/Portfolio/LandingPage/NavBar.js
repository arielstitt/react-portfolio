import React, { Component } from 'react';
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    width: 100vw;
    border-bottom: 5px solid #096de8;
    padding: 1%;
    position: fixed;
    background-color: white;
    a {
        text-decoration: none;
        color: black;
        :hover {
            color: #096de8;
        }
    }
`
const NavButtons = styled.div`
    background-color: ;
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
const Name = styled.h3 `
    a {
        color: #096de8;
    }
`

class NavBar extends Component {
    render() {
        return (

            <Scrollspy style={navStyle} items={['landingPage','myWork', 'aboutMe', 'contact']} currentClassName="is-current">
                <NavContainer>

                    <NameWrapper><Name><a href="#landingPage"> Ariel Stitt</a></Name> </NameWrapper>
                    <LinkWrapper>
                        <NavButtons><h3><a href="#myWork">Portfolio</a></h3></NavButtons>
                        <NavButtons><h3><a href="#aboutMe">About Me</a></h3></NavButtons>
                        <NavButtons><h3><a href="#contact">Contact</a></h3></NavButtons>
                        <EmailWrapper><h3><a href="mailto:arielstitt@gmail.com">arielstitt@gmail.com</a></h3></EmailWrapper>
                    </LinkWrapper>

                </NavContainer>
            </Scrollspy>


        );
    }
}

export default NavBar;