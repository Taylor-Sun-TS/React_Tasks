// import { normalize, schema } from 'normalizr'
import APIClient from 'APIClient';
import {
	SET_SEARCH_MOVIE_TEXT,
	SET_SEARCH_MOVIE_SEARCH_BY,
	SET_SEARCH_MOVIE_SORT_BY,

	FETCH_MOVIES,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE,

	FETCH_MOVIE,
	FETCH_MOVIE_SUCCESS,
	FETCH_MOVIE_FAILURE,

	FETCH_RELATE_MOVIES,
	FETCH_RELATE_MOVIES_SUCCESS,
	FETCH_RELATE_MOVIES_FAILURE
} from 'ActionTypes';

export const setSearchText = searchText => {
	return { type: SET_SEARCH_MOVIE_TEXT, searchText }
}

export const setSearchBy = searchBy => (dispatch, getState) => {
	dispatch({ type: SET_SEARCH_MOVIE_SEARCH_BY, searchBy });

	if (getState().movie.conditions.text) {
		dispatch(fetchMovies());
	}
}

export const setSortBy = sortBy => (dispatch, getState) => {
	dispatch({ type: SET_SEARCH_MOVIE_SORT_BY, sortBy });
	dispatch(fetchMovies());
}

export const fetchMovies = () => (dispatch, getState) => {
	dispatch({ type: FETCH_MOVIES });

	const conditions = getState().movie.conditions;
	const reqParams = {
		url: 'movies',
		data: {
			sortOrder: conditions.sortOrder
		}
	};

	if (conditions.text) {
		reqParams.data.search = conditions.text;

		if (conditions.searchBy) {
			reqParams.data.searchBy = conditions.searchBy;
		}
	}

	if (conditions.sortBy) {
		reqParams.data.sortBy = conditions.sortBy;
	}

	return APIClient.request(reqParams).then(res => {
				dispatch(fetchMoviesSuccess(res));
			})
			.catch(e => {
				dispatch({ type: FETCH_MOVIES_FAILURE });
			});
}

const fetchMoviesSuccess = json => (dispatch, getState) => {

	dispatch({
		type: FETCH_MOVIES_SUCCESS,
		data: json.data
	});
}

export const fetchMovie = id => (dispatch, getState) => {
	dispatch({ type: FETCH_MOVIE });

	const reqParams = {
		url: `movies/${id}`
	};

	return APIClient.request(reqParams).then(res => {
				dispatch(fetchMovieSuccess(res));
				dispatch(fetchRelateMovies());
			})
			.catch(e => {
				dispatch({ type: FETCH_MOVIE_FAILURE });
			});
}

const fetchMovieSuccess = json => {
	return {
		type: FETCH_MOVIE_SUCCESS,
		data: json.data
	}
}

export const fetchRelateMovies = () => (dispatch, getState) => {
	dispatch({ type: FETCH_RELATE_MOVIES })

	const movie = getState().movie;
	const conditions = movie.conditions;
	const search = movie.detail.genres[0];
	const reqParams = {
		url: 'movies',
		data: {
			sortOrder: conditions.sortOrder,
			search: search,
			searchBy: 'genres'
		}
	};

	return APIClient.request(reqParams).then(res => {
				dispatch(fetchRelateMoviesSuccess(res));
			})
			.catch(e => {
				dispatch({ type: FETCH_RELATE_MOVIES_FAILURE });
			});
}

const fetchRelateMoviesSuccess = json => {
	return {
		type: FETCH_RELATE_MOVIES_SUCCESS,
		data: json.data
	};
}