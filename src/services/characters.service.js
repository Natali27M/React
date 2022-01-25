import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const charactersService={
    getCharacterById:(number)=>axiosService.get(`${urls.character}/${number}`)
}