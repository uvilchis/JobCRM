import React from 'react';
import Logo from './Logo.jsx';
import LinkButton from './LinkButton.jsx';
import SearchBar from './SearchBar.jsx';
import RecordsTable from './RecordsTable.jsx';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import Login from './Login.jsx';
import Input from './input.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


let testArray = [
   {
     company: 'Loomb',
     location: 'San Francisco',
     contact: 'blep@loooooms.com',
     notes: 'Very bloop.',
     coverLetter: true,
     resume: true,
     firstInterview: true,
     secondInterview: false,
     secondInterview: false,
     offer: false,
     rejected: true,
     key: 0
   },

   {
     company: 'iBloomb',
     location: 'New York',
     contact: 'blep@ibl.com',
     notes: 'Very bleem.',
     coverLetter: true,
     resume: true,
     firstInterview: true,
     secondInterview: true,
     secondInterview: true,
     offer: true,
     rejected: false,
     key: 1
   }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // recordView = true,
      // inputView = !this.recordView
    };
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
                      <LinkButton title='Records' />
                    </Link>
                  </li>
                  <li className="link-button">
                    <Link to="/input">
                      <LinkButton title='Insert' />
                    </Link>
                  </li>
                  <li className="link-button">
                    <Link to="/login">
                      <LinkButton title='Login' />
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav">
                  <li className="navbar-text navbar-center align-top search-bar">
                    <SearchBar />
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="logout-button">
                    <a href="#">
                      <LinkButton title='Logout' />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* use react router to only show one of our components at a time */}
            <Route exact path="/" render={() => < RecordsTable records={testArray} /> } />
            <Route exact path="/input" className="col-md-6 col-md-offset-3" render={() => <Input />} />
            <Route exact path="/login" className="col-md-6 col-md-offset-3" render={() => <Login />} />

        </div>
      </Router>
    )
  }
}

export default App
