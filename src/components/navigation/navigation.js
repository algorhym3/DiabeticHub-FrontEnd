import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
      marginLeft: '10px'
  },
  buttonToRight: {
      marginLeft: 'auto'
  }
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
            <Typography variant="h6">
                Diabetic Hub
            </Typography>
          <Button variant="text" className= {classes.button} color="inherit">Add Reading</Button>
          <Button variant="text" className= {classes.button}  color="inherit">Reading History</Button>

          <Button className={classes.buttonToRight} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}