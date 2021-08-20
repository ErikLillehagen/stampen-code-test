import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import StarWarsLogo from '../../../img/SW.png'
import Loading from '../../UI/Loading/Loading'

import './navbar.scss'

const Movies = lazy(() => import('../../Pages/Movies/Movies'))
const SingleMovie = lazy(() => import('../../Pages/Movies/SingleMovie/SingleMovie'))
const Characters = lazy(() => import('../../Pages/Characters/Characters'))
const SingleCharacter = lazy(() => import('../../Pages/Characters/SingleCharacter/SingleCharacter'))
const NoMatch = lazy(() => import('../../Pages/NoMatch/NoMatch'))

const Navbar = () => {
	return (
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<nav className="navbar">
					<div className="nav-left">
						<Link to="/">
							<img src={ StarWarsLogo } className="logo" alt="STAR WARS"/>
						</Link>
					</div>
				</nav>
				<Switch>
					<Route exact path="/" component={Movies}/>
					<Route path="/movie/:title" component={SingleMovie} />
					<Route exact path="/characters" component={Characters} />
					<Route path="/character/:name" component={SingleCharacter} />
					<Route path="*" component={NoMatch} />
				</Switch>
			</BrowserRouter>
		</Suspense>
	)
}

export default Navbar
