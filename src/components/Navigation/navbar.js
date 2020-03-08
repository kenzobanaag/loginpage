import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import APICalls from '../RESTfulAPI/apiCalls';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  spacing: {
    marginRight: theme.spacing(5),
  },
  textfield: {
    color: "white",
    marginRight: theme.spacing(5),
  },
  input: {
    color: "white"
  },
  paperBg: {
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    minHeight: 90,
  }, 
  gradient: {
    minHeight: 90,
    background: 'linear-gradient(45deg, #644e5b 30%, #314455 90%)',
    textAlign: "center"
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();

  const [error, setError] = React.useState(false);

  const [errorText, setErrorText] = React.useState("");

  const [token, setToken] = React.useState("");

  const handleOnClick = (event) => {
    event.preventDefault();
    var email = document.getElementById("user_email_id").value
    var password = document.getElementById("user_password_id").value
    console.log("Log in clicked, logging in with: \n" + email +"\n" + password);

    APICalls.login({email: email, password: password}).then(response => {
        console.log(response.data);
        console.log(response.data.data.token);
        setError(false);
        setErrorText("");
        APICalls.test(response.data.data.token).then(response2 => {
          console.log(response2.data);
        }).catch(error => {
          console.log(error)
        });
    }).catch(error => {
        console.log(error);
        setError(true);
        setErrorText("Password and username do not match");
    })
  }

  const handleChange = () => {
    setError(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.gradient}> 
      {/* className={classes.gradient} */}
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.textfield} >
            Guerilla Surveys
          </Typography>
          <form onSubmit={e => handleOnClick(e)}>
          <TextField 
          required
          label="Email"
          type="text"
          color="secondary"
          id="user_email_id"
          error={error}
          helperText={errorText}
          className={classes.textfield}
          onChange={handleChange}
          InputProps= {{
            className: classes.input
          }}
          />
          <TextField 
          required
          label="Password"
          type="password"
          color="secondary"
          id="user_password_id"
          error={error}
          helperText={errorText}
          onChange={handleChange}
          className={classes.textfield}
          InputProps= {{
            className: classes.input
          }}
          />
          <Button variant="outlined" color="secondary" type="submit">LOGIN</Button>
          </form>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}