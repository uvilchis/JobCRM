import React from 'react';
import hf from '../HelperFuncStateStorage';
import axios from 'axios'
// not yet implemented.
// think of this as a skeleton - the following functions aren't correctly implemented
// in our functions file.

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
          currentValue: "",
        };
        console.log(this.state)
      this.loginRequest = this.loginRequest.bind(this)
      this.signupRequest = this.signupRequest.bind(this)
    }

  loginRequest(value) {
    console.log('the login request gets called')
    // axios.get('redirect', {
    //   // some information? 
    // }).then(function (response) {
    //   //console.log(response);
    // }).catch(function(error) {
    //   // console.log(error);
    // });
  }
  signupRequest(value) {
    axios.post('signup', {
      // some information? 
    }).then(function (response) {
      //console.log(response);
    }).catch(function(error) {
      // console.log(error);
    });


  }

    render() {
    return(
        <div>
            <h1>Login With Google</h1>
            {/*<input type="text" value={this.state.currentValue}  onChange={(e) => {this.setState({currentValue: e.target.value})
            }}/> */}
            <a href='/auth'> 
              <button type="submit" onClick={() => {this.loginRequest()}}>
               Login With Google 
              </button>
            </a>
        </div>
    )
    }
}
