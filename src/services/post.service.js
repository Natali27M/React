import {urls} from '../configs/urls';

const getAll = () => {
    return fetch(urls.posts)
        .then(value => value.json());
};
const getById = (userId) => {
    return fetch(`${urls.users}/${userId}/posts`)
        .then(value => value.json())
};

export const postService = {
    getAll,
    getById
};
