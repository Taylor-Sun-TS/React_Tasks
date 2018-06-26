import React from 'react'
import {
	SET_SEARCH_MOVIE_TEXT
} from 'ActionTypes'
import {
	setSearchText,
	fetchMovies
} from 'actions'

describe('Actions', () => {
	describe('Movie', () => {
		it('setSearchText', () => {
			const searchText = 'test'
			const result = setSearchText(searchText)

			expect(result).toEqual({ type: SET_SEARCH_MOVIE_TEXT, searchText })
		})

		it('fetchMovies should return a function (is a thunk).', () => {
			expect(fetchMovies()).toBeInstanceOf(Function)
		})
	})
})
