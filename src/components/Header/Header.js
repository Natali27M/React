import {useSelector} from "react-redux";

const Header = () => {
    const {text,completed} = useSelector(state => state["textSliceReducer"]);

    return (
        <div>
            <div>All:{text.length}</div>
            <div>Completed:{completed}</div>
        </div>
    );
};

export {Header};