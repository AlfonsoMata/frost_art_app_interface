import {axiosBase as axios } from "./AxiosConfig";

export const GetAll = async ()=>{
    try{
        const response = await axios.get("/Temas/GetAll");
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

