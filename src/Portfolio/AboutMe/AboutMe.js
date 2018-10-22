import React, { Component } from 'react';
import styled from 'styled-components'
import Me from '../../media/me.jpg'

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
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5%;
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
                        <h2>Communication</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis et at fugiat. Dolorem neque, ut, totam animi saepe magnam iste fugit rerum officiis earum adipisci tempora odio reiciendis perferendis.</p>

                        <h2>Collaboration</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatem. Cupiditate dolorem delectus reprehenderit veritatis officia fuga. Dolore iure porro est et laborum, ipsa dolorem ullam odio voluptatibus voluptates minus!</p>

                        <h2>Organization</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus corporis amet nam et nobis atque unde impedit libero quam, ipsa minima, vitae recusandae molestiae eligendi ex dicta aliquam error saepe?</p>

                        <h2>Documentation</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, incidunt explicabo. Temporibus dignissimos laboriosam quam et ut obcaecati quisquam reiciendis culpa repudiandae saepe nobis harum, sunt, magnam velit est doloribus!</p>
                        
                        <button onClick={this.props.toggleResumeView}>Resume</button>
                    </ResumeAside>

                </LandingBackGround>
            </div>
        );
    }
}

export default AboutMe;