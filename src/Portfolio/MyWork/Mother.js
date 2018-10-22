import React, { Component } from 'react';
import styled from 'styled-components';
import MotherBackground from '../../media/MOTHER.jpg'

const SingleProject = styled.div`
    background-image: url('${MotherBackground}');
    background-size: contain;
    background-repeat: no-repeat;
    height: 45vh;
    width: 45vw;
`

class Mother extends Component {
    render() {
        return (
            <a href="https://enigmatic-headland-90376.herokuapp.com/" target="_blank">
                <SingleProject> </SingleProject>
            </a>
        );
    }
}

export default Mother;