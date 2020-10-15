import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/userReducer.js';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


function Login({ loggedIn, login }) {

    const classes = useStyles();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function submitHandler(event) {
        console.log('Im in the submit handler')
        event.preventDefault();
        login({ userName, password });
    }

    function nameChangeHandler(event) {
        setUserName(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    if (loggedIn) {
        console.log('Im logged in')
        history.push('/home');

    }

    return (
        <>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
            <div>
                <TextField required id="standard-basic" label="UserName" onChange={nameChangeHandler} />
                <br />
                <TextField required id="standard-password-input" label="Password" type="password" autoComplete="current-password" onChange={passwordChangeHandler} />
                <br /><br />
                <Button variant="contained" onClick={submitHandler} style={{ backgroundColor: 'orange' }}>
                    Login
        </Button>
            </div>
            <br />
            </form>
            <div>
                <Button variant="contained" style={{ backgroundColor: 'orange' }}>
                    signup
        </Button>
            </div>
            </>

        

        // <form onSubmit={submitHandler}>
        //     <input placeholder="enter name" onChange={nameChangeHandler} />
        //     <input type="password" placeholder="enter password" onChange={passwordChangeHandler} />
        //     <button>ok</button>
        // </form> 
    )

}

const mapStateToProps = (state) => ({
    loggedIn: state.userReducer.loggedIn,
})

const mapDispatchToProps = { login }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
