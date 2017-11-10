import React from 'react';
import hf from '../HelperFuncStateStorage';

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: ''
        };
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
