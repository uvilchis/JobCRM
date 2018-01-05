import React from 'react';
import hf from '../HelperFuncStateStorage';
import axios from 'axios';
import LinkButton from './LinkButton.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class newsItem extends React.Component {
  // console.log(this.props);
  constructor(props) {
    super();
    this.props = props;
  }

  // delete function.

  render() {

    const listItems = this.props.news.map((company, i) => 
      <div>
          <div className="row">
            <h2>{company.CompanyName}</h2>
          </div>
          {company.News.data.articles.slice(0,3).map((data, i) =>
            <div className="row">  
              <div className="col-sm-" key={i}>
              <h3>{data.title}</h3>
              </div>
              <div className="col-sm-">
                <b>Description:</b> {data.description}
              </div>
          </div>)}
      </div>
    )

    return (
    <div>
            {listItems}
    </div>
  )
}}
