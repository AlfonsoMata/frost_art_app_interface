import React, {useState,useEffect} from 'react';
import './Post.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      paddingLeft: '10%',
      paddingTop: '80px'
    },
    paper: {
      maxWidth: 900,
      margin: `${theme.spacing()}px auto`,
      padding: theme.spacing(1),
      paddingRight: '70px',
     
      backgroundColor: '#071e26'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },
    Texto:{
        color: '#ade8f4'
    }
  }));

function Comment( ) {
    useEffect(()=>{
    },[]);

    const classes = useStyles();

    return(

        <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar className={classes.large} src="https://i.pinimg.com/564x/c8/58/ad/c858ad665a8ceceaafe22d58690fce1e.jpg"></Avatar>
            </Grid>
            <Grid item xs>
                <h2 className="TextEdit">Sebastian</h2>
              <Typography className={classes.Texto}>Comentario de Sebastian Stan</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>

        // <div className ="CommentDiv">
        //     <div className="CommentBanner">
        //         <img  src="https://i.pinimg.com/564x/c8/58/ad/c858ad665a8ceceaafe22d58690fce1e.jpg"/>
        //         <h2 className="TextEdit">Sebastian Stan</h2>
        //         <h2 >hola soy un comentario de sebastian stan</h2>
        //     </div>
        // </div>
    );
}

export default Comment;