import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllComments} from "../../store";
import {Comment} from "../../components";

const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state['commentSliceReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};