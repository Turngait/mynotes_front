import {API_URL} from '../../config/api'

export function openAddCost() {
  return (dispatch) => {
    dispatch({type: 'OPEN_ADD_COST'})
  };
}

export function closeAddCost() {
  return (dispatch) => {
    dispatch({type: 'CLOSE_ADD_COST'})
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
    .then(res => {
      if (res.status === 204) {
        dispatch(closeAddCostGroup())
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
    .then(res => {
      if (res.status === 204) {
        dispatch(closeAddCost())
      }
    })
  }
}