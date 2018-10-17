import React, { Component } from 'react';
import styled from 'styled-components'


const LandingBackGround = styled.div`
    background-color: #cc6e55;
    height: 85vh;
    width: 100vw;
    
`
const ProjectContainer = styled.div`
    height: 85vh;
    width: 100vw;
    background-color: ##ddc470;
;
`
const SingleProject = styled.div`
    background-color: orange;
    height: 20vh;
    width: 20vw;
`


class MyWorkContainer extends Component {
    render() {
        return (

            <LandingBackGround id='myWork'>
                {/* <SectionHeader> My Work </SectionHeader> */}

                {/* BLOCK 1 */}
                <ProjectContainer>
                    <div>
                        <SingleProject>
                            <a href="https://agitated-volhard-7ae580.netlify.com/" target="_blank">Project 1: Jeopardy</a>
                        </SingleProject>
                        <SingleProject>
                            <a href="https://enigmatic-headland-90376.herokuapp.com/" target="_blank">Project 2: Mother Of Horus</a>
                        </SingleProject>
                    </div>
                    <div>
                        <SingleProject>
                            <a href="https://wdi14-project3.herokuapp.com/" target="_blank">Project 3: Goal'd</a>
                        </SingleProject>
                        <SingleProject>
                            <a href="https://protected-meadow-78592.herokuapp.com/" target="_blank">Project 4: Daddy Issues </a>
                        </SingleProject>
                    </div>
                </ProjectContainer>

            </LandingBackGround >
        );
    }
}

export default MyWorkContainer;