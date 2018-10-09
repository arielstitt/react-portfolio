import React, { Component } from 'react';
import styled from 'styled-components'
import MyWorkContainer from '../MyWork/MyWorkContainer'
import AboutContainer from '../AboutMe/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'

const LandingBackGround = styled.div`
    background-color: pink;
    height: 100vh;
    width: 100vw;
`

class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <LandingBackGround>
                    <h1>This is the landing background</h1>
                </LandingBackGround>
                <MyWorkContainer/>
                <AboutContainer/>
                <ContactContainer/>
            </div>
        );
    }
}

export default LandingPageContainer;