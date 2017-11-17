import React from 'react';
import axios from 'axios'; 
import Iframe from 'react-iframe'

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editorOpen : false, 
    }
    this.openEditor = this.openEditor.bind(this)
  }

  openEditor(data) {

  }


  render() {
    return (this.state.editorOpen) ? (
      <div> 
        THIS IS WHERE the nav bar is going to go for each resume <button> button1. </button> 
      </div>
        ) : (
        <div>
          <Iframe
            // url={this.state.openInGoogleEditorURL}
            // width="450px"
            height="450px"
            // id={this.state.documentName || '#'} 
            className="Resume"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div> 
      )
  }
}