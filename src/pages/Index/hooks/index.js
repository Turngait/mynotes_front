import {API_URL} from '../../../config/api';

export async function signIn(email, pass) {
  const {data, status} = await fetch(API_URL + '/auth/signin', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email, pass})
  }).then(res => res.json());

  return {data, status};
}

export async function signUp1(email, name, pass, setMsg, signIn) {
  const data = await fetch(API_URL + '/auth/signup', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({email, pass, name})
  }).then(res => res.json());
  console.log(data)
  if(data.status === 202) {
    const {data, status} = await signIn(email,pass);
    return {data, status, errors: null};
  } else if(data.status === 208) {
    setMsg('Такой email уже занят!');
    return {data, status: 208, errors: null};
  }
  return {data: null, status: data.status};
}