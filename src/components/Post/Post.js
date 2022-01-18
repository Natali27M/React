import {Link} from "react-router-dom";

const Post = ({post:{id,title}}) => {
    return (
        <div>
           <Link to={id.toString()}>
               Title: {title}
           </Link>
        </div>
    );
};

export default Post;