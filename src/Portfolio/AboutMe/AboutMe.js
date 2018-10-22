import React, { Component } from 'react';
import styled from 'styled-components'
import Me from '../../media/standardProfilePic.jpg'

const LandingBackGround = styled.div`
    height: 125vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const SixtySecondPitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 35vw;
`
const PictureContainer = styled.div`
    background: url("${Me}");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 7%;
    height: 50%;
    margin: 3%;
    
`
const DescriptionBlock = styled.div`
    height: 50%;
    margin: 3%;
`
const ResumeAside = styled.div`
    height: 90vh;
    width: 45vw;
`
const SectionHeader = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const GreenHighlight = styled.h2 `
    color: green;
`
const ResumeButton = styled.button `
    background: green;
    color: white;
    `

class AboutMe extends Component {
    render() {
        return (
            <div>
                <SectionHeader id='aboutMe'></SectionHeader>
                <LandingBackGround >

                    <SixtySecondPitchContainer>
                        <PictureContainer>

                        </PictureContainer>
                        <DescriptionBlock>             

                            <p> Combined with years of experience dealing with customers face to face, managing employees, and delivering clear communication to my team, I want to be the fresh and focused addition to the developer community.</p>

                            <p> Let’s get to work!</p>
                        </DescriptionBlock>
                    </SixtySecondPitchContainer>

                    <ResumeAside>
                        <GreenHighlight>Communication</GreenHighlight>
                        <p>One of the most important quotes from George Bernard Shaw is "the single bigest problem in communication is the illusion that is has taken place".</p>
                        <p>That's why I like to use Slack, email, and daily stand-ups to make sure that I am on track with my peers and work expectations.</p>

                        <GreenHighlight>Collaboration</GreenHighlight>
                        <p>Being able to effectivaly work as a team can have it's challeges. That's why I find it important to be open and honest with my team mates.</p>
                        <p>Being open and honest and giving and receiving praise and constructive critisism are some of my strongest suits. </p>

                        <GreenHighlight>Organization</GreenHighlight>
                        <p>Without proper organization, a project can come to a stalemate, with the developer and computer staring each other down in an indefinite draw.</p>
                        <p>That's why I familiarized myself with productivity tools like Trello, Google Calendar, and Jira to stay on track.</p>

                        <GreenHighlight>Documentation</GreenHighlight>
                        <p>There is nothing like coming up on an old documentation that just says <span>SOLVED!!!</span> without anything else.</p>
                        <p>My experience of problem solving and filling out almost 500 troubleshooting tickets a week, 75% of which were previously worked on issues, I know the importance of thouroughly documenting all stages of a project.</p>
                        
                        <ResumeButton onClick={this.props.toggleResumeView}>Resume</ResumeButton>
                    </ResumeAside>

                </LandingBackGround>
            </div>
        );
    }
}

export default AboutMe;