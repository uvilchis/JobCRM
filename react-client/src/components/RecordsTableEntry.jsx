import React from 'react';

export default class RecordsTableEntry extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
    
  render() {
    return (
      <tr>
      <td>{this.props.record.company}</td>
      <td>{this.props.record.location}</td>
      <td>{this.props.record.contact}</td>
      <td>{this.props.record.notes}</td>
      <td> <input type="checkbox" defaultChecked={this.props.record.coverLetter} onChange={this.handleChange} /></td>
      <td> <input type="checkbox" defaultChecked={this.props.record.resume} onChange={this.handleChange} /></td>
      <td> <input type="checkbox" defaultChecked={this.props.record.firstInterview} onChange={this.handleChange} /></td>
      <td> <input type="checkbox" defaultChecked={this.props.record.secondInterview} onChange={this.handleChange} /></td>
      <td> <input type="checkbox" defaultChecked={this.props.record.offer} onChange={this.handleChange} /></td>
      <td> <input type="checkbox" defaultChecked={this.props.record.rejected} onChange={this.handleChange} /></td>
    </tr>
  )
  }
}

//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};

