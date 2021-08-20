import React from 'react'
import { Link } from 'react-router-dom'

const MovieListItem = (props) => {
	const {
		episodeId,
		title,
		releaseDate
	} = props

	return <div className="movieListItem">
		<Link to={`/movie/${ title }`}>
			<h4>Episode { episodeId }</h4>
			<h2>{ title }</h2>
			<p>Released { releaseDate }</p>
		</Link>
	</div>
}

export default MovieListItem
