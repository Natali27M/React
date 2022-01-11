
const Comment = (props) => {
    const {commentId, commentName, commentEmail, commentBody} = props;
    return (
        <div>
          <h4>Comments id : {commentId}</h4>
          <h3>{commentName}</h3>
          <h5>{commentEmail}</h5>
          <h5>{commentBody}</h5>
        </div>
    );
};

export default Comment;