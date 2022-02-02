import {useSelector} from "react-redux";

import css from "./Header.module.css"

const Header = () => {
    const {text,completed} = useSelector(state => state["textSliceReducer"]);

    return (
        <div className={css.header}>
            <div>All:{text.length}</div>
            <div>Completed:{completed}</div>
        </div>
    );
};

export {Header};