import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import axios from 'axios';
jest.mock('axios');
import lunchLine , {getRecipes} from '../../store/lunchLine';
import userReducer, { login, logOut} from '../../store/userReducer.js';
import search, {getSearchResults} from '../../store/search';
import navbar from '../../components/layouts/navBar/navbar.js';



describe('component testing', () => {
  it('it should render navbar', () => {
    expect(navbar).toBe(navbar);
  });


  it('should render LunchLine', () => {
    expect(require('../../components/login/login.js')).toBe(require('../../components/login/login.js'));
  });
});



describe('user action creators', () => {
  it('should get logOut action', () => {
    const action = logOut();
    expect(action.type).toBe('LOG_OUT');
  });
  it('should get login thunk', () => {
    const thunk = login();
    expect(typeof(thunk)).toBe('function');
  });
});
describe('userReducer testing', () => {
  it('should logout', () => {
    const action = logOut();
    const newState = userReducer(undefined, action);
    expect(newState.loggedIn).toBe(false);
    expect(Object.keys(newState.user).length).toBe(0);
  });
  it('should set logged in user', () => {
    const payload = {
      returnedUser: {
        id: 1,
        name: 'Jane Doe',
      },
      cookbook: {
        title: 'Joy of Cooking',
      },
    }
    const action = { type: 'SET_USER', payload };
    const newState = userReducer(undefined, action);
    expect(newState.loggedIn).toBe(true);
    expect(newState.user).toBe(payload.returnedUser);
    expect(newState.cookbook).toBe(payload.cookbook);
  });
});

describe('lunchline action creators', ()=>{
  it('should getRecipes thunk', ()=>{
    const thunk = getRecipes();
    expect(typeof(thunk)).toBe('function');
  });
});

describe(' lunchLine reducer testing', ()=>{


  it('Should get a recipe', () => {
    const recipe = {
      directions: ['make pie'],
      ingredients: ['apple', 'pie'],
      prepTime: 40,
      recipeName: 'apple pie',
    };
    const action = {type: 'GET_POSTS', payload: recipe};
    const newState = lunchLine(undefined, action);
    expect(newState.recipes).toBe(recipe);
  });

});

describe('lunchline async actions', () => {
  it('getRecipes thunk triggers 2 actions', () => {
    const expectedActions = [
      { type: 'GET_POSTS' },
      { type: 'MY_CREATIONS' },
    ];
    const store = mockStore();
    const data = ['apples','bananas'];
    axios.get.mockResolvedValue({ data });
    return store.dispatch(getRecipes()).then(() => {
      // return of async actions
      const actualActions = store.getActions();
      expect(actualActions.length).toBe(expectedActions.length);
      expect(actualActions[0].type).toBe('GET_POSTS');
      expect(actualActions[0].payload).toEqual(data.reverse());
      expect(actualActions[1].type).toBe('MY_CREATIONS');
      expect(actualActions[1].payload).toEqual(data);
    });
  });
});

describe('search action creators', () => {
  it('should get getSearchResults action', () => {
    const action = getSearchResults();
    expect(action.type).toBe('GET_RESULTS');
  });
});

describe('search reducer testing', () => {
  it('should get search results', () => {
    const result = {
      name: 'Resulty',
    };
    const action = {type:'GET_RESULTS', payload: result };
    const newState = search(undefined, action);
    expect(newState.results).toBe(result);

  });
});
