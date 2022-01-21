import {Link} from "react-router-dom";

import css from "./User.module.css"

const User = ({user}) => {
    const {id,name}=user

    return (
        <div className={css.styleUser}>
            <Link  to={id.toString()}>
                <div>{id} ) {name}</div>
            </Link>
            <Link to={`${id.toString()}/albums`} state={user}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export {User};