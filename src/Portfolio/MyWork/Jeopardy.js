import React, { Component } from 'react';
import styled from 'styled-components'

const SingleProject = styled.div`
    background-color: blue;
    height: 45vh;
    width: 45vw;
`

class Jeopardy extends Component {
    render() {
        return (
            <div>
                <a href="https://agitated-volhard-7ae580.netlify.com/" target="_blank">
                    <SingleProject>
                        <div>Project 1: Jeopardy</div>
                    </SingleProject>
                </a>
            </div>
        );
    }
}

export default Jeopardy;