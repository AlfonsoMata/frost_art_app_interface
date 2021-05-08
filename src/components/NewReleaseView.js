import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";

function NewRelease() {
    useEffect(()=>{
    },[]);

    return(
        <div>
        <h1>New  </h1>
        <ImageGrid></ImageGrid>
        </div>
    );
}

export default NewRelease;