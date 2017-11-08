import React from 'react';

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
      rejected: false
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <p>
        Company:
        <input type="text" value={this.state.companyValue} onChange={(e) => {
          window.hf.updateFieldValue(this, 'companyValue', e)
        }} />
      </p>
      <p>
        Location:
        <input type="text" value={this.state.locationValue} onChange={(e) => {
          window.hf.updateFieldValue(this, 'locationValue', e)
        }} />
      </p>
      <p>
        Contact:
        <input type="text" value={this.state.contactValue} onChange={(e) => {
          window.hf.updateFieldValue(this, 'contactValue', e)
        }} />
      </p>
      <p>
        Notes:
        <input type="text" value={this.state.notesValue} onChange={(e)=> {
          window.hf.updateFieldValue(this, 'notesValue', e)
        }} />
      </p>
        <div>
          <input type="checkbox" value={this.state.firstInterview} onChange={(e) => {
            window.hf.toggleCheckBox(this, 'firstInterview', e)
          }}/>
          First Interview
        </div>
        <div>
          <input type="checkbox" value={this.state.secondInterview} onChange={(e)=> {
            window.hf.toggleCheckBox(this, 'secondInterview', e)
          }}/>
          Second Interview
        </div>
        <div>
          <input type="checkbox" value={this.state.offer} onChange={(e)=> {
            window.hf.toggleCheckBox(this, 'offer', e)
          }}/>
          Offer
        </div>
        <div>
          <input type="checkbox" value={this.state.rejection} onChange={(e)=> {
            window.hf.toggleCheckBox(this, 'rejected', e)
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
