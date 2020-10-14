import React from 'react';
// import logo from './assets/whatsCookinLogo_rectangle.jpg';
// import './App.css';
import Header from './components/layouts/header/header';
import LunchLine from './components/lunchLine/LunchLine';
import Login from './components/auth/login.js';
import Profile from './components/profile/profile';
import Search from './components/search/search';
import Footer from './components/layouts/footer/footer';

import { Route, Switch } from 'react-router-dom';


function App() {
    return (
        <div className="App">

            <main>
                <Switch>
                    <Route path='/' component={Login} exact />
                    <Header />
                    <Route path='/home' component={LunchLine} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/search' component={Search} />
                    <Route />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
