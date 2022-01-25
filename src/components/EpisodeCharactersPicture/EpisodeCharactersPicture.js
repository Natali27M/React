import {useEffect,useState} from "react";

import css from "./EpisodeCharactersPage.module.css";

const EpisodeCharactersPicture = ({character}) => {
    const [characterOne, setCharacterOne] = useState(null);

    useEffect(() => {
        fetch(`${character}`).then(value => value.json()).then(value => setCharacterOne(value));
    }, [character]);

    return (
        <div  className={css.characterOneStyle}>
            {characterOne && (
                <div>
                    <img src={characterOne.image} alt={characterOne.name}/>
                    <h4>{characterOne.name}</h4>
                    <div>Status : {characterOne.status}</div>
                    <div>Species : {characterOne.species}</div>
                    <div>Gender : {characterOne.gender}</div>
                    <div>Origin : {characterOne.origin.name}</div>
                    <div>Location : {characterOne.location.name}</div>
                </div>
            )}
        </div>
    );
};

export {EpisodeCharactersPicture};

