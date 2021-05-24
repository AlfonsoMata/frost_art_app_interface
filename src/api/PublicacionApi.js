import { axiosBase as axios } from "./AxiosConfig";
import React, { useState } from 'react';


export const CreatePost = async (PostInfo, UrlFoto, Tags) => {
    try {
        console.log('info que enviamos', PostInfo);
        const response = await axios.post("/Publicaciones/CrearPublicacion/", PostInfo)
        const TempJson = {
            Id: 0,
            IdPublicacion: response.data,
            Imagen: UrlFoto
        }
        console.log('temporaljson', TempJson);
        const response2 = await axios.post("/Imagenes/SubirImagen", TempJson);
        console.log("PostCreado", response);
        console.log("id de la publicacion", response.data)
        for (var i = 0; i < Tags.length; i++) {
            const TempJson = {
                Id: 0,
                Nombre: Tags[i]
            }
            const response3 = await axios.post("/Etiquetas/CrearEtiqueta", TempJson);
            const TempJson2 = {
                Id: 0,
                idPublicacion: response.data,
                idEtiqueta: response3.data
            }
            const response4 = await axios.post("/PublicacionEtiquetas/CrearPublicacionEtiqueta", TempJson2);
            console.log(response);
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const CreateTags = async (Tags) => {
    try {
        for (var i = 0; i < Tags.length; i++) {
            const TempJson = {
                Id: 0,
                Nombre: Tags[i]
            }
            const response = await axios.post("/Etiquetas/CrearEtiqueta", TempJson);
            console.log(response);
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetUserPosts = async (IdUsuario) => {
    try {
        const response = await axios.get("/Publicaciones/GetPublicacionUsuario/" + IdUsuario)
        console.log("ayuda", response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetPost = async (IdPost) => {
    try {
        const response = await axios.get("/Publicaciones/GetPublicacionId/" + IdPost)
        console.log("PostInfo", response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetPostByTheme = async (Id) => {
    try {
        const response = await axios.get("/Publicaciones/GetPublicacionTema/" + Id)
        console.log("Post por temas: ", response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetPostThemeLimit = async (idTema) => {
    try {
        const response = await axios.get("/Publicaciones/GetPublicacionTemaLimite9/" + idTema)
        console.log("Temas Data", response.data);
        return response.data


    } catch (error) {
        console.error(error);
        return error;
    }
}

export const UpdatePost = async (PostInfo, UrlFoto, Tags) => {
    try {
        const response = await axios.put("/Publicaciones/ActualizarPublicacion/" + PostInfo.Id, PostInfo)
        const TempJson = {
            Id: 0,
            IdPublicacion: PostInfo.Id,
            Imagen: UrlFoto
        }
        const getFoto = await axios.get("/Imagenes/GetImagenPublicacion/"+PostInfo.Id)
        const imgid= getFoto.data[0].id
        const responseDelete = await axios.delete("/Imagenes/BorrarImagen/", { params: { id:imgid } })
        const response2 = await axios.post("/Imagenes/SubirImagen", TempJson);
        const PostEtiquetas = await axios.get("/PublicacionEtiquetas/GetPublicacionPublicacionEtiquetas/"+PostInfo.Id);
        console.log("PostEtiquetas",PostEtiquetas.data);
        for(var i=0; i<PostEtiquetas.data.length; i++)
        {
            const tagsDelete = await axios.delete("/PublicacionEtiquetas/BorrarPublicacionEtiqueta/",{ params: { id: PostEtiquetas.data[i].id } });
        }
        console.log("id de la publicacion", response.data)
        for (var i = 0; i < Tags.length; i++) {
            const TempJson = {
                Id: 0,
                Nombre: Tags[i]
            }
            const response3 = await axios.post("/Etiquetas/CrearEtiqueta", TempJson);
            const TempJson2 = {
                Id: 0,
                idPublicacion: PostInfo.Id,
                idEtiqueta: response3.data
            }
            console.log('what tha fuck',response3.data)
            const response4 = await axios.post("/PublicacionEtiquetas/CrearPublicacionEtiqueta", TempJson2);
            console.log(response);
        }
    } catch (error) {
        console.error(error);
        return error;
    }

}


export const GetSpotligth = async (IdUsuario) => {
    try {
        const response = await axios.get("/Publicaciones/GetPublicacionUsuarioPreview/" + IdUsuario)
        console.log("Spotligth", response);
        return response.data
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetPostByTag = async (Id) => {
    try {
        const response = await axios.get("/Publicaciones/GetPublicacionEtiqueta/" + Id)
        console.log("Post por tags: ", response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetHomePost = async() =>{
    try{
        const response = await axios.get("/Publicaciones/GetPublicacionesHome")
        console.log("post",response.data);
        return response.data
    }catch(error){
        console.error(error);
        return error
    }
}

export const GetPublicacionesNuevas = async ()=>{
    try {
        const response = await axios.get("/Publicaciones/GetPublicacionesNuevas")
        console.log("postNuevas",response.data)
        return response.data
    }catch(error){
        console.error(error);
        return error
    }
}

export const GetMostLikedPosts = async ()=>{
    try{
        const response = await axios.get('/Likes/GetPublicacionesMasLikes')
        return response.data
    }catch(error)
    {
        console.error(error)
        return error
    }
}

export const GetAllEtiquetas = async () =>{
    try{
        const response = await axios.get('Etiquetas/GetAll')
        console.log("Todas las etiquetas",response.data)
        return response.data;
    }catch(error)
    {
        console.error(error);
        return error;
    }
}

export const DeletePost = async(idPublicacion) =>{
    try{
        const response = await axios.delete("/Publicaciones/DesabilitarPublicaciones/"+idPublicacion)
        console.log("Resultado",response.data)
        const PostEtiquetas = await axios.get("/PublicacionEtiquetas/GetPublicacionPublicacionEtiquetas/"+idPublicacion);
        console.log("PostEtiquetas",PostEtiquetas.data);
        for(var i=0; i<PostEtiquetas.data.length; i++)
        {
            const tagsDelete = await axios.delete("/PublicacionEtiquetas/BorrarPublicacionEtiqueta/",{ params: { id: PostEtiquetas.data[i].id } });
        }
        return response.data;
    }catch(error)
    {
        console.error(error);
        return error
    }
}