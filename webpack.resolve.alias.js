'use strict'

const path = require('path');
const rootDir = __dirname;
const clientDir = path.join(rootDir, 'src/client');
const libDir = path.join(clientDir, 'lib');
const containerDir = path.join(clientDir, 'containers');
const componentDir = path.join(clientDir, 'components');

module.exports = {
	Config: path.join(clientDir, 'config'),
	APIClient: path.join(libDir, 'APIClient'),
	ActionTypes: path.join(clientDir, 'constants/ActionTypes'),
	actions: path.join(clientDir, 'actions'),
	reducers: path.join(clientDir, 'reducers'),
	store: path.join(clientDir, 'store'),
	Root: path.join(containerDir, 'Root'),
	MovieListPage: path.join(containerDir, 'movie/MovieListPage'),
	MovieDetailPage: path.join(containerDir, 'movie/MovieDetailPage'),
	NotFound: path.join(containerDir, 'NotFound'),
	ErrorBoundary: path.join(componentDir, 'ErrorBoundary'),
	Header: path.join(componentDir, 'common/Header'),
	Footer: path.join(componentDir, 'common/Footer'),
	Radio: path.join(componentDir, 'form/Radio'),
	MovieSearch: path.join(componentDir, 'movie/MovieSearch'),
	MovieCover: path.join(componentDir, 'movie/MovieCover'),
	MovieList: path.join(componentDir, 'movie/MovieList')
}