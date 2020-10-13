import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../../assets/transparentBgLogo.png';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';



function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  return (
    <header>
      <img
        src={picture}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="Chef Logo"
      />
      <h1>What's cookin</h1>
      <br />
      <Link to='/'><HomeIcon backgroundColor="orange[500]"/></Link>
      
      <Link to='/profile/'><AccountCircleIcon/></Link>
  
      <Link to='/search/'><SearchIcon/></Link>
    </header>
  )
}

export default Header;