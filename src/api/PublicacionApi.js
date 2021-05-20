import {axiosBase as axios } from "./AxiosConfig";
import React, {useState} from 'react';

export const CreatePost = async (PostInfo) =>{
    try{
     const response = await axios.post("/Publicaciones/CrearPublicacion",PostInfo)
     console.log("PostCreado" , response);
     console.log ("id de la publicacion",response.data.Id)
    }catch (error){
        console.error(error);
        return error;
    }
}

export const CreateTags = async (Tags) =>{
    try{
     const response = await axios.post("/Etiquetas/CrearEtiqueta",Tags);
     console.log(response);
    }catch (error){
        console.error(error);
        return error;
    }
}



// export const GetPost = async (PostInfo) =>{
//     try{
//      const response = await axios.post("/Publicaciones/CrearPublicacion",PostInfo)
//      console.log("PostCreado" , response);
//     }catch (error){
//         console.error(error);
//         return error;
//     }
// }