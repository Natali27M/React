import {useReducer, useRef} from "react";
import {type} from "@testing-library/user-event/dist/type";
import NewCatsDogs from "./components/NewCatsDogs/NewCatsDogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            if (action.target === 'cats') {
                return {...state, cats: [...state.cats, action.payload]};
            }
            return state
        case 'del':
            if (action.target === 'cats') {
                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
            }
            return state;
        default :
            throw new Error('Error');
    }
};
const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const inputCatValue = useRef()

    const addCats = (e) => {
        e.preventDefault();
        const newCat = inputCatValue.current.value;

        dispatch({type: 'add', target: 'cats', payload: {name: newCat, id: new Date().getTime()}});
        console.log(state);
    }

    const del = (id) => {
        dispatch({type: 'del', target: 'cats', payload: id})
    }

    return (
        <div>
            <form>
                <label>Add cat : <input type="text" name={'cats'} ref={inputCatValue}/></label>
                <button onClick={addCats}>Save</button>
                <label>Add cat : <input type="text"/></label>
                <button>Save</button>
            </form>
            {state.cats.map(cat => <div key={cat.id}>{cat.name}
                <button onClick={()=>dispatch({type: 'del', target: 'cats', payload: cat.id})}>delete</button>
            </div>)}
        </div>
    )
}

export default App;

