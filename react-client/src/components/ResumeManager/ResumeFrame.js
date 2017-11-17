import React from 'react';
import axios from 'axios'; 
import GooglePicker from 'react-google-picker'; 
import Iframe from 'react-iframe'; 
import Resume from './Resume'; 
import DEVELOPER_KEY from '../../../../server/keys/googlePicker.js'; 
import GOOGLE_OAUTH from '../../../../server/keys/googleOAuth.js'; //lol


export default class ResumeFrame extends React.Component {
  constructor(props) {
      super(props);
      // console.log('these are the props in the ResumeFrame: ', this.props)
      this.state = {  
        openInGoogleEditorURL : undefined, 
        documentName : null,  
      };
    this.handleDocumentAdd = this.handleDocumentAdd.bind(this)
  }

  handleDocumentAdd(data) {
    if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
      // console.log('this is the url', data.docs[0].url)
      let openInGoogleEditorURL = data.docs[0].url
      let documentName = data.docs[0].name
      // axios request to the db to add the embedded urls
      axios.post('')
      // this will send
      
      this.setState({openInGoogleEditorURL})
      this.setState({documentName})

    }
  }

  getResumes() {
    // axios request to the db to get all of the information pertaining to resumes. 
    axios.get('')
  }

  ComponentWillMount() {
    this.getResumes();
  }

  render() {
    return(
      <div>
      This is just the resume adder: 
        <GooglePicker 
          clientId={GOOGLE_OAUTH.GOOGLE_CLIENT_ID}
          developerKey={DEVELOPER_KEY.GOOGLE_PICKER_KEY}
          scope={['https://www.googleapis.com/auth/drive']}
          onChange={data => console.log('on change:', data)}
          multiselect={true}
          navHidden={true}
          authImmediate={false}
          viewId={'FOLDERS'}
          createPicker={(google, oauthToken = this.props.accessToken) => {
            const googleViewId = google.picker.ViewId.DOCS_IMAGES_AND_VIDEOS
            const DOCS_IMAGES_AND_VIDEOS = new google.picker.DocsView(googleViewId)
              .setIncludeFolders(true)
              .setMimeTypes('application/vnd.google-apps.folder')
              .setSelectFolderEnabled(true);

            const picker = new window.google.picker.PickerBuilder()
              .addView(DOCS_IMAGES_AND_VIDEOS)
              .setOAuthToken(oauthToken)
              .setDeveloperKey(DEVELOPER_KEY.GOOGLE_PICKER_KEY)
              .setCallback(this.handleDocumentAdd);

            picker.build().setVisible(true);
            }
          }
          >

          <button>Add A Resume</button>
          <div className="google"></div>
        </GooglePicker>
        
        {/*<div> Your Resumes: 
          {this.state.gameslist.map(function(game){
              <br/>
              return <div className="z-depth-4" >
               <Game game={game} /></div>
               
            })}
        </div> 
      */}

        <Resume 
          openInGoogleEditorURL = {this.state.openInGoogleEditorURL}
          documentName = {this.state.documentName} 
        />


        <a href={this.state.openInGoogleEditorURL}>
          <button>Edit {this.state.documentName} in Google Docs (New Tab) </button> 
        </a>

        <Iframe url={this.state.openInGoogleEditorURL}
          // width="450px"
          height="450px"
          id={this.state.documentName || '#'} 
          className="Resume"
          display="initial"
          position="relative"
          allowFullScreen
        />


      </div>
    )
  }
}