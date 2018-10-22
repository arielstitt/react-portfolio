import React, { Component } from 'react';
import styled from 'styled-components'
import DaddyBackground from '../../media/Apparel.jpg'

const SingleProject = styled.div`
    background-image: url('${DaddyBackground}');
    background-size: contain;
    background-repeat: no-repeat;
    height: 45vh;
    width: 45vw;
`

class Daddy extends Component {
    render() {
        return (
            <div>
                <a href="https://protected-meadow-78592.herokuapp.com/" target="_blank">
                    <SingleProject> </SingleProject>
                </a>
            </div>
        );
    }
}

export default Daddy;