import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import './Login.css';
import FotoLog from './FrostWolfWeb.png';
import { useSpring, animated } from 'react-spring';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { CreateUser } from '../api/UsersApi.js';
import { LoginUser } from '../api/UsersApi.js';
import { useHistory } from "react-router-dom";

function LogIn(props) {
  useEffect(() => {

  }, []);

  const history = useHistory();
  const [cookies, setCookie] = useCookies(['userInfo']);

  const [User, SetUser] = useState({
    id: 0,
    Nombre: "",
    Contra: "",
    Email: "",
    Descripcion: "Handsome",
    FechaNacimiento: "2019-01-06",
    FotoPerfil: "https://firebasestorage.googleapis.com/v0/b/frostarttesta.appspot.com/o/pictures%2FDefaultProfilePicture.png?alt=media&token=6215b450-9c4c-4a49-a9ca-6acb3582228a"
  });

  const [UserTry, SetUserTry] = useState({
    nombre: "",
    contra: ""
  });

  const UserSubmit = async (e) => {
    e.preventDefault();
    console.log(User);
    await CreateUser(User);
  };

  const LogInSubmit = async (e) => {
    e.preventDefault();
    //console.log(UserTry);
    //LoginUser(UserTry.nombre,UserTry.contra);
    const LoginRes = await LoginUser(UserTry.nombre, UserTry.contra);
    if (!LoginRes.data[0])
      alert("No");
    else {
      setCookie('userInfo', LoginRes, { path: '/' });
      setCookie('logged', true, { path: '/' });
      history.push("/Home");
    }



    //const UserRes = await LoginUser(UserTry.nombre,UserTry.contra);
    //SetUser(UserRes);
    //console.log(User);
    //console.log(User.Nombre);
  };

  const [SingUpFormStatus, setSingUpStatus] = useState(false);


  function registerClicked() { setSingUpStatus(true) };
  function loginClicked() { setSingUpStatus(false) };

  const loginProps = useSpring({
    left: SingUpFormStatus ? 530 : 0,
    opacity: SingUpFormStatus ? 0 : 1

  });
  const registerProps = useSpring({
    left: SingUpFormStatus ? 0 : 930,
    opacity: SingUpFormStatus ? 1 : 0

  });


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingRight: '5%'

    },
  }));
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetUser({
      ...User,
      [name]: value,

    });
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    SetUserTry({
      ...UserTry,
      [name]: value,

    });
  };
  return (
    <div className="LoginBody">
      <div className="container">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img id="LogInPicture" src={FotoLog} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="nav-buttons">
                <button id="loginBtn" onClick={loginClicked} className="active">LogIn</button>
                <button id="registerBtn" onClick={registerClicked} className=''>Register</button>
              </div>
              <div className='form-group'>
                <animated.form action='' id='loginForm' onSubmit={LogInSubmit} style={loginProps}>
                  <div id='loginform'>
                    <h2>Log in start sharing your art</h2>
                    <label>User </label>
                    <input name="nombre" onChange={handleInputChange2} value={UserTry.nombre} type="text"></input><br />
                    <label>Password </label>
                    <input name="contra" onChange={handleInputChange2} value={UserTry.contra} type="password"></input><br />
                    <input type="submit" className='submit'></input>
                  </div>
                </animated.form>
                <animated.form action='' id='registerForm' onSubmit={UserSubmit} style={registerProps}>
                  <div id='registerform'>
                    <h2>Sign up Ingrese sus datos</h2>
                    <label>User </label>
                    <input name="Nombre" type="text" onChange={handleInputChange} value={User.Nombre}></input><br />
                    <label>Password </label>
                    <input name="Contra" type="password" onChange={handleInputChange} value={User.Password} ></input><br />
                    <label>Email </label>
                    <input name="Email" type="email" onChange={handleInputChange} value={User.Email}></input><br />
                    <label>Fecha de nacimiento </label>
                    <input type="date"></input>
                    <input type="submit" className='submit'></input><br />
                  </div>
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

function IntentoGridFoto() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img src="https://i.pinimg.com/564x/7b/4f/69/7b4f69da187ead6641a8a50d283760e7.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="https://i.pinimg.com/564x/7b/4f/69/7b4f69da187ead6641a8a50d283760e7.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" />
        </Grid>
      </Grid>
    </div>
  );

}