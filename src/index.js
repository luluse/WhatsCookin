import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
// import Auth from './components/auth/login.js';


function Main () {
  return(
  // <Auth>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
   </BrowserRouter>
  //  </Auth>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
