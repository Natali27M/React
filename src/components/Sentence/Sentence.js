import {useDispatch} from "react-redux";

import {changeStatus, deleteText} from "../../store";
import css from "./Sentence.module.css";

const Sentence = ({sentence}) => {

    const {id, text, status} = sentence;

    const dispatch = useDispatch();



    return (
        <div>
                <input type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
                <div className={status ? css.styleCheck : ""}>{text}</div>
                <button onClick={() => dispatch(deleteText({id}))}>Delete</button>
        </div>
    );
};

export {Sentence};