import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";

function Popular() {
    useEffect(()=>{
    },[]);

    return(
        <div>
        <h1>Popular </h1>
        <ImageGrid></ImageGrid>
        </div>
    );
}

export default Popular;