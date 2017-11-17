import React from 'react';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import hf from '../HelperFuncStateStorage';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      records: this.props.records
    }
  }

  render() {
    let records = this.props.records
    return (<div className='records-list'>
 <table className="table">
  <thead className="thead-default">
    <tr>
        Most Recent Applications:
    </tr>
  </thead>
  <tbody>
    recent apps go here
    </tbody>
    </table>
    </div>
    )
  }
}

//