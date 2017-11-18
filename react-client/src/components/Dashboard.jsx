import React from 'react';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import hf from '../HelperFuncStateStorage';
import LinkButton from './LinkButton.jsx';
import NewsItems from './NewsItems.jsx';
import axios from 'axios';
import _ from 'underscore';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      //newsFunction: this.props.newsFunction.bind(this),
      news: [],
      companyList: []
    }
  }

  getTopCompanies() {
    return axios.get('recentrecords').then((results) => {
      let returnValue = results.data.slice(0,5);
      console.log(returnValue);
      return _.uniq(returnValue.map((x) => x = x.company.name));
    });
  }
  
  getRecentNews() {
    let newNews = [];
    this.getTopCompanies()
      .then((results) => {
        if (results && results.length > 0) {
          results.forEach((x) => {
              axios.get(`https://newsapi.org/v2/everything?q=${x}&apiKey=f8ea23698b664c35a7c9598fe183e2ec`)
              .then((y) => newNews.push({CompanyName: x, News: y}))
              .then(() => this.setState({news: newNews}))
          })
        }
      }
  )}

  componentWillMount() {
    this.getRecentNews();
  }

  // componentWillUpdate() {
  //   this.render();
  // }

  render() {

    return (<div className='records-list'>
      <h1>Recent news:</h1>
        <div className="container">
          <NewsItems news={this.state.news}/>
        </div>
    </div>

    )
  }
}

//