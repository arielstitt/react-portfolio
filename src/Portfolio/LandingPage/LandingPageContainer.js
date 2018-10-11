import React, { Component } from 'react';
import styled from 'styled-components'
import MyWorkContainer from '../MyWork/MyWorkContainer'
import AboutContainer from '../AboutMe/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'
import NavBar from './NavBar'
import friends from '../../media/friends.mp4'
import Footer from './Footer'

const LandingBackGround = styled.div`
    
    height: 75vh;
    width: 100vw;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 10px solid #3c3939;
`
const PlayVideo = styled.video`
    height: 75vh;
    width: 100vw;
    object-fit: inherit;
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
                <Footer/>
            </div>
        );
    }
}

export default LandingPageContainer;