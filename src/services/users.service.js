import {axiosService1} from "./axios.service";
import {urlsJSON} from "../configs";

export const usersService = {
    getAll: () => axiosService1.get(urlsJSON.users).then(value => value.data)
};