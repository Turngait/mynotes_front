import {API_URL} from 'config/api';

export async function getFinData(token, period) {
  const {costs, incomes, budget, status} = await fetch(API_URL + '/fin/getfindata', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({token, period}),
    headers: {'Content-Type': 'application/json;charset=utf-8'},
  }).then(res => res.json());

  return {costs, incomes, budget, status};
}
