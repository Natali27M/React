import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";

import {createCar, updateCarThunk} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const {carId} = useSelector(state => state['carSliceReducer']);

    const submit = (car) => {
        if(carId){
            dispatch(updateCarThunk({carId,car}))
        }else {
            dispatch(createCar(car))
        }

            reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model : <input type="text" {...register('model')}/></label>
                <label>Price : <input type="text" {...register('price')}/></label>
                <label>Year : <input type="text" {...register('year')}/></label>
                <button>{carId ? 'Update':'Create'}</button>
            </form>
        </div>
    );
};

export {Form};


// import {useForm} from "react-hook-form";
// import {useDispatch} from "react-redux";
//
// import {createCar} from "../../store";
//
// const Form = () => {
//     const {handleSubmit, register, reset} = useForm();
//
//     const dispatch = useDispatch();
//
//     const submit = (data) => {
//         dispatch(createCar({data}))
//         reset();
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(submit)}>
//                 <label>Model : <input type="text" {...register('model')}/></label>
//                 <label>Price : <input type="text" {...register('price')}/></label>
//                 <label>Year : <input type="text" {...register('year')}/></label>
//                 <button>Save</button>
//             </form>
//         </div>
//     );
// };
//
// export {Form};