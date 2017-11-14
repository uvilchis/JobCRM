import React from 'react';
let axios = require('axios');

class HelperFuncStateStorage {

  // don't console.log here if you're trying to debug.
  // console.log where the function is being called before return and after render

  // this method updates field values.
  postFieldValue(inst, stateName, e) {
    e.stopPropagation()
    let stateUpdate = {};
    stateUpdate[stateName] = !inst.state[stateName];
    inst.setState(stateUpdate);

    console.log(inst.props.record);
    console.log(inst.props.record.id);

    axios.post('update', {
      id: inst.props.record.id,
      stateName: stateName,
      value: !inst.state[stateName]
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return null
  }

  // interact with our api to get records.
  requestRecords(inst) {
    return axios.get('records')
    .then((records) => {
      //console.log(records);
      return records;
    });
  }

  // not fully working: method to login to the database.
  // currently does very simple setting of user, without authentication.
  // and even that isn't fully working.
  loginRequest(inst, value) {
    console.log(value);
    axios.post('login', {
      user: value
    }).then(function (response) {
      //console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
    return null;
  }

    // you want to track field values in states.
  updateFieldValue(inst, stateName, e) {
  	//e.stopPropagation()
    let stateUpdate = {};
    stateUpdate[stateName] = e.target.value;
    inst.setState(stateUpdate);
    return null
  }

  // similarly, you want to track checkbox values in states.
  toggleCheckBox(inst, boxName, e) {
    let stateUpdate = {};
    stateUpdate[boxName] = !inst.state[boxName]
    inst.setState(stateUpdate)
    return null;
  }

  // handle submissions of the data.
  onSubmit(inst) {
    axios.post('insert', inst.state)
      .then(function(response) {
        console.log('works', response);
      })
      .catch(function(error) {
        console.error('error', error);
      });
      return null;
  }
}

const instanceHelper = new HelperFuncStateStorage();
export default instanceHelper
