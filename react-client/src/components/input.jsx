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
      coverLetter: false,
      resume:false,
      firstInterview: false,
      secondInterview: false,
      offer: false,
      rejected: false,
      tags: [{ id: 1, text: "Sample Keyword" }],
      jobApplicationURL: '',
      jobApplicationText: ''
    };
  }
  

  render() {
    console.log('render tags:', this.state.tags)
    return (
      <div className="container .col-md-4">
      <form onSubmit={(e) => {
        e.preventDefault(); //this just prevents the page from refreshing upon every submit
        hf.onSubmit(this);
      }}>
      <label><h3>Descriptive Information</h3></label>

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

      <label><h3>Job Application Keywords</h3></label>

      <div className="form-group">
        <label>Job Application URL</label>
        <input type="text" className="form-control" value={this.state.jobApplicationURL} onChange={(e)=> {
          hf.updateFieldValue(this, 'jobApplicationURL', e)
        }} /> 
      </div>

      <div className="form-group">
        <label>Job Application Text</label>
        <textarea type="text" rows="5" className="form-control" value={this.state.jobApplicationText} onChange={(e)=> {
          hf.updateFieldValue(this, 'jobApplicationText', e)
        }} /> 
      </div>

      <div className="btn">
        <LinkButton title='Populate Keywords' clickFunction={this.props.parse.bind(this, [this.state.jobApplicationURL, this.state.jobApplicationText])} />
      </div>
      
      <div className="form-group">
        <label><h4>Keywords</h4></label>
        <TagList tags={this.state.tags} onChange={(e)=> {
          hf.updateFieldValue(this, 'tags', e)
        }} />
      </div>

      <label><h3>Progress</h3></label>

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
