import {API_URL} from '../../../../../../config/api';

export async function saveSource(source, token, setIncomes, setError) {
  const status = await fetch(API_URL + '/fin/income/addsource', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors',
    body: JSON.stringify({source, token})
  }).then(async res => {
    if(res.status === 201) {
      const data = await res.json();
      const {incomes} = data.data;
      setIncomes(incomes);
    }
    return res.status
  });

  if(status === 201) return true;

  if(status === 403) setError('Заголовок должен быть более 3х символов.');
  else setError('Проблема на сервере');
  
  return false;
}