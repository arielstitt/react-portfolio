import React, { Component } from 'react';
import styled from 'styled-components'

const SingleProject = styled.div`
    background-color: orange;
    height: 45vh;
    width: 45vw;
`

class Goald extends Component {
    render() {
        return (
            <div>
                <SingleProject>
                                <a href="https://wdi14-project3.herokuapp.com/" target="_blank">Project 3: Goal'd</a>
                            </SingleProject>
            </div>
        );
    }
}

export default Goald;