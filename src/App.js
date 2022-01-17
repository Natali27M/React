import {useState} from "react";

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


const App = () => {
    const [seeUpdateCars, setSeeUpdateCars] = useState(null);

    return (
        <div>
            <Form setSeeUpdateCars={setSeeUpdateCars}/>
            <Cars seeUpdateCars={seeUpdateCars}/>
        </div>
    );
};

export default App;



