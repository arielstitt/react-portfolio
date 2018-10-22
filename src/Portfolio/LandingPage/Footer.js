import React, { Component } from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div `
    background: gray;
    height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
               <div>Ariel Stitt 2018</div>
            </FooterContainer>
        );
    }
}

export default Footer;