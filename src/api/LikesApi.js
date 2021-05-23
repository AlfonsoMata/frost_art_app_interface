import { axiosBase as axios } from "./AxiosConfig";

export const AddLike = async (Like) => {
    try {
        const f_res = await axios.get("/Likes/GetLikes/" + Like.IdPublicacion); // get sombra :V para posts hmmmm body por que asi lo manejamos 
        var found = false;
        for(var i=0; i<f_res.data.length; i++){
            if(Like.IdUsuario == f_res.data[i].idUsuario){
                found = true;
                break;
            }
        }
        if (f_res.data.length == 0 || !found) {
            console.log("Like no encontrado");
            const response = await axios.post("/Likes/CrearLike", Like); // From Body necesita JSON
            console.log("like agregado", response);
        }
        else {
            console.log("Like encontrado");
            const response = await axios.delete("/Likes/BorrarLike", { params: { idusuario: Like.IdUsuario, idpublicacion: Like.IdPublicacion } }); // from query 
            console.log("like eliminado", response);
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}

