import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import firebase from './FireBase';
import {UpdateProfile} from '../api/UsersApi';
import './EditProfile.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const ProfileEdit = (props) => {

   
    useEffect(async () => {
     
        async function fetchData() {
            
        }
        fetchData();

    }, []);
    const [userId, setUserId] = useState([]);
    const [userName, setUserName] = useState([]);
    const [ProfileUser,SetProfileUser]= useState(JSON.parse(Cookies.get('userInfo')));
    const [uploadValue, SetUploadValue] = useState(0);
    const [errorMesage, SetUpErrorMesage] = useState("");
  
   
    const [NewInfoProfile,SetNewInfoProfile]=useState({
        id:ProfileUser.data[0].id,
        Nombre:ProfileUser.data[0].nombre,
        Contra:ProfileUser.data[0].contra,
        Email: ProfileUser.data[0].email,
        Descripcion: ProfileUser.data[0].descripcion,
        fechaNacimiento:ProfileUser.data[0].fechaNacimiento,
        fotoPerfil: "cambiame"
    })

    const [picture, SetUpPicture] = useState(ProfileUser.data[0].fotoPerfil);

    const handleOnChange = (e) => {
      const file = e.target.files[0]
      const storageRef = firebase.storage().ref(`pictures/${file.name}`)
      const task = storageRef.put(file)
  
      task.on('state_changed', (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        SetUploadValue(percentage)
      }, (error) => {
        SetUpErrorMesage(`Ah ocurrido un error${error.message}`);
      }, async () => {
        SetUpErrorMesage("archivoSubido");
        SetUpPicture(await task.snapshot.ref.getDownloadURL())
      })
    }

    const PostSubmit = async (e) => {
        e.preventDefault();
        console.log(NewInfoProfile);
        await UpdateProfile(NewInfoProfile,ProfileUser.data[0].id,picture);
     LogOut();
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetNewInfoProfile({
          ...NewInfoProfile,
          [name]: value,
    
        });
      };

      function LogOut() {
        Cookies.remove("infoUser");
        Cookies.remove("logged");
        window.location.href = "/Login";
      }
   

    return (
        <div className="EditBody">
            <form onSubmit={PostSubmit}>
                <h2 id="PageName">Foto de Perfil</h2>
                <img className="EditFoto" src={picture}></img>
                <progress className="PictureProgress" value={uploadValue} max='100'></progress>
                <input type='file' name="PhotoSelector" onChange={handleOnChange.bind(this)} />
                {errorMesage}
                <h2 id="PageName">Nombre de usuario</h2>
                <input type="Text" name="Nombre"  onChange={handleInputChange} value={NewInfoProfile.Nombre} defaultValue={ProfileUser.data[0].nombre} required ></input>
                <h2 id="PageName">Contra</h2>
                <input type="Password" name="Contra"  onChange={handleInputChange} value={NewInfoProfile.Contra} defaultValue={ProfileUser.data[0].contra} required></input>
                <h2 id="PageName">Email</h2>
                <input type="Email" name ="Email" onChange={handleInputChange} value={NewInfoProfile.Email} defaultValue={ProfileUser.data[0].email} required ></input>
                <h2 id="PageName">Descripcion</h2>
                <textarea name="Descripcion" onChange={handleInputChange} value={NewInfoProfile.Descripcion} defaultValue={ProfileUser.data[0].descripcion}></textarea><br></br>
                <input type="submit" value="EditarPerfil"></input>
            </form>

        </div>
    )
}

export default ProfileEdit;