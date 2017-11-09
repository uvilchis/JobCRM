import React from 'react';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import hf from '../HelperFuncStateStorage';

export default class RecordsTable extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      records: [{key: '2'}]
    }
  }

  componentDidMount() {
    hf.requestRecords().then((x) => {
      console.log(x);
      this.setState({records: x.data})});
  }

  render() {
    return (<div className='records-list'>
 <table className="table">
  <thead className="thead-default">
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
        {this.state.records.map((record) =>
          <RecordsTableEntry
           key={record.key}
           record={record}    
           />
      )}
    </tbody>
    </table>
    </div>
    )
  }
}

// should you want to be more strict:
//RecordsTable.propTypes = {
//  records: React.PropTypes.array.isRequired
//};

