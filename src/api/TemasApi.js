import {axiosBase as axios } from "./AxiosConfig";

export const GetAll = async ()=>{
    try{
        const response = await axios.get("/Temas/GetAll");
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const Create = async (Usuario) =>{
    try{
     const response = await axios.post("/Usuarios/CrearUsuario",Usuario)
     console.log("createUsuario" , response);
    }catch (error){
        console.error(error);
        return error;
    }
}