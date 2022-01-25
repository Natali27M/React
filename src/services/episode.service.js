import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    getEpisodeByPage: (number) => axiosService.get(`${urls.episode}${number}`).then(value => value.data)
};