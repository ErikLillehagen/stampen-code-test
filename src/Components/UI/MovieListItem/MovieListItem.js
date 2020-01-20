import React from 'react'

const MovieListItem = (props) => {
	const {
		episodeId,
		title,
		releaseDate
	} = props

	return <div className="movieListItem" >
		<h4>Espiode { episodeId }</h4>
		<h2>{ title }</h2>
		<p>Released { releaseDate }</p>
	</div>
}

export default MovieListItem
