import userReducer, { login, logOut} from '../../store/userReducer.js';


describe('action creators', () => {
  it('should get logOut action', () => {
    const action = logOut();
    expect(action.type).toBe('LOG_OUT');
  });
  it('should get login thunk', () => {
    const thunk = login();
    expect(typeof(thunk)).toBe('function');
  });
});
describe('reducer', () => {
  it('should logout', () => {
    const action = logOut();
    const newState = userReducer(undefined, action);
    expect(newState.loggedIn).toBe(false);
    expect(Object.keys(newState.user).length).toBe(0);
  });
  it('should set logged in user', () => {
    const user = {
      id: 1,
      name: 'Jane Doe',
    };
    const action = {type:'SET_USER', payload: user};
    const newState = userReducer(undefined, action);
    console.log('NEWSTATEUSER', newState.user);
    expect(newState.loggedIn).toBe(true);
    expect(newState.user).toBe(user);
  });
});


// export function getRecipes() {

//   return async function (dispatch) {

//     const response = await axios.get(API.BASE + API.RECIPE);
//     const response2 = await axios.get(API.BASE + API.RECIPEALL + '1');

//     dispatch({
//       type: 'GET_POSTS',
//       payload: response.data.reverse(),
//     });

//     dispatch({
//       type: 'MY_CREATIONS',
//       payload: response2.data,
//     });

//   };

// }