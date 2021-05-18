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



export const LoginUser = async(nombre,contra) =>{
    try{
        console.log({nombre});
        console.log(contra);
        const response = await axios.post(`/Usuarios/LogIn`,nombre,{params: {nombre,contra}})
        //const response = await axios.post("/Usuarios/LogIn?nombre=Sebastian&contra=WinterSoldier")
        //console.log(response);
        console.log(response);
       
    }catch (error){
        console.error(error);
        return error;
    }
}

export const GetFavPost = async(UserId) =>{
    try{
        const response = await axios.get('/Usuarios/GetUsuarioFavoritos/'+UserId)
        console.log(response);
        return(response.data);
    }catch(error){
        console.error(error);
        return error;
    }
}

export const GetProfile = async (UserId) =>{
    try{
        const response = await axios.get('/Usuarios/GetUsuarioPerfil/'+UserId)
        console.log(response);
        //return(response.data);
    }catch(error){
        console.error(error);
        return error;
    }
}