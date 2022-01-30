import {useDispatch} from "react-redux";

import {createCar, deleteCarThunk, updateCar,updateCarThunk} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch=useDispatch()

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', gap: '20px'}}>
            <div>
                <div>Model : {model}</div>
                <div>Price : {price}</div>
                <div>Year : {year}</div>
                <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
                <button onClick={() => dispatch(updateCar(id))}>Update</button>
            </div>
        </div>
    );
};

export {Car};


// import {useDispatch} from "react-redux";
//
// import {deleteCarThunk,updateCarThunk} from "../../store";
//
// const Car = ({car}) => {
//     const {id, model, price, year} = car;
//     const dispatch=useDispatch()
//
//     return (
//         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', gap: '20px'}}>
//             <div>
//                 <div>Model : {model}</div>
//                 <div>Price : {price}</div>
//                 <div>Year : {year}</div>
//                 <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
//             </div>
//         </div>
//     );
// };
//
// export {Car};