import React, { Component } from 'react';
import styled from 'styled-components'
import Mother from './Mother'


const LandingBackGround = styled.div`
    height: 100vh;
    width: 100vw;
    
`
const ProjectContainer = styled.div`
    height: 85vh;
    width: 100vw;

`

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 42vh;
    padding: 2%;
`
const SectionHeader = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

class MyWorkContainer extends Component {
    render() {
        return (
            <div>
                <SectionHeader id='myWork'></SectionHeader>
                <LandingBackGround id='myWork'>
                    {/* <SectionHeader> My Work </SectionHeader> */}


                    <ProjectContainer>
                        <SectionWrapper>
                        
                    {/* PUT JEOPARDY AND MOTHER HERE */}
                        </SectionWrapper>
                        {/* BLOCK 2 */}
                        <SectionWrapper>
                           {/* PUT GOALD AND DADDY ISSUE HERE */}
                        </SectionWrapper>

                    </ProjectContainer>

                </LandingBackGround >
            </div>
        );
    }
}

export default MyWorkContainer;