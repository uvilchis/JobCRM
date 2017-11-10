import React from 'react';

export default class LinkButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
    <div>
      <button type="button" className="btn btn-outline-secondary bg-primary" onClick={this.props.clickFunction}>
        {this.props.title}
      </button>
    </div>
    )
  }
}
