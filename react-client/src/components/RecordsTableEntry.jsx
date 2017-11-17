import React from 'react';
import hf from '../HelperFuncStateStorage';
import axios from 'axios';
import LinkButton from './LinkButton.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import Axios from 'axios';

export default class RecordsTableEntry extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      id: this.props.record.id,
      coverLetter: this.props.record.coverLetter,
      tags: this.props.record.tags,
			resume: this.props.record.resume,
			firstInterview: this.props.record.firstInterview,
			secondInterview: this.props.record.secondInterview,
			offer: this.props.record.offer,
      rejected: this.props.record.rejected,
      searchFunction: this.props.searchFunction.bind(this)
    }
  }

  // delete function.
  delete() {
    //console.log('in delete function');

    let statusUpdate = {id : this.props.record.id}
    axios.post('deleteRecord', statusUpdate)
      .then(function(response) {
        //console.log(response)
      })
      .then(() => {
        //console.log('attempting to refresh')
        this.state.searchFunction();
      })
      
    return null
  }

  
  render() {
    let nameObj =Object.assign({}, this.props.record.company);
    //console.log(nameObj.name);
    return (
      <tr>
      <td>{nameObj.name}</td>
      <td>{this.props.record.location}</td>
      <td>{this.props.record.contact}</td>
      <td>{this.props.record.notes}</td>
      <td>{this.props.record.tags}</td>
      <td> <input type="checkbox" name="coverLetter" checked={this.state.coverLetter} onChange={(e) => {hf.postFieldValue(this, 'coverLetter', e)}} /></td>
      <td> <input type="checkbox" name="resume" checked={this.state.resume} onChange={(e) => {hf.postFieldValue(this, 'resume', e)}} /></td>
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
