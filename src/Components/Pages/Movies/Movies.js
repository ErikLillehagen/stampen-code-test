import React, { Suspense, useEffect, useState } from 'react'
import { fetchData } from '../../util/fetch'
import { sortEpisodesByNumber } from './util'

import MovieListItem from '../../UI/MovieListItem/MovieListItem'
import Loading from '../../UI/Loading/Loading'

import './movies.scss'

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
				<div className="sub-banner">
					<h1>Movies</h1>
				</div>
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
