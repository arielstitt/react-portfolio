import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../LandingPage/Footer'


const Contacts = styled.div`
    height: 60vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5%;
    background: blue;
`
const EmailContainer = styled.div`
    background: pink;
    height: 60vh;
    width: 50vw;
`

const ContactsContainer = styled.div `
    display: flex;
    
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

                <ContactsContainer>
                    <Contacts >
                        <div> <a href="https://github.com/arielstitt" target="_blank">GITHUB</a></div>
                        <div><a href="https://www.linkedin.com/in/arielstitt/" target="_blank">LINKEDIN</a></div>
                        <div><a href="https://trello.com/arielstitt" target="_blank">Trello </a></div>
                        <div><a href="https://codepen.io/arielstitt/" target="_blank">Code Pen </a></div>
                    </Contacts>

                    <EmailContainer>
                        <div><a href="mailto:arielstitt@gmail.com" target="_blank">GMAIL </a></div>
                    </EmailContainer>
                </ContactsContainer>

            </div>

        );
    }
}

export default ContactContainer;