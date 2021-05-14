import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import FotoLog from './FrostWolfWeb.png'
import {useSpring,animated} from 'react-spring';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

function LogIn() {
    useEffect(()=>{
     
    },[]);

    const [SingUpFormStatus, setSingUpStatus] = useState(false);


    function registerClicked(){  setSingUpStatus(true)}
    function loginClicked(){  setSingUpStatus(false)}

    const loginProps = useSpring({
        left: SingUpFormStatus ? 530 : 0,
        opacity: SingUpFormStatus ? 0 : 1

    })
    const registerProps = useSpring({
        left: SingUpFormStatus ? 0 : 930,
        opacity: SingUpFormStatus ? 1 : 0

    })


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
         paddingRight:'5%'
          
        },
      }));
      const classes = useStyles();
    return(
        <div className="LoginBody">
            <div className="container">
            <div className={classes.root}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                          <img id="LogInPicture" src={FotoLog} />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <div className="nav-buttons">
                    <button id="loginBtn" onClick={loginClicked}  className="active">LogIn</button>
                    <button id="registerBtn" onClick={registerClicked} className=''>Register</button>
                </div>
                <div className ='form-group'>
                    <animated.form action='' id='loginForm' style={loginProps}>
                    <form id ='loginform'>
                    <h2>Log in start sharing your art</h2>
                        <label>User </label>
                        <input type="text"></input><br/>
                        <label>Password </label>
                        <input type="password"></input><br/>
                        <label>Email </label>
                        <input type="email"></input><br/>
                        <input type="submit" className='submit'></input>
                    </form>
                    </animated.form>
                    <animated.form action='' id='registerForm' style={registerProps}>
                    <form id ='registerform'>
                        <h2>Sign up Ingrese sus datos</h2>
                        <label>User </label>
                        <input type="text"></input><br/>
                        <label>Password </label>
                        <input type="password"></input><br/>
                        <label>Email </label>
                        <input type="email"></input><br/>
                        <label>Fecha de nacimiento </label>
                        <input type="date"></input>
                        <input type="submit" className='submit'></input><br/>
                    </form>
                    </animated.form>
                </div>
                <div id='forgot-panel'>
                   Forgot your account
                </div>
                          </Grid>
                        </Grid>
                      </div>
      
            </div>

        </div>
    );
}

export default LogIn;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingRight: '35%'
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

function IntentoGridFoto()
{
    const classes = useStyles();
      return (
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <img src="https://i.pinimg.com/564x/7b/4f/69/7b4f69da187ead6641a8a50d283760e7.jpg" />
          </Grid>
          <Grid item xs={12} sm={6}>
          <img src="https://i.pinimg.com/564x/7b/4f/69/7b4f69da187ead6641a8a50d283760e7.jpg" />
          </Grid>
        </Grid>
      </div>
      );

}