import {useEffect, useState} from "react";

import {carService} from "../services/car.service";
import Car from "../Car/Car";

const Cars = ({seeUpdateCars}) => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
    }, [cars,seeUpdateCars]);

    return (
        <div>
            {cars.map(value=><Car key={value.id} car={value}/>)}
        </div>
    );
};


export default Cars;
