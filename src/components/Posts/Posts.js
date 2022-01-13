import {useState, useEffect} from 'react';

import Post from '../Post/Post';
import {postService} from "../../services/post.service";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getById(userId)
            .then(value => setPosts(value));
    }, [userId]);


    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;