import {Outlet, NavLink} from "react-router-dom";

import css from "../Layout/Layout.module.css";


const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;