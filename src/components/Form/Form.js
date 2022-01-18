import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";


const Form = ({setSeeUpdateCars, car}) => {
    const {id, model, price, year} = car;
    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});

    const [formErr, setFormErr] = useState(null);
    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])
    const submit = async (objCar) => {
        try {
            if (!id) {
                await carService.create(objCar)
                setSeeUpdateCars(objCar)
                return
            }
            await carService.updateById(id, objCar)
            setSeeUpdateCars(objCar)

        } catch (error) {
            setFormErr(error.response.data);
        }
    }


    return (
        <div>
            {formErr && <h2>{formErr}</h2>}
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{!id ? 'Create' : 'Edit'}</button>
            </form>
        </div>
    )
};

export default Form;
