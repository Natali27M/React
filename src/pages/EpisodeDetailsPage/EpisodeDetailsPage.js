import {useLocation} from "react-router-dom";

import {EpisodeCharactersPicture} from "../../components";
import css from "./EpisodeDetailsPage.module.css"

const EpisodeDetailsPage = () => {
    const {state} = useLocation();
    const character = state.characters;

    return (
        <div className={css.episodeDetailsStyle}>
            {character.map(character=><EpisodeCharactersPicture key={character} character={character}/>)}
        </div>
    );
};

export {EpisodeDetailsPage};