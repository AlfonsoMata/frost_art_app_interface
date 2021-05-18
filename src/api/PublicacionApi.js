import {axiosBase as axios } from "./AxiosConfig";

export const CreatePost = async (PostInfo) =>{
    try{
     const response = await axios.post("/Publicaciones/CrearPublicacion",PostInfo)
     console.log("PostCreado" , response);
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