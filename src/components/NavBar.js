import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Icon from '../images/career.png';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img: {
    height: 50,
    width: 50,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Box display='flex' flexGrow={1}>
            <img src={Icon} alt="Logo" className={classes.img}/>
        </Box>
          <Link to='/' style={{ color: '#FFF' }}><Button color="inherit" >Home</Button></Link>
          {/* <Button color="inherit" >Home</Button> */}
          <Link to='/qualification' style={{ color: '#FFF' }}><Button color="inherit">Qualification</Button></Link>
          <Link to='/experience' style={{ color: '#FFF' }}><Button color="inherit">Experience</Button></Link>
          <Link to='/contact' style={{ color: '#FFF' }}><Button color="inherit">Contact Me</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}