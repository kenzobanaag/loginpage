import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import APICalls from '../RESTfulAPI/apiCalls'

const useStyles = makeStyles(theme => ({
    root: {
      textAlign: "left",
      marginTop: theme.spacing(3),
    },
    topMargin: {
        marginTop: theme.spacing(2),
        width: 450
    }
}));

export default function CreateAccountPage() {

    const classes = useStyles();

    const [error, setError] = React.useState(false);

    const [emailErrorText, setEmailErrorText] = React.useState("");
    const [errorText, setErrorText] = React.useState("");

    const handleOnClick = (event) => {
        event.preventDefault()
        var email = document.getElementById("new_user_email_id").value
        var password = document.getElementById("new_user_password_id").value
        var confirmPassword = document.getElementById("confirm_user_password_id").value
        if(password !== confirmPassword) {
            setErrorText("Passwords do not match")
            setError(true);
        }
        else {
            console.log(email + password + confirmPassword)
            APICalls.signup({email: email, password: password}).then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const handleOnChange = () => {
        setError(false);
    }

    return (<div>
        <Typography variant="h3" className={classes.root}>
            Create a New Account
        </Typography>
        <form className={classes.root} onSubmit={e => handleOnClick(e)}>
        {/* <div className={classes.root}> */}
            <div><TextField id="new_user_email_id"
            required variant="outlined" className={classes.topMargin} label="Email" type="email"
            helperText={emailErrorText}
            /></div>
            <div><TextField id="new_user_password_id"
            required variant="outlined" className={classes.topMargin} label="Password" type="password"
            helperText={errorText}
            error={error}
            onChange={handleOnChange}
            /></div>
            <div><TextField id="confirm_user_password_id"
            required variant="outlined" className={classes.topMargin} label="Confirm Password" type="password"
            helperText={errorText}
            error={error}
            onChange={handleOnChange}
            /></div>
            <Button type="submit"
            variant="contained" color="primary" className={classes.topMargin} >
                <Typography variant="h5">
                    Sign Up
                </Typography>
            </Button>
        </form>
        {/* </div> */}
    </div>);
}