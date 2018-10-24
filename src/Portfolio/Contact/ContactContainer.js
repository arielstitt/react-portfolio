import React, { Component } from 'react';
import styled from 'styled-components';


const Contacts = styled.div`
    height: 60vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5%;
`
const EmailContainer = styled.div`
    height: 60vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
`

const ContactsContainer = styled.div`
    display: flex;
    a {
        text-decoration:none;
        color: #096de8;
    }
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
                        <h1>Social</h1>
                        <div> <a href="https://github.com/arielstitt" target="_blank" rel="noopener noreferrer">Github</a></div>
                        <div><a href="https://www.linkedin.com/in/arielstitt/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                        <div><a href="https://trello.com/arielstitt" target="_blank" rel="noopener noreferrer">Trello </a></div>
                        <div><a href="https://codepen.io/arielstitt/" target="_blank" rel="noopener noreferrer">Code Pen </a></div>
                    </Contacts>

                    <div>
                        <h1>Contact</h1>

                        <EmailContainer>
                            <h3>Get in Touch.</h3>
                            <a href="mailto:arielstitt@gmail.com" target="_blank">arielstitt@gmail.com </a>
                        </EmailContainer>
                    </div>
                </ContactsContainer>

            </div>

        );
    }
}

export default ContactContainer;