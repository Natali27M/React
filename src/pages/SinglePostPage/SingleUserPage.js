import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services/user.service";

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}));
    }, [id]);
    return (
        <div>
            {user && (
                <div>
                    <div>Id : {id}</div>
                    <div>Name : {user.name}</div>
                    <div>Username : {user.username}</div>
                </div>
            )}
        </div>
    );
};

export default SingleUserPage;