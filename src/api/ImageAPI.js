import {axiosBase as axios } from "./AxiosConfig";

export const GetImage = async (idpublicacion)=>{
    try{
        const response = await axios.get("/Imagenes/GetImagenPublicacion/"+idpublicacion);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const AddImage = async (Url,iduser,idPublicacion)=>{
    try{
        const TempJson = {
            Id: iduser,
            IdPublicacion: idPublicacion,
            Imagen: Url,
        }
        console.log(TempJson);
        const response = await axios.post("/Imagenes/SubirImagen",TempJson);
        console.log(response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}


