import React from 'react';
import axios from 'axios';
import ResumePicker from './ResumePicker'

export default class CoverLetterField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      coverLetterName : this.props.coverLetterName,   
    };
  }

  render() {
  	// console.log('this is the default value for the coverLetterName', this.props.coverLetterName)
  	console.log('this is the coverLetterName', this.props.coverLetterName)
    return (this.props.coverLetterName !== undefined) ? (
    	<h5> {this.props.coverLetterName}</h5>
    	) : (
    	<div> 
	    	<ResumePicker 
	        updateName = {this.props.updateName}
	        recordId = {this.props.recordId} 
	        targetDocument = 'coverLetter'
	      />
      </div> 
    )
  }
}       









         
        