import {useState, useEffect} from 'react';

import Post from '../Post/Post';
import {postService} from '../../services/post.service'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    useEffect(() => {
            postService.getAll()
            .then(value => setPosts(value));
    },[]);
    const getUserPosts = (userId) => {
        console.log('fghj')
        //     postService.getById(userId)
        //     .then(value => setPosts(value));
    };

    return (
        <div>
            {posts.map(value => <Post key={value.id} getUserPosts={getUserPosts}/>)}
        </div>
    );
};

export default Posts;