import {useEffect, useState} from "react";
import {axiosService} from "../services/axios.service";
import {carService} from "../services/car.service";
import Car from "../Car/Car";


const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        carService.getAll().then(value => setCars([...value]));
    },[])
    return (
        <div>
            {cars.map(value=><Car key={car.id} car={value})}
        </div>
    );
};

export default Cars;