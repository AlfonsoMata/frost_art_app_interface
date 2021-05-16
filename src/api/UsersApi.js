import {axiosBase as axios } from "./AxiosConfig";

export const CreateUser = async (Usuario) =>{
    try{
     const response = await axios.post("/Usuarios/CrearUsuario",Usuario)
     console.log("createUsuario" , response);
    }catch (error){
        console.error(error);
        return error;
    }
}

export const LoginUser = async(Usuario,Password) =>{
    try{
        console.log({Usuario});
        console.log(Password);
        const response = await axios.post("/Usuarios/LogIn?nombre=Sebastian&contra=WinterSoldier")
        console.log(response);
    }catch (error){
        console.error(error);
        return error;
    }
}