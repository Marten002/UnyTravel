import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      nickname: newUser.nickname,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered');
      console.log(response);
      let tempError = response.data.error;
    })
    .catch(err => {
      console.log('err ' + err);
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(`typeOfLOG___prev: ${typeof(email)}`);
      console.log(`typeOfPASS___prev: ${typeof(password)}`);
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(`typeOfLOG___prev: ${typeof(this.state.email)}`);
      console.log(`typeOfPASS___prev: ${typeof(this.state.password)}`);
      console.log(err)
    })
}
