import React from 'react';
import Logo from './Logo.jsx';
import LinkButton from './LinkButton.jsx';
import SearchBar from './SearchBar.jsx';
import RecordsTable from './RecordsTable.jsx';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import Login from './Login.jsx';
import Input from './input.jsx';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

// hf holds the helper functions
import hf from '../HelperFuncStateStorage';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      records: [{}]     // you need to initialize the records as blank - our axios request is asynchronous
    }
  }

  componentDidMount() {       // reset our records data after component is mounted. Other life cycle methods may infinite loop.
    hf.requestRecords().then((x) => {
      console.log(x);
      this.setState({ records: x.data })
    });
  }

  handleSearch(query) {
    axios.post('search', { searchValue: query })
      .then(function (response) {
        // console.log(response.data)
        this.setState({records: response.data});  // no search results component, just set the state with the results of our search
        // return response.data;
      }.bind(this))
      .catch(function (error) {
        console.error('error', error);
      });
    return null;
  }

  resetRecords() {    // needed when you click on the records button
    hf.requestRecords().then((x) => {
      console.log(x);
      this.setState({ records: x.data })
    }).bind(this);
  }

  render() {
    return (
      <Router>
        <div>
            <nav className="navbar navbar-default">     {/* these classNames refer to bootstrap properties */}
              <div className="container-fluid">
                <ul className="nav navbar-nav navbar-legt">
                  <li className="logo"><Logo />
                  </li>
                  <li className="link-button">
                    <Link to="/">
                      <LinkButton title='Records' clickFunction={this.resetRecords.bind(this)} />
                    </Link>
                  </li>
                  <li className="link-button">
                    <Link to="/input">
                      <LinkButton title='Insert' />
                    </Link>
                  </li>
                  {/* <li className="link-button">
                    <Link to="/login">
                      <LinkButton title='Login' />
                    </Link>
                  </li> login button, also yurs to create */}
                </ul>
                <ul className="nav navbar-nav">
                  <li className="navbar-text navbar-center align-top search-bar">
                    <SearchBar search={this.handleSearch.bind(this)}/>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="logout-button">
                    <a href="#">
                      <LinkButton title='Logout' />   {/* this is on you! */}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* use react router to only show one of our components at a time */}
            <Route exact path="/" render={() => < RecordsTable records={this.state.records} /> } />
            <Route exact path="/input" className="col-md-6 col-md-offset-3" render={() => <Input />} />
            <Route exact path="/login" className="col-md-6 col-md-offset-3" render={() => <Login />} />

        </div>
      </Router>
    )
  }
}

export default App
