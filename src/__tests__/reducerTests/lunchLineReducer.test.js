
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