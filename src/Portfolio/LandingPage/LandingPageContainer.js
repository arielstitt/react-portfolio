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
                    LandingPageContainer
                    <video width="320" height="240" controls>
                        <source src="../media/2friends.mp4" type="video/mp4"/>>
                        Your browser does not support the video tag.
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