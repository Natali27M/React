import {useParams,Link,Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import css from "./Single.module.css";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        postService.getById(id).then(value => setPost({...value}));
    },[id])
    return (
        <div className={css.styleUser}>
            {post && (
                <div>
                    <div>
                        <h1>Post</h1>
                        <h4>Id: {id}</h4>
                        <h2>{post.title}</h2>
                        <div>Body : {post.body}</div>
                        <Link to={'comments'} state={post}><button>Post comments</button></Link>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            )}
        </div>
    );
};

export {SinglePostPage};