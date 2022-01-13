import {useState, useEffect} from 'react';

import User from '../User/User';
import {userService} from '../../services/user.service';

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);


    return (
        <div className={'display justify'}>
            <div className={'border w100 display flexColumn align'}>
                <h2>Users</h2>
                <div className={'w100'}>{users.map(value => <User key={value.id} user={value}
                                                                  getUser={getUser}/>)}</div>
            </div>

        </div>
    );
};

export default Users;