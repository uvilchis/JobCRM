import React from 'react';
import axios from 'axios'; 
import GooglePicker from 'react-google-picker'; 

export default class ResumeFrame extends React.Component {
    constructor(props) {
        super(props);
        console.log('these are the props in the ResumeFrame: ', this.props)
        this.state = {

          
        };

    }

  render() {
    return(
      <div>
      THIS IS WHERE THE RESUMES WILL GO
      <GooglePicker 
        clientId={'762134082228-k5el2bm03uu31dsg0i17mh7ki452bd7v.apps.googleusercontent.com'}
        developerKey={'AIzaSyBYie0gXsmbDPHuA93tqVuelxRMBS1Rb2A'}
        scope={['https://www.googleapis.com/auth/drive']}
        onChange={data => console.log('on change:', data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        viewId={'FOLDERS'}
        createPicker={(google, oauthToken = this.props.accessToken) => {
          const googleViewId = google.picker.ViewId.FOLDERS;
          const docsView = new google.picker.DocsView(googleViewId)
              .setIncludeFolders(true)
              .setMimeTypes('application/vnd.google-apps.folder')
              .setSelectFolderEnabled(true);

          const picker = new window.google.picker.PickerBuilder()
              .addView(docsView)
              .setOAuthToken(oauthToken)
              .setDeveloperKey('AIzaSyBYie0gXsmbDPHuA93tqVuelxRMBS1Rb2A')
              .setCallback(()=>{
                // console.log('Custom picker is ready!');
              });

          picker.build().setVisible(true);
          }
        }
        >
            <span>Click</span>
            <div className="google"></div>
      </GooglePicker>







      {/*
      <GooglePicker 
        clientId={'762134082228-k5el2bm03uu31dsg0i17mh7ki452bd7v.apps.googleusercontent.com'}
        developerKey={'AIzaSyBYie0gXsmbDPHuA93tqVuelxRMBS1Rb2A'}
        scope={['https://www.googleapis.com/auth/drive']}
        onChange={data => console.log('on change:', data)}
        onAuthenticate={token => console.log('oauth token:', token)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
        viewId={'DOCS'}>
        {/*<MyCustomButton /> }
      </GooglePicker>
    */}

      </div>
    )
  }
}