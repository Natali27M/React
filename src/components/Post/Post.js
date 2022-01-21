import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <Link to={id.toString()}>
                {id} ) {title}
            </Link>
        </div>
    );
};

export {Post};