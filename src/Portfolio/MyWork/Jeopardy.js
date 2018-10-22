import React, { Component } from 'react';
import styled from 'styled-components'
import JeopardyBackground from '../../media/Jeopardy.jpg'

const SingleProject = styled.div`
    background-image: url('${JeopardyBackground}');
    background-size: contain;
    background-repeat: no-repeat;
    height: 45vh;
    width: 45vw;
`

class Jeopardy extends Component {
    render() {
        return (
            <div>
                <a href="https://agitated-volhard-7ae580.netlify.com/" target="_blank">
                    <SingleProject></SingleProject>
                </a>
            </div>
        );
    }
}

export default Jeopardy;