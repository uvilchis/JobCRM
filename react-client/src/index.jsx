import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import HelperFuncStateStorage from './HelperFuncStateStorage.js';

window.hf = new HelperFuncStateStorage();

ReactDOM.render(<App />, document.getElementById('app'))
