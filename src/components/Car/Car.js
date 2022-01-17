import {carService} from "../services/car.service";


const Car = ({car,updateCar}) => {
    const {id,model,price,year} = car;
    return (
        <div>
            <div>id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=> carService.deleteById(id)}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;

