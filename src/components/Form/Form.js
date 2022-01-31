import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCarThunk} from "../../store";
import {carValidator} from "../../validators/car.validator";
import css from "./Form.module.css"

const Form = () => {
    const {handleSubmit, register, reset, setValue, formState: {errors}} = useForm(
        {resolver: joiResolver(carValidator), mode: 'onTouched'}
    );

    const dispatch = useDispatch();

    const {form} = useSelector(state => state['carSliceReducer']);

    const {id, model, price, year} = form;

    useEffect(() => {
        if (id) {
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [id, model, price, setValue, year]);

    const submit = (car) => {
        if (id) {
            dispatch(updateCarThunk({car,id}));
        } else {
            dispatch(createCar({car}));
        }
        reset();
    }

    return (
        <div>
            <form  className={css.formStyle} onSubmit={handleSubmit(submit)}>
                <label>Model : <input type="text" {...register('model')}/></label>
                <label>Price : <input type="text" {...register('price')}/></label>
                <label>Year : <input type="text" {...register('year')}/></label>
                <button>{!id ? 'Create':'Update'}</button>
                <div>
                    {errors.model && <span>{errors.model.message}</span>}
                    {errors.price && <span>{errors.price.message}</span>}
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
            </form>
            <hr/>
        </div>
    );
};

export {Form};
