// import React from 'react';
// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// import { Provider } from 'react-redux';

// import LunchLine from '../../components/lunchLine/LunchLine.js';


// it('should display user name', async () => {
//   const store = mockStore({
//     user: {
//       id: 1,
//       loggedIn:true,
//       firstName:'jane_doe', 
      
//     }
//   });
//   render(<Provider store={store}><LunchLine /></Provider>)
//   await screen.findByText(/jane_doe/);
// });