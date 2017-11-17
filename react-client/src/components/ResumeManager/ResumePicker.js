import React from 'react';
import axios from 'axios'; 
import Iframe from 'react-iframe'; 
import GooglePicker from 'react-google-picker'; 
import DEVELOPER_KEY from '../../../../server/keys/googlePicker.js'; 
import GOOGLE_OAUTH from '../../../../server/keys/googleOAuth.js'; //lol

export default class ResumePicker extends React.Component {
  constructor(props) {
    super(props);
    // console.log('these are the props in the ResumeFrame: ', this.props)
    // this takes in a prop called this.props.targetDocument. 
      // it can evaluate to either 'resume' or 'coverLetter'
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
      axios.post(`docs/${this.props.targetDocument}`, {
        name : openInGoogleEditorURL, 
        url : documentName, 
      })
      .then((response) => {
        let resURL = response.data.openInGoogleEditorURL
        let resName = response.data.documentName
        this.setState({openInGoogleEditorURL : resURL})
        this.setState({documentName : resName})
      })
    }
  }

  render() {
    return  (
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
    )
  }
}