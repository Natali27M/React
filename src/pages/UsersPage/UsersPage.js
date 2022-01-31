import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllUsers} from "../../store";
import {User} from "../../components";

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state['userSliceReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};