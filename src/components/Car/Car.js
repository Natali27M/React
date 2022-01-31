import {useDispatch} from "react-redux";

import {deleteCarThunk, addForm} from "../../store";
import css from "./Car.module.css"

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch=useDispatch()

    return (
        <div className={css.carStyle}>
            <div>
                <div>Model : {model}</div>
                <div>Price : {price}</div>
                <div>Year : {year}</div>
                <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
                <button onClick={() => dispatch(addForm({car}))}>Update</button>
            </div>
        </div>
    );
};

export {Car};
