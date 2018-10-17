import React, { Component } from 'react';
import styled from 'styled-components'

const ResumeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: yellow;
`
const SectionHeader = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

class Resume extends Component {
    render() {
        return (
            <div>
                <SectionHeader></SectionHeader>
                <ResumeContainer>
                    Dis is my Resume
            </ResumeContainer>
            </div>
        );
    }
}

export default Resume;