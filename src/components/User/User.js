import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id,name} = user
    return (
        <div>
            <Link to={id.toString()}>
                Name: {name}
            </Link>
        </div>
    );
};

export default User;