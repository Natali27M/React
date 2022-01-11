

const Post = (props) => {
    const {id, title,body} = props;
    return (
        <div>
            <h5>Post id : {id}</h5>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;