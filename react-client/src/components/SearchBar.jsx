import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
    
    }
  }

  render() {
    console.log(this.state)
    return (
    <div className='SearchBar'><input type="text" /><button type="button">Search</button></div>
)
  }
}
