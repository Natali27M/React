const PostDetails = ({post}) => {
    const {id,title,body}=post
    return (
        <div>
            <p>Id : {id}</p>
            <h3>{title}</h3>
            <h5>{body}</h5>
            <hr/>
        </div>
    );
};

export default PostDetails;