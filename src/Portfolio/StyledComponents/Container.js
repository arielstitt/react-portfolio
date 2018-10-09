import React, { Component } from 'react';
import styled from 'styled-components'

const ComponentContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: pink;

`

class Container extends Component {
    render() {
        return (
            <ComponentContainer>
                

            </ComponentContainer>
        );
    }
}

export default Container;