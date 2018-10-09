import React, { Component } from 'react';
import styled from 'styled-components'
import MyWorkContainer from '../MyWork/MyWorkContainer'
import AboutContainer from '../AboutMe/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'
import NavBar from './NavBar'

const LandingBackGround = styled.div`
    
    height: 100vh;
    width: 100vw;
`

class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LandingBackGround>

                    {/* <video autoPlay loop>
                        <source src="https://i.imgur.com/hJQY4rh.mp4" type="video/mp4" />
                    </video> */}
                    <video autoplay muted loop id="myVideo">
                        <source src="https://i.imgur.com/hJQY4rh.mp4" type="video/mp4" />>
                    </video>

                </LandingBackGround>
                <MyWorkContainer />
                <AboutContainer />
                <ContactContainer />
            </div>
        );
    }
}

export default LandingPageContainer;