import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import EpisodeCharactersPicture from "../../components/EpisodeCharactersPicture/EpisodeCharactersPicture";
import {charactersService} from "../../services/characters.service";

const EpisodeDetailsPage = () => {
    const {state : {characters}} = useLocation()
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        characters.map(value =>
            {const id = value.slice(value.lastIndexOf('/') + 1);
            charactersService.getCharacterById(id).then(value => setCharacter([...character, value.data]));
                // setCharacter((prevState) => [...prevState, value]));
            }
        );
    }, [character]);
    return (
        <div>
            details
            {character.map(character=><EpisodeCharactersPicture key={character.id} character={character}/>)}
        </div>
    );
};

export default EpisodeDetailsPage;