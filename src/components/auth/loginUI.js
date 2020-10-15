import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/userReducer'

function Login({ loggedIn, login }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  function submitHandler(event) {
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
    return <h2>Already Logged In</h2>
  }
  return (
    <form onSubmit={submitHandler}>
      <input placeholder="enter name" onChange={nameChangeHandler} />
      <input type="password" placeholder="enter password" onChange={passwordChangeHandler} />
      <button>ok</button>
    </form>
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

