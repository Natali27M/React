import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    getEpisodeByPage: (number) => axiosService.get(`${urls.episode}${number}`).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.episodes}/${id}`).then(value => value.data)
};