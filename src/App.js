import React, { useState, useEffect } from 'react'
import fetch from 'node-fetch'

import Movies from './Components/Pages/Movies/Movies'
import SingleMovie from './Components/Pages/Movies/SingleMovie/SingleMovie'

const API_URL = 'https://swapi.co/api'

function App() {
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(`${ API_URL }/films`)
			.then(res => res.json())
			.then(data => {
				setMovies(data.results)
				setLoading(false)
			})
	}, [])

	const onMovieClick = (episodeId) => setSelectedMovie(episodeId)

	if (loading) {
		return 'loading...'
	}

	return <div className="app">
		{ selectedMovie === null
			? <Movies
				onMovieClick={ onMovieClick }
				movies={ movies }
			/>
			: <SingleMovie
				movie={ movies.find((singleMovie) => singleMovie.episode_id === selectedMovie) }
				onMovieDeselect={ () => setSelectedMovie(null) }
			/>
		}
	</div>
}

export default App
