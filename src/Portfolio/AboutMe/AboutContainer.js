import React, { Component } from 'react';
import AboutMe from './AboutMe'
import Resume from './Resume'


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
                 {this.state.showResume ?
                    (<Resume
                        toggleResumeView = {this.toggleResumeView}
                    />) :
                    (<AboutMe
                        toggleResumeView = {this.toggleResumeView}
                    />)} 
                    
                    
                
            </div>
        );
    }
}

export default AboutContainer;