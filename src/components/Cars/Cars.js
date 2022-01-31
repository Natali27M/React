import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import css from "./Cars.module.css";
import {getAllCars} from "../../store";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carSliceReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars());
    }, []);

    return (
        <div className={css.carsStyle}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
