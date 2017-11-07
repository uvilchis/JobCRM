import React from 'react';

export default class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
   return (
    <div className='link-button'>{this.props.title}</div>
   )
  }
} 
