import React, { Component } from 'react';
import styled from 'styled-components'
 

const LandingBackGround = styled.div`
    background-color: yellow;
    height: 100vh;
    width: 100vw;
`
class ContactContainer extends Component {
    render() {
        return (
            <LandingBackGround>
                ContactContainer
            </LandingBackGround>
        );
    }
}

export default ContactContainer;