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
                {/* <a href="https://imgur.com/yExVR7x" target="_blank"><img src="https://i.imgur.com/yExVR7x.png" title="source: imgur.com" /></a> */}
            </LandingBackGround>
        );
    }
}

export default ContactContainer;