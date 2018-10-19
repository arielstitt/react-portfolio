import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../LandingPage/Footer'


const ContactsContainer = styled.div`
    height: 60vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5%;
`
const ContactPod = styled.div`
    // background-color: gray;
    // height: 25%;
    // width: 25%;
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
            <div>
                <SectionHeader id='contact'></SectionHeader>
                <ContactsContainer >

                    <ContactPod> <a href="https://github.com/arielstitt" target="_blank">
                        GITHUB
                </a>
                    </ContactPod>


                    <ContactPod><a href="https://www.linkedin.com/in/arielstitt/" target="_blank">LINKEDIN</a></ContactPod>


                    <ContactPod><a href="mailto:arielstitt@gmail.com" target="_blank">GMAIL </a></ContactPod>

                    <ContactPod><a href="https://trello.com/arielstitt" target="_blank">Trello </a></ContactPod>

                    <ContactPod><a href="https://codepen.io/arielstitt/" target="_blank">Code Pen </a></ContactPod>



                    {/* <a href="https://imgur.com/yExVR7x" target="_blank"><img src="https://i.imgur.com/yExVR7x.png" title="source: imgur.com" /></a> */}

                </ContactsContainer>
            </div>
        );
    }
}

export default ContactContainer;