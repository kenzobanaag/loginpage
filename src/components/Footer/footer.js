import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary.light,
      minHeight: 100,
      marginTop: 200,
    },
}));

export default function Footer() {

    const classes = useStyles();

    return (
        <div >
            <Paper className={classes.root}>
                Open Source Project
            </Paper>
        </div>
    );
}