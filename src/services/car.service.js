import {axiosService} from "./axios.service";
import {urlsCars} from "../configs";

export const carService = {
    getAll: ()=> axiosService.get(urlsCars.cars).then(value => value.data),
    create: (car) => axiosService.post(urlsCars.cars,car).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urlsCars.cars}/${id}`),
    updateById: (id, car) => axiosService.patch(`${urlsCars.cars}/${id}`, car).then(value => value.data)
};