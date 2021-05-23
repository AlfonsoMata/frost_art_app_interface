import {axiosBase as axios } from "./AxiosConfig";

export const CreateFavorite = async (Favorite) =>{
    try{
        const fav_res = await axios.get('/Usuarios/GetUsuarioFavoritos/'+Favorite.IdUsuario);
        console.log('info recibida',Favorite)
        console.log('array lengt', fav_res)
        var found = false;
        for(var i=0; i<fav_res.data.length; i++)
        {
            console.log(Favorite.IdUsuario ,fav_res.data[i].idUsuario , Favorite.IdPublicacion , fav_res.data[i].idpublicacion)
            if(Favorite.IdUsuario == fav_res.data[i].idUsuario && Favorite.IdPublicacion == fav_res.data[i].idpublicacion)
            {
                found=true;
                break;
            }
         
          
        }
        if( found== true){
            console.log(found);
            console.log("Favorito  Encontrado");
            const response = await axios.delete("/Favoritos/BorrarFavorito",{params:{idusuario: Favorite.IdUsuario , idpublicacion: Favorite.IdPublicacion}});
            console.log("FavoritoEliminado",response);
        }
        else
        {
            console.log("Favorito no encontrado");
            const response = await axios.post("/Favoritos/CrearFavorito",Favorite);
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