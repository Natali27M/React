import {urls} from '../configs/urls';

const getAll = () => {
    fetch(urls.posts)
        .then(value => value.json());
};
const getById = (userId) => {
    fetch(`${urls.posts}/${userId}`)
        .then(value => value.json())
};

export const postService = {
    getAll,
    getById
};
