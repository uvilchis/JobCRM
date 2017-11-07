import React from 'react';

var RecordsTableEntry = ({record}, handleRecordEntryCheck={handleRecordListEntryCheck}) => (
  <div>
  <div className="company">
    {record.company}
    </div>
  <div className="contact">
    {record.contact}
  </div>
  </div>
)

//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};

export default RecordsTableEntry;
