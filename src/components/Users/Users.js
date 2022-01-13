import {useState, useEffect} from 'react';

import User from '../User/User';
import {userService} from '../../services/user.service';
import {postService} from '../../services/post.service'
import Posts from '../Posts/Posts';
import Post from '../Post/Post';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);
    const getUserDetails = (id) => {
        userService.getById(id)
            .then(value => setUser(value));
    };
    return (
        <div className={'display justify'}>
            <div className={'border w50 display flexColumn align'}>
                <h2>Users</h2>
                <div className={'w100'}>{users.map(value => <User key={value.id} id={value.id} name={value.name}
                                                                  getUserDetails={getUserDetails}/>)}</div>
            </div>
            {user && <div className={'border w50 display align'}>
                <div className={'display flexColumn align w80'}>
                    <h2>User details</h2>
                    <h5 className={'m0'}>Id : {user?.id}</h5>
                    <h4 className={'m0'}>Name : {user?.name}</h4>
                    <h4 className={'m0'}>Username : {user?.username}</h4>
                    <h5 className={'m0'}>Email : {user?.email}</h5>
                    <h6 className={'border'}>
                        <div className={'display flexColumn align p5'}>
                            Address :
                            <p className={'m0'}>Street - {user?.address.street}</p>
                            <p className={'m0'}>Suite - {user?.address.suite}</p>
                            <p className={'m0'}>City - {user?.address.city}</p>
                            <p className={'m0'}>Zipcode - {user?.address.zipcode}</p>
                            <p className={'m0'}>Geo : lat - {user?.address.geo.lat}</p>
                            <p className={'m0'}>lng - {user?.address.geo.lng}</p>
                        </div>
                    </h6>
                    <h5 className={'m0'}>Phone : {user?.phone}</h5>
                    <h5 className={'m0'}>Website : {user?.website}</h5>
                    <h6 className={'border'}>
                        <div className={'display flexColumn align p5'}>
                            Company :
                            <p className={'m0'}>Name - {user?.company.name}</p>
                            <p className={'m0'}>CatchPhrase - {user?.company.catchPhrase}</p>
                            <p className={'m0'}>Bs - {user?.company.bs}</p>
                        </div>
                    </h6>
                </div>
                <Post/>
                {/*<button className={'styleButton'}>Get posts</button>*/}
            </div>}
        </div>
    );
};

export default Users;