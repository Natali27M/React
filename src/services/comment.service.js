import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
    getCommentByPostId: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
};
