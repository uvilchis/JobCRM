import React from 'react';
import LinkButton from '../LinkButton.jsx';
import axios from 'axios';

export default class ContactInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const profile = this.props.profile;
    return (
     <li><a href={profile.url} target="_blank">{profile.name}</a></li>
      )
  }
}
