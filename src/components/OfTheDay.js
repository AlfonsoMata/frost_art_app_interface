import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";

function OfTheDay() {
    useEffect(()=>{
    },[]);

    return(
        <div>
        <h1>Of the Day </h1>
        <ImageGrid></ImageGrid>
        </div>
    );
}

export default OfTheDay;