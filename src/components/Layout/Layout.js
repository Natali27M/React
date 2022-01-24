import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/episode'}>Rick and Morty!</NavLink>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {Layout};