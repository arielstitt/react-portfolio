import React, { Component } from 'react';
import styled from 'styled-components'


const LandingBackGround = styled.div`
    background-color: pink;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const SixtySecondPitchContainer = styled.div `
    background-color: yellow;
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 45vw;
`
const PictureContainer = styled.div`
    background-image: url("https://i.imgur.com/o8L2jra.jpg");
    height: 50%;
    margin: 3%;
    
`
const DescriptionBlock = styled.div `
    background-color: lavender;
    height: 50%;
`
const ResumeAside = styled.div `
    background-color: gray;
    height: 80vh;
    width: 45vw;
`

class AboutContainer extends Component {
    render() {
        return (
            <LandingBackGround>
                
                <SixtySecondPitchContainer>
                    <PictureContainer>
                        cute pic
                    </PictureContainer>
                    <DescriptionBlock>
                        My sixty second pitch
                    </DescriptionBlock>
                </SixtySecondPitchContainer>

                <ResumeAside>
                    Resume goes in this block
                </ResumeAside>
                
            </LandingBackGround>
        );
    }
}

export default AboutContainer;