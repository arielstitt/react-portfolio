import React, { Component } from 'react';
import styled from 'styled-components'
import WorkHistory from '../../media/MyResume.png'

const ResumeContainer = styled.div`
    height: 125vh;
    width: 100vw;  
    display: flex;
    justify-content: center;
`
const SectionHeader = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ResumeContent = styled.div `
    height: 125vh;
    width: 80vw;
    background-image: url('${WorkHistory}');
    background-size: contain;
    background-repeat: no-repeat;
    `
const ResumeButton = styled.button `
    background: green;
    color: white;
    `

class Resume extends Component {
    render() {
        return (
            <div>
                <SectionHeader id="aboutMe"></SectionHeader>
                <ResumeContainer>
                    <ResumeContent>

                    </ResumeContent>
                </ResumeContainer>
                <ResumeButton onClick={this.props.toggleResumeView}>about me</ResumeButton>

            </div>
        );
    }
}

export default Resume;