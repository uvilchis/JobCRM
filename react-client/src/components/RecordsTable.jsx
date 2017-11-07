import React from 'react';
import RecordsTableEntry from './RecordsTableEntry.jsx';

export default class RecordsTable extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
  }

  render() {
    return (<div className='records-list'>
 <table class="table">
  <thead class="thead-default">
    <tr>
      <th>Company</th>
      <th>Location</th>
      <th>Contact</th>
      <th>Notes</th>
      <th>Cover Letter</th>
      <th>Resume</th>
      <th>First Interview</th>
      <th>Second Interview</th>
      <th>Offer</th>
      <th>Reject</th>
    </tr>
  </thead>
  <tbody>

      <th
        {this.props.records.map((record) =>
          <tr>
          <RecordsTableEntry
           key={record.key}
           record={record}
           handleRecordListEntryCheck={this.props.handleRecordListEntryCheck}
          />
          </tr>
      )}
    </tbody>
    </table>
    </div>>
    )
  }
}

//RecordsTable.propTypes = {
//  records: React.PropTypes.array.isRequired
//};

