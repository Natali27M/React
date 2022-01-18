import {useState} from "react";

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


const App = () => {
    const [seeUpdateCars, setSeeUpdateCars] = useState(null);
    const [car, setCar]=useState({});
    return (
        <div>
            <Form setSeeUpdateCars={setSeeUpdateCars} car={car}/>
            <Cars seeUpdateCars={seeUpdateCars} getCar={setCar}/>
        </div>
    );
};

export default App;



