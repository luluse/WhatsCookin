import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { logOut } from '../../../store/userReducer';

import '../../../App.css';


function NavBar({ logOut }) {



  return (
    <Container maxWidth="sm">
        
      
      <br />
      <Link to='/home'><HomeIcon backgroundcolor="orange[500]" fontSize="large"/></Link>
      
      <Link to='/profile/'><AccountCircleIcon fontSize="large"/></Link>
  
      <Link to='/search/'><SearchIcon fontSize="large"/></Link>

      <Link to='/login'><ExitToAppIcon fontSize="large" onClick={logOut}/></Link>
      <br /><br />
    </Container>
  )

}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = {logOut};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);