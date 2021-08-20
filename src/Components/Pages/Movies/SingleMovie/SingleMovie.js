import React, { Suspense, useContext, useEffect, useState } from 'react'
import { fetchData } from '../../../util/fetch'
import { Context } from '../../../../Store'
import { romanize } from '../util'
import { useHistory } from 'react-router-dom'

import Loading from '../../../UI/Loading/Loading'

import './singleMovie.scss'

const SingleMovie = ({ match: { params: { title } } }) => {
	const [, dispatch] = useContext(Context)
	const [movie, setMovie] = useState([])
	const history = useHistory()
	useEffect(() => {
		fetchData(`https://swapi.dev/api/films/?search=${ title }`, (result) => {
			setMovie(result.results[0])
			dispatch({ type: 'SET_CHARACTERS', payload: result.results[0].characters })
			dispatch({ type: 'SET_MOVIE', payload: result.results[0].title })
		})
	}, [title, dispatch])
	return (
		<Suspense fallback={<Loading />}>
			<div className="page">
				<div className='sub-banner'>
					<h1>Episode {romanize(movie.episode_id)}: {movie.title}</h1>
					<div />
					<button onClick={() => history.goBack()}>Back to movie selection</button>
				</div>
				<div className="singleMovie">

					<div className="singleMovieInfo">
						<p><strong>Release date:</strong> {movie.release_date}.</p>
						<p><strong>Director:</strong> {movie.director}.</p>
						<p><strong>Producer(s):</strong> {movie.producer}</p>
					</div>
					<button className="characters" onClick={() => history.push('/characters')}>
						<h1>Characters</h1>
					</button>
				</div>
				<div className="sandcrawler">
					<div className="fade"></div>
					<section className="opening-crawl">
						<div className="crawl">
							<div className="title">
								<p>Episode {romanize(movie.episode_id)}</p>
								<h1>{movie.title}</h1>
							</div>
							<p>{movie.opening_crawl}</p>
						</div>
					</section>
				</div>
			</div>
		</Suspense>
	)
}

export default SingleMovie
