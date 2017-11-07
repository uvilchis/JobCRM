import React from 'react';

var RecordsTableEntry = ({record}, handleRecordEntryCheck={handleRecordListEntryCheck}) => (
  <div>
  <td>{record.company}</td>
  <td>{record.location}</td>
  <td>{record.contact}</td>
  <td>{record.notes}</td>
  <td>{record.coverLetter}</td>
  <td>{record.resume}</td>
  <td>{record.firstInterview}</td>
  <td>{record.secondInterview}</td>
  <td>{record.offer}</td>
  <td>{record.rejected}</td>
  </div>
)

//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};

export default RecordsTableEntry;
