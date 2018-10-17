import React, { Component } from 'react';
import styled from 'styled-components'


const LandingBackGround = styled.div`
    background-color: #573b3a;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const SixtySecondPitchContainer = styled.div`
    background-color: ddc470;
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 35vw;
`
const PictureContainer = styled.div`
    background: url("https://i.imgur.com/o8L2jra.jpg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 50%;
    margin: 3%;
    
`
const DescriptionBlock = styled.div`
    background-color: #573b3a;
    height: 50%;
    margin: 3%;
`
const ResumeAside = styled.div`
    background-color: ddc470;
    height: 80vh;
    width: 45vw;
`
const SectionHeader = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

class AboutContainer extends Component {
    render() {
        return (
            <div>
                <SectionHeader id='aboutMe'></SectionHeader>
                <LandingBackGround >

                    <SixtySecondPitchContainer>
                        <PictureContainer>

                        </PictureContainer>
                        <DescriptionBlock>
                            <p>   I am a Full Stack Developer that is searching for both frontend and backend opportunities. From the moment I first got my hands on a programming languages over a year ago, I knew that I found the medium to nurture my creativity and logic all in one package: software. </p>

                            <p> Combined with years of experience dealing with customers face to face, managing employees, and delivering clear communication to my team, I want to be the fresh and focused addition to the developer community.</p>

                            <p> Let’s get to work!</p>
                        </DescriptionBlock>
                    </SixtySecondPitchContainer>

                    <ResumeAside>
                        <h2>Core Compentcies</h2>
                        <p>This is a paragraph detailing how and why these Compentcies are important and applicable</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <h2>Skills</h2>
                        <p>This is a paragraph about how and when I use these skills</p>
                        <h3>Front end</h3>
                        <ul>
                            <li>HTML/ CSS</li>
                            <li>handlebars</li>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>XML</li>
                        </ul>

                        <h3>Back end</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Ruby on Rails</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </ResumeAside>
                </LandingBackGround>
            </div>
        );
    }
}

export default AboutContainer;