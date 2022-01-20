import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from "./PostsPage.module.css";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postService.getAll().then(value => setPosts([...value]));
    },[])
    return (
        <div className={css.stylePosts}>
            <div className={css.stylePostTitle}>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={css.styleCommentsPost}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};
