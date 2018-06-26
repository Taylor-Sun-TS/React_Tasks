import React from 'react'
import { connect } from 'react-redux'
import { 
	fetchMovies,
	setSearchText,
	setSearchBy,
	setSortBy
} from 'actions'

import Header from 'Header'
import Footer from 'Footer'
import MovieSearch from 'MovieSearch'
import MovieList from 'MovieList'

class MovieListPage extends React.Component {
	constructor(props) {
		super(props)

		this.onSearch = this.onSearch.bind(this)
	}

	componentDidMount() {
		const searchText = this.props.match.params.text

		if (searchText) {
			this.props.setSearchText(searchText)
			this.props.fetchMovies()
		}
	}

    componentWillReceiveProps(nextProps) {
    	const searchText = nextProps.match.params.text

    	if (searchText !== this.props.match.params.text) {
    		this.props.fetchMovies()
    	}
    }

	onSearch() {
		const props = this.props
		const text = props.conditions.text

		if (!text) {
			alert('please enter the search text')

			return
		}

		props.history.push('/search/' + text)
	}

	render() {
		const props = this.props

		return (
			<React.Fragment>
				<Header />
				<MovieSearch 
					onSearch={this.onSearch} 
					setSearchText={props.setSearchText}
					setSearchBy={props.setSearchBy} 
					setSortBy={props.setSortBy}
					conditions={props.conditions}
					searchBys={props.searchBys}
					sortBys={props.sortBys}
					count={props.count}
				/>
				<MovieList movies={props.list} />
				<Footer />
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	const movie = state.movie

	return {
		list: movie.list,
		conditions: movie.conditions,
		searchBys: movie.searchBys,
		sortBys: movie.sortBys,
		count: movie.count
	}
}

// const mapDispatchToProps = (dispatch) => {}

export default connect(
	mapStateToProps, 
	{ 
		fetchMovies,
		setSearchText,
		setSearchBy,
		setSortBy
	}
)(MovieListPage)