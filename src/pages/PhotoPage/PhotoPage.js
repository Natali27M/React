import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/users.service";
import {Photo} from "../../components";


const PhotoPage = () => {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        userService.getByPhotosId(id).then(value => setPhotos(value.data))
    }, [id]);

    return (
        <div>
            <h1>Album photo</h1>
            {photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotoPage};