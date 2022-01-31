import {axiosService1} from "./axios.service";
import {urlsJSON} from "../configs";

export const commentsService = {
    getAll: () => axiosService1.get(urlsJSON.comments).then(value => value.data)
};