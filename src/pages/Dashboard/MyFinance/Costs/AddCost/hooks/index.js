import {API_URL} from '../../../../../../config/api';

export async function saveCost(cost, token, setCosts,setErrors) {
  const status = await fetch(API_URL + '/fin/cost/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors',
    body: JSON.stringify({cost, token})
  }).then(async res => {
    if (res.status === 201) {
      const data = await res.json();
      const {costs} = data.data;
      setCosts(costs);
    } else if (res.status === 422) {
      const data = await res.json();
      if (data.errors) {
        const {errors} = data.errors;
        setErrors(errors[0].msg);
      }
    }
    
    return res.status;
  });

  if (status === 201) return true;
  return false;

}