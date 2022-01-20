import {useLocation} from "react-router-dom";
import {useEffect, useState} from 'react';

import PostDetails from "../../components/PostDetails/PostDetails";
import {postService} from "../../services/post.service";


const UserPostsPage = () => {
    const {state: {id}} = useLocation()
    const [userPosts, setUserPosts] = useState([])
    useEffect(() => {
        postService.getPostByUserId(id).then(value => setUserPosts(value))
    }, [id]);
    return (
        <div>
            <h1>User posts</h1>
            <div>
                {userPosts.map(post => <PostDetails key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export {UserPostsPage};


