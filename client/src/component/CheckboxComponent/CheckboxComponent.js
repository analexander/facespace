import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card, 
    CssBaseline, 
    Grid, 
    Paper,
    ThemeProvider,
    Typography,
} from '@material-ui/core';
import theme from '../../theme';
import Checkboxes from '../CheckboxComponent/Checkboxes';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
    },
    card: {
        boxShadow: '5px 5px 5px lightblue',
        height: '100%',
    },
    borderBottom: {
        borderColor: 'success.main' 
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary,
    },
    p: {
        fontSize: '30px',
    },
    font: {
        color: 'darkblue',
        fontFamily: [
          'Shrikhand',
          'cursive',
        ], 
    },
}));

export default function CheckboxComponent() {
    const classes = useStyles();
    return (   
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={10}>
                            <Card className={classes.card}> 
                                <Grid>
                                    <Paper className={classes.paper}>  
                                        <Typography gutterBottom variant="h4" component="h3" className={classes.font}>
                                            What's the mood?
                                            <p className={classes.p}>Not feeling camera ready? Log your mood the 
                                            old fashioned way!</p>
                                        </Typography>
                                        <Checkboxes/>
                                    </Paper>
                                </Grid>
                            </Card>
                    </Grid>
                </Grid>  
            </div>
        </ThemeProvider>
    )
}