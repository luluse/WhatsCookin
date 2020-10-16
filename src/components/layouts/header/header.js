import React from 'react';
import picture from '../../../assets/header.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import '../../../App.css';

function Header() {

  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
        
      <img
        src={picture}
        width="330"
        // height="40"
        className="d-inline-block align-top"
        alt="Chef Logo"
      />
      
    </Container>
  )

}

export default Header;
