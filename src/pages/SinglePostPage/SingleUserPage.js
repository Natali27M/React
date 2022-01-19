import {Outlet, useParams,Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/user.service";
import css from "./Single.module.css";
import {postService} from "../../services/post.service";
import SingleUserPostsPage from "./SingleUserPostsPage";


const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}));
    }, [id]);

    return (
        <div>
            {user && (
                <div className={css.userStyle}>
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
                        <button onClick={()=>postService.getAll().then(SingleUserPostsPage)}>Posts user</button>
                    </div>
                    <div>
                        <Outlet/>
                    </div>

                </div>
            )}
        </div>
    );
};

export default SingleUserPage;