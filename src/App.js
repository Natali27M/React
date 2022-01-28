import {useReducer, useRef} from "react";

import css  from './App.module.css';

const reducer = (state, action) => {
    switch (action.type) {

        case 'add':
            if (action.target === 'cats') {
                return {...state, cats: [...state.cats, action.payload]};
            }
            else if (action.target==='dogs') {
                return {...state, dogs: [...state.dogs, action.payload]};
            }
            return state;

        case 'del':
            if (action.target === 'cats') {
                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
            }
            else if(action.target==='dogs') {
                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};
            }
            return state;

        default :
            throw new Error('Error');
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const inputCatValue = useRef();
    const inputDogValue = useRef();

    const addCats = (e) => {
        e.preventDefault();
        const newCat = inputCatValue.current.value;
        dispatch({type: 'add', target: 'cats', payload: {name: newCat, id: new Date().getTime()}});
        inputCatValue.current.value = '';
        console.log(state);
    };

    const addDogs = (e) => {
        e.preventDefault();
        const newDog = inputDogValue.current.value;
        dispatch({type: 'add', target: 'dogs', payload: {name: newDog, id: new Date().getTime()}});
        inputDogValue.current.value = '';
        console.log(state);
    }

    return (
        <div>
            <div>
                <form className={css.styleForms}>
                    <div>
                        <label>Add cats : <input type="text" name={'cats'} ref={inputCatValue}/></label>
                        <button onClick={addCats}>Save</button>
                    </div>
                    <div>
                        <label>Add dogs : <input type="text" name={'dogs'} ref={inputDogValue}/></label>
                        <button onClick={addDogs}>Save</button>
                    </div>
                </form>
                <hr/>
            </div>

            <div className={css.styleCatsDogs}>
                <div className={css.styleBoxCatsDogs}>
                    {state.cats.map(cat =>
                        <div className={css.styleOneCatDog} key={cat.id}>{cat.name}
                            <button onClick={() => dispatch({type: 'del', target: 'cats', payload: cat.id})}>delete
                            </button>
                        </div>)}
                </div>

                <div className={css.styleBoxCatsDogs}>
                    {state.dogs.map(dog =>
                        <div className={css.styleOneCatDog} key={dog.id}>{dog.name}
                            <button onClick={() => dispatch({type: 'del', target: 'dogs', payload: dog.id})}>delete
                            </button>
                        </div>)}
                </div>

            </div>

        </div>
    );
}

export default App;

