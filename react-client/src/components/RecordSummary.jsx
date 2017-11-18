import React from 'react';
import ContactInput from './FullContact/ContactInput.jsx';

class RecordSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this is a record' , this.props);
    return (
      <div className="container">
        <div>
          <h1>Record</h1>
          <h3>Contact Details</h3>
          <div>Contact Name: {this.props.recordId.contactValue}</div>
          <div>Contact Email: {this.props.recordId.contactEmailAddress}</div>
          <h4>Social Media Profiles</h4>
          <ul>
          {this.props.recordId.socialProfiles.map((profile, idx) => <ContactInput profile={profile} key={idx}/>)}
          </ul>
        </div>
        <div>
          <h3>Record Detail</h3>
          <div>Company: {this.props.details.recordId.company.name} </div>
          <div>Location: {this.props.details.recordId.location}</div>
          <div>Notes: {this.props.details.recordId.notes} </div>
          <h2>Status: </h2>
          <div>Cover Letter: {this.props.details.recordId.coverLetterName}</div>
          <div>Resume: </div> {this.props.details.recordId.resumeName}
          <div>First Interview: {this.props.details.recordId.firstInterview ? 'Yes' : 'No'}</div>
          <div>Second Interview: {this.props.details.recordId.secondInterview ? 'Yes' : 'No'}</div>
          <div>Offer: {this.props.details.recordId.offer ? 'Yes' : 'No'}</div>
          <div>Rejected: {this.props.details.recordId.rejected ? 'Yes' : 'No'}</div>
        </div>
      </div>
    )
  }
}

export default RecordSummary