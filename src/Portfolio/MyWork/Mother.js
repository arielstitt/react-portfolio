import React, { Component } from 'react';
import styled from 'styled-components';
 

const SingleProject = styled.div`
    background-color: green;
    height: 45vh;
    width: 45vw;
`

class Mother extends Component {
    render() {
        return (
            <a href="https://enigmatic-headland-90376.herokuapp.com/" target="_blank">
                <SingleProject> MOTHER OF HORUS </SingleProject>
            </a>
        );
    }
}

export default Mother;