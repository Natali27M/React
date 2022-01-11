import {useEffect, useState} from "react";

import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value));
    },[])
    return (
        <div className={'style'}>
            <h2>Comments</h2>
            {comments.map(value => <Comment key={value.id} commentId={value.id} commentName={value.name}
                                            commentEmail={value.email} commentBody={value.body}/>)}
        </div>
    );
};

export default Comments;