import React from 'react';

class RecordSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this is a record' , this.props);
    return (
    
      <div>
      <h1>Record:</h1>
      <div>Record Details</div>
      </div>
    )
  }
}

export default RecordSummary