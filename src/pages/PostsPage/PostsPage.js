import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import css from "./PostsPage.module.css";
import {postService} from "../../services/posts.service";
import {Post} from "../../components";


const PostsPage = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={css.stylePosts}>
            <div className={css.stylePostTitle}>
                <h1>All posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};
