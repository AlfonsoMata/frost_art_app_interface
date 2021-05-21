import React, { useState, useEffect,Fragment } from 'react';
import {GetImage} from '../api/ImageAPI'
import './ImageView.css';

function ImageView(props) {
      const [UrlImagen,setUrlImagen] = useState("");
      useEffect(async()=>{
        async function fetchData(){
          const ImagenInfo = await GetImage(props.props);
          setUrlImagen(ImagenInfo[0].imagen)
          
         }
 
         fetchData();
     },[]);
    return (
        <Fragment>
           <img className="PreviewImage" src={UrlImagen}></img>
        </Fragment>
    )
}

export default ImageView;
