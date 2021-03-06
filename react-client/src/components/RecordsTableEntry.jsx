import React from 'react';
import hf from '../HelperFuncStateStorage';
import axios from 'axios';
import LinkButton from './LinkButton.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ResumeEditor from './ResumeManager/ResumeEditor'
import ResumePicker from './ResumeManager/ResumePicker'
import CoverLetterField from './ResumeManager/CoverLetterField'

export default class RecordsTableEntry extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      id: this.props.record.id,
      tags: this.props.record.tags,

		  coverLetterName: this.props.coverLetterName, 
      coverLetterURL: this.props.coverLetterURL,
      resumeName: this.props.resumeName,
      resumeURL: this.props.resumeURL,

			firstInterview: this.props.record.firstInterview,
			secondInterview: this.props.record.secondInterview,
			offer: this.props.record.offer,
      rejected: this.props.record.rejected,
      searchFunction: this.props.searchFunction.bind(this)
    }
    this.delete = this.delete.bind(this)
    this.updateCoverLetterName = this.updateCoverLetterName.bind(this)
    this.updateResumeName = this.updateResumeName.bind(this)
  }

  delete() {

    let statusUpdate = {id : this.props.record.id}
    axios.post('deleteRecord', statusUpdate)
      .then(function(response) {
      })
      .then(() => {
        this.state.searchFunction();
      })
      
    return null; 
  }

  updateCoverLetterName(coverLetterName) {
    console.log('the axios in resume picker is calling this', coverLetterName)
    this.setState({coverLetterName})
  }

  updateResumeName(resumeName) {
    this.setState({resumeName})
  }

  
  render() {
    let nameObj =Object.assign({}, this.props.record.company);
    return (
      <tr>
      <td>{nameObj.name}</td>
      <td>{this.props.record.location}</td>
      <td>{this.props.record.contact}</td>
      <td>{this.props.record.notes}</td>
      <td>{this.props.record.tags}</td>

      {/* This the cover letter. */}
      <td> 
        <CoverLetterField 
          coverLetterName = {this.state.coverLetterName}
          updateName = {this.updateCoverLetterName}
          recordId = {this.props.record.id}
        /> 
      </td>
      
      {/* This the resume */}
      <td> 
        {/*<ResumeEditor recordId = {this.props.record.id} targetDocument = 'resume' /> */}
        <h5> current resume: {this.state.resumeName}</h5> 
        <ResumePicker 
          updateName = {this.updateResumeName} 
          recordId = {this.props.record.id} 
          targetDocument = 'resume'
        />
      </td>
      
      <td> <input type="checkbox" name="firstInterview" checked={this.state.firstInterview} onChange={(e) => {hf.postFieldValue(this, 'firstInterview', e)}} /></td>
      <td> <input type="checkbox" name="secondInterview" checked={this.state.secondInterview} onChange={(e) => {hf.postFieldValue(this, 'secondInterview', e)}} /></td>
      <td> <input type="checkbox" name="offer" checked={this.state.offer} onChange={(e) => {hf.postFieldValue(this, 'offer', e)}} /></td>
      <td> <input type="checkbox" name="rejected" checked={this.state.rejected} onChange={(e) => {hf.postFieldValue(this, 'rejected', e)}} /></td>
      <td> <Link to={`/record/${this.props.record.id}`}><LinkButton title="Info" clickFunction={undefined} /> </Link> </td>
      <td> <LinkButton title="Remove" clickFunction={this.delete.bind(this)} /> </td>
    </tr>
  )
}}


// this code may help you make sure that the object you pass to the RecordsTableEntry is an array.
// not implemented or tested though.
//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};
