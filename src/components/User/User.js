import {Link} from "react-router-dom";

const User = ({user: {id,name,username}}) => {
    return (
        <div>
            <Link to={id.toString()}>
                Name: {name}
            </Link>
        </div>
    );
};

export default User;