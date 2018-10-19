import React, { Component } from 'react';
import styled from 'styled-components'
import MyWorkContainer from '../MyWork/MyWorkContainer'
import AboutContainer from '../AboutMe/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'
import NavBar from './NavBar'
import friends from '../../media/friends.mp4'
import Footer from './Footer'

const LandingBackGround = styled.div`
    background: url("https://media.giphy.com/media/xULW8lKRBkg5qPABqg/giphy.gif");
    background-size: contain;
    background-repeat: round;
    height: 100vh;
    width: 100vw;
    display: flex;
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
const ImageContainer = styled.div`
    height: 50vh; 
    width: 30vw;  
    background-color: ;
    display: flex;
    align-items: center;
`
const PlayVideo = styled.video `
    height: inherit;
    width: inherit; 

`
class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                {/* THIS NEEDS TO BE SEPARATED INTO A SEPARATE COMPOENET AND IMPORTED IN LADINGINPAGECONTAINER */}
                <LandingBackGround id='landingPage'>
                    <ContentContainer>
                        <div>
                            <h1>Hey, I am a Full Stack Developer.</h1>
                        </div>
                        <div>
                            <h3> I design and build full stack web applications in the Atlanta area.</h3>
                           

                        </div>

                    </ContentContainer>
                    {/* <ImageContainer>
                        <PlayVideo autoplay>
                            <source src={friends} type="video/mp4" />
                        </PlayVideo>
                        
                    </ImageContainer> */}
                </LandingBackGround>
                {/* THIS NEEDS TO BE SEPARATED INTO A SEPARATE COMPOENET AND IMPORTED IN LADINGINPAGECONTAINER */}
                <MyWorkContainer />
                <AboutContainer />
                <ContactContainer />
                <Footer />
            </div>
        );
    }
}

export default LandingPageContainer;