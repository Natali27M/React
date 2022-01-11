import {useEffect, useState} from "react";

import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    },[])
    return (
        <div className={'style w50'}>
            <h2>Users</h2>
            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username}
                                      email={value.email}
                                      street={value.address.street} suite={value.address.suite}
                                      city={value.address.city} zipcode={value.address.zipcode}
                                      lat={value.address.geo.lat} lng={value.address.geo.lng} phone={value.phone}
                                      website={value.website}
                                      companyName={value.company.name}/>)}
        </div>
    );
};

export default Users;