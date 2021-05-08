import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";

function ArtistYouFollow() {
    useEffect(()=>{
    },[]);

    return(
        <div>
        <h1>Artist you follow </h1>
        <ImageGrid></ImageGrid>
        <h1>You migth like</h1>
        </div>
    );
}

export default ArtistYouFollow;