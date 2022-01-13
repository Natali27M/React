import {useState} from "react";

import './App.css';
import Users from './components/Users/Users';
import UserDetails from "./components/UserDateils/UserDetails";
import Posts from "./components/Posts/Posts";

const App = () => {
    const [user, setUser]=useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (singleUser) => {
        setUser(singleUser)
    };

    const getUserId = (id) => {
        setUserId(id)
    };

    return (
        <div className={'display flex'}>
            <div className={'w50'}><Users getUser={getUser}/></div>
            <div className={'w50'}><UserDetails user={user} getUserId={getUserId}/></div>
            <div className={'w100 border display flexColumn align'}><Posts userId={userId}/></div>
        </div>

    );
};

export default App;


