import {useSelector} from "react-redux";

import {Sentence} from "../Sentence/Sentence";

const Text = () => {
    const{text}=useSelector(state => state["textSliceReducer"]);

    return (
        <div>
            {text.map(sentence=><Sentence key={sentence.id} sentence={sentence}/>)}
        </div>
    );
};

export {Text};