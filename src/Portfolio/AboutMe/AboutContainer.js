import React, { Component } from 'react';
import styled from 'styled-components'
 

const LandingBackGround = styled.div`
    background-color: pink;
    height: 100vh;
    width: 100vw;
`
class AboutContainer extends Component {
    render() {
        return (
            <LandingBackGround>
                <h1>About Container</h1>
            </LandingBackGround>
        );
    }
}

export default AboutContainer;