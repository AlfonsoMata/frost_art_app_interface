import {axiosBase as axios } from "./AxiosConfig";
import React, {useState} from 'react';

export const CreatePost = async (PostInfo,UrlFoto) =>{
    try{
     console.log('info que enviamos',PostInfo);
     const response = await axios.post("/Publicaciones/CrearPublicacion/",PostInfo)
     const TempJson = {
        Id: 0,
        IdPublicacion: response.data,
        Imagen: UrlFoto,
    }
     console.log('temporaljson',TempJson);
     const response2 = await axios.post("/Imagenes/SubirImagen",TempJson);
     console.log("PostCreado" , response);
     console.log ("id de la publicacion",response.data)
    }catch (error){
        console.error(error);
        return error;
    }
}

export const CreateTags = async (Tags) =>{
    try{
        for (var i = 0; i < Tags.length; i++) {
            const TempJson = {
              Id: 0,
              Nombre: Tags[i]
            }
            const response = await axios.post("/Etiquetas/CrearEtiqueta",TempJson);
            console.log(response);
        }
    }catch (error){
        console.error(error);
        return error;
    }
}

export const GetUserPosts = async (IdUsuario)=>{
    try{
        const response = await axios.get("/Publicaciones/GetPublicacionUsuario/"+IdUsuario)
        console.log("ayuda",response.data);
        return response.data
    } catch (error){
        console.error(error);
        return error;
    }
}

export const GetPost = async (IdPost)=>{
    try{
        const response = await axios.get("/Publicaciones/GetPublicacionId/"+IdPost)
        console.log("PostInfo",response.data);
        return response.data
    } catch (error){
        console.error(error);
        return error;
    }
}

export const GetPostByTheme = async (Id) =>{
    try{
        const response = await axios.get("/Publicaciones/GetPublicacionTema/"+Id)
        console.log("Post por temas: ",response.data);
        return response.data
    } catch (error){
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