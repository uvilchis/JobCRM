import React from 'react';
import hf from '../HelperFuncStateStorage';

// not yet implemented.
// think of this as a skeleton - the following functions aren't correctly implemented
// in our functions file.

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {

        };
    }

  loginRequest(value) {
    axios.post('login', {
      user: value
    }).then(function (response) {
      //console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
    return null;
  }

    render() {
    return(
        <div>
            <h1>Login</h1>
            <input type="text" value={this.state.user}  onChange={(e) => {
                hf.updateFieldValue(this, 'user', e)
            }}/>
            <div>
                <button type="submit" onClick={() => hf.loginRequest(this, this.state.user)}> Login </button>
            </div>
        </div>
    )
    }
}
