import {axiosService1} from "./axios.service";
import {urlsJSON} from "../configs";

export const postsService = {
    getAll: () => axiosService1.get(urlsJSON.posts).then(value => value.data)
};