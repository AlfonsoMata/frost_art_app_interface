import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";

function TagView() {
    useEffect(()=>{
    },[]);

   

    return(
        <div>
        <h1>Tags</h1>
        <ImageGrid></ImageGrid>
        </div>
    );
}

export default TagView;