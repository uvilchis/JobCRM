import React from 'react';
import Logo from './Logo.jsx';
import LinkButton from './LinkButton.jsx';
import SearchBar from './SearchBar.jsx';
import RecordsTable from './RecordsTable.jsx';
import RecordsTableEntry from './RecordsTableEntry.jsx';

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

var App = () => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-legt">
          <li className="logo"><Logo />
          </li>
          <li className="link-button">
            <a href="#">
              <LinkButton title='Records' />
            </a>
          </li>
          <li className="link-button">
            <a href="#">
              <LinkButton title='Insert' />
            </a>
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
  <RecordsTable records={testArray} />

    </div>
);



export default App
