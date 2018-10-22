import React, { Component } from 'react';
import styled from 'styled-components'
import GoaldBackground from '../../media/HANDMADE.jpg'

const SingleProject = styled.div`
    background-image: url('${GoaldBackground}');
    background-size: contain;
    background-repeat: no-repeat;
    height: 45vh;
    width: 45vw;
`

class Goald extends Component {
    render() {
        return (
            <div>

                <a href="https://wdi14-project3.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <SingleProject></SingleProject>
                </a>

            </div>
        );
    }
}

export default Goald;