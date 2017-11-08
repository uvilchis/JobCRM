import React from 'react';
import Logo from './Logo.jsx';
import LinkButton from './LinkButton.jsx';
import SearchBar from './SearchBar.jsx';
<<<<<<< HEAD
import RecordsTable from './RecordsTable.jsx';
import RecordsTableEntry from './RecordsTableEntry.jsx';

let testArray = [
   {
     company: 'Loomb',
     contact: 'blep@loooooms.com',
     key: '1'
   },
  {
    company: 'Plovar',
    contact: 'tommy.york@gmail.com',
    key: '2'
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
=======
import Input from './Input.jsx';

var App = () => (
  <div>
    <Logo />
    <LinkButton title='Records' />
    <LinkButton title='Insert' />
    <SearchBar />

  <div>
    <Input />
  </div>

   </div>
)
>>>>>>> master

export default App
