import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { render } from '@testing-library/react';

const API = 'http://localhost:3009/api';

export const LoginContext = React.createContext();
class LoginProvider extends React.Component {
    constructor(props){
        this.state = {
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            can: this.can,
            user:{},
        };

    }

    //RBAC
    can = (capability) => {
        return this.state.user?.capabilities?.includes(capability);
    }

    login = (username, password) =>{
        const auth = {username, password};
        axios.post(`${API}/signin`, {}, {auth})
        .then(response => this.validateToken(response?.data?.token))
        .catch(console.error);
    }

    validateToken = token => {
        try{
            const user = jwt.verify(token, process.env.REACT_APP_SECRET);
            this.setLoginState(true, token, user);
        } catch (error){
            this.setLoginState(false, null, {});
            console.error('token validation error', error);
        };
    }

    logout = () => {
        this.setLoginState(false, null, {});
    }

    setLoginState = (loggedIn, token, user) => {
        cookie.save('auth', token);
        this.setState({token, loggedIn, user});
    };

    componentDidMount(){
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');
        const token = qs.get('token') || cookieToken || null;
        this.validateToken(token);
    }

    render() {
        return (
            <LoginContext.Provider value = {this.state}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}