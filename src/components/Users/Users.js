import {useEffect, useState} from "react";

import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, []);

    const [form, setForm] = useState({name:'',surname:''});

    const find = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
    };

    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <div>
                <form onSubmit={find}>
                    <div><label>Name : <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label></div>
                    <div><label>Surname : <input type="text" name={'surname'} value={form.surname} onChange={formHandler}/></label></div>
                    <button>Find</button>
                </form>
            </div>
                {users.map(value => <User key={value.id} name={value.name}/>)}

        </div>
    );
};

export default Users;