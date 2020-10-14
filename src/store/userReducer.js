import axios from 'axios';

const initialState = {
  loggedIn: false,
  user: {}
};

const userReducer = (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {

  case 'SET_USER':
    return {
      loggedIn: true,
      user: payload
    }

  case 'LOG_OUT':
    return {
      loggedIn: false,
      user: {}
    }

  default: return state

  }

}

export function login(userInfo) {

  return async function (dispatch) {

    const response = await axios.get('https://swapi.dev/api/people/1/');

    const returnedUser = {
      id: userInfo.userName === 'root' ? 1 : 2,
    }

    console.log('using star wars until we integrate with back end');

    dispatch({
      type: 'SET_USER',
      payload: returnedUser,
    })

  }

}

export default userReducer;
