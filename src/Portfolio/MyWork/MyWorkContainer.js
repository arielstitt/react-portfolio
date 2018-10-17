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
const SingleProject = styled.div`
    background-color: orange;
    height: 45vh;
    width: 45vw;
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
                        {/* BLOCK 1 */}
                        <SectionWrapper>
                            {/* PROJECT 1 */}
                            <a href="https://agitated-volhard-7ae580.netlify.com/" target="_blank">
                                <SingleProject>
                                    <div>Project 1: Jeopardy</div>
                                </SingleProject>
                            </a>
                            {/* PROJECT 2 */}

                            <a href="https://enigmatic-headland-90376.herokuapp.com/" target="_blank">
                                <SingleProject>  </SingleProject>
                            </a>

                        </SectionWrapper>
                        {/* BLOCK 2 */}
                        <SectionWrapper>
                            {/* PROJECT 3 */}
                            <SingleProject>
                                <a href="https://wdi14-project3.herokuapp.com/" target="_blank">Project 3: Goal'd</a>
                            </SingleProject>
                            {/* PROJECT 4 */}
                            <SingleProject>
                                <a href="https://protected-meadow-78592.herokuapp.com/" target="_blank">Project 4: Daddy Issues </a>
                            </SingleProject>
                        </SectionWrapper>

                    </ProjectContainer>

                </LandingBackGround >
            </div>
        );
    }
}

export default MyWorkContainer;