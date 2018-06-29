import React from 'react'
import { LabelRadio } from 'Radio'

export default class MovieSearch extends React.Component {
	constructor(props) {
		super(props)

		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleSearchByChange = this.handleSearchByChange.bind(this)
		this.handleSortByChange = this.handleSortByChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleTextChange(event) {
		this.props.setSearchText(event.target.value)
	}

	handleSearchByChange(event) {
		this.props.setSearchBy(event.target.value)
	}

	handleSortByChange(event) {
		this.props.setSortBy(event.target.value)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.onSearch()
	}

	render() {
		const props = this.props
		const conditions = props.conditions
		const searchByRadios = props.searchBys.map((item, index) => {
			const name = 'searchType'
			const id = `${name}-${index}`
			const defaultChecked = conditions.searchBy === item.value

			return <LabelRadio 
						key={id}
						name={name}
						id={id} 
						labelName={item.name} 
						value={item.value} 
						checked={defaultChecked} 
						onChange={this.handleSearchByChange} />
		})

		const sortByRadios = props.sortBys.map((item, index) => {
			const name = 'sortType'
			const id = `${name}-${index}`
			const defaultChecked = conditions.sortBy === item.value

			return <LabelRadio 
						key={id} 
						name={name}
						id={id} 
						labelName={item.name} 
						value={item.value} 
						checked={defaultChecked} 
						onChange={this.handleSortByChange} />
		})

		return (
			<form id="search-section" onSubmit={this.handleSubmit}>
				<div className="main-content">
					<h2>FIND YOUR MOVIE</h2>
					<input type="text" className="search-field" value={conditions.text} onChange={this.handleTextChange} />
					<div className="search-by-box">
						<span className="text">SEARCH BY</span>
						{searchByRadios}
						<input type="submit" value="SEARCH" className="search-btn" />
					</div>
				</div>
				<div className="bottom-bar flex">
					<div className="res-count">{props.count} movies found</div>
					<div className="res-sort">
						<span className="text">Sort by</span>
						{sortByRadios}
					</div>
				</div>
			</form>
		)
	}
}