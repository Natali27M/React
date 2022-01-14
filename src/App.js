// import {useState} from "react";

import './App.css';
import Users from './components/Users/Users'

const App = () => {
    // const [form, setForm] = useState({name:'',surname:''});
    //
    // const find = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.name.value);
    // };
    //
    // const formHandler = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value});
    // };

    return (
        <div>
            {/*<form onSubmit={find}>*/}
            {/*    <div><label>Name : <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label></div>*/}
            {/*    <div><label>Surname : <input type="text" name={'surname'} value={form.surname} onChange={formHandler}/></label></div>*/}
            {/*    <button>Find</button>*/}
            {/*</form>*/}
            <Users/>
        </div>
    );
};

export default App;



