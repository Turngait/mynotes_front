import {API_URL} from '../../../config/api';

export async function changeGroupName(title, id_group, type, token, setMsg, setIsEditable) {
  await fetch (API_URL + '/fin/group/edit', {
    mode: 'cors',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({title, id_group, type, token})
  }).then(res => {
    if (res.status === 204) {
      setMsg("Группа изменена");
    }
    else if (res.status === 403) setMsg("Доступ запрещен");
    else setMsg("Что то пошло не так. Попробуйте позже");

    setTimeout(() => setMsg(''), 4000);
    setIsEditable(false);
  });
}


export async function deleteGroup(id_group, token, setMsg) {
  const is_delete = await fetch(API_URL + '/fin/group/delete/' + id_group + '/' + token, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors'
  })
  .then(res => {
    if (res.status === 204) {
      return true;
    } else if (res.status === 403) {
      setMsg('Нет доступа. Попробуйте перезайти в аккаунт');
      setTimeout(() => setMsg(''), 4000);
      return false;
    } else {
      setMsg('Что то пошло не так. Попробуйте позже');
      setTimeout(() => setMsg(''), 4000);
      return false;
    }
  });

  return is_delete;
}

export async function deleteSource(id_group, token, setMsg) {
  const is_delete = await fetch(API_URL + '/fin/income/deletesource/' + id_group + '/' + token, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors'
  })
  .then(res => {
    if (res.status === 204) {
      return true;
    } else if (res.status === 403) {
      setMsg('Нет доступа. Попробуйте перезайти в аккаунт');
      setTimeout(() => setMsg(''), 4000);
      return false;
    } else {
      setMsg('Что то пошло не так. Попробуйте позже');
      setTimeout(() => setMsg(''), 4000);
      return false;
    }
  });

  return is_delete;
}