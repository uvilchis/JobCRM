import React from 'react';
import Logo from './Logo.jsx';
import LinkButton from './LinkButton.jsx';
import SearchBar from './SearchBar.jsx';
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

export default App
