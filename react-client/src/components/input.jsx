import React from 'react';
import hf from '../HelperFuncStateStorage';

export default class Input extends React.Component {
  constructor(props) {
    super();
    this.state = {
      companyValue: '',
      locationValue: '',
      contactValue: '',
      notesValue: '',
      firstInterview: false,
      secondInterview: false,
      offer: false,
      rejected: false,
    };
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={(e) => {
        e.preventDefault(); //this just prevents the page from refreshing upon every submit
        hf.onSubmit(this);
      }}>
      <p>
        Company:
        <input type="text" value={this.state.companyValue} onChange={(e) => {
          hf.updateFieldValue(this, 'companyValue', e)
        }} />
      </p>
      <p>
        Location:
        <input type="text" value={this.state.locationValue} onChange={(e) => {
          hf.updateFieldValue(this, 'locationValue', e)
        }} />
      </p>
      <p>
        Contact:
        <input type="text" value={this.state.contactValue} onChange={(e) => {
          hf.updateFieldValue(this, 'contactValue', e)
        }} />
      </p>
      <p>
        Notes:
        <input type="text" value={this.state.notesValue} onChange={(e)=> {
          hf.updateFieldValue(this, 'notesValue', e)
        }} />
      </p>
        <div>
          <input type="checkbox" value={this.state.firstInterview} onChange={(e) => {
            hf.toggleCheckBox(this, 'firstInterview', e)
          }}/>
          First Interview
        </div>
        <div>
          <input type="checkbox" value={this.state.secondInterview} onChange={(e)=> {
            hf.toggleCheckBox(this, 'secondInterview', e)
          }}/>
          Second Interview
        </div>
        <div>
          <input type="checkbox" value={this.state.offer} onChange={(e)=> {
            hf.toggleCheckBox(this, 'offer', e)
          }}/>
          Offer
        </div>
        <div>
          <input type="checkbox" value={this.state.rejection} onChange={(e)=> {
            hf.toggleCheckBox(this, 'rejected', e)
          }}/>
          Rejected
        </div>
      <div>
        <button type="submit" onClick={this.handleClick}> Save </button>
      </div>
      </form>
    );
  }
}
