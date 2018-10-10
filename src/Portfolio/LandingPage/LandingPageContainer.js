import React, { Component } from 'react';
import styled from 'styled-components'
import MyWorkContainer from '../MyWork/MyWorkContainer'
import AboutContainer from '../AboutMe/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'
import NavBar from './NavBar'
import friends from '../../media/friends.mp4'

const LandingBackGround = styled.div`
    
    height: 100vh;
    width: 100vw;
`
const PlayVideo = styled.video`
    height: 100vh;
    width: 100vw;
`


class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LandingBackGround>

                    <PlayVideo autoPlay muted loop >
                        <source src={friends} type="video/mp4" />
                    </PlayVideo>

                </LandingBackGround>
                <MyWorkContainer />
                <AboutContainer />
                <ContactContainer />
            </div>
        );
    }
}

export default LandingPageContainer;