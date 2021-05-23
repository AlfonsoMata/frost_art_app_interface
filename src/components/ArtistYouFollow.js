import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";
import {GetFollowers} from "../api/UsersApi";
import FollowerPosts from "./ninePostFollower";
import './ArtistFollow.css';
import Cookies from 'js-cookie';

function ArtistYouFollow() {

    const [ProfileUser,SetProfileUser]= useState(JSON.parse(Cookies.get('userInfo')));

    const [Followers,SetFollowers]=useState([])

    useEffect(async () => {
        async function fetchData() {
        const data = await GetFollowers(ProfileUser.data[0].id);
        console.log("data recibida", data);
        SetFollowers(data);
        }
        fetchData();
    }, []);

    return(
        <div className="ArtistBody">
        <h1>Artist you follow </h1>
        {Followers.map((item, index) => (
                    <div key={index}>{Followers.nombreUsuario}
                     <h1>{Followers[index].nombre}</h1>
                    <FollowerPosts props={Followers[index].id}></FollowerPosts>
                  
                    </div>
                ))}
        </div>
    );
}

export default ArtistYouFollow;