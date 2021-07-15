import {API_URL, API_KEY} from 'config/api';

export async function getFinData(token, period) {
  const {costs, incomes, budget, status} = await fetch(API_URL + '/fin/getfindata', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({token, period}),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'API-KEY': API_KEY
    },
  }).then(res => res.json());

  return {costs, incomes, budget, status};
}
