import React from 'react';
import LinkButton from './LinkButton.jsx';
import TagList from './TagList.jsx';

import hf from '../HelperFuncStateStorage';
import { WithContext as ReactTags } from 'react-tag-input';

export default class Input extends React.Component {
  constructor(props) {
    super();
    this.state = {        // these represent all of our database row values.
      companyValue: '',
      locationValue: '',
      contactValue: '',
      notesValue: '',
      jobApplicationURL: '',
      coverLetter: false,
      resume:false,
      firstInterview: false,
      secondInterview: false,
      offer: false,
      rejected: false,
      tags: [{ id: 1, text: "Sample Keyword" }]
    };
  }
  

  render() {
    console.log(this.state)
    return (
      <div className="container w-50 p-3">
      <form onSubmit={(e) => {
        e.preventDefault(); //this just prevents the page from refreshing upon every submit
        hf.onSubmit(this);
      }}>
      <div className="form-group w-50 p-3">   {/* delightful bootstrap */}
        <label>Company</label>
        <input id="company" type="text" className="form-control" value={this.state.companyValue} onChange={(e) => {
          hf.updateFieldValue(this, 'companyValue', e)
        }} />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input type="text" id="location" className="form-control" value={this.state.locationValue} onChange={(e) => {
          hf.updateFieldValue(this, 'locationValue', e)
        }} />
      </div>
      <div className="form-group">
        <label>Contact</label>
        <input type="text" className="form-control" value={this.state.contactValue} onChange={(e) => {
          hf.updateFieldValue(this, 'contactValue', e)
        }} />
      </div>
      <div className="form-group">
        <label>Notes</label>
        <input type="text" className="form-control" value={this.state.notesValue} onChange={(e)=> {
          hf.updateFieldValue(this, 'notesValue', e)
        }} />
      </div>
      <div className="form-group">
        <label>Job Application</label>
        <input type="text" className="form-control" value={this.state.jobApplicationURL} onChange={(e)=> {
          hf.updateFieldValue(this, 'jobApplicationURL', e)
        }} /> <LinkButton title='Populate Keywords' clickFunction={this.props.parse.bind(this, this.state.jobApplicationURL)} />
      </div>
      <div className="form-group">
        <label>Keywords</label>
        <input type="text" className="form-control" value={this.state.jobApplicationURL} onChange={(e)=> {
          hf.updateFieldValue(this, 'jobApplicationURL', e)
        }} /> <LinkButton title='Download Keywords' clickFunction={this.props.parse.bind(this, this.state.jobApplicationURL)} />
      </div>
      <div className="form-group">
        <label>Keywords</label>
        <TagList clickFunction={this.props.parse.bind(this, this.state.jobApplicationURL)} />
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value={this.state.coverLetter} onChange={(e) => {
          hf.toggleCheckBox(this, 'coverLetter', e)
          }} />
          Cover Letter
      </label>
      </div>
      <div className="checkbox">
        <label>  
        <input type="checkbox" value={this.state.resume} onChange={(e) => {
            hf.toggleCheckBox(this, 'resume', e)
          }} />
          Resume
        </label>
      </div>
      <div className="checkbox">
        <label>
        <input className="checkbox" type="checkbox" value={this.state.firstInterview} onChange={(e) => {
          hf.toggleCheckBox(this, 'firstInterview', e)
        }}/>First Interview
        </label>
        </div>
        <div className="checkbox">
          <label>
          <input className="checkbox" type="checkbox" value={this.state.secondInterview} onChange={(e)=> {
            hf.toggleCheckBox(this, 'secondInterview', e)
          }}/>Second Interview
          </label>
        </div>
        <div className="checkbox">
        <label>
          <input className="checkbox" type="checkbox" value={this.state.offer} onChange={(e)=> {
            hf.toggleCheckBox(this, 'offer', e)
          }}/>Offer
          </label>
        </div>
        <div className="checkbox">
        <label>
          <input className="checkbox" type="checkbox" value={this.state.rejection} onChange={(e)=> {
            hf.toggleCheckBox(this, 'rejected', e)
          }}/>Rejected
        </label>
        </div>
      <div>
        <button type="submit" className="btn btn-outline-secondary bg-primary" onClick={this.handleClick}> Save </button>
      </div>
      </form>
      </div>
    );
  }
}
