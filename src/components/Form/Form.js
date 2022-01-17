import {useForm} from "react-hook-form";
import {useState} from "react";

import {carService} from "../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/car.validator";


const Form = ({setSeeUpdateCars}) => {
    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});

    const [formErr, setFormErr] = useState({});

    const submit = (objCar) => {
        carService.create(objCar).then(value => setSeeUpdateCars(objCar)).catch(error => {
            setFormErr(error.response.data);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;
