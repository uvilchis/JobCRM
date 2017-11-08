import React from 'react';

export default class HelperFuncStateStorage {
  constructor(props){
  }

  updateFieldValue(inst, stateName, e) {
    let stateUpdate = {};
    stateUpdate[stateName] = e.target.value;
    inst.setState(stateUpdate);
    console.log(inst.state)
    return null//or promise something
  }
}
