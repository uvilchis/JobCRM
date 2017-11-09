import React from 'react';
import axios from 'axios';

class HelperFuncStateStorage {
  //don't console.log here if you're trying to debug.
  //console.log where the function is being called before return and after render

    postFieldValue(inst, stateName, e) {
        e.stopPropagation()
        let stateUpdate = {};
        stateUpdate[stateName] = e.target.checked;
        inst.setState(stateUpdate);
      
      axios.post('update', {
        id: inst.state.key,
        stateName: stateName,
        value: e.target.checked
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        return null
    }

  updateFieldValue(inst, stateName, e) {
  	e.stopPropagation()
    let stateUpdate = {};
    stateUpdate[stateName] = e.target.checked;
    inst.setState(stateUpdate);
    return null
  }

  toggleCheckBox(inst, boxName, e) {
    let stateUpdate = {};
    stateUpdate[boxName] = !inst.state[boxName]
    inst.setState(stateUpdate)
    return null;
  }


}

const instanceHelper = new HelperFuncStateStorage();
export default instanceHelper
