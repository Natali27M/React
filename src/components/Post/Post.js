const Post = ({post}) => {
    return (
        <div className={'display flexColumn align'}>
            <h4 className={'m0'}>{post.id} - {post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;