import {carService} from "../../services/car.service";


const Car = ({car, getCar}) => {
    const {id, model, price, year} = car;

    const deleteCar = () => {
        carService.deleteById(id)
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={() => getCar(car)}>Edit</button>
            <button onClick={() => deleteCar()}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;

