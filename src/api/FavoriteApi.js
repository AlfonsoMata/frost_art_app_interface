import {axiosBase as axios } from "./AxiosConfig";

export const CreateFavorite = async (Favorite) =>{
    try{
        const fav_res = await axios.get('/Usuarios/GetUsuarioFavoritos/'+Favorite.IdUsuario);
        var found = false;
        for(var i=0; i<fav_res.data.length;i++)
        {
            if(Favorite.IdUsuario == fav_res.data[i].idUsuario)
            found=true;
            break;
        }
        if(fav_res.data.length == 0 || !found){
            console.log("Favorito no Encontrado");
            const response = await axios.post("/Favoritos/CrearFavorito",Favorite);
            console.log("FavoritoAgregado",response);
        }
        else
        {
            console.log("Favorito encontrado");
            const response = await axios.delete("/Favoritos/BorrarFavorito",{params:{idusuario: Favorite.IdUsuario , idpublicacion: Favorite.IdPublicacion}});
            console.log("Favorito agregado", response);
        }
    }catch(error){
        console.log(error);
        return error;
    }
}

export const DeleteFavorite = async (Favorite) =>{
    try{
        const response = await axios.delete("/Favoritos/BorrarFavorito",{params:{idusuario: Favorite.IdUsuario , idpublicacion: Favorite.IdPublicacion}})
        console.log("Favorito Eliminado");
        return(response.data);
    }catch(error){
        console.log(error);
        return error;
    }
}