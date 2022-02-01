import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useRef} from "react";

import {addText} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submit=(data)=>{
        dispatch(addText({data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('text')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {Form};
