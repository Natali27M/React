import {Link} from "react-router-dom";

import css from "./Episode.module.css";

const Episode = ({episodeDetails}) => {
    const {name, episode, air_date} = episodeDetails;

    return (
            <div className={css.styleEpisode}>
                <h4>{name}</h4>
                <div>Episode : {episode}</div>
                <div>Air date : {air_date}</div>
                <Link to={'/episodeDetails'} state={episodeDetails}>Episode Details</Link>
            </div>
    );
};

export {Episode};