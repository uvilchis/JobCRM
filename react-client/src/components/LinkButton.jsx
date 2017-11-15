import React from 'react';

// generic component for link buttons. Used multple times, very straightforward.

export default class LinkButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
    <div>
      <button type="button" className="btn btn-outline-secondary bg-primary" onClick={(e) => this.props.clickFunction(e)}>
        {this.props.title}
      </button>
    </div>
    )
  }
}
