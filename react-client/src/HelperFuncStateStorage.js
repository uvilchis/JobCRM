import React from 'react';

export default class HelperFuncStateStorage {
  constructor(props){
  }

  updateFieldValue(inst, stateName, e) {
    let stateUpdate = {};
    stateUpdate[stateName] = e.target.value;
    inst.setState(stateUpdate);
    console.log(inst.state)
    return null
  }

  toggleCheckBox(inst, boxName, e) {
    let stateUpdate = {};

    stateUpdate[boxName] = !inst.state[boxName]
    inst.setState(stateUpdate)
    console.log('firstInt>>>>',inst.state)
    return null;
  }
}
