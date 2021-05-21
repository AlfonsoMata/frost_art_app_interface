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
        const response = await axios.post(`/Usuarios/LogIn`,nombre,{params: {nombre,contra}})
        //const response = await axios.post("/Usuarios/LogIn?nombre=Sebastian&contra=WinterSoldier")
        //console.log(response);
        console.log(response.data);
        const AutoMe = {
            IdUsuario: response.data[0].id,
            IdUsuarioSeguido:  response.data[0].id,
        }

        const response2 = await axios.post(`/UsuariosSeguidos/CreateUsuarioSeguido`,AutoMe)

       
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
        return response.data;
    }catch(error){
        console.error(error);
        return error;
    }
}