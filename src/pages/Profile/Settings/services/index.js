import {API_URL} from '../../../../config/api';

export async function saveUserData(name, email, token, setMsg) {
  const status = await fetch(API_URL + '/auth/user/setdata', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({name, email, token})
  }).then(res => {return res.status});

  if(status === 204) setMsg('Данные изменены');
  else if(status === 403) setMsg('В доступе отказано');
  else setMsg('Проблема на сервере');

  setTimeout(() => setMsg(null), 3000);
}

export async function changePass(oldPass, newPass, token, setMsg) {
  const status = await fetch(API_URL + '/auth/user/changepassword', {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({pass: {old: oldPass, new: newPass}, token})
  }).then(res => {return res.status});

  if(status === 204) setMsg('Данные изменены');
  else if(status === 403) setMsg('Неверный пароль');
  else setMsg('Проблема на сервере');

  setTimeout(() => setMsg(null), 3000);
}