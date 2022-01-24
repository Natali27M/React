import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import EpisodeCharactersPicture from "../../components/EpisodeCharactersPicture/EpisodeCharactersPicture";

const EpisodeDetailsPage = () => {
    const {state : {characters}} = useLocation()
    const [character, setCharacter] = useState([]);

    useEffect(()=>{
        setCharacter(characters);
    },[])
    character.map(xxx=>console.log(xxx))
    return (
        <div>
            details
            {character.map(character=><EpisodeCharactersPicture key={character.id} character={character}/>)}
        </div>
    );
};

export default EpisodeDetailsPage;