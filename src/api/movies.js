import axios from "axios";

const API_KEY = "4f2d1f1b0b040f028fe607fa054b6762";
const BASE_URL = "https://api.themoviedb.org/3";

// API DOCS = https://developers.themoviedb.org/3/movies/get-movie-details

const getGenres = () => {
    const url = BASE_URL + '/genre/movie/list?api_key=' + API_KEY;
    return axios.get(url)
}

const searchMovies = (searchText) => {
    const moviesSearchUrl = BASE_URL + '/search/movie?api_key=' + API_KEY + '&query=' + searchText + '&language=en&include_adult=false';
    return axios.get(moviesSearchUrl);
}

// https://developers.themoviedb.org/3/movies/get-now-playing
const getNowPlaying = () => {
    const url = BASE_URL + '/movie/now_playing?api_key=' + API_KEY;
    return axios.get(url).then(res => res.data);
}

const getUpcomingMovies = () => {
    const url = BASE_URL + '/movie/upcoming?api_key=' + API_KEY;
    return axios.get(url);
}

const findMovieByID = (id, callback) => {
    const appendTags = 'videos,credits,reviews';
    axios.get(BASE_URL + '/movie/' + id + '?api_key=' + API_KEY + '&append_to_response=' + appendTags)
        .then(callback);
}

const findCastByID = (id, callback) => {
    const appendTags = 'movie_credits';
    axios.get(BASE_URL + '/person/' + id + '?api_key=' + API_KEY + '&append_to_response=' + appendTags)
        .then(callback);
}

const getMoviePoster = posterPath => {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
}

const moviesApi = {
    getGenres: getGenres,
    searchMovies: searchMovies,
    getNowPlaying: getNowPlaying,
    getUpcomingMovies: getUpcomingMovies,
    findMovieByID: findMovieByID,
    findCastByID: findCastByID,
    getMoviePoster: getMoviePoster,
}

export default moviesApi;