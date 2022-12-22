import { combineReducers } from 'redux';
import counterReducer from './counter';
// import favMoviesReducer from './favmovies';
// import  moviesReducer  from './movies';


export default combineReducers({
    counter: counterReducer,
    // favMovies:favMoviesReducer,
    // Movies:moviesReducer
})