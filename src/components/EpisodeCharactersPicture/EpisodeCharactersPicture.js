import React from 'react';

const EpisodeCharactersPicture = ({character}) => {
    // console.log(character)

    return (
        <div>
            <div>{character.name}</div>
            {/*<img src={character.image} alt={character.name}/>*/}
        </div>
    );
};

export default EpisodeCharactersPicture;

