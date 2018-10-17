import React, { Component } from 'react';
import styled from 'styled-components'



class AboutContainer extends Component {
    state = {
        showResume: false
    }

    toggleResumeView = () => {
        this.setState({
            showResume: !this.state.showResume
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AboutContainer;