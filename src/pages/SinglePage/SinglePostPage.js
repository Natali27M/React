import {Outlet, useParams,Link} from "react-router-dom";
import {useEffect, useState} from "react";

import css from "./SinglePage.module.css";
import {postService} from "../../services/posts.service";


const SinglePostPage = () => {
    const {id} = useParams();
    const [post,setPost] = useState(null);

    useEffect(()=>{
        postService.getById(id).then(value => setPost({...value}));
    }, [id]);

    return (
        <div>
            {post && (
                <div>
                    <div className={css.styleSingle}>
                        <h1>Post</h1>
                        <h4>Id: {id}</h4>
                        <h2>{post.title}</h2>
                        <div>Body : {post.body}</div>
                        <Link to={'comments'} state={post}><button>Post comments</button></Link>
                    </div>

                    <div className={css.styleSingle}>
                        <Outlet/>
                    </div>
                </div>
            )}
        </div>
    );
};

export {SinglePostPage};