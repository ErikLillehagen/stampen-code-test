import React from 'react'
import { useLocation } from 'react-router-dom'

import Yoda from '../../../img/yoda.png'

import './noMatch.scss'

const NoMatch = () => {
	const location = useLocation()

	return (
		<div className="lostBox">
			<div className="noMatch">
				<h3>Fear leads to anger</h3>

				<h3>Anger leads to hate</h3>

				<h3>Hate leads to suffering</h3>

				<h3>but</h3>

				<h3>{location.pathname} leads nowhere</h3>
			</div>
			<img src={ Yoda } className="yoda" alt="Help im lost"/>
		</div>
	)
}

export default NoMatch
