import React,{useEffect,useState} from 'react';
import {GetProfile} from '../api/UsersApi';

const ProfileEdit = (props) =>{
    const [Profile,setProfile] = useState([]);
    const [Nombre, setNombre] = useState("");
    const [Foto, setFoto] = useState("");
    const [Descripcion,setDescripcion] = useState("");

    useEffect(async()=>{
       async function fetchData(){
            const ProfileRest = await GetProfile(3);
            setProfile(ProfileRest);
            setFoto(ProfileRest.fotoPerfil);
            setNombre(ProfileRest.nombre);
            setDescripcion(ProfileRest.descripcion)
            console.log(ProfileRest);
        }

        fetchData();
    },[]);

    return (
        <div>
            <form>
            <input type="Text" defaultValue={Nombre} ></input>
            <textarea defaultValue={Descripcion}></textarea>
            <img src={Foto}></img>
            </form>
       
        </div>
    )
}

export default ProfileEdit;