import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

export default function Header(props) {
	return (
		<React.Fragment>
			<header>
				<p>netflixroulette</p>
				{props.showSearchLink && 
					<Link to="/"><button className="search-btn">SEARCH</button></Link>
				}
			</header>
		</React.Fragment>
	)
}
