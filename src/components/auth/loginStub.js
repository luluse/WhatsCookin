import React, { useState } from 'react'
import API from '../../constants/url.js';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    let url = API.BASE + API.USER;
    let userInfo = {
        email: email,
        password: password,
    }

    function onEnter(event) {
        if (event.key === 'Enter') {
            onClick()
        }
    }

    function onChange(event) {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else {
            setPassword(event.target.value);
        };
    }

    async function onClick() {

        if (email == '' || password == '') {
            return
        }

        const response = await axios.get(url)



        response.data.forEach(element => {

            if (element.email === userInfo.email && element.password === element.password) {

                window.localStorage.setItem('currentUser', JSON.stringify(element));

                history.push('/home');
            }

        });

    }


    return (
        <React.Fragment>
            <h1>Login Page</h1>
            <input type="text" name="email" placeholder='email' value={email} onKeyDown={onEnter} onChange={onChange}></input><br></br>
            <input type="password" name="password" placeholder='password' value={password} onKeyDown={onEnter} onChange={onChange}></input><br></br>
            <button onClick={onClick}>Login</button>
        </React.Fragment>
    )
}
