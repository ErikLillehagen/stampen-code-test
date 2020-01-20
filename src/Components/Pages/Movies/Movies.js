import React, { useEffect, useState } from 'react'
import Fetch from 'node-fetch'
import './movies.scss'

import MovieListItem from '../../UI/MovieListItem/MovieListItem'

/**
 * Static data for movies.
 * Should be replaced by data fetched from the Star Wars API
 */
const movies = [
	{
		title: 'The Phantom Menace',
		episode_id: 1,
		release_date: '1983-05-25'
	},
	{
		title: 'Return of the Jedi',
		episode_id: 2,
		release_date: '1983-05-25'
	},
	{
		title: 'Return of the Jedi',
		episode_id: 3,
		release_date: '1983-05-25'
	},
	{
		title: 'A New Hope',
		episode_id: 4,
		release_date: '1977-05-25'
	},
	{
		title: 'The Empire Strikes Back',
		episode_id: 5,
		release_date: '1980-05-17'
	},
	{
		title: 'Return of the Jedi',
		episode_id: 6,
		release_date: '1983-05-25'
	}
]

/**
 * @function Movies
 * @description - Functional component that rendes a list of Star Wars movies
 */
const Movies = (props) => {
	const { onMovieClick, movies } = props

	return <div className="page" id="movies">
		<h1>Movies</h1>

		<div className="movieList">
			{ movies.map((singleMovie, index) => <MovieListItem
				onMovieClick={ onMovieClick }
				key={ index }
				episodeId={ singleMovie.episode_id }
				title={ singleMovie.title }
				releaseDate={ singleMovie.release_date }
			/>) }
		</div>

	</div>
}

export default Movies
