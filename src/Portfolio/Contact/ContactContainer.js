import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../LandingPage/Footer'


const ContactsContainer = styled.div`
    background: url("https://media.giphy.com/media/3ohhwNqFMnb7wZgNnq/giphy.gif");
    height: 60vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-size: cover;
`
const ContactPod = styled.div`
    background-color: gray;
    height: 25%;
    width: 25%;
`
const SectionHeader = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

class ContactContainer extends Component {
    render() {
        return (
            <ContactsContainer id='contact'>
                <SectionHeader> Contact Me</SectionHeader>

                <ContactPod> <a href="https://github.com/arielstitt" target="_blank">
                    GITHUB
                </a>
                </ContactPod>


                <ContactPod><a href="https://www.linkedin.com/in/arielstitt/" target="_blank">LINKEDIN</a></ContactPod>


                <ContactPod><a href="https://www.arielstitt@gmail.com" target="_blank">GMAIL </a></ContactPod>


                {/* <a href="https://imgur.com/yExVR7x" target="_blank"><img src="https://i.imgur.com/yExVR7x.png" title="source: imgur.com" /></a> */}

            </ContactsContainer>
        );
    }
}

export default ContactContainer;