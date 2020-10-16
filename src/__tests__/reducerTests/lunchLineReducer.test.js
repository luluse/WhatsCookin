import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import axios from 'axios';
jest.mock('axios');
import lunchLine , {getRecipes} from '../../store/lunchLine';




describe('action creators', ()=>{
  it('should getRecipes thunk', ()=>{
    const thunk = getRecipes();
    expect(typeof(thunk)).toBe('function');
  });
});

describe('reducer', ()=>{


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

describe('async actions', () => {
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