import {API_URL} from '../../config/api'

export function openAddCost() {
  return (dispatch) => {
    dispatch({type: 'OPEN_ADD_COST'})
  };
}

export function closeAddCost() {
  return (dispatch) => {
    dispatch({type: 'CLOSE_ADD_COST'})
    dispatch({
      type: 'SET_ADD_COST_ERROR',
      payload: ''
    })
  };
}

export function openAddCostGroup() {
  return (dispatch) => {
    dispatch({type: 'OPEN_ADD_COST_GROUP'})
  };
}

export function closeAddCostGroup() {
  return (dispatch) => {
    dispatch({type: 'CLOSE_ADD_COST_GROUP'})
  };
}

export function setCostTitle(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_TITLE', payload: data})
  };
}

export function setCostAmmount(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_AMOUNT', payload: data})
  };
}

export function setCostDescription(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_DESCRIPTION', payload: data})
  };
}

export function setCostGroup(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_GROUP', payload: data})
  };
}

export function setCostWlistItem(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_WLIST_ITEM', payload: data})
  };
}

export function setCostGroupTitle(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_GROUP_TITLE', payload: data})
  };
}


export function getCostItems(token) {
  return (dispatch) => {
    fetch(API_URL + '/fin/cost/get/' + token)
    .then(res => {return res.json()})
    .then(data => {
      const {groups, costs} = data
        dispatch({
          type: 'SET_COSTS',
          groups,
          costs
        })
    })
  }
}

export function addGroupToDB(data) {
  return (dispatch) => {
    fetch(API_URL + '/fin/group/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
    .then(async res => {
      if (res.status === 204) {
        dispatch(closeAddCostGroup())
        dispatch({
          type: 'SET_ADD_GROUP_ERROR',
          payload: ''
        })
      } else if (res.status === 422) {
        const data = await res.json();
        if (data.errors) {
          const {errors} = data.errors;
          dispatch({
            type: 'SET_ADD_GROUP_ERROR',
            payload: errors[0].msg
          })
        }
      }
    })
  }
}

export function addCostItem(data) {
  return(dispatch) => {
    fetch(API_URL + '/fin/cost/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
    .then(async res => {
      if (res.status === 204) {
        dispatch(closeAddCost())
      } else if (res.status === 422) {
        const data = await res.json();
        if (data.errors) {
          const {errors} = data.errors;
          dispatch({
            type: 'SET_ADD_COST_ERROR',
            payload: errors[0].msg
          })
        }
      }
    })
  }
}

export function deleteCostItem(data) {
  return (dispatch) => {
    const {target, token} = data;
    const id = target.dataset.itemId;

    fetch(API_URL + '/fin/cost/' + id + '/' + token, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors'
    })
    .then(res => {
      if(res.status === 204) {
        dispatch(getCostItems(token))
      }
    })
  }
}

export function showGroupName (data) {
  return (dispatch) => {
    const {id_group} = data.item;
    if (data.groups) {
      for(let group of data.groups) {
        if (group._id === id_group) {
          return group.title
        }
      }
    }

    return 'None'
  }
}