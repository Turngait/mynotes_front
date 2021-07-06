import {API_URL} from '../../config/api';

export function getCostItems(token) {
  return async (dispatch) => {
    const period = new Date().toISOString().slice(0,7);
    const {data} = await fetch(API_URL + '/fin/cost/get/' + period + '/' + token)
    .then(res => res.json())
    if (data && data.length < 0) return;
    dispatch(setCosts(data.costs));
  }
}

export function setCosts(costs) {
  return (dispatch) => {
    let spentByThisMonth = 0;
    if (costs.costs.length > 0) spentByThisMonth = costs.costs[costs.costs.length - 1].spentByThisMonth;

    dispatch({
      type: 'SET_COSTS',
      groups: costs.groups,
      costs: costs.costs
    });
    dispatch({
      type: 'SET_COSTS_BY_PERIOD',
      payload: spentByThisMonth
    });
  }
}

export function setCostsForPeriod (costs, period) {
  return (dispatch) => {
    dispatch(setCosts(costs));

    dispatch({
        type: 'SET_MONTH',
        payload: period
    });
  }
}

export function setGroups(groups) {
  return (dispatch) => {
    dispatch({
      type: 'SET_GROUPS',
      payload: groups
    });
  }
}
