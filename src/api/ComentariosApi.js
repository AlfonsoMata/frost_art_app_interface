import {axiosBase as axios } from "./AxiosConfig";

export const AddComent = async (Comentario) =>{
    try{
     const response = await axios.post("/Comentarios/CreateComentario",Comentario)
     console.log("addComment" , response);
    }catch (error){
        console.error(error);
        return error;
    }
}

export const GetComments = async () =>{
    try{
     const response = await axios.get("/Comentarios/GetComentariosPublicacion/1")
     return response.data;
    }catch (error){
        console.error(error);
        return error;
    }
}