import {API_URL} from 'config/api';

export async function saveCost(cost, token, setCosts, setErrors) {
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
      const { costs } = data.data;
      // console.log(costs);
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

export async function deleteCostItemService(data, getCostItems) {
  const {target, token} = data;
  const id = target.dataset.itemId;

  fetch(API_URL + '/fin/cost/' + id + '/' + token, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors'
  })
  .then(async res => {
    if(res.status === 204) {
      await getCostItems(token);
    }
  })
}

export function getGroupId (data) {
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

export function showGroupName (data) {
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

export function costsFilterService (costs, group_id) {
  let filteredCosts = [];
  for (const cost of costs) {
    for (const item of cost.items) {
      if(item.id_group.toString() === group_id) {
        filteredCosts.push(item);
      }
    }
  }
  return filteredCosts;
}
