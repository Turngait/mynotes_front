import {API_URL} from '../../../../../../config/api';

export async function saveSource(source, token, setError) {
  const status = await fetch(API_URL + '/fin/income/addsource', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors',
    body: JSON.stringify({source, token})
  }).then(res => {return res.status});

  if(status === 204) return true;

  if(status === 403) setError('Неверный пароль');
  else setError('Проблема на сервере');
  
  return false;
}