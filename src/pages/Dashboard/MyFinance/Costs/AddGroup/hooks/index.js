import {API_URL} from '../../../../../../config/api';

export async function saveGroup(group, token, setCosts, setError) {
  const status = await fetch(API_URL + '/fin/group/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors',
    body: JSON.stringify({groupTitle: group, token})
  }).then(async res => {
    if(res.status === 201) {
      const data = await res.json();
      const {costs} = data.data;
      setCosts(costs);
      return true;
    } else if(res.status === 422) {
      const data = await res.json();
      if (data.errors) {
        const {errors} = data.errors;
        setError(errors[0].msg);
        return false;
      }
    } else {
      return false;
    }
  })

  return status;
} 