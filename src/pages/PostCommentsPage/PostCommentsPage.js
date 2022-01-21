import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {commentsService} from "../../services/comments.service";
import {AllPostComments} from "../../components";


const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComment] = useState([]);

    useEffect(()=>{
        commentsService.getByPostId(id).then(value => setComment((value)));
    }, [id]);

    return (
        <div>
            <h1>Post comments</h1>
            <div>
                {comments.map(comment => <AllPostComments key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {PostCommentsPage};