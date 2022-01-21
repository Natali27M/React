import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/posts.service";
import {AllUserPosts} from "../../components";


const UserPostsPage = () => {
    const {state: {id}} = useLocation();
    const [userPost,setUserPost] = useState([]);

    useEffect(() => {
        postService.getByUserId(id).then(value => setUserPost((value)));
    }, [id]);

    return (
        <div>
            <h1>User posts</h1>
            <div>
                {userPost.map(post => <AllUserPosts key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export {UserPostsPage};