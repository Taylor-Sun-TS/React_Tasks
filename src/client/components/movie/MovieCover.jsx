import React from 'react'

export default class MovieCover extends React.Component {
	render() {
		const movie = this.props.movie

		return (
			<section className="movie-details-section flex">
				<div className="cover-box">
					<img src={movie.poster_path} />
				</div>
				<div className="movie-details">
					<h2>{movie.title}</h2>
					<p className="type">Oscar-winning Movies</p>
					<div className="time-info flex">
						<p className="release-time">{movie.release_date}</p>
						<p className="duration">154min</p>
					</div>
					<p className="description">{movie.overview}</p>
				</div>
			</section>
		)
	}
}