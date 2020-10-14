import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import '../../../App.css';

function NavBar() {

  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
        
      
      <br />
      <Link to='/'><HomeIcon backgroundcolor="orange[500]" fontSize="large"/></Link>
      
      <Link to='/profile/'><AccountCircleIcon fontSize="large"/></Link>
  
      <Link to='/search/'><SearchIcon fontSize="large"/></Link>
      <br />
    </Container>
  )

}

export default NavBar