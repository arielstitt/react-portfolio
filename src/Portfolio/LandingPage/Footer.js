import React, { Component } from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div `
    background: black;
    height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: white;
    }
`

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
               <div><p>Ariel Stitt 2018</p> </div>
            </FooterContainer>
        );
    }
}

export default Footer;