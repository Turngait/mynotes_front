import {API_URL} from '../../config/api';

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


export function setCostDate(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_DATE', payload: data})
  };
}

export function setCostGroupTitle(data) {
  return (dispatch) => {
    dispatch({type: 'SET_COST_GROUP_TITLE', payload: data})
  };
}


export function getCostItems(token) {
  return async (dispatch) => {
    const period = new Date().toISOString().slice(0,7);
    const {data} = await fetch(API_URL + '/fin/cost/get/' + period + '/' + token)
    .then(res => res.json())
    if (data && data.length < 0) return;
    const {groups, costs} = data.costs;
    dispatch({
      type: 'SET_COSTS_BY_PERIOD',
      payload: costs.spentByPeriod
    });
    dispatch({
      type: 'SET_COSTS',
      groups,
      costs: costs
    });
    dispatch(togleCostFiltered(false));
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
    const {token} =data;
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
        dispatch(getCostItems(token))
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

export function getGroupId (data) {
  return (dispatch) => {
    const {id_group} = data.item;
    if (data.groups) {
      for(let group of data.groups) {
        if (group._id === id_group) {
          return group._id
        }
      }
    }

    return 'None'
  }
}

export function getCostForPeriod (data) {
  return (dispatch) => {
    const {period} = data;
    fetch(API_URL + '/fin/cost/get/' + period + '/' + data.token)
    .then(res => {return res.json()})
    .then(data => {
      const {groups, costs} = data.data.costs;
      dispatch({
        type: 'SET_COSTS',
        groups,
        costs
      })

      dispatch({
        type: 'SET_COST_PERIOD',
        payload: period
      })
    })
  }
}

export function deleteCostGroup(data) {
  return (dispatch) => {
    const { token, target } = data;
    const id = target.dataset.itemId;
    fetch(API_URL + '/fin/group/delete/' + id + '/' + token, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors'
    })
    .then(res => {
      if (res.status === 204) {
        dispatch(getCostItems(token))
      }
    })
  }
}

export function costGroupFilter(data) {
  return (dispatch) => {
    fetch(API_URL + '/fin/cost/group/' + data.token + '/' + data.id_group + '/' + data.period)
    .then(res => {return res.json()})
    .then(data => {
      const {groups, costs} = data.data.costs;
      dispatch({
        type: 'SET_COSTS',
        groups,
        costs
      });
      dispatch(togleCostFiltered(true))
    })
  }
}


export function togleCostFiltered(data) {
  return (dispatch) => {
    dispatch({
      type: 'SET_ISFILTERED',
      payload: Boolean(data)
    });
  }
}