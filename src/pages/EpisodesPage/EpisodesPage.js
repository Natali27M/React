import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode/Episode";
import css from "./EpisodesPage.module.css";

const EpisodesPage = () => {
    const [numberPage, setNumber] = useState();

    const [page, setPage] = useState(1);

    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        episodeService.getEpisodeByPage(page).then(value => {setEpisodes([...value.results]);
            setNumber(value.info.pages)} );
    }, [page]);

    const next = () => {
        if (page<numberPage){
            setPage(page + 1);
        }
    };

    const prev = () => {
            setPage(page - 1);
    };

    return (
        <div>
            <div className={css.episodesPageStyle}>
                {episodes.map(episode => <Episode key={episode.id} episodeDetails={episode}/>)}
            </div>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
            <Outlet/>
        </div>
    );
};

export default EpisodesPage;