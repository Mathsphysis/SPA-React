import axios from "axios";

const API_KEY = '95e317d73a364414843cb3b3f848249b';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;
export class MoviesService {
    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }

    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
}