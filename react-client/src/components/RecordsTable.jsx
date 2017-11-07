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
      {this.props.records.map((record) =>
          <RecordsTableEntry
           key={record.key}
           record={record}
           handleRecordListEntryCheck={this.props.handleRecordListEntryCheck}
          />
      )}
    </div>
    )
  }
}

//RecordsTable.propTypes = {
//  records: React.PropTypes.array.isRequired
//};

