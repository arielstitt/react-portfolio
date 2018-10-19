import React, { Component } from 'react';
import styled from 'styled-components'
import DaddyBackground from '../../media/Apparel.jpg'

const SingleProject = styled.div`
    background-image: url('${DaddyBackground}');
    background-size: contain;
    height: 45vh;
    width: 45vw;
`

class Daddy extends Component {
    render() {
        return (
            <div>
                <SingleProject>
                    <a href="https://protected-meadow-78592.herokuapp.com/" target="_blank">Project 4: Daddy Issues </a>
                </SingleProject>
            </div>
        );
    }
}

export default Daddy;