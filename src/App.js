import React from 'react';
// import logo from './assets/whatsCookinLogo_rectangle.jpg';
import './App.css';
import Header from './components/layouts/header/header';
import LunchLine from './components/lunchLine/LunchLine';
import Profile from './components/profile/profile';
import Search from './components/search/search';
import Footer from './components/layouts/footer/footer';
import Login from './components/login/login.js';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                    <Route path='/' component={Login} exact />
                    <Route path='/home' component={LunchLine} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/search' component={Search} />
                    <Route path='/login' component={Login} exact />
                    <Route />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
