import React from 'react';
import hf from '../HelperFuncStateStorage';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  // read through helper functions to understand the following render.

  render() {
    console.log(this.state)
    return (
      <div className='SearchBar'>
        <input type="text" value={this.state.searchValue} onChange={(e) => {
          hf.updateFieldValue(this, 'searchValue', e)
        }} />
        <button type="button" onClick={() => {
          this.props.search(this.state.searchValue);
        }}>
          Search
        </button>
      </div>
    )
  }
}