import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css';

const Layout = () => {
    return (
        <div className={css.stylePage}>
            <div className={css.header}>
                <NavLink to={'/episode'}>Rick and Morty!</NavLink>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {Layout};