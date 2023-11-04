const baseURL = 'https://api.themoviedb.org/3';
const movies = '/discover/movie';
const genre = '/genre/movie/list';
const poster = 'https://image.tmdb.org/t/p/w500';
const search = '/search/keyword';
const character = '/movie';

const urls = {
    movies,
    genre,
    poster: (key: string) => `${poster}/${key}`,
    search,
    character: (id: number) => `${character}/${id}/credits`
}

export {baseURL, urls}