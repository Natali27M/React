import {Link} from "react-router-dom";


const Album = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            <div>
                <Link to={`${id.toString()}/photos`} state={album}>
                    <div>{id}) {title}</div>
                </Link>
            </div>
        </div>
    );
};

export {Album};
