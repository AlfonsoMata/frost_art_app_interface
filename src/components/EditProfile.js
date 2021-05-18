import React,{useEffect,useState} from 'react';
import {GetProfile} from '../api/UsersApi';

const ProfileEdit = (props) =>{
    const [Profile,setProfile] = useState([]);

    useEffect(async()=>{
       async function fetchData(){
            //const ProfileRest = await GetProfile(1);
            //setProfile(ProfileRest);
            //console.log(Profile);
        }

        fetchData();
    },[]);

    return (
        <div className="BodyTemaTest">
            <form>
                <input type="Text"></input>
            </form>
        <img src="https://i.pinimg.com/564x/b9/90/07/b990071d0a6e00153a66201e16b0a678.jpg"/>
        </div>
    )
}

export default ProfileEdit;