import {useEffect, useState} from "react";

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({seeUpdateCars, getCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
    }, [seeUpdateCars]);

    return (
        <div>
            {cars.map(value=><Car key={value.id} car={value} getCar={getCar}/>)}
        </div>
    );
};


export default Cars;
