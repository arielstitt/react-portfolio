import React, { Component } from 'react';
import styled from 'styled-components'
import MyWorkContainer from '../MyWork/MyWorkContainer'
import AboutContainer from '../AboutMe/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'
import NavBar from './NavBar'
import friends from '../../media/friends.mp4'
import Footer from './Footer'

const LandingBackGround = styled.div`
    // background: url("https://media.giphy.com/media/Ri09OKu0aS22c/giphy.gif");
    background-size: contain;
    background-repeat: round;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ContentContainer = styled.div`
    height: 100vh; 
    width: 60vw;
    background-color: ;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const GreenHighlight = styled.a `
    color: green;
`

class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <LandingBackGround id='landingPage'>
                    <ContentContainer>
                        <div>
                            <h1>Hey, I am a Full Stack Developer in the market for new opportunities.</h1>
                        </div>
                        <div>
                            <h3> I design and build full stack web applications in the Atlanta area.</h3>
                       </div>
                       <div>
                           <p>Let's Chat!</p>
                           <p><GreenHighlight href="mailto:arielstitt@gmail.com">arielstitt@gmail.com</GreenHighlight></p>
                       </div>
                        {/* <div id='myWork'> <a href=""><h1>↓</h1></a></div> */}
                    </ContentContainer>
                </LandingBackGround>
                <MyWorkContainer />
                <AboutContainer />
                <ContactContainer />
                <Footer />
            </div>
        );
    }
}

export default LandingPageContainer;