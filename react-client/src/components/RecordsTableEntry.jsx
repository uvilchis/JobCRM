import React from 'react';

export default class RecordsTableEntry extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      coverLetter: this.props.record.coverLetter,
			resume: this.props.record.resume,
			firstInterview: this.props.record.firstInterview,
			secondInterview: this.props.record.secondInterview,
			offer: this.props.record.offer,
			rejected: this.props.record.rejected
    }
  }
    
  render() {
    return (
      <tr>
      <td>{this.props.record.company}</td>
      <td>{this.props.record.location}</td>
      <td>{this.props.record.contact}</td>
      <td>{this.props.record.notes}</td>
      <td> <input type="checkbox" name="coverLetter" checked={this.state.coverLetter} onChange={(e) => {window.hf.updateFieldValue(this, 'coverLetter', e)}} /></td>
      <td> <input type="checkbox" name="resume" checked={this.state.resume} onChange={(e) => {window.hf.updateFieldValue(this, 'resume', e)}} /></td>
      <td> <input type="checkbox" name="firstInterview" checked={this.state.firstInterview} onChange={(e) => {window.hf.updateFieldValue(this, 'firstInterview', e)}} /></td>
      <td> <input type="checkbox" name="secondInterview" checked={this.state.secondInterview} onChange={(e) => {window.hf.updateFieldValue(this, 'secondInterview', e)}} /></td>
      <td> <input type="checkbox" name="offer" checked={this.state.offer} onChange={(e) => {window.hf.updateFieldValue(this, 'offer', e)}} /></td>
      <td> <input type="checkbox" name="rejected" checked={this.state.rejected} onChange={(e) => {window.hf.updateFieldValue(this, 'rejected', e)}} /></td>
    </tr>
  )
  }
}

//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};

