import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function LogIn() {
    useEffect(()=>{
     
    },[]);

    return(
        <div>
            <div>
            <h1>Sign up Ingrese sus datos</h1>
            <label>Usuario </label>
            <input type="text"></input><br/>
            <label>Constrañes </label>
            <input type="password"></input><br/>
            <label>Email </label>
            <input type="email"></input><br/>
            <label>Fecha de nacimiento </label>
            <input type="date"></input>
            </div>
            <div>
            <h1>Log in ingrese su usuario o email y contrase;a</h1>
            <label>Usuario </label>
            <input type="text"></input><br/>
            <label>Constrañes </label>
            <input type="password"></input><br/>
            <label>Email </label>
            <input type="email"></input><br/>
            </div>

        </div>
    );
}

export default LogIn;