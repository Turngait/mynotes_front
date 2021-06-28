import {API_URL} from '../../../config/api';

export async function sendMessage(email) {
  return await fetch(API_URL + '/auth/recovery', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({email})
  })
  .then(res => {
    return res.json(); 
  })
  .then(data => {
    if(data.send) {
      return true;
    } else {
      return false;
    }
  });
}

export async function setNewPassword (newPass, email, hash) {
  return await fetch(API_URL + '/auth/setnewpass', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      pass: newPass,
      email,
      hash
    })
  })
  .then(res => {
    if(res.status === 204) {
      return true;
    } else {
      return false;
    }
  });
}