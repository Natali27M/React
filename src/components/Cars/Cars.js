import {useEffect, useState} from "react";

import {carService} from "../services/car.service";
import Car from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        carService.getAll().then(value => setCars([...cars]));
    },[])
    return (
        <div>
            {cars.map(value=><Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;

// import {useEffect, useState} from "react";
// import {axiosService} from "../services/axios.service";
// import {carService} from "../services/car.service";
// import Car from "../Car/Car";
//
//
// const Cars = () => {
//     const [cars, setCars] = useState([]);
//     useEffect(()=>{
//         carService.getAll().then(value => setCars([...value]));
//     },[])
//     return (
//         <div>
//             {cars.map(value=><Car key={car.id} car={value})}
//         </div>
//     );
// };
//
// export default Cars;



// import {useEffect, useState} from "react";
//
// import {carService} from "../services/car.service";
// import Car from "../Car/Car";
//
// const Cars = ({trigger}) => {
//     const [cars, setCars] = useState([]);
//
//     useEffect(() => {
//         carService.getAll().then(value => setCars([...value]))
//     }, [trigger])
//
//     return (
//         <div>
//             {cars.map(car => <Car key={car.id} car={car}/>)}
//         </div>
//     );
// };
//
// export default Cars;