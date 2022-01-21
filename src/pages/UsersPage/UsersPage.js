import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from "./UsersPage.module.css";
import {User} from "../../components";
import {userService} from "../../services/users.service";


const UsersPage = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={css.styleUsers}>
            <div className={css.styleAllUsers}>
                <h1>All users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};