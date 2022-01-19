import {Link} from "react-router-dom";
import {postService} from "../../services/post.service";
import {useState,useEffect} from "react";



const SingleUserPostsPage = ({userId,title}) => {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     postService.getAll().then(value => setPosts([...value]));
    // }, []);
    return (
        <div>
            <Link to={userId}>
                Title : {title}
            </Link>
        </div>
    );
};

export default SingleUserPostsPage;

