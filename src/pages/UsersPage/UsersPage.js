import {useEffect, useState} from "react";
import {userService} from "../../services/user.service";
import User from "../../components/User/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;