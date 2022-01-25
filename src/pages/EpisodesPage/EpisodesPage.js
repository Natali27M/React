import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import {Episode} from "../../components";
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
            <h1 className={css.headerTwo}>Pick and Morty episodes!</h1>
            <div className={css.episodesPageStyle}>
                {episodes.map(episode => <Episode key={episode.id} episodeDetails={episode}/>)}
            </div>
            <div className={css.buttonsStyle}>
                <button className={css.buttonStyle} onClick={prev}>prev</button>
                <button className={css.buttonStyle} onClick={next}>next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {EpisodesPage};