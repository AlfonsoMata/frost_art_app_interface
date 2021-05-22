import { axiosBase as axios } from "./AxiosConfig";

export const CreateUser = async (Usuario) => {
    try {
        const response = await axios.post("/Usuarios/CrearUsuario", Usuario)
        console.log("createUsuario", response);
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const LoginUser = async (nombre, contra) => {

    try {
        console.log({ nombre });
        console.log(contra);
        const response = await axios.post(`/Usuarios/LogIn`, nombre, { params: { nombre, contra } })
        //const response = await axios.post("/Usuarios/LogIn?nombre=Sebastian&contra=WinterSoldier")
        //console.log(response);
        console.log("info chafa: " + response.data);
        if (response.data.length > 0) {
            const AutoMe = {
                IdUsuario: response.data[0].id,
                IdUsuarioSeguido: response.data[0].id,
            }

            const response2 = await axios.post(`/UsuariosSeguidos/CreateUsuarioSeguido`, AutoMe)
        }
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetFavPost = async (UserId) => {
    try {
        const response = await axios.get('/Usuarios/GetUsuarioFavoritos/' + UserId)
        console.log(response);
        return (response.data);
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetProfile = async (UserId) => {
    try {
        const response = await axios.get('/Usuarios/GetUsuarioPerfil/' + UserId)
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const UpdateProfile = async (NewInfo,Id,Urlvideo)=>{
    try{
        console.log('info que llego',NewInfo);
        const InfoWithURl ={
            id:Id,
            nombre: NewInfo.Nombre,
            contra: NewInfo.Contra,
            email: NewInfo.Email,
            descripcion: NewInfo.Descripcion,
            fechaNacimiento: NewInfo.fechaNacimiento,
            fotoPerfil:Urlvideo
        }
        const response = await axios.put('/Usuarios/ActualizarUsuario/'+Id,InfoWithURl)
        console.log('info a enviar',response);
        //console.log(response);
    } catch (error){
        console.error(error);
        return error;
    }
}