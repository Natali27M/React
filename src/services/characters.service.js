import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const charactersService={
    getCharactersByPage:(number)=>axiosService.get(`${urls.character}/${number}`)
}