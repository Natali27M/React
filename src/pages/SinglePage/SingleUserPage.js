import {Outlet, useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";

import css from "./Single.module.css";
import {userService} from "../../services/user.service";


const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}));
    }, [id]);

    return (
        <div className={css.styleUser}>
            {user && (
                <div>
                    <div>
                        <h1>User</h1>
                        <div>Id : {id}</div>
                        <div>Name : {user.name}</div>
                        <div>Username : {user.username}</div>
                        <div>Email : {user.email}</div>
                        <div>Address : Street - {user.address.street}
                            <p>Suite - {user.address.suite}</p>
                            <p>City - {user.address.city}</p>
                            <p>Zipcode - {user.address.zipcode}</p>
                            <p>Geo - lat : {user.address.geo.lat} lng : {user.address.geo.lng}</p>
                        </div>
                        <div>Phone : {user.phone}</div>
                        <div>Website : {user.website}</div>
                        <Link to={'posts'} state={user}>
                            <button>Posts user</button>
                        </Link>
                    </div>
                    <div>
                        <Outlet/>
                    </div>

                </div>
            )}
        </div>
    );
};

export {SingleUserPage};