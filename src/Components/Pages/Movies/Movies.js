import React, { Suspense, useEffect, useState } from 'react'
import './movies.scss'

import MovieListItem from '../../UI/MovieListItem/MovieListItem'
import Loading from '../../UI/Loading/Loading'
import { fetchData } from '../../util/fetch'
import { sortEpisodesByNumber } from './util'

/**
 * @function Movies
 * @description - Functional component that renders a list of Star Wars movies
 */
const Movies = () => {
	const [data, setData] = useState()
	useEffect(() => {
		const collectData = async() => {
			await fetchData('https://swapi.dev/api/films', (result) => setData(sortEpisodesByNumber(result)))
		}
		collectData()
	}, [])

	return (
		<Suspense fallback={<Loading />}>
			<div className="page" id="movies">
				<h1>Movies</h1>
				<div className="movieList">
					{ data?.map((singleMovie, index) => <MovieListItem
						key={ index }
						episodeId={ singleMovie.episode_id }
						title={ singleMovie.title }
						releaseDate={ singleMovie.release_date }
						characters={ singleMovie.characters }
					/>) }
				</div>
			</div>
		</Suspense>
	)
}

export default Movies
