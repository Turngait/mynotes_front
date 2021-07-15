import {API_URL, API_KEY} from '../../../config/api';

export async function signIn(email, pass, auth, setMsg) {
  const {data, status} = await fetch(API_URL + '/auth/signin', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'API-KEY': API_KEY
      },
      body: JSON.stringify({email, pass})
  }).then(res => res.json());

  if (status === 200) {
    auth(data);
  } else if(status === 403) {
    setMsg('Неверный пароль или email');
  } else {
    setMsg('Проблема с сервером. Попробуйте позже.');
  }
}

export async function signUp(email, name, pass, auth, setMsg) {
  const data = await fetch(API_URL + '/auth/signup', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'API-KEY': API_KEY
    },
    body: JSON.stringify({email, pass, name})
  }).then(res => res.json());

  if(data.errors) setMsg(data.errors.errors[0].msg);

  if(data.status === 202) auth(data.data);
  else if(data.status === 208) setMsg('Такой email уже занят!');
}