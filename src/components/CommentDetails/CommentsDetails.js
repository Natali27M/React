import css from "./CommentsDetails.css";

const CommentsDetails = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div className={css.styleCommentsPost}>
            <h4>Id : {id}</h4>
            <h3>{name}</h3>
            <h5>Email : {email}</h5>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default CommentsDetails;