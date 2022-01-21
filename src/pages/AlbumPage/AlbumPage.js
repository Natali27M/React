import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {Album} from "../../components";
import {userService} from "../../services/users.service";

const AlbumPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        userService.getByAlbumsId(id).then(value => setAlbums(value.data));
    }, [id]);

    return (
        <div>
            <div>
                <h1>Albums</h1>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {AlbumPage};