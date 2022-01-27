import {useState} from "react";
// import {useReducer} from "react";

// const reducer=(state,action)=>{
//     console.log(action)
// }
const Forms = () => {
    // const [state, dispatch] = useReducer(reducer, {cat:''});

    const [formState, setFormState] = useState({cat: ''});

    const submit=(e)=>{
        e.preventDefault();
        console.log(e.target.cat.value)
    }

    const onChange=(e)=>{
        setFormState({...formState, [e.target.name]: e.target.value});

                    // return {...state, cat: e.target.value};
    }
// console.log(state)
    return (
        <div>
            <form onSubmit={submit}>
                <label>Add Cat : <input type="text" name={'cat'} value={formState.cat} onChange={onChange}/></label>
                <button>Save</button>
                {/*<button onClick={() => dispatch({type: 'cat'})}>Save</button>*/}
            </form>
        </div>
    );
};

export default Forms;

// import {useReducer} from "react";
//
// const reducer = (state, action) => {
//
//     switch (action.type) {
//         case 'inc1':
//             return {...state, count1: state.count1 + 1};
//         case 'dec1':
//             return {...state, count1: state.count1 - 1};
//         case 'reset1':
//             return {...state, count1: 0};
//
//         default:
//             throw new Error('Error!!!');
//     }
// };
//
// const App = () => {
//     const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});
//
//     return (
//         <div>
//             <div>{state.count1}</div>
//             <button onClick={() => dispatch({type: 'inc1'})}>Inc</button>
//             <button onClick={() => dispatch({type: 'dec1'})}>Dec</button>
//             <button onClick={() => dispatch({type: 'reset1', payload: 0})}>Reset</button>
//         </div>
//     );
// };
//
// export default App;