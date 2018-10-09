import React, { Component } from 'react';
import styled from 'styled-components'
 

const LandingBackGround = styled.div`
    background-color: yellow;
    height: 100vh;
    width: 100vw;
`
class MyWorkContainer extends Component {
    render() {
        return (
            <LandingBackGround>
                <h1>My Work</h1>
            </LandingBackGround>
        );
    }
}

export default MyWorkContainer;