import React from 'react';
import hf from '../HelperFuncStateStorage';
import axios from 'axios';
import LinkButton from './LinkButton.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import Axios from 'axios';

export default class newsItem extends React.Component {
  // console.log(this.props);
  constructor(props) {
    super();
    this.props = props;
    console.log(this.props);
    // this.state = {
    //     news: this.props.news
    // }
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

    //let nameObj =Object.assign({}, this.props.record.company);
    //console.log(nameObj.name);
    return (
    <div>
            {listItems}
    </div>
  )
}}


// this code may help you make sure that the object you pass to the RecordsTableEntry is an array.
// not implemented or tested though.
//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};
