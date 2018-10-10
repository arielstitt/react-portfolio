import React, { Component } from 'react';
import styled from 'styled-components'


const LandingBackGround = styled.div`
    background-color: yellow;
    height: 100vh;
    width: 100vw;
`
const ProjectContainer = styled.div`
    height: 50vh;
    width: 100vw;
    background-color: violet;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const SingleProject = styled.iframe`
    background-color: orange;
    height: 40vh;
    width: 45vw;
`

class MyWorkContainer extends Component {
    render() {
        return (
            <LandingBackGround>
                <ProjectContainer>
                    {/* <SingleProject><a href="https://agitated-volhard-7ae580.netlify.com/" target="_blank">Project 1: Jeopardy</a> </SingleProject> */}
                     {/* <SingleProject><a href="https://enigmatic-headland-90376.herokuapp.com/" target="_blank">Project 2: Mother Of Horus</a> 
                    </SingleProject> */}
                    <SingleProject src="https://agitated-volhard-7ae580.netlify.com/">
                        <p>Your browser does not support iframes.</p>
                    </SingleProject>  
                    <SingleProject src="https://enigmatic-headland-90376.herokuapp.com/">
                        <p>Your browser does not support iframes</p>
                    </SingleProject>
                </ProjectContainer>

                <ProjectContainer>
                    {/* <SingleProject><a href="https://wdi14-project3.herokuapp.com/" target="_blank">Project 3: Goal'd</a> </SingleProject> */}
                    {/* <SingleProject><a href="https://protected-meadow-78592.herokuapp.com/" target="_blank">Project 4: Daddy Issues </a></SingleProject> */}
                    
                    <SingleProject src="https://wdi14-project3.herokuapp.com/">
                        <p>Your browser does not support iframes</p>
                    </SingleProject>
                    <SingleProject src="https://protected-meadow-78592.herokuapp.com/">
                        <p>Your browser does not support iframes</p>
                    </SingleProject>
                    
                </ProjectContainer>
            </LandingBackGround >
        );
    }
}

export default MyWorkContainer;