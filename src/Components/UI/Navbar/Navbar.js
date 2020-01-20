import React from 'react'
import './navbar.scss'

import StarWarsLogo from '../../../img/SW.png'

const Navbar = (props) => {
	return <nav className="navbar">
		<div className="nav-left">
			<button className="home">
				<img src={ StarWarsLogo } className="logo" />
			</button>
		</div>

		<div className="nav-right">
			<button className="navigate">Movies</button>
			<button className="navigate">Characters</button>
		</div>
	</nav>
}

export default Navbar
