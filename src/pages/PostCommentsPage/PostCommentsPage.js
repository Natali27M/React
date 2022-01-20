import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import CommentsDetails from "../../components/CommentDetails/CommentsDetails";
import {commentService} from "../../services/comment.service";


const PostCommentsPage = () => {
    const {state: {id}} = useLocation();
    const [postComments, setPostComments] = useState([]);
    useEffect(() => {
        commentService.getCommentByPostId(id).then(value => setPostComments(value))
    }, [id]);
    return (
        <div>
            <h1>Post comments</h1>
            <div>
                {postComments.map(comment => <CommentsDetails key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {PostCommentsPage};
