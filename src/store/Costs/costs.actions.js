import {API_URL} from '../../config/api';

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

export function setCosts(costs) {
  return (dispatch) => {
    let spentByThisMonth = 0;
    if (costs.costs.length > 0) spentByThisMonth = costs.costs[costs.costs.length - 1].spentByThisMonth;
    dispatch({
      type: 'SET_COSTS_BY_PERIOD',
      payload: spentByThisMonth
    });
    dispatch({
      type: 'SET_COSTS',
      groups: costs.groups,
      costs: costs.costs
    });
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
  return async (dispatch) => {
    const {period} = data;
    const res = await fetch(API_URL + '/fin/cost/get/' + period + '/' + data.token)
    .then(res => res.json())
    const {costs} = res.data;

    dispatch({
        type: 'SET_COSTS',
        groups: costs.groups,
        costs: costs.costs
      })
    dispatch({
        type: 'SET_MONTH',
        payload: period
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