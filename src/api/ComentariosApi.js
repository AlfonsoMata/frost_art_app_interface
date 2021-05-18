import { axiosBase as axios } from "./AxiosConfig";

export const AddComent = async (Comentario) => {
    try {
        const response = await axios.post("/Comentarios/CreateComentario", Comentario)
        console.log("addComment", response);
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const GetComments = async (id) => {
    try {
        const response = await axios.get("/Comentarios/GetComentariosPublicacion/"+id)
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const DelComments = async (id) => {
    try {
        const response = await axios.delete("/Comentarios/DesabilitarComentario/"+id)
    } catch (error) {
        console.error(error);
        return error;
    }
}