import React, { useState, useEffect } from 'react';
import './Post.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {GetProfile} from '../api/UsersApi.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingLeft: '0%',
    paddingTop: '80px',
    position: 'relative'
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
  Texto: {
    color: '#ade8f4'
  }
}));

function Comment({items}) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [perfil, setPerfil] = useState([]);

  const fetchItems = async () =>{
    const leProfile = await GetProfile(items.idUsuario);
    setPerfil(leProfile);
  }

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.large} src={perfil.fotoPerfil}></Avatar>
          </Grid>
          <Grid item xs>
            <h2 className="TextEdit">{perfil.nombre}</h2>
            <Typography className={classes.Texto}>{items.texto}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Comment;