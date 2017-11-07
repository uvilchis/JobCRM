import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
   return (
    <div className='SearchBar'><input type="text" /><button type="button">Submit</button></div>
   )
  }
} 
