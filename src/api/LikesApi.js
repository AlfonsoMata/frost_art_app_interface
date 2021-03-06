import { axiosBase as axios } from "./AxiosConfig";

export const AddLike = async (Like) => {
    try {
        const f_res = await axios.get("/Likes/GetLikes/" + Like.IdPublicacion);
        var found = false;
        for (var i = 0; i < f_res.data.length; i++) {
            if (Like.IdUsuario == f_res.data[i].idUsuario) {
                found = true;
                break;
            }
        }
        if (f_res.data.length == 0 || !found) {
            console.log("Like no encontrado");
            const response = await axios.post("/Likes/CrearLike", Like);
            console.log("like agregado", response);
        }
        else {
            console.log("Like encontrado");
            const response = await axios.delete("/Likes/BorrarLike", { params: { idusuario: Like.IdUsuario, idpublicacion: Like.IdPublicacion } });
            console.log("like eliminado", response);
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetLikes = async (IdPublicacion) => {
    try {
        const f_res = await axios.get("/Likes/GetLikes/" + IdPublicacion);
        return f_res.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

