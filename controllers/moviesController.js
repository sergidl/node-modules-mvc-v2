import movies from '../data/movies.js';
import moviesModel from '../models/moviesModel.js';

const getAllMovies = (data_movie) => {
   data_movie.res=moviesModel.getMovies(data_movie.req);
}

const getMovieById = (data_movie) => {
    data_movie.res[0]=moviesModel.getMovieById(data_movie.req.id);
    
}

const removeMovie = (data_movie) => {
    moviesModel.removeMovie(data_movie.req.id);
    data_movie.res=movies;
}

const createMovie = (data_movie) => {
    moviesModel.createMovie(data_movie.req);
}

const updateMovie = (data_movie) => { 
    moviesModel.updateMovie(data_movie.req);

}

const getMovieBy = (data_movie) => {
   
}

export default {
    getMovieById,
    removeMovie,
    createMovie,
    updateMovie,
    getMovieBy,
    getAllMovies,
}