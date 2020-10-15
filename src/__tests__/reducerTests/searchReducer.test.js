import search, {getSearchResults} from '../../store/search';


describe('action creators', () => {
  it('should get getSearchResults action', () => {
    const action = getSearchResults();
    expect(action.type).toBe('GET_RESULTS');
  });
});

describe('reducer', () => {
  it('should get search results', () => {
    const result = {
      name: 'Resulty',
    };
    const action = {type:'GET_RESULTS', payload: result };
    const newState = search(undefined, action);
    expect(newState.results).toBe(result);

  });
});
