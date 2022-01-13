
const Post = (getUserPosts) => {
    return (
        <div>
           <button onClick={()=>console.log(getUserPosts)}>Get posts</button>
        </div>
    );
};

export default Post;