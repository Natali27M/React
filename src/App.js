// import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
//
const App = () => {
    return (
        <div>
            <Form/>
            <Cars/>
        </div>
    );
};

export default App;

// import Form from "./components/Form/Form";
// import Cars from "./components/Cars/Cars";
// import {useState} from "react";
//
// function App() {
//     const [car, setCar] = useState(null);
//
//     // const update = data =>{
//     //     setCar(data)
//     // }
//     return (
//         <>
//             <Form update={setCar}/>
//             <Cars trigger={car}/>
//         </>
//     );
// }
//
// export default App;

