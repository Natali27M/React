import {useDispatch} from "react-redux";

import {deleteText} from "../../store";
import css from "./Sentence.module.css"

const Sentence = ({sentence}) => {
    const {id, text} = sentence;
    const dispatch = useDispatch();
    return (
        <div className={css.styleCheck}>
            <input type="checkbox"/>
            {text}
            <button onClick={()=>dispatch(deleteText({id}))}>Delete</button>
        </div>
    );
};

export {Sentence};