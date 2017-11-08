import React from 'react';

var RecordsTableEntry = ({record}, handleRecordEntryCheck={handleRecordListEntryCheck}) => (
  <tr>
  <td>{record.company}</td>
  <td>{record.location}</td>
  <td>{record.contact}</td>
  <td>{record.notes}</td>
  <td> <input type="checkbox" checked={record.coverLetter} /></td>
  <td> <input type="checkbox" checked={record.resume} /></td>
  <td> <input type="checkbox" checked={record.firstInterview} /></td>
  <td> <input type="checkbox" checked={record.secondInterview} /></td>
  <td> <input type="checkbox" checked={record.offer} /></td>
  <td> <input type="checkbox" checked={record.rejected} /></td>
  </tr>
  )

//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};

export default RecordsTableEntry;
